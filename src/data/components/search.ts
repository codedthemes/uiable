// types
import { CategoryInfo } from "../blocks/types";

export const searchInfo: CategoryInfo = {
  title: "Search",
  description: [
    "Shadcn Search component allows users to find related content by inputting text in a stylized bar.",
    "Built with local code, it handles layout, accessibility, and state out of the box.",
    "Used in headers, sidebars, and DASHBOARDS for site discovery without overwhelming the UI."
  ],
  whatIsHeading: "What is Shadcn Search?",
  whatIsDescription: [
    "Search is a versatile element for complex site navigation and action flows (e.g., text, items, and results). Shadcn Search composes with native HTML elements using Tailwind and Lucide for layout, padding, and state.",
    "Search bars can have inputs, icons, and interactive elements. Each search bar is a self-contained unit that helps organize your site discovery."
  ],
  whyUseHeading: "Why Use Shadcn Search?",
  whyUseDescription: [
    "Search provides a structured way to present content without overwhelming users. They help with hierarchy, context, and scanning through choices.",
    "Accessibility and consistency are built-in. By using search, your application stays visually uniform while being accessible by default."
  ],
  featuresHeading: "Key Features of Shadcn Search",
  features: [
    "Search Support. Integrated search field for filtering site section lists.",
    "Size Variants. Full control over padding, shadows, and state using Tailwind.",
    "Responsive Design. Search bars work perfectly across all screen sizes and device types.",
    "Interactive States. Combine with hover effects or interactive elements like buttons.",
    "Flexible Layout. Search bars can be used in headers or as standalone blocks."
  ],
  integrationHeading: "Works Well With Other Components",
  integrationDescription: [
    "Use <b>Shadcn Search</b> inside <b>Shadcn Sidebar</b> or <b>Shadcn Header</b> for organized site navigation. Combine with <b>Shadcn Command</b> for powerful site discovery interfaces.",
    "Place <b>Shadcn Input</b> or <b>Shadcn Button</b> around a search bar for integrated search and selection flows."
  ],
  faqs: [
    {
      question: "Are search bars interactive?",
      answer:
        "Search bars themselves are interactive points for site section display and selection."
    },
    {
      question: "Can I customize the filter behavior on a search bar?",
      answer:
        "Yes! Use the filter prop or custom logic to create the perfect search and match for your site sections."
    },
    {
      question: "What's the best use case for a search bar shortcut?",
      answer:
        "Use search bar shortcuts (kbd strings) to provide quick keyboard-based access to common discovery actions."
    }
  ]
};
