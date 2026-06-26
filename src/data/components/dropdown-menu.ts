// projects imports
import branding from "@/branding.json"

// types
import { CategoryInfo } from "./types"

export const dropdownMenuInfo: CategoryInfo = {
  title: "Dropdown Menu",
  description: [
    "Browse the code and build an accessible Dropdown Menu with Tailwind CSS and Base UI for seamless contextual actions.",
  ],
  whatIsHeading: `What is ${branding.brandName} Dropdown Menu?`,
  whatIsDescription: [
    `${branding.brandName} Dropdown Menu provides a clean and accessible way to expose contextual actions through a button-triggered overlay.`,
    "It is built on shadcn ui and Base UI foundations, ensuring correct focus management, accessibility compliance, and reliable positioning behavior.",
    "The component is not restricted to an external package. Full source code access allows structural changes, animation customization, and support for advanced nested menu patterns.",
    "Tailwind CSS handles styling for hover states, overlays, and multi-level dropdown layouts, keeping the interface visually consistent.",
  ],
  variantsHeading: "Popular Dropdown Menu Variants",
  variants: [
    "Default: Standard contextual menu with a list of text actions",
    "With Icons: Menu items featuring leading icons for quicker visual scanning",
    "With Checkmarks/Radios: Interactive menu items acting as state toggles",
    "Nested Submenus: Menu items that open secondary dropdowns when hovered",
    "With Keyboard Shortcuts: Menu displaying aligned Kbd shortcut hints next to actions",
  ],
  whyUseHeading: `Why ${branding.brandName} Dropdown Menu?`,
  whyUseDescription: [
    `Screen-edge clipping is a common issue in dropdown implementations. ${branding.brandName} Dropdown Menu eliminates this problem through Base UI’s collision-aware positioning, ensuring the menu always adjusts to remain visible.`,
    "Keyboard accessibility is fully handled with focus trapping and arrow-key navigation for smooth interaction.",
    "The component is fully included in the project source code, removing any dependency limitations. This allows complete control over structure, custom separators, animations, and even complex nested menus.",
    "Tailwind CSS ensures consistent styling and enables fluid transitions through data-[state=open] states.",
  ],
  featuresHeading: `Features of ${branding.brandName} Dropdown Menu`,
  features: [
    "Smart Collision Detection: Integrates overlay positioning to ensure menus never clip outside the viewport.",
    "Nested Submenu Support: Natively handles the complex delay-timers required for interacting with nested flyout menus.",
    "Keyboard Optimized: Full support for Up, Down, Enter, and Escape keys to navigate and execute actions rapidly.",
    "Zero Dependency Lock-in: Direct source access allows for deep structural customization.",
    "Type-Safe Composition: Powered by TypeScript and CVA to seamlessly distribute styling properties to all child items.",
  ],
  integrationHeading: "Integration & Compatibility",
  integrationDescription: [
    `${branding.brandName} Dropdown Menu is the central hub for contextual actions within dense user interfaces.`,
    "You can effortlessly integrate it into advanced layouts such as:",
  ],
  integrationList: [
    'User Profile "Avatar" Menus',
    'Data Table "Row Action" Ellipsis Menus (...)',
    "Header Settings and Theme Pickers",
    "Rich Text Editor Formatting Options",
  ],
  integrationNote:
    "It also fully respects your global design system. If you update your surface colors, backdrop opacities, or border radii in your Tailwind configuration, the Dropdown Menu will automatically inherit and reflect those changes instantly.",
  faqs: [],
}
