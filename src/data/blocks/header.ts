// types
import { CategoryInfo } from "./types"

export const headerInfo: CategoryInfo = {
  title: "Header",
  description: [
    "Shadcn Header component allows users to access site navigation and related links in a premium, sticky or animated bar.",
    "Built with local code, it handles layout, accessibility, and state out of the box.",
    "Used in headers and DASHBOARDS for site discovery without overwhelming the UI.",
  ],
  whatIsHeading: "What is a Shadcn Header?",
  whatIsDescription: [
    "A header is a versatile element for complex site navigation and link flows (e.g., paths, groups, and search). Shadcn Header composes with native HTML elements using Tailwind and Lucide for layout, padding, and state.",
    "Headers can have logos, menus, buttons, and interactive elements. Each header is a self-contained unit that helps organize your site sections.",
  ],
  whyUseHeading: "Why Use Shadcn Header?",
  whyUseDescription: [
    "Headers provide a structured way to present site sections without overwhelming users. They help with hierarchy, context, and scanning through choices.",
    "Accessibility and consistency are built-in. By using headers, your application stays visually uniform while being accessible by default.",
  ],
  featuresHeading: "Key Features of Shadcn Header",
  features: [
    "Search Support. Integrated search field for filtering site section lists.",
    "Size Variants. Full control over padding, shadows, and state using Tailwind.",
    "Responsive Design. Headers work perfectly across all screen sizes and device types.",
    "Interactive States. Combine with hover effects or interactive elements like buttons.",
    "Flexible Layout. Headers can be used in DASHBOARDS, reports, or as standalone blocks.",
  ],
  integrationHeading: "Works Well With Other Components",
  integrationDescription: [
    "Use <b>Shadcn Header</b> inside <b>Shadcn Navbar</b> or <b>Shadcn Header</b> for organized site navigation. Combine with <b>Shadcn Sidebar</b> for powerful site discovery interfaces.",
    "Place <b>Shadcn Input</b> or <b>Shadcn Button</b> around a header for integrated search and selection flows.",
  ],
  faqs: [
    {
      question: "Are headers interactive?",
      answer:
        "Headers themselves are interactive points for site section display and selection.",
    },
    {
      question: "Can I customize the filter behavior on a header?",
      answer:
        "Yes! Use the filter prop or custom logic to create the perfect search and match for your site sections.",
    },
    {
      question: "What's the best use case for a header trigger?",
      answer:
        "Use header triggers (e.g., hamburger icons) to provide a better user experience by visually signifying the interactive area for opening and closing the header.",
    },
  ],
}
