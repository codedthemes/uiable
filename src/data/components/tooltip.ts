// projects imports
import branding from "@/branding.json"

// types
import { CategoryInfo } from "./types"

export const tooltipInfo: CategoryInfo = {
  title: "Tooltip",
  description: [
    "Clarify dense interfaces effortlessly with an accessible Tooltip built on Tailwind CSS and Base UI, add subtle hover hints and start building with ready to use code.",
  ],
  whatIsHeading: `What is ${branding.brandName} Tooltip?`,
  whatIsDescription: [
    `${branding.brandName} Tooltip is a lightweight contextual overlay built using shadcn/ui and Base UI primitives. It displays short helper text on hover or focus, keeping interactions non-intrusive and focused.`,
    "Instead of relying on an external dependency, the implementation exists directly in the codebase, allowing full control over structure, mounting logic, and animation behavior.",
    "Positioning logic handles the complex parts of floating UI systems, including viewport boundary detection, dynamic placement adjustments, and safe spacing to prevent clipping. It also manages delayed triggers to avoid accidental flickers and correctly links tooltip content using aria-describedby for accessibility.",
    "All styling is handled through Tailwind CSS, making overlay layering, dark mode contrast, and spacing straightforward. Since the implementation is fully exposed, adjustments to animation timing, offsets, or arrow positioning can be made directly using utility classes.",
  ],
  variantsHeading: "Popular Tooltip Variants",
  variants: [
    "Placements . Tooltips configured to appear exactly at the Top, Bottom, Left, or Right of the trigger",
    "With Delay . Tooltip that waits 300ms-700ms before appearing to prevent visual noise during rapid mouse movement",
    "Animated Reveal . Tooltip featuring smooth scale and fade-in CSS transitions",
    "With Arrow . Tooltip featuring a small CSS triangle pointing directly at the trigger element",
    "Keyboard Focused . Tooltip that correctly triggers when a user Tabs to the element, not just on hover",
  ],
  whyUseHeading: `Why ${branding.brandName} Tooltip?`,
  whyUseDescription: [
    `Building a tooltip seems like a breezy Friday afternoon task until your UI hits a screen edge and the text gets brutally clipped out of view. That’s exactly why we built ${branding.brandName} Tooltip.`,
    "Under the hood, it hooks into Base UI’s collision detection engine to handle the heavy lifting, automatically flipping or shifting the positioning so your hints stay perfectly visible within the viewport no matter where they trigger.",
    "There’s no need to deal with that annoying, seizure-inducing flashing when a user rapidly mouses across a data-dense dashboard because the tooltips render only when the action is intentional.",
    "The best part is the architecture. Because this code lives directly inside your repository, you get absolute zero dependency lock-in. You own the component fully, which makes it trivial to tweak the global hover delays, adjust text sizing, or swap background logic on the fly.",
    "It plays nicely with Tailwind CSS, ensuring your tooltips seamlessly adopt your existing design tokens and look premium across all modern browsers without wrestling with native style overrides.",
  ],
  featuresHeading: `Features of ${branding.brandName} Tooltip`,
  features: [
    "Smart Collision Detection: Integrates overlay positioning to ensure tooltips never clip outside the browser window.",
    "Hover Intent Delays: Smart logic prevents visual spam by requiring the user to rest their mouse briefly before opening.",
    "Screen Reader Accessible: Automatically links the tooltip text to the trigger element via aria-describedby natively.",
    "Zero Dependency Lock-in: Direct source access allows for deep visual customization of the overlay.",
    "Fluid Animations: Utilizes Tailwind's data-[state] attributes to trigger buttery-smooth CSS scale and fade transitions.",
  ],
  integrationHeading: "Integration and Compatibility",
  integrationDescription: [
    `${branding.brandName} Tooltip is important to maintain a neat interface as the tooltip text would only be shown when required.`,
    "It can be easily implemented within sophisticated designs such as:",
  ],
  integrationList: [
    'Icon-only Action Buttons (e.g., Toolbar icons like "Bold", "Italic")',
    "Truncated Data Table Cells (showing the full string on hover)",
    "Complex Form Labels requiring extra clarification",
    "Disabled Buttons (explaining why the button is disabled)",
  ],
  integrationNote:
    "The Tooltip is always consistent with the global design system so changes in the background color, font scale and border radius from the Tailwind setup will automatically apply without requiring any manual intervention.",
  faqs: [],
}
