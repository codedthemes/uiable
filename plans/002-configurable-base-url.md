# Plan 002: Make the registry/site base URL configurable (kill localhost + LAN IP)

> **Executor instructions**: Follow this plan step by step. Run every verification
> command and confirm the expected result before moving on. If anything in "STOP
> conditions" occurs, stop and report — do not improvise. When done, update the
> status row for plan 002 in `plans/README.md`.
>
> **Drift check (run first)**:
> `git diff --stat 51b4f3f7..HEAD -- src/components/category-view.tsx src/app/layout.tsx src/app/sitemap.ts src/app/robots.ts registry.json src/components/uiable/registry.json src/components/uiable/blocks/registry.json`
> If any of these changed since this plan was written, compare the "Current state"
> excerpts against the live code before proceeding; on a mismatch, STOP.

## Why this matters

This project's core deliverable is a copy-paste install command —
`shadcn add <url>/r/<name>.json` — and a distributable registry. Today those URLs point at
the developer's machine:

- The four package-manager install commands shown in the catalog UI hardcode
  `http://localhost:3000`. Anyone who copies them from a deployed site gets a command that
  cannot resolve.
- The registry `homepage` is a **LAN IP** (`http://192.168.0.169:3000`), which has been baked
  into committed, distributed artifacts (`registry.json`, `public/r/registry.json`,
  `public/registry-index.json`). That both breaks external installs and leaks the developer's
  internal network address into published files.

The app already derives a base URL from `NEXT_PUBLIC_APP_URL` (`src/app/layout.tsx`, `sitemap.ts`,
`robots.ts`), but each does it with a duplicated inline `NODE_ENV === "development" ? localhost : prod`
branch. **This plan removes that hand-rolled branch entirely** by letting Next.js pick the value from
environment-specific env files (`.env.development` / `.env.production`), which Next loads automatically
based on `NODE_ENV`. Code then just reads `process.env.NEXT_PUBLIC_APP_URL` with no branching. It also
replaces the LAN IP in the registry source files.

## Approach: environment-specific env files (no helper function)

Next.js automatically loads `.env.development` during `next dev` and `.env.production` during
`next build` / `next start`, keyed off `NODE_ENV`. That is exactly the dev/prod selection the inline
branches do by hand, so we delegate it to Next:

- `.env.development` → `NEXT_PUBLIC_APP_URL=http://localhost:3000`
- `.env.production`  → `NEXT_PUBLIC_APP_URL=https://internal.uiable.com`

Both files are **committed** (they are not the gitignored `.env*.local` files). Committing them is the
safety net: the variable is always defined, so we never produce an `undefined/r/foo.json`. A developer
who wants a different local URL can still override via an uncommitted `.env.local`.

> **Why no `getBaseUrl()` helper**: a helper would only re-implement the dev/prod branch that env
> files give us natively. With the files committed, `process.env.NEXT_PUBLIC_APP_URL` is always set,
> so the fallback logic is unnecessary.

## Current state

- **Install commands hardcode localhost** — `src/components/category-view.tsx:172-190`:
  ```ts
  const commands = {
    pnpm: { cli: "pnpm", command: `pnpm dlx shadcn@latest add http://localhost:3000/r/${item.name}.json` },
    npm:  { cli: "npm",  command: `npx shadcn@latest add http://localhost:3000/r/${item.name}.json` },
    yarn: { cli: "yarn", command: `yarn shadcn@latest add http://localhost:3000/r/${item.name}.json` },
    bun:  { cli: "bun",  command: `bunx --bun shadcn@latest add http://localhost:3000/r/${item.name}.json` }
  };
  ```
  This is a `"use client"` component (line 1), so it reads `process.env.NEXT_PUBLIC_*`
  variables — Next inlines `NEXT_PUBLIC_`-prefixed env vars into the client bundle at build time.

- **The duplicated inline branch** lives in three places, all identical:
  - `src/app/layout.tsx:15-19`:
    ```ts
    const baseUrl =
      process.env.NEXT_PUBLIC_APP_URL ||
      (process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://internal.uiable.com");
    ```
  - `src/app/sitemap.ts:6-10` — same block.
  - `src/app/robots.ts:4-8` — same block.

- **LAN IP in registry source** (verified with `git grep 192.168.0.169`):
  - `registry.json:4` — `"homepage": "http://192.168.0.169:3000"`
  - `src/components/uiable/registry.json:4` — same
  - `src/components/uiable/blocks/registry.json:4` — same
  - Generated outputs that already contain it: `public/r/registry.json`, `public/registry-index.json`.

- **The catalog build already supports an env override** — `src/scripts/build-catalog.mjs:33-37`
  computes `BASE_URL` from `process.env.UIABLE_BASE_URL || registry.homepage || "http://localhost:3000"`.
  **Note**: this is plain `node`, not Next — it does **not** auto-load `.env.*` files. So fixing the
  `homepage` fields (Step 3) is what drives the correct URL into `public/registry-index.json`; the env
  files only feed the Next client bundle.

- Convention to match (from `agent.md`): keep client styling/util usage explicit; reuse `cn()` for
  conditional classes; do not hand-edit generated `public/r/**` — regenerate via `npm run registry:build`.

## Commands you will need

| Purpose          | Command                                   | Expected on success |
|------------------|-------------------------------------------|---------------------|
| Install          | `npm i`                                   | exit 0 |
| Lint             | `npm run lint`                            | exit 0 |
| Build            | `npm run build`                           | exit 0, "Compiled successfully" |
| Registry rebuild | `npm run registry:build`                  | writes `public/r/**` + `public/registry-index.json`, exit 0 |
| Grep check       | `git grep -n "192.168.0.169"`             | (after fix) no matches in source registry files |

> **Type-check caveat**: `npm run type-check` currently fails on the pre-existing stale
> `.next/dev/types/validator.ts` (references the removed `app/(component)/` group). That is not
> caused by this plan; `npm run build` regenerates `.next` and clears it. Judge success by `build`.

## Scope

**In scope** (the only files you should modify):
- `.env.development` (create, committed) — `NEXT_PUBLIC_APP_URL=http://localhost:3000`.
- `.env.production` (create, committed) — `NEXT_PUBLIC_APP_URL=https://internal.uiable.com`.
- `.env.example` (create) — document `NEXT_PUBLIC_APP_URL`.
- `src/components/category-view.tsx` — use `process.env.NEXT_PUBLIC_APP_URL` in the install commands.
- `src/app/layout.tsx`, `src/app/sitemap.ts`, `src/app/robots.ts` — replace the inline dev/prod branch
  with a direct read of `process.env.NEXT_PUBLIC_APP_URL` (the env files now supply the value).
- `registry.json` — replace the LAN-IP `homepage`.
- `src/components/uiable/registry.json` — replace the LAN-IP `homepage`.
- `src/components/uiable/blocks/registry.json` — replace the LAN-IP `homepage`.
- Generated registry outputs **only** by running `npm run registry:build` (Step 5) — never hand-edit them.

**Out of scope** (do NOT touch, even though they look related):
- `src/components/block-item.tsx` / `block-view.tsx` — verified they do **not** build install
  commands, so there is nothing to change there. If you find an install-command string there that
  this plan's grep missed, STOP and report (the code drifted).
- The production hostname value: use `https://internal.uiable.com` (the value already used as the
  prod fallback in `layout.tsx`). Do **not** invent a different domain.
- `.gitignore` — confirm `.env.development` / `.env.production` are **not** ignored (only `.env*.local`
  should be). If they are ignored, STOP and report rather than force-adding.

## Git workflow

- Branch: `advisor/002-configurable-base-url`.
- Commit per logical unit (env files + usage, then registry homepage, then regenerated output) or one
  commit; message style matches repo (short imperative).
- Regenerating `public/r/**` will produce a large diff (~hundreds of files) — that is expected for
  this finding. Keep it in its own commit so reviewers can collapse it.
- Do NOT push or open a PR unless instructed.

## Steps

### Step 1: Create the committed env files

Create `.env.development` at the repo root:
```
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

Create `.env.production` at the repo root:
```
NEXT_PUBLIC_APP_URL=https://internal.uiable.com
```

Then confirm neither is gitignored:
- `git check-ignore .env.development .env.production` → **no output** (exit code 1 = not ignored).
  If either prints, STOP — `.gitignore` over-matches and the plan's safety net (committed values)
  would not hold.

**Verify**: both files exist; `git status` shows them as new/added (not ignored).

### Step 2: Use the env var in the install commands

In `src/components/category-view.tsx`:
1. Inside the `items.map(...)` render body, before the `commands` object is built, read the base once:
   `const baseUrl = process.env.NEXT_PUBLIC_APP_URL;`
2. Replace each hardcoded `http://localhost:3000` in the four command strings with `${baseUrl}`:
   ```ts
   const commands = {
     pnpm: { cli: "pnpm", command: `pnpm dlx shadcn@latest add ${baseUrl}/r/${item.name}.json` },
     npm:  { cli: "npm",  command: `npx shadcn@latest add ${baseUrl}/r/${item.name}.json` },
     yarn: { cli: "yarn", command: `yarn shadcn@latest add ${baseUrl}/r/${item.name}.json` },
     bun:  { cli: "bun",  command: `bunx --bun shadcn@latest add ${baseUrl}/r/${item.name}.json` }
   };
   ```

**Verify**:
- `git grep -n "localhost:3000" src/components/category-view.tsx` → no matches.

### Step 3: Collapse the inline branch in layout / sitemap / robots

In each of `src/app/layout.tsx`, `src/app/sitemap.ts`, and `src/app/robots.ts`, replace the
duplicated block:
```ts
const baseUrl =
  process.env.NEXT_PUBLIC_APP_URL ||
  (process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://internal.uiable.com");
```
with:
```ts
const baseUrl = process.env.NEXT_PUBLIC_APP_URL;
```
The env files from Step 1 now supply the correct value per environment, so the branch is redundant.

**Verify**:
- `git grep -n "192.168.0.169\|NODE_ENV === \"development\"" src/app/layout.tsx src/app/sitemap.ts src/app/robots.ts`
  → no matches (the inline branch is gone). (`https://internal.uiable.com` should no longer appear in
  these three source files either; it now lives only in `.env.production`.)

### Step 4: Replace the LAN IP in the three registry source files

In each of `registry.json`, `src/components/uiable/registry.json`, and
`src/components/uiable/blocks/registry.json`, change:
`"homepage": "http://192.168.0.169:3000",` → `"homepage": "https://internal.uiable.com",`

**Verify**: `git grep -n "192.168.0.169" -- '*.json'` returns matches **only** under `public/`
(the not-yet-regenerated generated output). Step 6 clears those.

### Step 5: Add `.env.example`

Create `.env.example` at the repo root:
```
# Public base URL of the deployed site. Used for canonical links, sitemap/robots,
# and the registry install commands shown in the catalog UI.
#
# Defaults are supplied by the committed .env.development (http://localhost:3000)
# and .env.production (https://internal.uiable.com). Set this in .env.local only
# to override the base URL for your own local dev.
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

**Verify**: file exists; `git status` shows it as a new untracked/added file.

### Step 6: Regenerate the distributed registry output

Run `npm run registry:build` (this runs `shadcn build` then `node src/scripts/build-catalog.mjs`).
The catalog script reads `registry.homepage`, which you fixed in Step 4, so the LAN IP is replaced
in `public/registry-index.json`. Confirm the generated `public/r/registry.json` `homepage` is also
the new value.

**Verify**:
- `git grep -n "192.168.0.169"` → **no matches anywhere** in the repo.
- `git grep -n "internal.uiable.com" public/registry-index.json` → at least one match (the `baseUrl`).
- `npm run build` exits 0 (this builds with `NODE_ENV=production`, so it loads `.env.production` and
  bakes `https://internal.uiable.com` into the client bundle's install commands).
- `npm run lint` exits 0.

## Test plan

No test framework exists; verification is via build + grep gates:
- `npm run build` must be clean and must inline the **production** URL (it runs with
  `NODE_ENV=production` → loads `.env.production`).
- Optional dev sanity check: `npm run dev` and confirm a catalog install command shows
  `http://localhost:3000` (dev loads `.env.development`).
- New tests are **not** in scope for this plan (a test baseline is a separate, deferred plan).

## Done criteria

Machine-checkable. ALL must hold:

- [ ] `.env.development` and `.env.production` exist, are committed (not gitignored), and set `NEXT_PUBLIC_APP_URL`
- [ ] `.env.example` exists and documents `NEXT_PUBLIC_APP_URL`
- [ ] `git grep -n "localhost:3000" src/components/category-view.tsx` → no matches
- [ ] The inline `NODE_ENV === "development"` base-URL branch is gone from `layout.tsx`, `sitemap.ts`, `robots.ts`
- [ ] `git grep -n "192.168.0.169"` → no matches anywhere in the repo
- [ ] `npm run build` exits 0
- [ ] `npm run lint` exits 0
- [ ] Only the in-scope files (plus regenerated `public/**`) are modified (`git status`)
- [ ] `plans/README.md` status row for 002 updated

## STOP conditions

Stop and report back (do not improvise) if:

- `.env.development` or `.env.production` turns out to be gitignored (Step 1 check fails) — the
  committed-values safety net would not hold; report before force-adding.
- `npm run registry:build` fails (e.g. `shadcn build` errors because of a missing config or auth).
  Report the error; do NOT hand-edit files under `public/r/**` to work around it.
- You find install-command strings (`shadcn@latest add`) in files other than `category-view.tsx`
  (the code drifted from this plan's assumption that they live only there).
- The three registry source files no longer contain the LAN IP at all (someone already fixed it) —
  finish the env-file + `category-view.tsx` parts and note the homepage was already clean.
- The operator wants a production hostname different from `https://internal.uiable.com` — that's a
  value decision; ask before guessing.

## Maintenance notes

- When the site gets a real public domain, update `.env.production` and the three `homepage` fields
  to match, then re-run `npm run registry:build`. No code changes needed.
- The catalog build script (`build-catalog.mjs`) is plain `node` and does not read `.env.*`. If you
  ever need it to honor the env files, set `UIABLE_BASE_URL` in the build environment (it already takes
  precedence) or wire up `dotenv` — out of scope here since `registry.homepage` already drives it.
- Reviewer should scrutinize the regenerated `public/**` diff for the homepage/URL change only — no
  component source should appear in that generated diff.
