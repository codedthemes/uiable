// projects imports
import branding from "@/branding.json"

// types
import { CategoryInfo } from "./types"

export const sliderInfo: CategoryInfo = {
  title: "Slider",
  description: [
    `Better Range Inputs, Zero Package Bloat! Stop fighting default browser ranges. Upgrade to a ${branding.brandName} Slider component that handles complex touch gestures and accessibility requirements natively.`,
  ],
  whatIsHeading: `What is ${branding.brandName} Slider?`,
  whatIsDescription: [
    `${branding.brandName} Slider is an interactive range input component designed for selecting a specific value or a range of values along a track. Built using shadcn/ui components and Base UI principles, it manages complex drag mathematics, touch events, and keyboard step navigation perfectly behind the scenes.`,
    "No external package constraints exist since the component is shipped directly inside the project. Every part of the slider, including structure and thumb behavior, can be fully customized.",
    'Built with Tailwind CSS, it simplifies styling challenges like active track fills, thumb transitions, and focus indicators while avoiding the inconsistencies of native <input type="range"> CSS.',
  ],
  variantsHeading: "Popular Slider Variants",
  variants: [
    "Default . Standard horizontal slider with a single thumb for one value",
    "Range Slider . Slider with two thumbs for selecting a minimum and maximum range",
    "With Marks . Slider displaying distinct step intervals or tick marks along the track",
    "Vertical . Slider oriented vertically for volume controls or equalizers",
    "Disabled . Read-only state with muted styling and blocked interactions",
  ],
  whyUseHeading: `Why ${branding.brandName} Slider?`,
  whyUseDescription: [
    `Styling the native HTML range input to look consistent across Chrome, Safari, and Firefox is notoriously difficult. ${branding.brandName} Slider abstracts away this frustration by providing a fully stylable DOM structure powered by Base UI.`,
    "It ensures that the component remains fully accessible to screen readers, handles Arrow key stepping flawlessly, and manages aria-valuenow states automatically.",
    "There is no dependency lock-in as the control is part of the source code. Hence, everything can be customized from shape, stepping, to integration with validation form libraries.",
    "With Tailwind and CVA, all variants will have the same visuals, which makes a great design system regardless of the different track size and padding configurations.",
  ],
  featuresHeading: `Features of ${branding.brandName} Slider`,
  features: [
    "Anatomical Base UI Roots: Built on Base UI primitives for industry-standard accessibility, ensuring perfect screen reader announcements.",
    "Zero Dependency Lock-in: Direct source access allows for deep visual customization without fighting browser-specific pseudo-elements.",
    "Touch & Drag Optimized: Robust event handling ensures smooth sliding on mobile touchscreens and desktop mice alike.",
    "Keyboard Stepping: Full support for Arrow, PageUp, PageDown, Home, and End keys for precise numeric adjustments.",
    "Type-Safe Composition: Powered by TypeScript and CVA to seamlessly distribute color variants to the track fill and thumbs safely.",
  ],
  integrationHeading: "Integration and Compatibility",
  integrationDescription: [
    `${branding.brandName} Slider is designed for highly composable form architectures. It seamlessly supports integration into complex control panels and settings layouts.`,
    "You can effortlessly integrate it into advanced layouts such as:",
  ],
  integrationList: [
    "E-commerce Price Range Filters",
    "Media Player Volume and Scrub Controls",
    "Image Editing Adjustment Panels",
    "Application Zoom Levels",
  ],
  integrationNote:
    "Changes to the configuration in Tailwind, whether it involves alterations in primary colors, radius size, or ring offset, are automatically passed on to the Slider.",
  faqs: [],
}
