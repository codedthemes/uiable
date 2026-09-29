# Agent Project Guide: UIable Shadcn Component Repo

This file is the primary source of truth for AI agents working in this repository.

## Project Stack

- Framework: Next.js 16 (App Router)
- Language: TypeScript + React 19
- Styling: Tailwind CSS 4
- Component Library: Shadcn UI (registry-driven)
- Icons: Lucide React (preferred), plus existing `iconsax-reactjs` and `@tabler/icons-react` usage in the repo

## Core Architecture Rules (Critical)

### 1. `components/ui` Policy

- Treat `components/ui/` as stable shared primitives.
- Prefer implementing uiable-specific visuals in `components/uiable/**` and usage sites.
- Do not make casual edits to `components/ui/**` for single demo needs.
- If a `components/ui/**` change is truly required (global token alignment, accessibility fix, bug fix, or shared behavior), keep it minimal, backward-compatible, and verify impacted usages.

### 2. No Themed Wrapper Sprawl

- Do not introduce wrapper components like `ThemedButton` / `ThemedBadge` unless explicitly requested.
- Prefer direct composition with existing primitives and explicit classes in uiable variants.

### 3. Styling Expectations

- Keep uiable-specific design classes explicit and readable.
- Prefer inline utility classes for variant files so each component remains portable.
- Reuse `cn()` when class composition is conditional.
- Explicitly define background/text/border classes when variant intent depends on color treatment (`solid`, `light`, `outline`) so default primitive styles do not leak.

### 4. Variant and File Organization

- Preferred approach: one variant per file in `components/uiable/[category]/`.
- File naming: `[category]-[style]-[color].tsx` (lowercase, kebab-case) when applicable.
- Existing grouped files (for example, `*-colors.tsx`) may remain for backward compatibility; do not remove or break them unless requested.
- For new work, prefer standalone variant files over new grouped files.

### 5. Registry Integration

- Every new exportable component/variant must be added to the relevant registry.json
  (`src/components/uiable/registry.json` for components, `.../blocks/registry.json` for blocks,
  `.../themes/registry.json` for themes).
- Do not manually edit generated files under `public/r/**` or `.pro-registry/**` unless
  explicitly requested — both are build output.
- Public and pro (auth-gated) items live in the **same** source tree and the
  **same** registry.json files — there is no separate pro folder. What makes an item pro
  is a `"pro": true` field on its registry.json entry; omit it for a free item.
- After registry updates: `npm run registry:build` for free items, `npm run registry:build:pro`
  for pro items (either is safe to run alone). Full workflow and auth model:
  `project-docs/REGISTRY.md`.

## Design System & Color Mapping

Use these mappings for consistency across uiable variants:

| Variant   | Mapping Rule         | Example Class    |
| :-------- | :------------------- | :--------------- |
| Primary   | Shadcn `primary`     | `bg-primary`     |
| Secondary | Shadcn `secondary`   | `bg-secondary`   |
| Success   | Tailwind green       | `bg-green-600`   |
| Danger    | Shadcn `destructive` | `bg-destructive` |
| Warning   | Tailwind yellow      | `bg-yellow-500`  |
| Info      | Tailwind cyan        | `bg-cyan-500`    |
| Dark      | Tailwind slate       | `bg-slate-800`   |

Contrast and variant rules:

- Solid variants should use high-contrast text (`text-white` in most cases, especially for success/danger/warning/info/dark).
- Light variants should use low-alpha background + colorized text (for example `bg-green-600/10 text-green-700`).
- Outline variants should include `bg-transparent` when needed to avoid inherited backgrounds.

## Directory Conventions

- Shared primitives: `components/ui/`
- Themed variants: `components/uiable/[category]/`
- App routes: `app/**`
- Global tokens/styles: `app/globals.css`
- Registry source: `registry.json`
- Registry build output: `public/r/**`

## Workflow for New Components

1. Check existing patterns in `components/uiable/[category]/`.
2. Identify matching primitives in `components/ui/`.
3. Create/update variant file(s) in `components/uiable/[category]/`.
4. Keep props/types clean and maintain accessibility semantics.
5. Add/update item entries in `registry.json`.
6. Run `npm run registry:build`.
7. Run `npm run lint` and `npm run type-check` when practical.

---

## Block Authoring

For creating new blocks under `components/uiable/blocks/**`, use
`block-rules.md` as the single reference. It covers folder/naming conventions,
the file anatomy, the full design-token table, layout and responsive patterns,
pro tagging, the new-category checklist, and the rules for translating an
external reference design into UIAble styling.
