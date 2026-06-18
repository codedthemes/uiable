# Plan 004: Gate CI on lint and type-check

> **Executor instructions**: Follow this plan step by step. Run every verification
> command and confirm the expected result before moving on. If anything in "STOP
> conditions" occurs, stop and report — do not improvise. When done, update the
> status row for plan 004 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 51b4f3f7..HEAD -- .github/workflows/npm-dev-check.yml package.json`
> If the workflow already runs lint/type-check, mark this plan DONE and stop.

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: dx
- **Planned at**: commit `51b4f3f7`, 2026-06-16

## Why this matters

`package.json` defines `lint` and `type-check` scripts, but CI never runs them — the only workflow
(`.github/workflows/npm-dev-check.yml`) runs `npm i && npm run build`. Type and lint regressions can
merge undetected. This plan adds both as CI gates.

There is one real subtlety this plan must handle correctly: **`npm run type-check` currently fails**
on a *generated* file. The error is not in the source — it comes from `.next/dev/types/validator.ts`,
which is stale and still references the removed `app/(component)/` route group. On a fresh CI checkout,
`.next` does not exist yet, and running `npm run build` **before** type-check regenerates
`.next/dev/types` so the validator matches the current routes. Therefore type-check must run **after**
`npm run build` in CI.

## Current state

- `.github/workflows/npm-dev-check.yml` (full):
  ```yaml
  name: npm Build
  on:
    push:
      branches: [dev*]
  jobs:
    SFTP-deploy:
      name: 🪛 Build
      runs-on: ubuntu-latest
      steps:
        - name: 🚚 Get latest code
          uses: actions/checkout@v4
        - name: Use Node.js 24
          uses: actions/setup-node@v4
          with:
            node-version: "24"
        - name: 🔨 Build - npm
          run: |
            npm i
            npm run build
  ```
- `package.json:11-12`:
  ```json
  "lint": "eslint",
  "type-check": "tsc --noEmit"
  ```
- Verified locally: `npm run type-check` prints `TS2307 Cannot find module '../../../app/(component)/...'`
  errors from `.next/dev/types/validator.ts` (a generated artifact). `npm run build` regenerates these
  types to match the real `app/(dashboard)/` routes.
- `tsconfig.json:26-33` deliberately `include`s `.next/dev/types/**/*.ts`, so stale generated types
  affect `tsc --noEmit`. This is why ordering (build first) matters.

## Commands you will need

| Purpose      | Command                          | Expected on success |
|--------------|----------------------------------|---------------------|
| Install      | `npm i`                          | exit 0 |
| Build        | `npm run build`                  | exit 0 |
| Lint         | `npm run lint`                   | exit 0 |
| Type-check   | `npm run type-check`             | exit 0 **only after a fresh `npm run build`** |

## Scope

**In scope** (the only files you should modify):
- `.github/workflows/npm-dev-check.yml` — add lint + type-check steps in the correct order.

**Out of scope** (do NOT touch):
- `package.json` scripts — they already exist and work; do not rename them.
- `tsconfig.json` — do not remove `.next/dev/types` from `include` to "fix" type-check; the correct
  fix is ordering (build before type-check), not loosening the type config.
- Source files — if lint or type-check reports a **real source** error (not the stale validator), do
  NOT fix it in this plan; STOP and report (see STOP conditions).

## Git workflow

- Branch: `advisor/004-ci-lint-typecheck-gates`.
- Single commit; short imperative message (e.g. `CI: gate on lint and type-check`).
- Do NOT push unless instructed (this edits a CI workflow — pushing triggers it; let the operator
  decide when).

## Steps

### Step 1: Locally confirm the gates pass in the intended order

Run, in order: `npm i`, then `npm run lint`, then `npm run build`, then `npm run type-check`.

**Verify**: `lint` exits 0; `build` exits 0; `type-check` exits 0 **because** the preceding build
refreshed `.next/dev/types`. If `type-check` still fails after a fresh build, see STOP conditions.

### Step 2: Add the CI steps

Edit `.github/workflows/npm-dev-check.yml`. Replace the single build step with an ordered sequence so
type-check runs against freshly-generated types:
```yaml
      - name: 📦 Install - npm
        run: npm i

      - name: 🧹 Lint
        run: npm run lint

      - name: 🔨 Build - npm
        run: npm run build

      - name: 🔎 Type-check
        run: npm run type-check
```
Keep `npm i` as its own step (or fold lint after it). The critical constraint: **`type-check` must
come after `build`**. Do not reorder type-check before build.

**Verify**: `git diff .github/workflows/npm-dev-check.yml` shows the four ordered steps; type-check is
after build.

## Test plan

CI configuration has no unit test. Verification is:
- The local ordered run in Step 1 (lint 0, build 0, type-check 0).
- A reviewer (or the operator, on push) confirms the Actions run goes green with all four steps.

## Done criteria

Machine-checkable. ALL must hold:

- [ ] `.github/workflows/npm-dev-check.yml` runs `npm run lint` and `npm run type-check`
- [ ] In the workflow, `npm run type-check` appears **after** `npm run build`
- [ ] Local sequence `npm run lint && npm run build && npm run type-check` exits 0 end-to-end
- [ ] No source files modified (`git status` shows only the workflow file changed)
- [ ] `plans/README.md` status row for 004 updated

## STOP conditions

Stop and report back (do not improvise) if:

- After a **fresh** `npm run build`, `npm run type-check` still reports errors that are **not** from
  `.next/dev/types/validator.ts` — i.e. there are real source type errors. Report them; fixing source
  type errors is a separate task, not this CI plan.
- `npm run lint` reports real lint errors in source. Report them; do not fix source here.
- Removing `.next/dev/types` from `tsconfig.json` seems necessary to make type-check pass — that's the
  wrong fix; STOP and report so the ordering approach can be reconsidered.

## Maintenance notes

- The build-before-type-check ordering is load-bearing: Next.js regenerates `.next/dev/types` from the
  current routes during `build`, and `tsconfig.json` includes those generated types. If a future change
  removes `.next/dev/types` from `tsconfig` `include`, type-check could run standalone, but verify it
  still catches route-type mismatches before relying on it.
- Consider adding a pre-commit hook (husky) running lint + type-check locally as a follow-up; out of
  scope here.
- Reviewer should confirm the workflow still triggers on the same branches (`dev*`) and that no step
  was accidentally dropped.
