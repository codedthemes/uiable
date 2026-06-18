# UIable Structure Inconsistency Report

This report lists current structural inconsistencies found in the repository and how to fix them safely.

## Summary

- Total high-priority issues: 3
- Total medium-priority issues: 3
- Total low-priority issues: 2

---

## High Priority

### 1) Duplicate category concept: `data-picker` vs `date-picker`

Evidence:

- Directory exists: `components/uiable/data-picker/`
- Directory exists: `components/uiable/date-picker/`
- Registry contains both categories (`data-picker`, `date-picker`) in `registry.json`.
- Nav uses only `date-picker` (`config/components.ts`).
- Category description map includes only `date-picker` (`config/category-info/index.ts`).

Impact:

- Two almost-identical category semantics with different slugs.
- Inconsistent discovery and docs behavior.

Recommended correction:

1. Choose one canonical slug (`date-picker` recommended).
2. Move/rename `data-picker-with-dropdowns` into `date-picker` naming.
3. Update corresponding `registry.json` entries.
4. Remove `data-picker` from `lib/categories.ts`.

---

### 2) Block categories are unintentionally generated at root category route

Evidence:

- `app/(component)/[category]/page.tsx` `generateStaticParams()` includes all categories from `registry.json` (including block categories like `cta`, `hero`, etc.).
- Blocks also have dedicated route: `app/blocks/[category]/page.tsx`.

Impact:

- Duplicate URLs for block categories (`/cta` and `/blocks/cta`).
- Potential SEO/content duplication and routing ambiguity.

Recommended correction:

1. In `app/(component)/[category]/page.tsx`, filter static params to component categories only (from `NAV_CATEGORIES` slugs or explicit allowlist).
2. Keep block categories only under `/blocks/{category}`.

---

### 3) Category metadata drift across core files

Evidence:

- `lib/categories.ts` includes `file-upload`, but registry has no `file-upload` entries.
- `config/category-info/index.ts` has entries not present in registry (`form`, `header`, `search`, `file-upload`).
- Registry categories missing richer descriptions for several active categories (`field`, `item`, `native-select`, `radio`, `input-group`, block categories).

Impact:

- Multiple conflicting "truth" sources.
- Harder maintenance and unpredictable page copy quality.

Recommended correction:

1. Define one canonical category source (recommended: `registry.json` + `config/components.ts`).
2. Auto-generate or validate `lib/categories.ts` and `category-info/index.ts` against registry categories.
3. Add missing category-info entries for active categories or consciously rely on fallback copy.

---

## Medium Priority

### 4) Generated count file is stale relative to registry

Evidence:

- `config/category-counts.json` contains `file-upload: 1`.
- `registry.json` has no `file-upload` category entries.
- Script exists (`scripts/generate-counts.js`) but is not wired into npm scripts/workflow.

Impact:

- UI counters can drift from actual registry state.

Recommended correction:

1. Run `node scripts/generate-counts.js` after registry changes.
2. Add npm script (for example `registry:counts`) and optionally chain after `registry:build`.
3. Add a CI check to prevent stale count file.

---

### 5) `components/uiable/blocks` is a folder category, not a registry category

Evidence:

- Directory: `components/uiable/blocks/`
- Registry categories are specific block slugs (`cta`, `hero`, etc.), not `blocks`.

Impact:

- New contributors can confuse folder grouping with category slug.

Recommended correction:

1. Document clearly in architecture guide (done).
2. Optional: add a short README in `components/uiable/blocks/` describing slug rules.

---

### 6) Branding text mismatch remains in UI

Evidence:

- `components/app-sidebar.tsx` still shows `UIable` text.

Impact:

- Naming inconsistency with current `uiable` brand.

Recommended correction:

1. Replace visible `UIable` strings with `uiable`.
2. Search for remaining legacy branding in UI text.

---

## Low Priority

### 7) README is generic template, not project-accurate

Evidence:

- `README.md` is default create-next-app boilerplate.

Impact:

- Onboarding friction for technical and non-technical readers.

Recommended correction:

1. Replace README with project-specific setup, architecture, registry workflow, and contribution rules.

---

### 8) Minor code quality artifact in sidebar JSX

Evidence:

- `components/app-sidebar.tsx` includes stray trailing character after `</SidebarGroupContent>`.

Impact:

- Noise in code and potential lint/build issues depending on strictness.

Recommended correction:

1. Remove stray character.
2. Run `npm run lint` and `npm run type-check`.

---

## Suggested Fix Order

1. Resolve category taxonomy (`data-picker` vs `date-picker`).
2. Fix route-generation overlap between components and blocks.
3. Align metadata sources (`registry`, `config`, `lib`).
4. Automate count-file generation/validation.
5. Clean branding and minor code artifacts.
