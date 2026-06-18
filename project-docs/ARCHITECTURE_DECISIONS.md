# Architecture Decisions and Rationale

This document captures key architectural and design decisions made for the `uiable-internal` repository, along with the reasoning behind each decision. It also serves as a living record for all future decisions, with a changelog to track updates over time.

---

## How to Use This Document

- **Add new decisions**: For every significant architectural, design, or process decision, add a new entry below and update the changelog table.
- **Changelog**: Each change or addition should be logged in the changelog table with the date, a brief summary, and the author (or team).
- **Keep up to date**: This document should be updated as soon as a decision is made, to ensure the team has a single source of truth.

---

## Changelog

| Date       | Summary                               | Author |
| ---------- | ------------------------------------- | ------ |
| 2026-04-15 | Initial decisions and rationale added | Team   |

<!-- Add new rows above this line for each new decision/change -->

---

## 1. Use Ablepro Primary Color (Rest via Tailwind)

**Decision:**

- The primary color from Ablepro is used as the main brand color.
- All other colors and styling are handled using Tailwind CSS utility classes.

**Reason:**

- Maintains a consistent brand identity while leveraging Tailwind's flexibility for the rest of the UI.

---

## 2. Global Level style & Typography changes in `ui` Directory

**Decision:**

- Only global-level component style or typography changes are placed in the `components/ui/` directory.
- All other changes are made inline within the relevant `uiable` directory/component.

**Reason:**

- Keeps global styles centralized and avoids unnecessary overrides.
- Encourages component encapsulation and reduces global CSS bloat. We will be adding many customized components and they all cannot use global style, so we will do that inline. This will allow other developers to adopt component design quickly with lesser depedency.

---

## 3. `globals.css` Variables

**Decision:**

- Remove extra CSS variables from `globals.css`.
- Keep only the Shadcn palette variables.

**Reason:**

- Reduces unused CSS and potential conflicts.
- Focuses on a single, modern palette for consistency. Any other colors will be used from tailwind for global acceptance. We don't want to provide our own variables system that put extra efforts to developers

---

## 4. Registry Dependency

**Decision:**

- Maintain a clear and minimal set of dependencies in the registry.

**Reason:**

- Reduces bundle size and complexity.
- Makes dependency management easier and more transparent.

---

---

_Last updated: April 15, 2026_
