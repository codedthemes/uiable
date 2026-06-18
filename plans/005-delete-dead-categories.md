# Plan 005: Delete the dead `src/lib/categories.ts`

> **Executor instructions**: Follow this plan step by step. Run every verification
> command and confirm the expected result before moving on. If anything in "STOP
> conditions" occurs, stop and report — do not improvise. When done, update the
> status row for plan 005 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 51b4f3f7..HEAD -- src/lib/categories.ts`
> If the file changed since this plan was written, re-run the importer search in Step 1
> before deleting.

## Status

- **Priority**: P3
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: tech-debt
- **Planned at**: commit `51b4f3f7`, 2026-06-16

## Why this matters

`src/lib/categories.ts` exports a `categories` string array (and a `Category` type) that **nothing
imports**. It is also a misleading "source of truth": it still contains the duplicate `data-picker`
(alongside `date-picker`) and a `file-upload` entry that `project-docs/STRUCTURE_INCONSISTENCIES.md`
flags (items #1 and #3) as taxonomy drift. Deleting it removes a stale, conflicting category source
with zero functional impact. (Note: a **different** symbol, also named `categories`, is exported from
`src/components-grid.ts` and *is* used — this plan does not touch that one.)

## Current state

- `src/lib/categories.ts` (full): exports `export const categories = [ ... ] as const;` (62 slugs
  including both `data-picker` and `date-picker`, plus `file-upload`) and
  `export type Category = (typeof categories)[number];`.
- Verified: searching the source tree for `@/lib/categories` returns **no matches** — nothing imports
  this module.
- Caution — the name collision: `src/components/category-view.tsx:15` imports
  `import { categories } from "@/components-grid";` (a different module, an array of objects with
  `.slug`/`.breakpoints`). That import is real and **must stay**. Only `@/lib/categories` is dead.

## Commands you will need

| Purpose | Command           | Expected on success |
|---------|-------------------|---------------------|
| Install | `npm i`           | exit 0 |
| Lint    | `npm run lint`    | exit 0 |
| Build   | `npm run build`   | exit 0 |

> **Type-check caveat**: `npm run type-check` fails on the pre-existing stale `.next/dev/types`
> validator (unrelated to this change). `npm run build` regenerates it. Judge by `build` + `lint`.

## Scope

**In scope** (the only file you should modify):
- `src/lib/categories.ts` — delete.

**Out of scope** (do NOT touch):
- `src/components-grid.ts` — exports a different, live `categories` symbol.
- `src/data/components/index.ts`, `src/data/blocks/index.ts`, `src/lib/utils.ts` — unrelated.
- Do not attempt to "reconcile" the taxonomy across files here; deletion only.

## Git workflow

- Branch: `advisor/005-delete-dead-categories`.
- Single commit; short imperative message (e.g. `Remove unused lib/categories.ts`).
- Do NOT push unless instructed.

## Steps

### Step 1: Re-confirm there are no importers

Search the whole source tree for any import of this module, by alias and by relative path:
- `git grep -n "lib/categories"` → expect **no** matches under `src/` (matches in `plans/` or
  `project-docs/` are documentation, not code, and are fine).
- `git grep -n "from \"@/lib/categories\""` → no matches.

If any source file imports it, STOP (see STOP conditions).

### Step 2: Delete the file

Remove `src/lib/categories.ts` (`git rm src/lib/categories.ts`).

**Verify**: `test -f src/lib/categories.ts` → file does not exist.

### Step 3: Confirm the app still builds and lints

Run `npm run build`, then `npm run lint`.

**Verify**: both exit 0.

## Test plan

No test framework exists; verification is the build + grep gates above. The proof of safety is that
no module imported the deleted file (Step 1) and the build still succeeds (Step 3).

## Done criteria

Machine-checkable. ALL must hold:

- [ ] `src/lib/categories.ts` no longer exists
- [ ] `git grep -n "@/lib/categories" -- src` → no matches
- [ ] `src/components/category-view.tsx` still imports `categories` from `@/components-grid` (unchanged)
- [ ] `npm run build` exits 0
- [ ] `npm run lint` exits 0
- [ ] Only `src/lib/categories.ts` is deleted; no other files changed (`git status`)
- [ ] `plans/README.md` status row for 005 updated

## STOP conditions

Stop and report back (do not improvise) if:

- Step 1 finds **any** source file under `src/` importing `@/lib/categories` (the dead-code premise
  is false; report the importer).
- `npm run build` fails after deletion with a missing-module error pointing at `lib/categories` (an
  importer was missed by grep — restore the file and report).

## Maintenance notes

- The genuine, live category sources are `registry.json` (+ the two sub-registries),
  `src/data/components/index.ts`, `src/data/blocks/index.ts`, and `src/components-grid.ts`. The deeper
  follow-up (consolidate these to one generated source) is tracked in `plans/README.md` direction
  findings; deleting this dead file is a small step toward that.
- Reviewer should double-check the `components-grid` `categories` import is untouched (name collision
  is the one trap in this change).
