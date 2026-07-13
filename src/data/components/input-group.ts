// projects imports
import branding from "@/branding.json"

// types
import { CategoryInfo } from "./types"

export const inputGroupInfo: CategoryInfo = {
  title: "Input Group",
  description: [
    "Browse the Tailwind CSS Input Group to unify inputs, buttons, and addons into a single aligned layout that improves form clarity and UX, powered by Tailwind CSS and Base UI.",
    "Use the code to get started.",
  ],
  whatIsHeading: `What is ${branding.brandName} Input Group?`,
  whatIsDescription: [
    `${branding.brandName} Input Group is a layout utility that composes inputs, prefixes, suffixes, and buttons into a single structured group using Base UI patterns for consistent alignment and predictable behavior.`,
    "It improves form structure by removing broken layouts and ensuring all grouped controls stay properly aligned and visually connected.",
    "It abstracts away common styling issues like shared borders and outer-only corner rounding so there’s no need to manage those edge cases manually.",
    "One can freely extend, modify the DOM structure and add custom logic without framework constraints as code lives inside the project.",
  ],
  variantsHeading: "Popular Input Group Variants",
  variants: [
    "Default: Standard input paired with a submit button",
    "With Prefix/Suffix: Input tightly coupled with text add-ons (e.g., currency symbol or email domain)",
    "Seamless: Visually unified elements where borders blend seamlessly into one another",
    "Icon Integrated: Inputs with purely decorative icons embedded inside the group",
    "Ghost: Minimalist group with no borders until hovered or focused",
  ],
  whyUseHeading: `Why ${branding.brandName} Input Group?`,
  whyUseDescription: [
    `${branding.brandName} Input Group removes the hard CSS work involved in grouping form fields, like handling shared borders and keeping only outer corners rounded in a clean way.`,
    "Since the implementation lives directly inside your project, there’s no dependency lock-in. You can fully control the structure and easily add custom behavior like active states or change flex layouts when needed.",
    "It works well with Tailwind CSS and class-variance-authority, so different sizes like sm, md, and lg stay consistent without writing complex conditional class logic.",
  ],
  featuresHeading: `Features of ${branding.brandName} Input Group`,
  features: [
    "Anatomical Base UI Roots: Built on Base UI primitives for industry-standard accessibility.",
    "Zero Dependency Lock-in: Direct source access allows for deep structural customization.",
    "Smart Edge Management: Automatically handles first and last child border radii while collapsing internal borders cleanly using Tailwind utilities.",
    "Accessible Focus Sharing: Ensures that clicking anywhere in the group correctly focuses the primary input field.",
    "Type-Safe Composition: Powered by TypeScript and CVA to seamlessly distribute size and variant properties.",
  ],
  integrationHeading: "Integration and Compatibility",
  integrationDescription: [
    `${branding.brandName} Input Group is built for composable form systems where inputs, selects, and buttons can be grouped together in a clean and predictable structure using Base UI patterns.`,
    "You can plug it into real-world form layouts like:",
  ],
  integrationList: [
    "E-commerce pricing and discount input sections",
    "Newsletter signup bars with action buttons",
    "Search inputs with category or filter dropdowns",
    "Social profile or URL input builders",
  ],
  integrationNote:
    "It also stays fully aligned with design system. It is styled with Tailwind CSS so any updates to colors, spacing or border radius in your Tailwind config automatically reflect across the Input Group without extra CSS changes.",
  faqs: [],
}
