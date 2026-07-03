// projects imports
import branding from "@/branding.json";

// types
import { CategoryInfo } from "./types";

export const scrollAreaInfo: CategoryInfo = {
  title: "Scroll Area",
  description: [
    "Improve content navigation with an accessible Scroll Area built on Tailwind CSS and Base UI, offering smooth native OS style scrolling so you can browse and copy the code to get started."
  ],
  whatIsHeading: `What is ${branding.brandName} Scroll Area?`,
  whatIsDescription: [
    `The native browser scrollbar is often an afterthought, resulting in bulky, inconsistent UI across different operating systems. ${branding.brandName} Scroll Area bridges this gap.`,
    "Built on top of shadcn/ui primitives and Base UI principles, it delivers premium, cross-browser overlay scrollbars that look flawless on Mac, Windows, and Linux alike.",
    "Unlike traditional UI libraries, this is not an npm package. You get the actual source code directly in your project so it means you own the component.",
    "One can customize the DOM structure, tweak the animations and style the scroll thumb exactly how your design demands."
  ],
  variantsHeading: "Popular Scroll Area Variants",
  variants: [
    "Vertical Only: Standard scrollbar for tall content blocks (e.g., sidebars, long articles)",
    "Horizontal Only: Scrollbar specifically for wide content (e.g., overflowing data tables, image carousels)"
  ],
  whyUseHeading: `Why ${branding.brandName} Scroll Area?`,
  whyUseDescription: [
    "A custom scroll area can dramatically improve the feel of dashboards, side panels, and long content sections, but native browser scrollbars often break design consistency.",
    `${branding.brandName} Scroll Area standardizes that experience, giving you elegant scroll behavior across platforms.`,
    "The component is copied directly into your project, which means you are not limited by package defaults. You can edit the structure, change the thumb size, or refine animations however you like.",
    "Because it uses Tailwind CSS, all style changes such as colors, border radius, and dark mode are inherited automatically from your global configuration."
  ],
  featuresHeading: `Features of ${branding.brandName} Scroll Area`,
  features: [
    "Cross-browser Consistency: Guarantees your application looks identical on macOS, Windows, iOS, and Android.",
    "Anatomical Base UI Roots: Ensures scroll events are still natively accessible via keyboard and screen readers.",
    "Zero Dependency Lock-in: Direct source access allows for deep visual customization of the track and thumb.",
    "RTL Support: Flawlessly handles Right-to-Left languages, automatically placing the scrollbar on the correct side."
  ],
  integrationHeading: "Integration and Compatibility",
  integrationDescription: [
    `${branding.brandName} Scroll Area is essential for creating desktop-class web applications where space is at a premium.`,
    "You can effortlessly integrate it into advanced layouts such as:"
  ],
  integrationList: [
    "Long Terms & Conditions or EULA Agreements",
    "Application Sidebar Navigation",
    "Combobox and Select Dropdown Menus",
    "Overflowing Code Blocks or Data Tables"
  ],
  integrationNote:
    "Since it uses your Tailwind CSS theme, the scrollbar thumb automatically adapts to any changes in muted colors, rounded edges, or shared styling variables.",
  faqs: []
};
