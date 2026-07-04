<div align="center"> 
  <h1>UIAble</h1>
  <p>
    <strong>A modern UI component library built with Tailwind CSS and Shadcn architecture.</strong>
  </p>
</div>

<p align="center">
  <a href="https://react.dev"><img src="https://img.shields.io/badge/React-19%2B-007ec6?style=flat-square&logo=react&logoColor=61DAFB" alt="React"></a>
  <a href="https://nextjs.org"><img src="https://img.shields.io/badge/Next.js-16%2B-007ec6?style=flat-square&logo=next.js&logoColor=white" alt="Next.js"></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-4%2B-007ec6?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"></a>
  <a href="https://ui.shadcn.com/"><img src="https://img.shields.io/badge/shadcn%2Fui-4%2B-007ec6?style=flat-square&logo=shadcnui&logoColor=white" alt="shadcn/ui"></a>
  <a href="https://base-ui.com/"><img src="https://img.shields.io/badge/Base_UI-1%2B-007ec6?style=flat-square" alt="Base UI"></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-Ready-007ec6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript Ready"></a>
  <br />
  <a href="https://discord.com/invite/txPuEn5atw"><img src="https://img.shields.io/badge/Discord-5865F2?style=flat-square&logo=discord&logoColor=white" alt="Discord"></a>
  <a href="https://x.com/uiable"><img src="https://img.shields.io/badge/@uiable-black?style=flat-square&logo=x&logoColor=white" alt="X"></a>
</p>

UIAble is an open-source collection of reusable UI components designed for developers who want clean, practical, and fully customizable building blocks for modern frontend projects, without lock-in, without unnecessary abstraction, and without rebuilding the same UI patterns from scratch every time.

![Uiable Banner](public/assets/images/banner/free-version-banner.gif)

---

## Why UIAble?

Most UI libraries built on Shadcn end up looking and feeling nearly identical. Same structure. Same visual defaults. Same tradeoffs.

UIAble was built to be different, not by adding more features but by being more intentional about what a component library should actually do in a real project.

The common frustrations with existing libraries:

- Too opinionated about things that should be left to you
- Components that look great in demos but break under real product requirements
- Hard to customize after initial setup
- Dependency-heavy structures that become difficult to escape
- Logic hidden behind abstraction layers you can't inspect or modify

UIAble addresses all of these directly.

---

## What Makes It Different

### You get the actual code

No black-box packages. Components are copied directly into your codebase. You see them, you edit them, you own them.

### Built for real product UI

The focus is on components that handle real requirements, including form validation, edge case inputs, accessible dialogs, scalable tables, and proper keyboard navigation, rather than components optimized for screenshots.

### Tailwind-first, not Tailwind-locked

UIAble uses Tailwind CSS in a clean, sensible way. No class soup. No structural gymnastics. Just readable component code that happens to use Tailwind well.

### No lock-in

If you stop using UIAble tomorrow, your code still works. Because it's already yours.

### Open source from day one

The entire component library is transparent and open for contribution. No gated tiers. No "pro" version. Just components.

---

## Tech Stack

| Layer        | Technology                 |
| ------------ | -------------------------- |
| Styling      | Tailwind CSS v4            |
| Architecture | shadcn/ui                  |
| Primitives   | Base UI                    |
| Language     | TypeScript                 |
| Framework    | React (Next.js compatible) |

---

## Components

UIAble v1.0 ships with the following components:

### Form Controls

- `Button`
- `Button Group`
- `Checkbox`
- `Combobox`
- `Command Palette`
- `Date Picker`
- `Input`
- `Input Group`
- `Input OTP`
- `Native Select`
- `Radio`
- `Radio Group`
- `Select`
- `Slider`
- `Switch`
- `Textarea`
- `Toggle`
- `Toggle Group`

### Data Display

- `Avatar`
- `Badge`
- `Card`
- `Carousel`
- `Chart`
- `Data Table`
- `Empty State`
- `Hover Card`
- `KBD`
- `Label`
- `List Group`
- `Table`
- `Tooltip`
- `Skeleton`
- `Calendar`

### Feedback & Overlays

- `Alert`
- `Alert Dialog`
- `Dialog`
- `Drawer`
- `Progress`
- `Sheet`
- `Sonner`
- `Spinner`

### Navigation

- `Breadcrumb`
- `Dropdown Menu`
- `Menubar`
- `Navbar`
- `Navigation Menu`
- `Pagination`
- `Tabs`
- `Sidebar`

### Layout & Interaction

- `Accordion`
- `Collapsible`
- `Context Menu`
- `Item`
- `Popover`

> Components are added based on practical frontend needs, not trend-driven requests. If you need something that isn't here, open a discussion or a PR.

---

## Installation

Clone the repository from Github:

```bash
git clone https://github.com/codedthemes/uiable.git
```

Navigate into the directory and install dependencies:

```bash
cd uiable
npm install
```

Start the Next.js development server:

```bash
npm run dev
```

---

## License

MIT © [UIAble](https://uiable.com)

You can use, modify, and distribute UIAble freely in personal and commercial projects. No attribution required, though it's always appreciated.

See the full [LICENSE](https://github.com/codedthemes/uiable/blob/master/LICENSE) file for details.

---

## Acknowledgements

UIAble stands on the shoulders of great open-source work:

- [shadcn/ui](https://ui.shadcn.com) — for the copy-paste component model
- [Tailwind CSS](https://tailwindcss.com) — for the utility-first foundation
- [Base UI](https://base-ui.com) — for unstyled accessible primitives
- [Lucide](https://lucide.dev) — for the icon set

---

_UIAble is intentionally not trying to feel like a product. It's trying to feel like something you quietly copy into your project — and forget about, because it just works._
