# UIAble Block Authoring Rules

Single reference for creating new blocks. Read **this file only** — it encodes
everything needed so the codebase does not have to be re-scanned per block.

Companion to `agent.md` (which is the broader agent guide). Where the two
overlap, `agent.md` wins; this file adds block-specific detail.

---

## 1. Quick start (the whole loop)

1. Create `src/components/uiable/blocks/<category>/<category>-<n>/<category>-<n>.tsx`.
2. Write the block using the anatomy in §5 and tokens in §7.
3. Add its entry to `src/components/uiable/blocks/registry.json` (§3), adding
   `"pro": true` if it is gated (§16).
4. Build: `npm run registry:build` (free) **or**
   `npm run registry:build:pro` (pro) — §18.
5. `npm run lint && npm run type-check && npm run format`.
6. Verify the preview renders at `/blocks/<category>` and `/preview/<category>/<category>-<n>` (§18).

---

## 2. Non-negotiables

- **Never** edit `src/components/ui/**` for a block's needs. Those are shared
  primitives. Compose instead.
- **Never** hand-edit build output: `public/r/**`, `.pro-registry/**`,
  `.registry-build/**`. The **source** `registry.json` files _are_ edited by
  hand — see §3.
- **Never** introduce a new colour, font, radius, or shadow value. Snap to an
  existing token (§7, §8).
- Every block must work in **light and dark** with no extra work (§12).
- Every block is **self-contained and copy-pasteable** — a user installs one
  file. No imports from other blocks, no shared local helpers.

---

## 3. What is automatic vs manual

**Automatic** (do not do by hand):

- Build output: `public/r/**`, `.pro-registry/**`, `.registry-build/**`,
  catalog/index files.
- Import ordering and Tailwind class ordering (Prettier plugins, §6).

**Manual**:

- The block `.tsx` file itself.
- **Its entry in `src/components/uiable/blocks/registry.json`** — this is
  required. `npm run registry:build` does _not_ create entries; it only splits
  by tier and runs `shadcn build`. A block with no registry entry simply will
  not appear anywhere.
- The `"pro": true` flag (§16).
- Registering a **brand-new category** (§17).

Entry shape (copy an existing sibling; `path` is relative to registry.json,
`target` is the consumer install path):

```json
{
  "name": "uiable-block-hero-26",
  "type": "registry:block",
  "title": "Hero 26",
  "description": "Hero variant for block.",
  "registryDependencies": ["button"],
  "dependencies": ["lucide-react"],
  "files": [
    {
      "path": "hero/hero-26/hero-26.tsx",
      "type": "registry:component",
      "target": "@components/uiable/blocks/hero/hero-26/hero-26.tsx"
    }
  ],
  "categories": ["hero"]
}
```

**Optional helper:** `node src/scripts/generate-registry.mjs` can append missing
entries and re-sync `dependencies` / `registryDependencies` / file paths against
what's on disk. It is **not** wired to any npm script (it must be invoked
directly), and it is safe to run — it mutates keys in place and never drops
`"pro": true`. Treat it as an audit/convenience step, not part of the build.

---

## 4. Folder & naming

```
src/components/uiable/blocks/<category>/<category>-<n>/<category>-<n>.tsx
```

- Folder and file share the same name; one block per folder, one export per file.
- `<n>` is the next free integer in that category — check with
  `ls src/components/uiable/blocks/<category>/`.
- Default export is PascalCase of the filename: `hero-26.tsx` → `Hero26()`.
- Registry name is derived as `uiable-block-<category>-<variant>` where
  `variant` is the filename minus the `<category>-` prefix.
  `hero/hero-26/hero-26.tsx` → `uiable-block-hero-26`.

**Existing categories** (counts as of 2026-07-23 — verify with `ls`):
`chat:1 contact:19 content:30 cta:20 e-commerce:10 faq:10 feature:25 footer:20
gallery:10 hero:25 landing:10 layout:4 navbar:2 portfolio:10 pricing:20
process:10 statistics:5 team:20 testimonial:25`

`landing`, `layout`, `navbar` back the real site — do not add variants there
without being asked.

---

## 5. File anatomy

Canonical shape, matching existing blocks:

```tsx
"use client"

// ONLY if the block uses hooks/state/handlers

// shadcn
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

// constants
const features = [{ title: "…", description: "…" }]

//  ------------------------------ | FEATURE 26 | ------------------------------  //

export default function Feature26() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">…</div>
    </section>
  )
}
```

Rules:

- The banner comment sits directly above the component:
  `//  ------------------------------ | <NAME IN CAPS> | ------------------------------  //`
- Group comments used in the repo: `// shadcn`, `// constants`,
  `// project-imports`, `// assets`, `// third party`.
- Add `"use client"` only when needed — most static blocks are server components.
- No `interface Props` — blocks take no props (§15).

---

## 6. Formatting (auto-enforced, don't fight it)

Prettier config: **no semicolons**, double quotes, 2-space indent, printWidth
80, `trailingComma: "es5"`.

Two plugins run automatically:

- `@ianvs/prettier-plugin-sort-imports` — import order is
  react → next → third-party → `@/lib` → `@/hooks` → `@/components/ui` →
  `@/components` → relative. Just write imports; formatting fixes order.
- `prettier-plugin-tailwindcss` — sorts Tailwind classes, and is aware of
  `cn()` and `cva()`.

Always finish with `npm run format`.

---

## 7. Design tokens (authoritative — do not re-read globals.css)

Base unit is **`--spacing: 4px`**, so Tailwind numeric classes are ×4px:
`p-4` = 16px, `py-12.5` = 50px, `max-w-150` = 600px. Fractional values like
`py-12.5`, `h-19.5`, `size-4.5` are normal here.

Base font size is **`--text-base: 0.875rem` (14px)**, font is `Inter var`
via `font-sans`. Default radius `--radius: 0.5rem`.

| Token                       | Light     | Dark      | Use for                     |
| :-------------------------- | :-------- | :-------- | :-------------------------- |
| `background`                | `#f3f4f6` | `#030712` | Page background             |
| `foreground`                | `#030712` | `#f9fafb` | Primary/heading text        |
| `card`                      | `#ffffff` | `#101828` | Card & raised surfaces      |
| `card-foreground`           | `#101828` | `#f9fafb` | Text on cards               |
| `popover` / `-foreground`   | `#ffffff` | `#1e2939` | Overlays                    |
| `primary`                   | `#4680ff` | `#4680ff` | Brand, CTAs, links, accents |
| `primary-foreground`        | `#f9fafb` | `#101828` | Text on primary             |
| `secondary` / `-foreground` | `#f3f4f6` | `#1e2939` | Secondary surfaces          |
| `muted`                     | `#f3f4f6` | `#1e2939` | Subtle surfaces             |
| `muted-foreground`          | `#6a7282` | `#99a1af` | Body/secondary text         |
| `accent` / `-foreground`    | `#f3f4f6` | `#364153` | Hover/active surfaces       |
| `destructive`               | `#e7000b` | `#ff6467` | Errors, danger              |
| `border`                    | `#d1d5dc` | `#364153` | Borders, dividers           |
| `input`                     | `#fff`    | `#101828` | Input backgrounds           |
| `ring`                      | `#6a7282` | `#6a7282` | Focus rings                 |
| `chart-1…5`                 | —         | —         | Data visualisation only     |

Also available: the `mist-*` scale (from the `shadcn/tailwind.css` import) —
used for neutral dark surfaces, e.g. `bg-mist-800`, `text-mist-400`.

Semantic variant mapping (from `agent.md`), for status colours:

| Variant   | Class            |
| :-------- | :--------------- |
| Primary   | `bg-primary`     |
| Secondary | `bg-secondary`   |
| Success   | `bg-green-600`   |
| Danger    | `bg-destructive` |
| Warning   | `bg-yellow-500`  |
| Info      | `bg-cyan-500`    |
| Dark      | `bg-slate-800`   |

---

## 8. Colour rules & known anti-patterns

**Do:**

- Surfaces: `bg-background` (page), `bg-card` (cards — by far the most used),
  `bg-muted` / `bg-accent` (subtle).
- Text: `text-foreground` (headings), `text-muted-foreground` (body),
  `text-primary` (accents/links).
- Borders: `border-border` (often `border-border/60` for a softer line).
- Opacity modifiers are encouraged: `bg-primary/10`, `border-border/60`.

**Do not** (these exist in older blocks — do not copy them):

- ❌ Hardcoded `#4680ff` — that **is** `--primary`. Use `bg-primary` /
  `text-primary`. (~83 occurrences in legacy blocks.)
- ❌ Raw neutral scales for **theme surfaces**: `bg-slate-100 dark:bg-slate-800`,
  `text-slate-800 dark:text-slate-50`, `text-slate-600`. Use
  `bg-muted` / `text-foreground` / `text-muted-foreground` — they handle dark
  mode automatically.
  **Not a contradiction of the variant table above:** `agent.md` maps the
  _status variant_ "Dark" to `bg-slate-800` (a fixed colour swatch, alongside
  success/warning/info). That applies to badge/button/alert-style variants, not
  to a section's background or body text. Theme surfaces → semantic tokens;
  status swatches → the variant table.
- ❌ Arbitrary hex shadows like `shadow-[0_0_40px_-8px_#4680ff38]`. Use
  `shadow-primary/20` style token opacity instead.

**Only legitimate hex use:** third-party brand colours (e.g. `#1877f2`
Facebook, `#0072b1` LinkedIn, `#ea4c89` Dribbble) in social/brand contexts.

---

## 9. Layout pattern

Standard section scaffold:

```tsx
<section className="py-24 sm:py-32">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">{/* content */}</div>
</section>
```

- Vertical rhythm: `py-24 sm:py-32` for full sections; `py-12.5` for tighter
  ones.
- Horizontal padding: `px-4 sm:px-6 lg:px-8` (or `px-4 sm:px-8`).
- Prefer flex/grid with `gap-*` over margins.
- Constrain prose width: `max-w-150` / `max-w-182` on descriptions.
- Centred headers: `flex flex-col items-center gap-4 text-center sm:gap-6`.

---

## 10. Typography

- Section heading: `text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-foreground`
- Hero heading: `text-4xl sm:text-6xl font-extrabold tracking-tight text-foreground`
- Body: `text-base leading-relaxed text-muted-foreground`
- Eyebrow/label: `text-sm font-medium` inside a `Badge`
- Remember base font is 14px, so `text-base` is small — headings scale up.

---

## 11. Responsive

- Mobile-first: unprefixed = mobile, then `sm:` `md:` `lg:` `xl:` `2xl:`.
- Grids: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`.
- Catalog preview viewports are desktop / tablet / mobile — check all three.
- Never let a block scroll horizontally; wide content gets `overflow-x-auto`.

**Trap: `grid-cols-12` + a large `gap` overflows mobile.** A 12-column grid has
11 gaps, so `grid-cols-12 gap-10` needs 11 × 40px = **440px of gap alone** —
wider than a 390px phone. Worse, a section with `overflow-hidden` will silently
_clip_ the text instead of showing a scrollbar, so it looks like a rendering
bug rather than an overflow. Scope the 12-col grid to large screens:

```tsx
// ✅ single column on mobile, 12-col only from lg
<div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-15">
  <div className="lg:col-span-5">…</div>
  <div className="lg:col-span-7">…</div>
</div>
```

Verify with: `document.documentElement.scrollWidth` should equal
`window.innerWidth` at 390px, and no element's `getBoundingClientRect().right`
should exceed the viewport.

---

## 12. Dark mode

If you use **only semantic tokens**, dark mode works with zero `dark:`
classes — that is the goal. Reach for an explicit `dark:` variant only when a
design genuinely differs beyond token swap (e.g. `dark:shadow-none` to drop a
light-mode glow).

---

## 13. Icons

Priority order:

1. `lucide-react` — preferred (`import { ArrowRight } from "lucide-react"`).
2. `@tabler/icons-react` — brand/social icons (`IconBrandGithub`).
3. `iconsax-reactjs` — only where a block already uses it.

Size with `size-4` / `size-4.5` / `size-5`. Decorative icons get
`aria-hidden="true"`.

---

## 14. Images

- Local assets live in `public/assets/images/block/` (204 available) and are
  referenced as `/assets/images/block/<file>.png`.
- Reuse existing avatars/screenshots (`avtar-1.png`, `profile-1.png`, …) rather
  than adding new files, unless the design needs something specific.
- Some legacy blocks use `https://cdn.uiable.com/...` — acceptable, but prefer
  local `/assets/images/block/*`.
- Always set a meaningful `alt`, or `alt="" aria-hidden="true"` if decorative.

---

## 15. Content data pattern

Repeating content goes in a `const` array **above** the component, so copy can
be swapped without touching markup:

```tsx
// constants
const testimonials = [
  {
    name: "…",
    position: "…",
    description: "…",
    avatar: "/assets/images/block/profile-1.png",
  },
]
```

- Name it for the content (`plans`, `features`, `testimonials`, `faqs`).
- Blocks take **no props** — they are standalone copy-paste units.
- Keys: prefer a stable field; `key={idx}` matches existing blocks and is
  acceptable for static lists.
- Copy should be realistic and niche-appropriate, never lorem ipsum.

---

## 16. Pro tagging

Free is the default. To mark a block pro, add `"pro": true` to its entry
in `src/components/uiable/blocks/registry.json` — that one line is the whole
mechanism. Public and pro items live in the **same** source tree and the
**same** registry.json; there is no separate pro folder.

Then build with **`npm run registry:build:pro`** — a pro block built
only with `registry:build` is excluded from the public output _and_ never lands
in `.pro-registry/`, so it will 404 for everyone.

Effects (already wired): the block is stripped from the public catalog payload,
served only to entitled users via `/api/pro/source/[name]`, shown with a
"Pro" badge + lock "Get code" button, and published to the auth-gated
`.pro-registry/r/{type}/` output instead of `public/r/`.

Deeper detail (split pipeline, auth model, consumer config):
`project-docs/REGISTRY.md`.

---

## 17. New category checklist

Only when the category does not already exist:

1. Create the folder `src/components/uiable/blocks/<category>/`.
2. Add `src/data/blocks/<category>.ts` exporting `<category>Info` (copy the
   shape of a sibling, e.g. `hero.ts`).
3. Register it in `src/data/blocks/index.ts`.
4. Add a nav entry with `breakpoints` in `src/components-grid.ts`.
5. Run `npm run registry:build` so counts/catalog pick it up.

---

## 18. Build & verify

```bash
# Free block  → splits by tier, shadcn build → public/r/, rebuilds catalog
npm run registry:build

# Pro block → splits by tier, shadcn build → .pro-registry/r/{type}/
npm run registry:build:pro

npm run lint
npm run type-check
npm run format
```

Each build command runs the split step itself, so running only the one you need
is safe. Neither creates registry entries (§3).

**Committing:** commit the source file _and_ the registry.json change. For free
items also commit the regenerated `public/r/*.json` and
`public/registry-index.json` — public build output is committed, not generated
at deploy time. Never commit `.pro-registry/` or `.registry-build/` (both
gitignored).

Then check in the browser:

- `/blocks/<category>` — preview card renders, viewport toggles work, code
  dialog shows source, copy buttons work.
- `/preview/<category>/<category>-<n>` — standalone render.
- Toggle dark mode.

---

## 19. Reference-design → UIAble translation

When building from an external reference (e.g. a Figma file that does **not**
use UIAble styling), the reference supplies **structure**, UIAble supplies
**style**.

**Take from the reference:** layout and composition, element order and
hierarchy, relative proportions, responsive intent, content/copy intent,
interaction affordances.

**Discard from the reference:** its colour palette, fonts, radii, shadows, and
exact pixel spacing.

**Translate:**

| Reference                   | Becomes                                                      |
| :-------------------------- | :----------------------------------------------------------- |
| Page background             | `bg-background`                                              |
| Card/panel surface          | `bg-card` (+ `border border-border/60`)                      |
| Heading text                | `text-foreground`                                            |
| Body/secondary text         | `text-muted-foreground`                                      |
| Brand / CTA / accent colour | `primary` (`bg-primary`, `text-primary`)                     |
| Divider / outline           | `border-border`                                              |
| Any font                    | `font-sans` (Inter var)                                      |
| Arbitrary spacing           | nearest multiple of 4px on the Tailwind scale                |
| Arbitrary radius            | `rounded-lg` / `rounded-xl` / `rounded-2xl` / `rounded-full` |
| Custom icons                | nearest `lucide-react` equivalent                            |
| Photos/avatars              | existing `/assets/images/block/*`                            |

**Snap-to-nearest is the rule** — if a reference value has no token, round to
the closest existing token rather than inventing one. Flag it only if the
difference is large enough to change the design's intent.

---

## 20. Definition of done

- [ ] File at the correct path, correctly named, single default export.
- [ ] Only semantic tokens — no raw hex (except third-party brand colours), no
      `slate-*` theme surfaces.
- [ ] Works in light **and** dark; no horizontal scroll at any breakpoint.
- [ ] Reuses `@/components/ui/*` primitives; `components/ui/**` untouched.
- [ ] Repeating content in a `const` array; no props.
- [ ] Entry added to `blocks/registry.json`; `"pro": true` set if gated.
- [ ] Correct build run — `registry:build` (free) or `registry:build:pro`
      (pro).
- [ ] `lint`, `type-check`, `format` all clean.
- [ ] Verified in the catalog preview and in dark mode.
