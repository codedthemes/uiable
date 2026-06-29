// projects imports
import branding from "@/branding.json"

// types
import { CategoryInfo } from "./types"

export const separatorInfo: CategoryInfo = {
  title: "Separator",
  description: [
    "Keep interfaces visually structured with an accessible Separator built on Tailwind CSS and Base UI, making hierarchy easy to manage so you can browse and copy the code to get started.",
  ],
  whatIsHeading: `What is ${branding.brandName} Separator?`,
  whatIsDescription: [
    `${branding.brandName} Separator is a simple, highly accessible visual dividing line used to separate content or groups of related elements. Built on Base UI principles, it acts as a much more flexible and semantic alternative to the native HTML <hr> tag.`,
    "The implementation is part of the project itself, enabling full customization of markup, spacing rules, and layout behavior without external constraints.",
    "It is styled entirely using Tailwind CSS, taking the frustration out of styling vertical lines within flexbox layouts or handling margins mathematically.",
  ],
  variantsHeading: "Popular Separator Variants",
  variants: [
    "Horizontal (Default) . A standard 1px tall line spanning the full width of its container",
    "Vertical . A 1px wide line spanning the full height of its container, perfect for separating inline items",
  ],
  whyUseHeading: `Why ${branding.brandName} Separator?`,
  whyUseDescription: [
    'Native <hr> tags are notoriously difficult to style vertically and can cause massive screen reader fatigue if used purely for visual decoration (as the reader will announce "separator` every time). ${branding.brandName} Separator utilizes Base UI to allow you to configure whether the line is semantic (role=`separator") or purely decorative (role="none").',
    "No external dependency constraints exist since the code is part of the project itself. This allows complete freedom to modify the component structure, from adjusting thickness and color values to applying gradient transitions on the edges.",
    "Tailwind CSS integration ensures visual consistency, so all divider elements remain aligned with the established design language.",
  ],
  featuresHeading: `Features of ${branding.brandName} Separator`,
  features: [
    "Accessible Semantics: Easily toggle between semantic meaning and visual decoration for screen readers.",
    "Vertical & Horizontal Support: Seamlessly adapts its width and height based on the provided orientation prop.",
    "Flexbox Friendly: Designed to behave perfectly inside complex CSS flex or grid containers without collapsing.",
    "Zero Dependency Lock-in: Direct source access allows for deep visual customization.",
    "Anatomical Base UI Roots: Built on Base UI primitives for industry-standard compliance.",
  ],
  integrationHeading: "Integration and Compatibility",
  integrationDescription: [
    `${branding.brandName} Separator is designed to bring order to dense interfaces by creating subtle visual boundaries between related UI elements. It helps improve readability without introducing heavy visual elements.`,
    "You can effortlessly integrate it into advanced layouts such as:",
  ],
  integrationList: [
    "Dropdown Menu Item Dividers",
    "Application Header Sections (e.g., separating Search from Profile icons)",
    "Article Section Breaks",
    'Login Form "OR" Dividers between password and OAuth buttons',
  ],
  integrationNote:
    "It integrates directly with the Tailwind CSS design system, so any changes to border colors or theme variables are instantly applied to the separator.",
  faqs: [],
}
