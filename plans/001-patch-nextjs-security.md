# Plan 001: Patch Next.js to a security-fixed release

> **Executor instructions**: Follow this plan step by step. Run every verification
> command and confirm the expected result before moving on. If anything in "STOP
> conditions" occurs, stop and report — do not improvise. When done, update the
> status row for plan 001 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 51b4f3f7..HEAD -- package.json package-lock.json`
> If `package.json`'s `next` version differs from what "Current state" shows below,
> re-run `npm audit --omit=dev` and treat a clean result as "already fixed" (mark the
> plan DONE/REJECTED with that note) before changing anything.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW–MED
- **Depends on**: none
- **Category**: security
- **Planned at**: commit `51b4f3f7`, 2026-06-16
- **State**: BLOCKED (2026-06-17) — deferred to next 16.3.0 stable. See execution history.

## Execution history (2026-06-17) — BLOCKED, deferred

Two executor attempts + reviewer verification established that **the 16.2.9 bump is not worth
shipping right now**:

1. **16.2.9 is the latest *stable* next**, and it is itself inside the advisory's vulnerable range
   `9.3.4-canary.0 - 16.3.0-canary.5`. Installing it and re-auditing still reports the next high +
   postcss moderate advisories — the real fix lands in `16.3.0-canary.6+`, i.e. **unreleased 16.3.0**.
2. **The bump buys no security.** `npm view` confirms `next@16.1.6` and `next@16.2.9` have nearly
   identical direct deps — both pin **`postcss: 8.4.31`** (the vulnerable `<8.5.10`). So moving
   16.1.6 → 16.2.9 does not change the postcss advisory at all and does not fix the target issue.
3. **The "+11 advisories" seen on install are a separate, pre-existing problem.** They are NOT
   introduced by next (its direct deps add none of hono/@hono/node-server/express-rate-limit/
   path-to-regexp/qs/@babel/core). They come from `shadcn`'s `^`-ranged tooling subtree: **any**
   `npm install` today reconciles the **stale committed `package-lock.json`** against current `^`
   ranges and pulls newer, advisory-carrying versions. This would happen even without touching next.

**Verdict: defer.** The clean fix for the actual next/postcss advisory is to bump once **16.3.0
stable** ships (it should clear postcss and the aggregate next advisory together). Bumping to 16.2.9
now gains nothing and churns the lockfile. A *separate* finding (stale lockfile surfacing shadcn-tree
advisories) is recorded in `plans/README.md`.

**To resume**: when `npm view next dist-tags` shows `latest` at `16.3.0` (or higher stable), set the
target version below to that, run the steps, and the audit done-criterion ("`found 0 vulnerabilities`"
or the next/postcss advisory dropped) should pass. Until then this plan stays BLOCKED.

## Why this matters

The project pins `next: "16.1.6"`. `npm audit --omit=dev` reports a **high**-severity
advisory chain on Next.js (including next/image Denial-of-Service and unbounded image-cache
growth — both reachable because this app uses `next/image` with remote patterns) plus a
**moderate** transitive `postcss` XSS advisory. `16.2.9` is the latest **stable** release; it
picks up the 16.2.x security fixes shipped since 16.1.6. It does **not** fully clear the audit
(the aggregate advisory range extends through `16.3.0-canary.5`, so the final fix only lands in
the not-yet-released 16.3.0), but moving off 16.1.6 to the newest stable is strictly an
improvement and the residual is accepted until 16.3.0 ships. See "Execution history & decision".

## Current state

- `package.json:31` — `"next": "16.1.6"`.
- `package.json:52` — `"eslint-config-next": "16.1.6"` (keep this in lockstep with `next`).
- Installed version (verified): `16.1.6`.
- `npm audit --omit=dev` (verified at plan time) reports:
  - `next 9.3.4-canary.0 - 16.3.0-canary.5` — **high**; fix → `next@16.2.9`.
  - `postcss <8.5.10` (via next) — **moderate**; same fix.
  - Summary line: `2 vulnerabilities (1 moderate, 1 high)`.
- This is a static catalog site (no custom middleware, no Server Actions handlers, no auth
  backend), so the middleware/Server-Actions advisories in the chain are not exercised — but
  the image advisories are, and the bump fixes all of them at once.

There are no documented decisions in `project-docs/` pinning Next to 16.1.6, so the pin is
incidental, not intentional.

## Commands you will need

| Purpose          | Command                                                  | Expected on success |
|------------------|----------------------------------------------------------|---------------------|
| Reset lockfile   | `git checkout -- package-lock.json`                      | exit 0 (restores committed lockfile baseline) |
| Targeted install | `npm install next@16.2.9 eslint-config-next@16.2.9`      | exit 0 |
| Audit            | `npm audit --omit=dev`                                   | only the pre-existing next + postcss advisory (see Step 3) |
| Build            | `npm run build`                                          | exit 0, "Compiled successfully" |
| Lint             | `npm run lint`                                           | exit 0 |

> **Do NOT run a blanket `npm i`.** A prior attempt did, and it re-resolved `shadcn`'s
> `^`-ranged transitive tree, introducing ~11 unrelated advisories. Use the **targeted**
> `npm install next@16.2.9 eslint-config-next@16.2.9` so only `next`, `eslint-config-next`, and
> their own dependency subtrees move in the lockfile.

> **Type-check caveat**: `npm run type-check` currently emits pre-existing errors from the
> stale generated file `.next/dev/types/validator.ts` (it references the removed
> `app/(component)/` route group). Those are **not** caused by this plan. Running
> `npm run build` regenerates `.next` and clears them. Do not try to "fix" the validator here.

## Scope

**In scope** (the only files you should modify):
- `package.json` — bump `next` and `eslint-config-next`.
- `package-lock.json` — regenerated by npm, commit the result.

**Out of scope** (do NOT touch):
- Any source file under `src/` — this is a dependency bump only.
- Other dependencies flagged by a broader `npm audit` (dev-only advisories) — not this plan.
- `next.config.ts` — only revisit if the build fails with a config-incompatibility error
  (then STOP and report; see STOP conditions).

## Git workflow

- Branch: `advisor/001-patch-nextjs-security`.
- Single commit; message style matches repo (short imperative, e.g. `Bump next to 16.2.9 (security)`).
- Do NOT push or open a PR unless the operator instructed it.

## Steps

> If you are continuing in a worktree where a previous attempt already ran `npm i`, START with
> Step 0 to discard that drifted lockfile. If you are starting fresh, Step 0 is a harmless no-op.

### Step 0: Restore the committed lockfile baseline

Run `git checkout -- package-lock.json` (and, if `package.json` was already edited by a prior
attempt, `git checkout -- package.json` too) so you begin from the committed `next@16.1.6` state.

**Verify**: `git status --short package.json package-lock.json` → no output (both clean).

### Step 1: Bump the Next.js version

Edit `package.json`:
- Change `"next": "16.1.6"` → `"next": "16.2.9"`.
- Change `"eslint-config-next": "16.1.6"` → `"eslint-config-next": "16.2.9"` (keep it equal to `next`).

**Verify**: `git diff package.json` shows exactly those two lines changed.

### Step 2: Targeted install to update the lockfile

Run **`npm install next@16.2.9 eslint-config-next@16.2.9`** (NOT `npm i`).

**Verify**:
- `node -e "console.log(require('next/package.json').version)"` → prints `16.2.9`.
- `git diff --stat package-lock.json` shows changes scoped to next/eslint-config-next and their
  dependency subtrees — not a wholesale re-resolution of the lockfile.

### Step 3: Confirm no NEW advisories were introduced

Run `npm audit --omit=dev`.

**Verify** (relaxed criterion — the aggregate next + postcss advisory is EXPECTED to remain until
16.3.0 ships):
- The report still lists the pre-existing `next` high advisory and the `postcss <8.5.10` moderate
  advisory. That is accepted and expected — do NOT attempt `npm audit fix --force`.
- The summary line reads **`2 vulnerabilities (1 moderate, 1 high)`** — i.e. the SAME two as the
  16.1.6 baseline. If the count is higher (e.g. the 13 a blanket `npm i` produced), the install
  drifted unrelated deps — STOP and report (see STOP conditions).

### Step 4: Confirm the app still builds and lints

Run `npm run build`, then `npm run lint`.

**Verify**: build prints "Compiled successfully" and exits 0; lint exits 0.

## Test plan

There is no test framework in this repo, so verification is the build + audit gates above.
- `npm run build` exits 0 (the app compiles against the newer Next.js).
- `npm audit --omit=dev` shows exactly the same two advisories as the 16.1.6 baseline — no new ones.
- `npm run lint` exits 0 (the matching `eslint-config-next` bump didn't introduce new lint errors).

## Done criteria

Machine-checkable. ALL must hold:

- [ ] `package.json` has `"next": "16.2.9"` and `"eslint-config-next": "16.2.9"`
- [ ] `node -e "console.log(require('next/package.json').version)"` prints `16.2.9`
- [ ] `npm audit --omit=dev` summary is `2 vulnerabilities (1 moderate, 1 high)` — the same two as
      baseline, with NO additional advisories introduced
- [ ] `npm run build` exits 0
- [ ] `npm run lint` exits 0
- [ ] No files outside `package.json` / `package-lock.json` are modified (`git status`)
- [ ] `plans/README.md` status row for 001 updated

## STOP conditions

Stop and report back (do not improvise) if:

- `npm run build` fails with a Next.js config/API incompatibility (e.g. a renamed `next.config`
  option). A patch release should not cause this; if it does, report the exact error.
- `npm audit --omit=dev` after the targeted install shows **more than** the baseline two advisories
  (the install drifted unrelated transitive deps — report the extra advisories rather than trying
  to resolve them; the targeted-install mechanism is supposed to prevent this).
- The targeted `npm install` itself errors or cannot reach the registry — report the exact error.

## Maintenance notes

- **Tracked follow-up**: the next + postcss advisory is only fully resolved in **16.3.0**. Once
  16.3.0 ships stable, bump again and confirm `npm audit --omit=dev` drops to `found 0 vulnerabilities`.
  Until then, this plan deliberately leaves the audit showing the accepted residual.
- Keep `eslint-config-next` pinned to the same version as `next` on every future bump.
- The middleware/Server-Actions advisories in the chain are not exercised by this static site today;
  if a backend, middleware, or Server Actions are added later, re-run `npm audit` and re-evaluate.
- Always prefer a **targeted** `npm install <pkg>@<ver>` for security bumps in this repo — a blanket
  `npm i` re-resolves `shadcn`'s `^`-ranged tooling tree and surfaces unrelated advisories.
- A reviewer should confirm the diff is limited to `package.json` + `package-lock.json` and that
  the build output is unchanged in behavior (this is a security patch, not a feature change).
