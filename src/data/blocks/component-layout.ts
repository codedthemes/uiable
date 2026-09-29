// types
import { CategoryInfo } from "./types"

export const componentLayoutInfo: CategoryInfo = {
  title: "Component Layout",
  description: [
    "Shadcn Component Layout blocks provide the shell for a component showcase page — sidebar navigation, a preview pane, and a code panel.",
    "They're built for documenting design systems or component libraries of your own.",
    "Our Component Layout blocks are responsive, accessible, and easily customizable with Tailwind CSS.",
  ],
  whatIsHeading: "What is a Shadcn Component Layout?",
  whatIsDescription: [
    "A component layout is the structural shell for a component reference page: a sidebar of categories, a live preview area, and a source code panel.",
    "It's the same pattern used to browse and preview components on this site, packaged as a reusable block.",
  ],
  whyUseHeading: "Why Use Shadcn Component Layout Blocks?",
  whyUseDescription: [
    "Faster Docs Sites. Skip building a component catalog shell from scratch for your own design system.",
    "Familiar Navigation. Sidebar-plus-preview is a pattern developers already recognize from libraries like this one.",
    "Zero Setup Hassle. Pre-built with Tailwind CSS and Shadcn UI primitives, ready to drop into any Next.js application.",
  ],
  featuresHeading: "Key Features of Component Layout Blocks",
  features: [
    "Category Sidebar. Grouped navigation for browsing components by type.",
    "Live Preview Pane. A dedicated area to render the selected component.",
    "Code Panel Slot. Room for a syntax-highlighted source view alongside the preview.",
    "Full Dark Mode. Automatic adaptation across light and dark theme modes.",
  ],
  integrationHeading: "Works Well With Other Sections",
  integrationDescription: [
    "Pair a <b>Component Layout Block</b> with your own component grid to build an internal design-system site.",
    "Combine with a <b>Navbar</b> and <b>Footer</b> for a complete standalone docs experience.",
  ],
  faqs: [
    {
      question: "Can I use this layout for my own component library?",
      answer:
        "Yes. Swap the sidebar data and preview content for your own components — the shell is fully generic.",
    },
    {
      question: "Does the code panel highlight syntax automatically?",
      answer:
        "The panel is a plain container; pair it with a syntax highlighter of your choice, such as Shiki, to render code.",
    },
  ],
}
