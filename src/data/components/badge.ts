// projects imports
import branding from "@/branding.json";

// types
import { CategoryInfo } from "./types";

export const badgeInfo: CategoryInfo = {
  title: "Badge",
  description: [
    "Add clear labels, notifications, and status indicators with a flexible Badge component powered by Tailwind CSS. Explore the examples, copy the code, and enhance your UI with clean, reusable badges."
  ],
  whatIsHeading: `What is ${branding.brandName} Badge?`,
  whatIsDescription: [
    `${branding.brandName} Badge is a lightweight UI element that designed to highlight statuses, labels, categories tags, notifications and important counts with clarity. It is built entirely with Tailwind CSS, it delivers clean spacing, balanced alignment, and modern visual styles without requiring additional styling layers.`,
    `Rather than hiding functionality behind compiled package abstractions, ${branding.brandName} keeps the component open and developer-friendly. Every part of the markup is accessible within your codebase, making it easy to adapt badge sizes, variants, layouts, and interactions to match your own design system.`,
    "From rounded pill badges to compact notification indicators and colorful tag variants, the component handles styling consistency effortlessly while keeping your interface fast, scalable, and easy to maintain."
  ],
  variantsHeading: "Popular Badge Variants",
  variants: [
    "Default (Filled) . Solid background badge for primary categorization",
    "Secondary . Muted background badge for less critical metadata",
    "Outline . Border-only badge ideal for dense data tables",
    "Destructive . Red-tinted badge used to highlight errors or critical alerts",
    "Notification Dot . Tiny, textless badge absolute-positioned over icons (like a bell)"
  ],
  whyUseHeading: `Why ${branding.brandName} Badge?`,
  whyUseDescription: [
    `${branding.brandName} Badge provides immediate structural consistency across your application. While building a badge seems as simple as adding padding to a span, maintaining exact vertical alignment alongside text, icons, and buttons across different browsers is frustrating. ${branding.brandName} Badge standardizes this math.`,
    "Since the code lives completely inside your project, there is absolutely zero dependency lock-in. You have total control over the component architecture, making it trivial to add specific brand colors, inject leading icons, or create animated pulse effects for live data.",
    "It works smoothly with Tailwind CSS and CVA (class-variance-authority). This guarantees that your application's tags and labels automatically maintain a cohesive, type-safe design system without requiring messy conditional strings."
  ],
  featuresHeading: `Features of ${branding.brandName} Badge`,
  features: [
    "Pure CSS/HTML Execution. Zero JavaScript overhead ensures blazing fast render times.",
    "Zero Dependency Lock-in. Direct source access allows for deep visual customization without fighting library-specific CSS selectors.",
    "Perfect Text Alignment. Carefully calculated line-heights and padding ensure text is optically centered.",
    "Extremely Composable. Can easily wrap plain text, SVGs, or complex custom elements.",
    "Type-Safe Composition. Powered by TypeScript and CVA to seamlessly distribute color and style variant properties safely."
  ],
  integrationHeading: "Integration & Compatibility",
  integrationDescription: [
    `${branding.brandName} Badge is designed for highly composable UI architectures. It seamlessly acts as a visual enhancement for almost any other component.`,
    "You can effortlessly integrate it into advanced layouts such as:"
  ],
  integrationList: [
    "Unread Message Counters on Navigation Tabs",
    "Status Indicators in Data Tables (e.g., 'Pending', 'Shipped')",
    "Search Filter Tags and Facets",
    "Product Availability Labels in E-commerce"
  ],
  integrationNote:
    "It also fully respects your global design system. If you update your primary colors, border radius, or font families in your Tailwind configuration, the Badge will automatically inherit and reflect those changes instantly.",
  faqs: []
};
