// projects imports
import branding from "@/branding.json"

// types
import { CategoryInfo } from "./types"

export const drawerInfo: CategoryInfo = {
  title: "Drawer",
  description: [
    "Create fluid, swipeable interfaces using a Tailwind CSS Drawer.",
    "Browse examples and copy the code instantly.",
  ],
  whatIsHeading: `What is ${branding.brandName} Drawer?`,
  whatIsDescription: [
    `${branding.brandName} Drawer is a highly interactive bottom-sheet component designed to slide up from the edge of the screen. Powered by Vaul and styled with Tailwind CSS, it provides the incredibly smooth, native-feeling swipe physics typically found in native iOS and Android applications.`,
    "Unlike traditional UI libraries, this component is not locked inside an npm package. You get the real source code right into your project, so you can edit, customize and extend the DOM structure and drag handles as you need.",
    "It’s styled with Tailwind CSS, handling overlay backdrops, sticky headers and safe-area padding with ease, without the hassle of overriding rigid third-party CSS.",
  ],
  variantsHeading: "Popular Drawer Variants",
  variants: [
    "Bottom Sheet: Regular drawer sliding up from the bottom, great for mobile menus",
    "Snap Points: Drawer that snaps to certain heights (like 30%, 50%, 100%) as you drag it",
    "Nested Drawers: A drawer that opens another drawer, stacking them visually with scale effects",
    "Right Sidebar: Drawer modified to slide in from the side on desktop viewports",
    "Non-Dismissible: Drawer that cannot be swiped away, requiring an explicit action",
  ],
  whyUseHeading: `Why ${branding.brandName} Drawer?`,
  whyUseDescription: [
    "Recreating a native mobile bottom sheet experience on the web is not easy. You need to manage touch gestures, scroll momentum, edge resistance, and smooth drag behavior across devices.",
    `${branding.brandName} Drawer simplifies all of this by using Vaul to handle the underlying motion and physics, so the interaction feels natural and fluid out of the box.`,
    "Since the wrapper code lives directly inside your project, there’s no dependency or design lock-in. You can easily adjust the drag handle, restructure content areas, or customize footer actions based on your UI needs.",
    "With Tailwind CSS, the drawer automatically fits into your design system and adapts seamlessly between light and dark modes.",
  ],
  featuresHeading: `Features of ${branding.brandName} Drawer`,
  features: [
    "Physics-based Swiping: Provides fluid, native-feeling touch interactions and velocity-based dismissal on mobile devices.",
    "Background Scaling: Optionally shrinks and scales the main application background backwards when the drawer opens for a premium iOS aesthetic.",
    "Snap Point Math: Natively supports complex height snapping out of the box.",
    "Zero Visual Dependency Lock-in: Direct source access allows for deep customization of the drawer shell.",
    "Accessible Routing: Fully supports keyboard navigation and screen reader announcements.",
  ],
  integrationHeading: "Integration & Compatibility",
  integrationDescription: [
    `${branding.brandName} Drawer is a building block to create modern, mobile-first interfaces in cases where traditional centered modals are limiting or outdated.`,
    "It fits naturally in a number of use cases, including:",
  ],
  integrationList: [
    "Mobile navigation menus and slide-in sidebars",
    "Advanced filtering and sorting panels",
    "E-commerce cart and checkout flows",
    "Detailed map or location info panels",
  ],
  integrationNote:
    "The Drawer also respects your existing design system. Any updates to surface colors, border radius, or backdrop effects in your Tailwind configuration are automatically reflected, keeping everything visually consistent without extra work.",
  faqs: [],
}
