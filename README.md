<div align="center">
  <h1>UIAble</h1>
  <p><strong>A modern UI component library built with Tailwind CSS and Shadcn architecture.</strong></p>
  <p>
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
</div>

UIAble is an open-source collection of reusable UI components designed for developers who want clean, practical, and fully customizable building blocks for modern frontend projects, without lock-in, without unnecessary abstraction, and without rebuilding the same UI patterns from scratch every time.

![UIAble Banner](public/assets/images/banner/free-version-banner.gif)

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

<style>
.component-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 8px 0 20px;
}
.component-grid a {
  display: inline-block;
  width: 120px;
  padding: 5px 10px;
  border: 1px solid #d0d7de;
  border-radius: 6px;
  font-size: 12px;
  font-family: monospace;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: none;
  color: inherit;
  box-sizing: border-box;
}
.component-grid a:hover {
  background: #f6f8fa;
  border-color: #0969da;
}
</style>

### Form Controls

<div class="component-grid">
  <a href="/components/button" title="Button">Button</a>
  <a href="/components/button-group" title="Button Group">Button Group</a>
  <a href="/components/checkbox" title="Checkbox">Checkbox</a>
  <a href="/components/combobox" title="Combobox">Combobox</a>
  <a href="/components/command" title="Command Palette">Command Palette</a>
  <a href="/components/date-picker" title="Date Picker">Date Picker</a>
  <a href="/components/input" title="Input">Input</a>
  <a href="/components/input-group" title="Input Group">Input Group</a>
  <a href="/components/input-otp" title="Input OTP">Input OTP</a>
  <a href="/components/native-select" title="Native Select">Native Select</a>
  <a href="/components/radio" title="Radio">Radio</a>
  <a href="/components/radio-group" title="Radio Group">Radio Group</a>
  <a href="/components/select" title="Select">Select</a>
  <a href="/components/slider" title="Slider">Slider</a>
  <a href="/components/switch" title="Switch">Switch</a>
  <a href="/components/textarea" title="Textarea">Textarea</a>
  <a href="/components/toggle" title="Toggle">Toggle</a>
  <a href="/components/toggle-group" title="Toggle Group">Toggle Group</a>
</div>

### Data Display

<div class="component-grid">
  <a href="/components/avatar" title="Avatar">Avatar</a>
  <a href="/components/badge" title="Badge">Badge</a>
  <a href="/components/card" title="Card">Card</a>
  <a href="/components/carousel" title="Carousel">Carousel</a>
  <a href="/components/chart" title="Chart">Chart</a>
  <a href="/components/data-table" title="Data Table">Data Table</a>
  <a href="/components/empty" title="Empty State">Empty State</a>
  <a href="/components/hover-card" title="Hover Card">Hover Card</a>
  <a href="/components/kbd" title="KBD">KBD</a>
  <a href="/components/label" title="Label">Label</a>
  <a href="/components/list-group" title="List Group">List Group</a>
  <a href="/components/table" title="Table">Table</a>
  <a href="/components/tooltip" title="Tooltip">Tooltip</a>
  <a href="/components/skeleton" title="Skeleton">Skeleton</a>
  <a href="/components/calendar" title="Calendar">Calendar</a>
</div>

### Feedback & Overlays

<div class="component-grid">
  <a href="/components/alert" title="Alert">Alert</a>
  <a href="/components/alert-dialog" title="Alert Dialog">Alert Dialog</a>
  <a href="/components/dialog" title="Dialog">Dialog</a>
  <a href="/components/drawer" title="Drawer">Drawer</a>
  <a href="/components/progress" title="Progress">Progress</a>
  <a href="/components/sheet" title="Sheet">Sheet</a>
  <a href="/components/sonner" title="Sonner">Sonner</a>
  <a href="/components/spinner" title="Spinner">Spinner</a>
</div>

### Navigation

<div class="component-grid">
  <a href="/components/breadcrumb" title="Breadcrumb">Breadcrumb</a>
  <a href="/components/dropdown-menu" title="Dropdown Menu">Dropdown Menu</a>
  <a href="/components/menubar" title="Menubar">Menubar</a>
  <a href="/components/navbar" title="Navbar">Navbar</a>
  <a href="/components/navigation-menu" title="Navigation Menu">Navigation Menu</a>
  <a href="/components/pagination" title="Pagination">Pagination</a>
  <a href="/components/tabs" title="Tabs">Tabs</a>
  <a href="/components/sidebar" title="Sidebar">Sidebar</a>
</div>

### Layout & Interaction

<div class="component-grid">
  <a href="/components/accordion" title="Accordion">Accordion</a>
  <a href="/components/collapsible" title="Collapsible">Collapsible</a>
  <a href="/components/context-menu" title="Context Menu">Context Menu</a>
  <a href="/components/item" title="Item">Item</a>
  <a href="/components/popover" title="Popover">Popover</a>
</div>

### Other Components

<div class="component-grid">
  <a href="/components/aspect-ratio" title="Aspect Ratio">Aspect Ratio</a>
  <a href="/components/attachment" title="Attachment">Attachment</a>
  <a href="/components/bubble" title="Bubble">Bubble</a>
  <a href="/components/command" title="Command">Command</a>
  <a href="/components/empty" title="Empty">Empty</a>
  <a href="/components/field" title="Field">Field</a>
  <a href="/components/marker" title="Marker">Marker</a>
  <a href="/components/message" title="Message">Message</a>
  <a href="/components/message-scroller" title="Message Scroller">Message Scroller</a>
  <a href="/components/resizable" title="Resizable">Resizable</a>
  <a href="/components/scroll-area" title="Scroll Area">Scroll Area</a>
  <a href="/components/separator" title="Separator">Separator</a>
  <a href="/components/typography" title="Typography">Typography</a>
</div>

---

## Blocks

Pre-built page sections ready to drop into your project.

### Contact

<div class="component-grid">
  <a href="/blocks/contact" title="Contact 1">Contact 1</a>
</div>

### Content

<div class="component-grid">
  <a href="/blocks/content" title="Content 1">Content 1</a>
</div>

### CTA

<div class="component-grid">
  <a href="/blocks/cta" title="Call To Action 1">Call To Action 1</a>
  <a href="/blocks/cta" title="Call To Action 2">Call To Action 2</a>
</div>

### Faq

<div class="component-grid">
  <a href="/blocks/faq" title="FAQ 1">FAQ 1</a>
</div>

### Feature

<div class="component-grid">
  <a href="/blocks/feature" title="Feature 1">Feature 1</a>
  <a href="/blocks/feature" title="Feature 2">Feature 2</a>
</div>

### Footer

<div class="component-grid">
  <a href="/blocks/footer" title="Footer 1">Footer 1</a>
  <a href="/blocks/footer" title="Footer 2">Footer 2</a>
  <a href="/blocks/footer" title="Footer 3">Footer 3</a>
</div>

### Gallery

<div class="component-grid">
  <a href="/blocks/gallery" title="Gallery 1">Gallery 1</a>
  <a href="/blocks/gallery" title="Gallery 2">Gallery 2</a>
  <a href="/blocks/gallery" title="Gallery 3">Gallery 3</a>
  <a href="/blocks/gallery" title="Gallery 4">Gallery 4</a>
</div>

### Hero

<div class="component-grid">
  <a href="/blocks/hero" title="Hero 1">Hero 1</a>
  <a href="/blocks/hero" title="Hero 2">Hero 2</a>
</div>

### Portfolio

<div class="component-grid">
  <a href="/blocks/portfolio" title="Portfolio 1">Portfolio 1</a>
  <a href="/blocks/portfolio" title="Portfolio 2">Portfolio 2</a>
  <a href="/blocks/portfolio" title="Portfolio 3">Portfolio 3</a>
  <a href="/blocks/portfolio" title="Portfolio 4">Portfolio 4</a>
</div>

### Landing

<div class="component-grid">
  <a href="/blocks/landing" title="Landing Header">Landing Header</a>
  <a href="/blocks/landing" title="Hero">Hero</a>
  <a href="/blocks/landing" title="Component 1">Component 1</a>
  <a href="/blocks/landing" title="Component 2">Component 2</a>
  <a href="/blocks/landing" title="Feature">Feature</a>
  <a href="/blocks/landing" title="Contact">Contact</a>
  <a href="/blocks/landing" title="Footer">Footer</a>
</div>

### Portfolio

<div class="component-grid">
  <a href="/blocks/portfolio" title="Portfolio 1">Portfolio 1</a>
  <a href="/blocks/portfolio" title="Portfolio 2">Portfolio 2</a>
  <a href="/blocks/portfolio" title="Portfolio 3">Portfolio 3</a>
  <a href="/blocks/portfolio" title="Portfolio 4">Portfolio 4</a>
</div>

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
