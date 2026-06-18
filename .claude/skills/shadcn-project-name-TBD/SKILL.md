---
name: shadcn-project-name-TBD-specialist
description: Expert in migrating UIable Tailwind designs to Shadcn UI components for the shadcn-project-name-TBD project.
---

# Shadcn Project Specialist: UIable Migration

This skill provides the core instructions and architectural rules for working on the **shadcn-project-name-TBD** project, specifically focusing on the migration of **UIable** design elements into the **Shadcn UI** ecosystem.

## 🛠 Project Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 4.0
- **Library**: Shadcn UI (Radix UI Primitives)
- **Icons**: Lucide React
- **Language**: TypeScript

## 🏗 Core Architectural Rules (CRITICAL)

### 1. Protection of Core Library

- **NEVER** modify files in `components/ui/`. These are the standard Shadcn UI library components.
- Any design changes must be applied via the `className` prop in the usage location (demos, pages, or wrappers).

### 2. No Themed Wrappers

- Do **NOT** create custom "interface" wrappers like `ThemedButton` or `ThemedBadge`.
- The design system migration is purely "exploration via utility classes."

### 3. Atomic Inline Styling Requirement

- All UIable specific designs (rounded corners, specific padding, shadows) must be implemented using **pure inline Tailwind classes**.
- **No Shared Variables**: DO NOT use shared style variables, helper objects, or template literals (e.g., `const common = "..."`) to manage classes.
- **Direct Application**: Every component tag must contain its own full string of utility classes.

### 4. Variant-wise Standalone Separation

- Each specific color and style variant (e.g., `BadgeSolidPrimary`, `ButtonOutlineDanger`) MUST be created in its own **standalone separate file**.
- **No Grouped Files**: DO NOT create or maintain master `[category]-demo.tsx` or `[category]-colors.tsx` files.
- **File Naming**: Use the format `[category]-[style]-[color].tsx` (lowercase, kabab-case).
- **Registry Integration**: Every new variant file MUST be added as an individual item in `registry.json`.

## 🎨 Color Mapping Rules

All color variants must follow this strict mapping:

| Variant       | Mapping Rule          | Example Class    |
| :------------ | :-------------------- | :--------------- |
| **Primary**   | Shadcn `primary`      | `bg-primary`     |
| **Secondary** | Shadcn `secondary`    | `bg-secondary`   |
| **Success**   | Tailwind `green-600`  | `bg-green-600`   |
| **Danger**    | Shadcn `destructive`  | `bg-destructive` |
| **Warning**   | Tailwind `yellow-500` | `bg-yellow-500`  |
| **Info**      | Tailwind `cyan-500`   | `bg-cyan-500`    |
| **Dark**      | Tailwind `slate-800`  | `bg-slate-800`   |

### Contrast & Background Rules:

- **Solid Variants**: MUST use `text-white` for all color variants (Success, Danger, Warning, Info, Dark) to ensure high contrast.
- **Light Variants**: Use `10-15%` background opacity with colorized text (e.g., `bg-green-600/10 text-green-700`).
- **Outline Variants**: MUST explicitly include `bg-transparent` to override any default component backgrounds.

## 📝 Workflow for New Components

1. **Source Discovery**: Search `able-pro-tailwind` for the component markup (if source project is available).
2. **UI Dependency Check**: Check if the required Shadcn UI primitive exists in `components/ui/`.
3. **Themed Implementation**:
   - Create the directory under `components/uiable/[category]/`.
   - Create individual files for each variant using naming convention `[category]-[style]-[color].tsx`.
   - Apply designs using ONLY inline Tailwind classes.
4. **Registry Registration**: Update `registry.json` with the new component path and its specific dependencies.
5. **Fast Refresh Check**: Ensure the component renders correctly and follows the premium aesthetic.

## 📁 Key Directories

- `components/ui/`: Protected Shadcn core primitives.
- `components/uiable/[category]/`: Your primary work area for themed variants.
- `registry.json`: Registry for all custom and imported components.
