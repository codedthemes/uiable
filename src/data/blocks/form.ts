// types
import { CategoryInfo } from "./types"

export const formInfo: CategoryInfo = {
  title: "Form",
  description: [
    "Shadcn Form component allows users to input multi-line content or related actions in a structured, accessible layout.",
    "Built with React Hook Form, it handles validation, accessibility, and state out of the box.",
    "Used in sidebars, DASHBOARDS, and list-group for user input without overwhelming the UI.",
  ],
  whatIsHeading: "What is a Shadcn Form?",
  whatIsDescription: [
    "A form is a versatile element for complex data displays and action flows (e.g., text, items, and search). Shadcn Form composes with native HTML elements using Tailwind and Lucide for layout, padding, and state.",
    "Forms can have items, labels, descriptions, and error messages. Each form is a self-contained unit that helps organize your inputs.",
  ],
  whyUseHeading: "Why Use Shadcn Form?",
  whyUseDescription: [
    "Forms provide a structured way to present content without overwhelming users. They help with hierarchy, context, and scanning through choices.",
    "Accessibility and consistency are built-in. By using forms, your application stays visually uniform while being accessible by default.",
  ],
  featuresHeading: "Key Features of Shadcn Form",
  features: [
    "Search Support. Integrated search field for filtering long item-based lists.",
    "Size Variants. Full control over padding, shadows, and state using Tailwind.",
    "Responsive Design. Forms work perfectly across all screen sizes and device types.",
    "Interactive States. Combine with hover effects or interactive elements like buttons.",
    "Flexible Layout. Forms can be used in sidebars, headers, or as standalone blocks.",
  ],
  integrationHeading: "Works Well With Other Components",
  integrationDescription: [
    "Use <b>Shadcn Form</b> inside <b>Shadcn Sidebar</b> or <b>Shadcn Card</b> for organized content sections. Combine with <b>Shadcn Input</b> for powerful site navigation interfaces.",
    "Place <b>Shadcn Input</b> or <b>Shadcn Button</b> around a form for integrated search and selection flows.",
  ],
  faqs: [
    {
      question: "Are forms interactive?",
      answer:
        "Forms themselves are interactive points for content display and selection.",
    },
    {
      question: "Can I customize the filter behavior on a form?",
      answer:
        "Yes! Use the filter prop or custom logic to create the perfect search and match for your items.",
    },
    {
      question: "What's the best use case for a form shortcut?",
      answer:
        "Use form shortcuts (kbd strings) to provide quick keyboard-based access to common content sections.",
    },
  ],
}
