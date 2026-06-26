// projects imports
import branding from "@/branding.json"

// types
import { CategoryInfo } from "./types"

export const progressInfo: CategoryInfo = {
  title: "Progress",
  description: [
    "Display completion beautifully with an accessible Progress bar built on Tailwind CSS and Base UI. Provide smooth, fluid animations, browse and copy the code to get started.",
  ],
  whatIsHeading: `What is ${branding.brandName} Progress?`,
  whatIsDescription: [
    `${branding.brandName} Progress is a visual feedback component that displays completion status, time progression, or resource usage. It is built using shadcn/ui components and Base UI principles, ensuring smooth transitions and accessible state handling.`,
    "Since it is included directly in your project, you can customize every aspect of it. You can change animation flow, adjust structure, or enhance behavior without dependency restrictions.",
    "It is styled entirely using Tailwind CSS, taking the frustration out of styling the native <progress> HTML tag, ensuring cross-browser consistency and premium aesthetics natively.",
  ],
  variantsHeading: "Popular Progress Variants",
  variants: [
    "Default (Determinate): Standard progress bar filling from 0% to 100% based on a known value",
    "Indeterminate: Loading bar featuring an infinite sliding animation when exact progress is unknown",
    "Colored Status: Progress bars that change color based on value (e.g., green at 100%, red at 10%)",
    "Multi-Segment: A single bar displaying multiple stacked values (e.g., storage capacity breakdown)",
    "Vertical: Progress bar oriented vertically for specific dashboard layouts",
  ],
  whyUseHeading: `Why ${branding.brandName} Progress?`,
  whyUseDescription: [
    "Native HTML <progress> elements render differently across Mac, Windows, Chrome, and Firefox, making consistent styling difficult.",
    `${branding.brandName} Progress solves this by replacing the native element with a fully accessible Base UI implementation built using Tailwind styled div elements.`,
    "Instead of forcing a fixed behavior, it is designed to stay flexible at the structural level. You can extend it for advanced use cases like step based progress flows, loading sequences, or segmented progress states without rewriting core logic.",
    "The visual system is fully driven by Tailwind CSS, ensuring smooth adaptation across themes, including dark mode, while staying aligned with your brand styling.",
  ],
  featuresHeading: `Features of ${branding.brandName} Progress`,
  features: [
    "Anatomical Base UI Roots: Built on Base UI primitives for industry-standard accessibility, ensuring screen readers announce the exact percentage.",
    "Smooth CSS Transitions: Utilizes the transform: translateX property for highly performant, 60fps fill animations without CPU jank.",
    "Cross-Browser Consistency: Guarantees your application looks identical on all operating systems.",
    "Zero Dependency Lock-in: Direct source access allows for deep visual customization of the track and fill.",
    "Highly Composable: Designed to be easily sized using standard Tailwind height utilities.",
  ],
  integrationHeading: "Integration and Compatibility",
  integrationDescription: [
    `${branding.brandName} Progress is an essential micro-component for keeping users informed during long-running tasks.`,
    "You can effortlessly integrate it into advanced layouts such as:",
  ],
  integrationList: [
    "File Upload and Download Trackers",
    "Multi-step Form or Onboarding Completion Indicators",
    "Dashboard Server Capacity Metrics",
    "Video Player Playback Scrubber Tracks",
  ],
  integrationNote:
    "The component inherits everything from your Tailwind theme, ensuring visual consistency whenever you adjust design variables like colors, borders, or background styles.",
  faqs: [],
}
