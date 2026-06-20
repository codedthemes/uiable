# Contributing to UIAble

Thank you for your interest in contributing to UIAble! We appreciate your support and look forward to your contributions. This guide will help you understand the directory structure and provide detailed instructions on how to add a new component to UIAble.

Read the [example PR](https://github.com/codedthemes/uiable/pull/1) to learn which files you need to add. **You only need to change 2 files to add a new component or effect** and it only takes around 10 minutes of work!

Once done, open a pull request from your forked repo to the main repo [here](https://github.com/codedthemes/uiable/compare).

## Getting Started

### Fork and Clone the Repository

1. **Fork this repository**  
   Click [here](https://github.com/codedthemes/uiable/fork) to fork the repository.

2. **Clone your forked repository to your local machine**

   ```bash
   git clone https://github.com/<YOUR_USERNAME>/uiable.git
   ```

3. **Navigate to the project directory**

   ```bash
   cd uiable
   ```

4. **Create a new branch for your changes**

   ```bash
   git checkout -b my-new-branch
   ```

5. **Install dependencies**

   ```bash
   npm install
   ```

6. **Create a `.env.local` file**

   ```bash
   touch .env.local && echo "NEXT_PUBLIC_APP_URL=http://localhost:3000" > .env.local
   ```

7. **Run the project**
   ```bash
   npm run dev
   ```

## 🏗 UIAble Architectural Rules

Before adding or modifying components, please adhere to these core rules to maintain our design system:

- **Protect Core Primitives**: Never modify files directly inside the `src/components/ui/` directory. These are standard shadcn/ui primitives.
- **Inline Styling**: All UIAble specific designs must be implemented using pure inline Tailwind CSS classes. Do not use shared variables or wrapper elements for styling.
- **Standalone Variants**: If you are adding a new design variant for a component (e.g., a specific color or style), create it in its own standalone separate file.

## Adding a New Component

To add a new component to UIAble, you will need to modify several files. Follow these steps:

### 1. Create Component

Create the main component in `src/components/uiable/[category]/example-component.tsx`

```tsx
import React from 'react'

export default function ExampleComponent() {
  return (
    <div className="rounded-lg shadow-sm">
      This is your component.
    </div>
  )
}
```

### 2. Update Registry

Add your component to the main UIAble registry in `src/components/uiable/registry.json`:

```json
{
  "name": "example-component",
  "type": "registry:ui",
  "title": "Example Component",
  "description": "A versatile component that can be used to display various types of content.",
  "registryDependencies": ["button"],
  "files": [
    {
      "path": "[category]/example-component.tsx",
      "type": "registry:component",
      "target": "@components/uiable/[category]/example-component.tsx"
    }
  ],
  "categories": ["category"]
}
```

Make sure to add any necessary dependencies, Tailwind configurations, or other properties as needed for your specific component.

### 3. Build registry

Update the catalog to compile your newly registered component:

```bash
npm run registry:build
```

### 4. Code Quality & Formatting

Before committing your changes, ensure your code matches the existing style and doesn't introduce errors:

```bash
npm run lint
npm run format
npm run type-check
```

### 5. Commit Guidelines

We recommend you correct format of commit messages. This helps keep our git history clean:

- `feat:` for new features or components
- `fix:` for bug fixes
- `docs:` for documentation changes
- `style:` for formatting, missing semi colons, etc.

Example: `git commit -m "feat: add uiable-badge-solid-primary component"`

## Ask for Help

For any help or questions, please open a new GitHub issue.
