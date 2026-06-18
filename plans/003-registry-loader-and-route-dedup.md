# Plan 003: Extract a shared registry loader and stop generating duplicate category URLs

> **Executor instructions**: Follow this plan step by step. Run every verification
> command and confirm the expected result before moving on. If anything in "STOP
> conditions" occurs, stop and report — do not improvise. When done, update the
> status row for plan 003 in `plans/README.md`.
>
> **Drift check (run first)**:
> `git diff --stat f4e5723c..HEAD -- "src/app/(dashboard-layout)/components/[slug]/page.tsx" "src/app/(dashboard-layout)/blocks/[slug]/page.tsx" src/data/components/index.ts src/data/blocks/index.ts`
> If any of these changed since this plan was written, compare the "Current state"
> excerpts against the live code before proceeding; on a mismatch, STOP.
>
> **Route group rename note (reconcile 2026-06-18)**: The route group was renamed from
> `(dashboard)` to `(dashboard-layout)` in commit `64a718b4` (New blocks, 2026-06-18).
> All paths below have been updated to reflect this. The finding and fix are otherwise identical.

## Status

- **Priority**: P1
- **Effort**: M
- **Risk**: LOW
- **Depends on**: none
- **Category**: tech-debt + bug (SEO/routing)
- **Planned at**: commit `51b4f3f7`, 2026-06-16; **paths refreshed at `f4e5723c`, 2026-06-18** (route group rename `(dashboard)` → `(dashboard-layout)`)

## Why this matters

Two problems share the same root files:

1. **Duplicate URLs.** Both `app/(dashboard-layout)/components/[slug]/page.tsx` and
   `app/(dashboard-layout)/blocks/[slug]/page.tsx` build their `generateStaticParams()` by enumerating
   **every** category found across the merged registry items. So a block category like `hero` is
   statically generated at `/components/hero` *and* `/blocks/hero`, and a component category like
   `button` is generated under `/blocks/button`. Each page also emits a `canonical` for its own
   path, producing conflicting canonicals and duplicate content. (This is item #2 in
   `project-docs/STRUCTURE_INCONSISTENCIES.md`, still unfixed.)

2. **Copy-paste registry loading.** The ~25-line block that reads both `registry.json` files,
   merges `items`, filters by category, and reads each item's `rawCode` from disk is duplicated
   four times (the page body and `generateStaticParams` in each of the two route files). Any change
   to the registry shape must be made in four places.

This plan extracts one loader module and switches each route to enumerate only its own surface's
categories.

## Current state

### The two route files are near-identical

`src/app/(dashboard-layout)/components/[slug]/page.tsx` (refreshed against `f4e5723c`) and
`src/app/(dashboard-layout)/blocks/[slug]/page.tsx` both contain this shape:

```ts
// components/[slug]/page.tsx lines 55–88 (same pattern in blocks/[slug]/page.tsx lines 44–77)
const uiRegistryPath = path.join(process.cwd(), "src/components/uiable/registry.json");
const blocksRegistryPath = path.join(process.cwd(), "src/components/uiable/blocks/registry.json");
const uiRegistry = JSON.parse(fs.readFileSync(uiRegistryPath, "utf8"));
const blocksRegistry = JSON.parse(fs.readFileSync(blocksRegistryPath, "utf8"));
const registryItems = [ ...(uiRegistry.items || []), ...(blocksRegistry.items || []) ];

const items = registryItems
  .filter((item: any) => item.categories?.includes(slug))       // blocks uses `category`
  .map((item: any) => {
    const relativePath = item.files[0].path;
    const mappedPath = item.type === "registry:block"
      ? `src/components/uiable/blocks/${relativePath}`
      : `src/components/uiable/${relativePath}`;
    const filePath = path.join(process.cwd(), mappedPath);
    let rawCode = "";
    try { rawCode = fs.readFileSync(filePath, "utf8"); }
    catch (error) { console.error(`Failed to read file: ${filePath}`, error); }
    return { ...item, rawCode };
  });

if (items.length === 0) { notFound(); }     // already present in both files
```

And both `generateStaticParams()` enumerate **all** registry categories, not just their surface:

```ts
// components/[slug]/page.tsx lines 112–138; blocks/[slug]/page.tsx lines 100–126
export async function generateStaticParams() {
  // ...reads both registries, merges items...
  const categories = new Set<string>();
  registryItems.forEach((item: any) => {
    item.categories?.forEach((cat: string) => categories.add(cat));
  });
  return Array.from(categories).map((slug) => ({ slug }));
  // blocks returns: .map((category) => ({ slug: category }))
}
```

### The category sources that define each surface

- `src/data/components/index.ts` exports `categoryInfoMap` (component categories).
- `src/data/blocks/index.ts` exports `blockCategoryInfoMap` (block categories).
- The components route currently looks up a **merged** map:
  `src/app/(dashboard-layout)/components/[slug]/page.tsx:15-18`:
  ```ts
  const categoryInfoMap = { ...componentCategoryInfoMap, ...blockCategoryInfoMap };
  ```
  The blocks route looks up only `blockCategoryInfoMap`
  (`src/app/(dashboard-layout)/blocks/[slug]/page.tsx:12,20,42`).

### Known overlap — do NOT try to resolve it here

`blockCategoryInfoMap` and `componentCategoryInfoMap` both contain the keys **`file-upload`** and
**`search`** (see `data/blocks/index.ts:33,43` importing `../components/file-upload` and
`../components/search`). That residual overlap is a deeper taxonomy decision and is **out of scope**
(see Out of scope + Maintenance notes). This plan only fixes the *gross* overlap where the routes
ignore the maps entirely and enumerate all registry categories.

### Repo conventions to match

- Server components here use Node `fs`/`path` against `process.cwd()` (these routes are statically
  generated). Keep that approach.
- TypeScript `strict` is on but the existing code uses `any` for registry items and the lint rule
  `@typescript-eslint/no-explicit-any` is **off** (`eslint.config.mjs:17`) — matching the existing
  `(item: any)` style is acceptable; do not over-engineer types.
- Import grouping in this repo uses `// third party` / `// project` comment banners — follow it.

## Commands you will need

| Purpose | Command           | Expected on success |
|---------|-------------------|---------------------|
| Install | `npm i`           | exit 0 |
| Lint    | `npm run lint`    | exit 0 |
| Build   | `npm run build`   | exit 0; build log lists `/components/[slug]` and `/blocks/[slug]` static params |

> **Type-check caveat**: `npm run type-check` currently fails on the stale generated
> `.next/dev/types/validator.ts` referencing the removed `app/(component)/` group. That is
> pre-existing and unrelated. `npm run build` regenerates `.next`. Judge success by `build` + `lint`.

## Scope

**In scope** (the only files you should modify):
- `src/lib/registry.ts` (create) — the shared loader.
- `src/app/(dashboard-layout)/components/[slug]/page.tsx` — use the loader; restrict params to component categories.
- `src/app/(dashboard-layout)/blocks/[slug]/page.tsx` — use the loader; restrict params to block categories.

**Out of scope** (do NOT touch):
- `src/data/components/index.ts`, `src/data/blocks/index.ts` — do not change the maps. In particular
  do **not** try to remove `file-upload`/`search` from one map; that's a separate decision.
- `src/components/category-view.tsx`, `block-view.tsx` — rendering is unchanged; they still receive
  `items` with `rawCode`.
- The response/props shape passed to `CategoryView` / `BlockView` — keep `{ ...item, rawCode }`.
- `registry.json` homepage / install URLs — that's plan 002.

## Git workflow

- Branch: `advisor/003-registry-loader-and-route-dedup`.
- Commit per step or one logical commit; short imperative message style.
- Do NOT push or open a PR unless instructed.

## Steps

### Step 1: Create the shared loader

Create `src/lib/registry.ts`:
```ts
// third party
import fs from "fs";
import path from "path";

//  ------------------------------ | LIB - REGISTRY | ------------------------------  //

export interface RegistryItem {
  name: string;
  title: string;
  description: string;
  type?: string;
  categories?: string[];
  files: { path: string; target?: string }[];
  [key: string]: unknown;
}

const UI_REGISTRY = "src/components/uiable/registry.json";
const BLOCKS_REGISTRY = "src/components/uiable/blocks/registry.json";

/** Read and merge the ui + blocks registry item lists. */
export function loadRegistryItems(): RegistryItem[] {
  const read = (rel: string) =>
    JSON.parse(fs.readFileSync(path.join(process.cwd(), rel), "utf8"));
  const uiRegistry = read(UI_REGISTRY);
  const blocksRegistry = read(BLOCKS_REGISTRY);
  return [...(uiRegistry.items || []), ...(blocksRegistry.items || [])];
}

/** Items in a category, each augmented with its on-disk source as `rawCode`. */
export function getCategoryItems(
  category: string,
): (RegistryItem & { rawCode: string })[] {
  return loadRegistryItems()
    .filter((item) => item.categories?.includes(category))
    .map((item) => {
      const relativePath = item.files[0].path;
      const mappedPath =
        item.type === "registry:block"
          ? `src/components/uiable/blocks/${relativePath}`
          : `src/components/uiable/${relativePath}`;
      const filePath = path.join(process.cwd(), mappedPath);
      let rawCode = "";
      try {
        rawCode = fs.readFileSync(filePath, "utf8");
      } catch (error) {
        console.error(`Failed to read file: ${filePath}`, error);
      }
      return { ...item, rawCode };
    });
}
```

This preserves the exact mapping/`rawCode`/error-logging behavior of the current inline code.

**Verify**: `npm run lint` exits 0.

### Step 2: Switch the components route to the loader and component-only params

Edit `src/app/(dashboard-layout)/components/[slug]/page.tsx`:
1. Remove the `import fs from "fs";` and `import path from "path";` lines (no longer used here).
2. Add `import { getCategoryItems } from "@/lib/registry";` under the `// project` banner.
3. Keep the existing `import { categoryInfoMap as componentCategoryInfoMap } from "@/data/components";`
   and `import { blockCategoryInfoMap } from "@/data/blocks";`.
4. The merged lookup map at the top (`const categoryInfoMap = { ...componentCategoryInfoMap, ...blockCategoryInfoMap };`)
   is used by `generateMetadata` and the page for the category title/description. **Keep it** for the
   metadata/title lookup (a slug that is valid on this route will be present in it), but change
   `generateStaticParams` (Step 2.6) so block-only slugs are no longer generated here.
5. In the page body, replace the inline registry-reading block with:
   ```ts
   const items = getCategoryItems(slug);
   ```
   (`if (items.length === 0) { notFound(); }` is already present at line 90 — do not duplicate it.)
6. Replace `generateStaticParams()` so it enumerates **component** categories only:
   ```ts
   export async function generateStaticParams() {
     return Object.keys(componentCategoryInfoMap).map((slug) => ({ slug }));
   }
   ```
   (`componentCategoryInfoMap` is the existing import from `@/data/components`.)

**Verify**:
- `git grep -n "readFileSync" "src/app/(dashboard-layout)/components/[slug]/page.tsx"` → no matches.
- `npm run build` exits 0.

### Step 3: Switch the blocks route to the loader and block-only params

Edit `src/app/(dashboard-layout)/blocks/[slug]/page.tsx`:
1. Remove `import fs from "fs";` and `import path from "path";`.
2. Add `import { getCategoryItems } from "@/lib/registry";` under the `// project` banner.
3. Keep `import { blockCategoryInfoMap } from "@/data/blocks";`.
4. In the page body, replace the inline registry-reading block with:
   ```ts
   const items = getCategoryItems(category);
   ```
   (`if (items.length === 0) { notFound(); }` is already present at line 79 — do not duplicate it.
   This file names the param `category` locally — keep that.)
5. Replace `generateStaticParams()` so it enumerates **block** categories only:
   ```ts
   export async function generateStaticParams() {
     return Object.keys(blockCategoryInfoMap).map((category) => ({ slug: category }));
   }
   ```

**Verify**:
- `git grep -n "readFileSync" "src/app/(dashboard-layout)/blocks/[slug]/page.tsx"` → no matches.
- `npm run build` exits 0.

### Step 4: Confirm the duplicate URLs are gone

After a successful `npm run build`, inspect the generated route list / `.next` output, or reason
from the params: `/components/[slug]` params now come only from `componentCategoryInfoMap` keys, and
`/blocks/[slug]` only from `blockCategoryInfoMap` keys.

**Verify** (deterministic): in a Node one-liner, confirm no component category leaks into the blocks
params and vice-versa, except the known `file-upload`/`search` overlap:
```
node -e "const c=Object.keys(require('./src/data/components/index.ts')||{});" 
```
If importing the `.ts` directly is not possible in plain Node, instead verify by grep that
`generateStaticParams` in the components file references `componentCategoryInfoMap` and the blocks
file references `blockCategoryInfoMap`, and that neither builds a `Set` over `registryItems` anymore:
- `git grep -n "new Set<string>()" "src/app/(dashboard)"` → no matches.

## Test plan

No test framework exists in this repo; this plan does not add one (a test baseline is a separate
deferred plan). Verification is the build + grep gates above. If you want a manual smoke check and a
dev server is available: `/components/button` renders components, `/blocks/hero` renders blocks, and
`/components/hero` now returns 404 (`notFound`) instead of duplicating the blocks page. This manual
check is optional and not a done-criterion.

## Done criteria

Machine-checkable. ALL must hold:

- [ ] `src/lib/registry.ts` exists and exports `getCategoryItems`
- [ ] `git grep -n "readFileSync" "src/app/(dashboard-layout)/components/[slug]/page.tsx" "src/app/(dashboard-layout)/blocks/[slug]/page.tsx"` → no matches
- [ ] `git grep -n "new Set<string>()" "src/app/(dashboard)"` → no matches
- [ ] The components route's `generateStaticParams` uses `Object.keys(componentCategoryInfoMap)`; the blocks route's uses `Object.keys(blockCategoryInfoMap)`
- [ ] `npm run build` exits 0
- [ ] `npm run lint` exits 0
- [ ] Only the three in-scope files are modified (`git status`)
- [ ] `plans/README.md` status row for 003 updated

## STOP conditions

Stop and report back (do not improvise) if:

- `item.files[0]` is undefined for any item during build (an item has no `files`) — the original code
  assumed `files[0]` exists; if the data drifted, report rather than guarding silently.
- Removing block slugs from the components route causes a previously-linked page to 404 in a way that
  breaks navigation (e.g. the components grid links to a block slug). Check `src/components-grid.ts` /
  `components-page-client.tsx` for links to block categories; if any exist, STOP and report — the nav
  may intend a block to appear under components, which changes the fix.
- You discover the assumption "each surface's categories == that surface's info-map keys" is false
  (e.g. a registry component category is missing from `componentCategoryInfoMap`, so the route would
  stop generating a real page). Report the missing slug.

## Maintenance notes

- The residual `file-upload` / `search` overlap (both maps contain them) is intentionally left. The
  durable fix is to consolidate the category taxonomy to a single generated source (see the
  "Direction findings" in `plans/README.md`); when that happens, this loader and the two
  `generateStaticParams` should switch to that single source.
- If pagination or per-item lazy code-loading is added to the catalog later, `getCategoryItems`
  reading every item's `rawCode` eagerly is the place to revisit (it's also the subject of the
  deferred perf finding #5).
- Reviewer should confirm the props passed to `CategoryView`/`BlockView` are unchanged
  (`{ ...item, rawCode }`) so rendering behavior is identical, and that `/components/<block-slug>`
  now 404s.
