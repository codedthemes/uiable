// projects imports
import branding from "@/branding.json"

// types
import { CategoryInfo } from "./types"

export const breadcrumbInfo: CategoryInfo = {
  title: "Breadcrumb",
  description: [
    "Improve navigation flow with a clean and accessible Breadcrumb component built on Tailwind CSS. Explore the examples, copy the code, and help users stay oriented across every page.",
  ],
  whatIsHeading: `What is ${branding.brandName} Breadcrumb?`,
  whatIsDescription: [
    `${branding.brandName} Breadcrumb is a secondary navigation scheme that shows the user where they are within a website or application. It provides a better browsing experience by displaying the page hierarchy in a clear and organized manner.`,
    "Breadcrumb is built with Tailwind CSS and Base UI principles, making it accessible, lightweight and easy to use in any dashboard or website layout. Whether you have simple navigation or multiple nested pages, it keeps spacing, typography and alignment clean on all screen sizes.",
    `${branding.brandName} gives the actual source code directly inside the project instead of locking it inside a npm package. This thing makes it easy to customize separators, edit layouts and adjust the component however people want.`,
  ],
  variantsHeading: "Popular Breadcrumb Variants",
  variants: [
    "Default . Standard navigational trail utilizing subtle chevron separators (>)",
    "With Custom Separator . Breadcrumb utilizing forward slashes (/) or custom SVG icons",
    "Collapsed . Breadcrumb displaying an ellipsis (...) dropdown when the trail becomes too long",
    "With Dropdown . Breadcrumb item that triggers a dropdown menu to select sibling pages directly",
    "Background Pill . Stylized breadcrumb wrapped inside a slightly darker pill background",
  ],
  whyUseHeading: `Why ${branding.brandName} Breadcrumb?`,
  whyUseDescription: [
    `Standardizing the visual spacing, text truncation, and semantic HTML of deep navigation links is often overlooked. ${branding.brandName} Breadcrumb enforces strict semantic ARIA roles and handles current-page indicators automatically.`,
    "Since the code lives completely inside your project, there is absolutely zero dependency lock-in. You have total control over the component architecture, making it trivial to change the separator gap size, inject Next.js <Link> components, or add active state colors.",
    "It works smoothly with Tailwind CSS. This guarantees that your navigation trails automatically maintain a cohesive design system, gracefully adapting to mobile layouts by selectively hiding intermediate links if necessary.",
  ],
  featuresHeading: `Features of ${branding.brandName} Breadcrumb`,
  features: [
    "Semantic ARIA Accessibility. Natively structured to be perfectly interpreted by screen readers.",
    "Zero Dependency Lock-in. Direct source access allows for deep structural customization.",
    "Truncation Support. Easily handles excessively long file paths using collapsed ellipses.",
    "Pure CSS Spacing. Utilizes Tailwind's flexbox and gap utilities for mathematical perfection.",
    "Highly Composable. Easily accepts custom icons or Dropdown Menus within the navigation trail.",
  ],
  integrationHeading: "Integration & Compatibility",
  integrationDescription: [
    `${branding.brandName} Breadcrumb is an essential navigational tool for deeply nested application architectures.`,
    "You can effortlessly integrate it into advanced layouts such as:",
  ],
  integrationList: [
    "Application Settings Headers",
    "E-commerce Product Categories",
    "File Management Systems (Google Drive style)",
    "Deeply Nested Documentation Sites",
  ],
  integrationNote:
    "It also fully respects your global design system. If you update your muted text colors, hover states, or typography sizing in your Tailwind configuration, the Breadcrumb will automatically inherit and reflect those changes instantly.",
  faqs: [],
}
