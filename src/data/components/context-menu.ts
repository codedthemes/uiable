// projects imports
import branding from "@/branding.json"

// types
import { CategoryInfo } from "./types"

export const contextMenuInfo: CategoryInfo = {
  title: "Context Menu",
  description: [
    "Upgrade your UX with a custom right-click menu. Copy the code and start now.",
  ],
  whatIsHeading: `What is ${branding.brandName} Context Menu?`,
  whatIsDescription: [
    `${branding.brandName} Context Menu is a cursor-positioned overlay component that activates on right-click and replaces the browser’s native context menu with a fully customizable action panel.`,
    "It is implemented using shadcn UI components with Base UI principles to ensure accessible interactions, keyboard-friendly behavior, and consistent UI patterns across complex layouts.",
    "Instead of being distributed as a closed npm package, the component is provided as open source code within your project structure. It allows developers to directly modify the DOM structure, extend submenu logic, or integrate custom actions without fighting library constraints.",
    "The styling layer is handled by Tailwind CSS which helps to overcome complex UI challenges like absolute positioning, nested menu systems, managing hover states and animation flows. The end result is a production-ready, highly flexible context menu system that feels native across all browsers.",
  ],
  variantsHeading: "Popular Context Menu Variants",
  variants: [
    "Default: Standard list of actions appearing under the cursor on right-click",
    "With Submenus: Menu items that open secondary dropdowns when hovered",
    "With Icons & Shortcuts: Menu items featuring leading icons and trailing keyboard shortcuts",
    'Destructive Actions: Menu items tinted red to indicate severe actions (e.g., "Delete")',
    "Checkbox / Radio Items: Interactive menu items acting as state toggles",
  ],
  whyUseHeading: `Why ${branding.brandName} Context Menu?`,
  whyUseDescription: [
    `If you want your web app to behave like native desktop software (Figma, Google Drive, etc), you need to override the browser’s native right click menu. The math to get exact X/Y pointer coordinates and make sure the menu doesn’t open off-screen is complex. ${branding.brandName} Context Menu uses Base UI’s positioning engine to do this collision detection perfectly.`,
    "Since the code lives completely inside your project, there is absolutely zero dependency lock-in. You have total control over the component architecture, making it trivial to inject custom separators, alter the entry animations, or create complex multi-tiered menus.",
    "It works smoothly with Tailwind CSS. This guarantees that your custom right-click menus automatically maintain a cohesive design system, perfectly matching your standard Dropdown Menus natively.",
  ],
  featuresHeading: `Features of ${branding.brandName} Context Menu`,
  features: [
    "Native Right-Click Override: Seamlessly intercepts the contextmenu event to display your custom UI.",
    "Pointer Math Positioning: Integrates collision detection to ensure menus always open towards the center of the screen, never clipping the edge.",
    "Deep Submenu Support: Natively handles the complex delay-timers required for interacting with nested flyouts.",
    "Zero Dependency Lock-in: Direct source access allows for deep structural customization.",
    "Keyboard Optimized: Once open, users can immediately use Up/Down arrows to navigate and Escape to close.",
  ],
  integrationHeading: "Integration & Compatibility",
  integrationDescription: [
    `${branding.brandName} Context Menu brings advanced interaction capabilities to your UI without adding visual clutter. It allows you to surface powerful actions exactly where users need them, keeping the primary layout clean and focused.`,
    "It fits naturally into complex interfaces such as:",
    "The component is deeply connected to your design system. Any updates made in your Tailwind settings like surface tones, transparency levels or border radius values are instantly reflected in the context menu, maintaining perfect visual harmony.",
  ],
  integrationList: [
    "File management systems and document grids",
    "Design canvases and visual editing tools",
    "Action menus for table rows and datasets",
    "Rich text editors and writing interfaces",
  ],
  integrationNote:
    "The component is deeply connected to your design system. Any updates made in your Tailwind settings like surface tones, transparency levels or border radius values are instantly reflected in the context menu, maintaining perfect visual harmony.",
  faqs: [],
}
