// projects imports
import branding from "@/branding.json"

// types
import { CategoryInfo } from "./types"

export const kbdInfo: CategoryInfo = {
  title: "Kbd",
  description: [
    "Build accessible keyboard hints with a sleek Kbd component built on Tailwind CSS. Browse examples and integrate quickly.",
  ],
  whatIsHeading: `What is ${branding.brandName} Kbd?`,
  whatIsDescription: [
    `${branding.brandName} Kbd is a specialized component for rendering keyboard inputs and shortcut indicators within text content.`,
    "Built using the semantic <kbd> element, it provides both accessibility and visual distinction through a styled keycap-like design.",
    "The component is not restricted by external packages, as the full implementation is included in the codebase. This allows full flexibility in adjusting typography, borders, and layout behavior.",
    "Tailwind CSS handles styling for monospaced fonts, spacing, and inline alignment without requiring custom CSS overrides.",
  ],
  variantsHeading: "Popular Kbd Variants",
  variants: [
    "Default (Light Pill): A subtle gray background with a soft border, mimicking a physical key",
    "Mac Command Keys: Standardized styling for rendering the ⌘ (Command) and ⌥ (Option) symbols",
    "Windows Ctrl Keys: Standardized styling for rendering Ctrl and Alt combinations",
    "Inlined in Text: A Kbd component perfectly sized to sit inside a sentence without breaking the line height",
    "Ghost: A variant with no background, relying only on a subtle border and monospaced font",
  ],
  whyUseHeading: `Why ${branding.brandName} Kbd?`,
  whyUseDescription: [
    `Raw shortcut text like "Press Ctrl + C to copy" can be hard to scan quickly in documentation or interfaces. ${branding.brandName} Kbd makes shortcuts easy to read, wrapping them in a distinct monospaced keycap style pill that immediately pops.`,
    "The component is in the project codebase, there is no dependency lock-in. Everything visual is customizable from borders, typography, and spacing to optional shadow styling for a realistic keycap feel.",
    "Tailwind CSS automatically adjusts contrast to improve readability in either light or dark mode, so the styling of both is consistent.",
  ],
  featuresHeading: `Features of ${branding.brandName} Kbd`,
  features: [
    "Semantic HTML: Built using the native <kbd> tag for proper meaning, accessibility, and better screen reader support.",
    "Monospaced Typography: Uses Tailwind’s font-mono class to create clear, typewriter-style key representations.",
    "Perfect Vertical Alignment: Carefully tuned padding ensures inline usage does not break text alignment or spacing.",
    "Zero Dependency Lock-in: Full source code access allows complete control over styling, structure, and customization.",
    "Highly Composable: Works seamlessly inside dropdowns, context menus, tooltips, and other interactive UI patterns.",
  ],
  integrationHeading: "Integration and Compatibility",
  integrationDescription: [
    `${branding.brandName} Kbd is an essential micro-component for power-user applications and detailed documentation.`,
    "You can effortlessly integrate it into advanced layouts such as:",
  ],
  integrationList: [
    "Command Palette Hotkey Hints (Ctrl + K)",
    "Menu Item Shortcuts in Dropdowns or Menubars",
    "Technical Documentation Hotkey Guides",
    'Empty State "Press / to Search" Indicators',
  ],
  integrationNote:
    "The Kbd component follows the global Tailwind configuration closely. Adjustments to font families, border colors, or border radius values are inherited automatically, keeping the styling consistent across the system.",
  faqs: [],
}
