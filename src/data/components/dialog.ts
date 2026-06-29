// projects imports
import branding from "@/branding.json"

// types
import { CategoryInfo } from "./types"

export const dialogInfo: CategoryInfo = {
  title: "Dialog",
  description: [
    "Build an accessible Modal Dialog with Tailwind CSS and Base UI.",
    "Browse the code and add seamless overlays faster.",
  ],
  whatIsHeading: `What is ${branding.brandName} Dialog?`,
  whatIsDescription: [
    `${branding.brandName} Dialog helps create accessible modal windows for confirmations, forms, alerts, and custom interactions. It appears above the main page content and manages user focus correctly until the dialog is closed.`,
    "Built using shadcn ui and Base UI, it handles complex tasks like focus trapping, escape key actions, and portal positioning behind the scenes. Since the source code is included directly, every part can be modified without dependency limitations.",
    "Tailwind CSS styling makes it easy to control backdrops, transitions and responsive modal layouts while keeping the design consistent.",
  ],
  variantsHeading: "Popular Dialog Variants",
  variants: [
    "Default (Standard Modal): Centered floating window containing a title, content, and close button",
    "Scrolling Body: Dialog handling massive amounts of text by scrolling its internal content without moving the page",
    "Full Screen: Dialog that expands to cover the entire viewport, perfect for complex mobile flows",
    "Quick Edit: Compact modal designed specifically for editing a single row of data from a table",
    "Uncontrolled: Dialog managing its own open/close state internally without requiring complex React state",
  ],
  whyUseHeading: `Why ${branding.brandName} Dialog?`,
  whyUseDescription: [
    "Creating an accessible modal manually often turns into a messy engineering task. You have to handle Tab trapping, scroll locking on <body>, and ensure Escape key interactions work reliably across browsers.",
    `${branding.brandName} Dialog simplifies all of that by abstracting the heavy logic with Base UI patterns.`,
    "Since it ships as local source code rather than a locked library, you stay in full control. Add custom icons, redesign transitions, or extend it into complex wizard-style modals without restrictions.",
    "Tailwind CSS ensures the modal blends naturally with your design system, keeping spacing, surfaces, and responsiveness consistent.",
  ],
  featuresHeading: `Features of ${branding.brandName} Dialog`,
  features: [
    "Anatomical Base UI Roots: Built on Base UI primitives for perfect accessibility and focus management.",
    "Automatic Scroll Locking: Automatically hides <body> scrollbar and manages padding to prevent layout jumping when opening the modal.",
    "Escape Key Dismissal: Automatically binds and handles the Escape key for rapid closure.",
    "Zero Dependency Lock-in: Direct source access allows for deep structural customization of the Header, Body, and Footer sections.",
    "Highly Responsive: Easily configured to be 100% width on mobile screens but a centered box on desktops using standard Tailwind classes.",
  ],
  integrationHeading: "Integration & Compatibility",
  integrationDescription: [
    `${branding.brandName} Dialog is designed for highly composable application architectures. It acts as the primary overlay for complex interactions that require focus.`,
    "You can effortlessly integrate it into advanced layouts such as:",
  ],
  integrationList: [
    "Quick Create / Edit Forms",
    "Image and Media Lightboxes",
    "User Onboarding Videos and Welcome Screens",
    "Complex Filtering Interfaces",
  ],
  integrationNote:
    "Furthermore, it always takes your complete global design system into account. Should you make any changes to your surface color, backdrop opacity, or corner radius settings in your Tailwind setup, the Dialog will automatically inherit those changes without delay.",
  faqs: [],
}
