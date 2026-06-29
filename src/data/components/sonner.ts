// projects imports
import branding from "@/branding.json"

// types
import { CategoryInfo } from "./types"

export const sonnerInfo: CategoryInfo = {
  title: "Sonner",
  description: [
    "Keep Users Informed, Effortlessly! Upgrade your application's feedback loops with a premium notification layout. Say goodbye to overlapping alerts and hello to flawless, responsive stacking mechanics.",
  ],
  whatIsHeading: `What is ${branding.brandName} Sonner?`,
  whatIsDescription: [
    `${branding.brandName} Sonner is a sophisticated toast notification that provides feedback without disturbing the user. This library utilizes the simple Sonner library with the help of Tailwind CSS and offers seamless integration within any modern interface.`,
    "Different from other methods of toasting, the Sonner provider is included within the project itself, which enables users to fully control its position, stack behavior, and themes.",
    "Moreover, this tool is capable of handling complex actions like dynamic sizing, swipe functionality, and toast stacking order, among others.",
  ],
  variantsHeading: "Popular Sonner Variants",
  variants: [
    "Default Toast . Standard subtle notification indicating a generic action occurred",
    "Success / Error . Colored or icon-led toasts for clear positive/negative feedback",
    'With Actions . Toast featuring interactive buttons (e.g., an "Undo" button after deleting a file)',
    'Promise State . Toast that automatically transitions from "Loading..." to "Success" or "Error" based on an API call',
    "Custom JSX . Toast capable of rendering entirely custom React components inside the notification box",
  ],
  whyUseHeading: `Why ${branding.brandName} Sonner?`,
  whyUseDescription: [
    "A production ready toast system requires careful handling of overlapping elements, animation timing, height recalculations, and gesture based interactions. Sonner takes care of this underlying complexity and ensures smooth notification behavior out of the box.",
    `Sonner is incorporated into ${branding.brandName} in a manner that makes it appear as a native part of the design system. The styling will follow the Tailwind CSS tokens and will keep the font, border, and background styles in line with the other components of the interface.`,
    "With full control over configuration inside the codebase, layout changes such as repositioning or adjusting display duration are simple and flexible.",
  ],
  featuresHeading: `Features of ${branding.brandName} Sonner`,
  features: [
    "Premium Stacking Animations: Automatically stacks older notifications neatly behind newer ones to save screen space.",
    "Swipe to Dismiss: Native-feeling touch physics allow mobile users to flick notifications away.",
    "Promise Resolution Handling: Incredibly easy API for managing async loading states visually.",
    "Tailwind Theme Synced: Utilizes CSS variables to ensure toasts perfectly match your Tailwind config (including Dark Mode).",
    "Lightweight Performance: Minimal JavaScript overhead ensures notifications never cause application lag.",
  ],
  integrationHeading: "Integration and Compatibility",
  integrationDescription: [
    `${branding.brandName} Sonner acts as the primary global feedback mechanism for your entire application architecture.`,
    "You can effortlessly integrate it into advanced workflows such as:",
  ],
  integrationList: [
    "Form Submission Success/Error Confirmations",
    "Network Disconnection Warnings",
    'Quick "Undo" Actions for Destructive Edits',
    "Background File Upload Progress Updates",
  ],
  integrationNote:
    "It fully respects your global design system. If you update your background surface colors, shadows, or text sizing in your Tailwind configuration, all Sonner toasts will automatically inherit and reflect those changes instantly.",
  faqs: [],
}
