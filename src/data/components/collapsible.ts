// projects imports
import branding from "@/branding.json";

// types
import { CategoryInfo } from "./types";

export const collapsibleInfo: CategoryInfo = {
  title: "Collapsible",
  description: [
    "Browse collapsible component examples, copy the code, and create clean expandable sections with a lightweight component built on Tailwind CSS and Base UI."
  ],
  whatIsHeading: `What is ${branding.brandName} Collapsible?`,
  whatIsDescription: [
    `${branding.brandName} Collapsible is a simple and flexible component for showing or hiding content when needed. It works well for FAQs, “Read More” sections, filters, side menus, and other layouts where keeping the interface clean matters.`,
    "The component code stays directly inside the project, making it easy to customize layouts, change trigger styles or adjust interactions without depending on a rigid npm package.",
    "It is styled with Tailwind CSS. It handles smooth expand and collapse animations, spacing, and state changes cleanly without requiring extra custom JavaScript or complicated styling."
  ],
  variantsHeading: "Popular Collapsible Variants",
  variants: [
    "Default: A standard button that shows or hides a block of text below it",
    "Animated Height: Collapsible featuring smooth CSS transitions when revealing content",
    "Default Open: Collapsible configured to render its content visibly on initial page load",
    "Card Integrated: A collapsible section embedded specifically inside a Card footer",
    "Icon Trigger: Using a simple chevron (+) / (-) button as the sole trigger"
  ],
  whyUseHeading: `Why ${branding.brandName} Collapsible?`,
  whyUseDescription: [
    `While it is easy to conditionally render a <div> in React based on boolean state, doing so abruptly without animations feels cheap, and standardizing the accessibility is often forgotten. ${branding.brandName} Collapsible utilizes Base UI to handle this semantic accessibility perfectly out of the box.`,
    "Since the code lives completely inside your project, there is absolutely zero dependency lock-in. You have total control over the component architecture, making it trivial to tie the component to an external state manager, alter the transition animations, or use custom triggers.",
    "It works smoothly with Tailwind CSS. This guarantees that your expand/collapse interactions automatically maintain a cohesive design system across your entire application."
  ],
  featuresHeading: `Features of ${branding.brandName} Collapsible`,
  features: [
    "Simple State Management: Easily handles uncontrolled (internal state) or controlled (React state) workflows.",
    "Accessible Focus Trapping: Automatically manages aria-expanded attributes to keep screen readers informed.",
    "Smooth Transitions: Natively utilizes Base UI CSS variables for buttery-smooth height animations.",
    "Zero Dependency Lock-in: Direct source access allows for deep structural customization.",
    "Highly Composable: Accepts any React component as a trigger or content body."
  ],
  integrationHeading: "Integration & Compatibility",
  integrationDescription: [
    `${branding.brandName} Collapsible is a highly versatile micro-component used to declutter dense user interfaces.`,
    "You can effortlessly integrate it into advanced layouts such as:"
  ],
  integrationList: [
    '"Show More" / "Read More" Text Blocks',
    "Advanced Search Filter Options",
    "Sidebar Submenus and Nested Navigation",
    "Detailed Table Row Expansions"
  ],
  integrationNote:
    "The component fits naturally into your existing Tailwind CSS setup. If you update spacing, colors, typography, or other design styles in your Tailwind configuration, the Collapsible component automatically stays visually consistent across your entire project.",
  faqs: []
};
