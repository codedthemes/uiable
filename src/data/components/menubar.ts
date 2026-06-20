// projects imports
import branding from "@/branding.json";

// types
import { CategoryInfo } from "./types";

export const menubarInfo: CategoryInfo = {
  title: "Menubar",
  description: [
    "Discover the Tailwind CSS Menubar to build accessible top navigation with native OS menu behavior."
  ],
  whatIsHeading: `What is ${branding.brandName} Menubar?`,
  whatIsDescription: [
    `${branding.brandName} Menubar (also known as ${branding.brandName} Horizontal Navigation Bar) is a visually persistent horizontal component designed to mimic the native application menus in desktop operating system applications like macOS or Windows File Explorer.`,
    "Built using shadcn/ui and Base UI, it manages complex roving focusing across a vertical bar and horizontal bar.",
    "Unlike other UI libraries this component does not have to be contained in an npm bundle. The actual source code will be available in the project so anyone can edit, customize, or extend the DOM as needed.",
    "Tailwind CSS has been used to create the style. This allows it to handle active state backgrounds and complex submenu alignements without having third party CSS override them."
  ],
  variantsHeading: "Popular Menubar Variants",
  variants: [
    'Default: Standard horizontal bar containing items like "File", "Edit", and "View"',
    "Nested Submenus: Deeply nested dropdown trees branching off primary menu items",
    'With Checkboxes/Radios: Interactive submenu items acting as state toggles (e.g., "View Grid")',
    "Keyboard Hints: Menus displaying aligned Kbd shortcut hints for power users",
    'Destructive Actions: Menu items tinted red to indicate severe actions (e.g., "Delete Project")'
  ],
  whyUseHeading: `Why ${branding.brandName} Menubar?`,
  whyUseDescription: [
    `Handling focus across a horizontal bar that also triggers vertical dropdowns requires intense engineering. If a user clicks "File", the menu opens. If they then hover over "Edit", the "File" menu should close and the "Edit" menu should open instantly without clicking. ${branding.brandName} Menubar utilizes Base UI to handle this complex state machine flawlessly.`,
    "Since the code lives completely inside your project, there is absolutely zero dependency lock-in. You have total control over the component architecture, making it trivial to inject custom separators, adjust the hover activation delays, or align the menu perfectly with your application header.",
    "It works smoothly with Tailwind CSS. This guarantees that your desktop-like menus automatically maintain a cohesive, premium design system that feels incredibly fast and native to the browser."
  ],
  featuresHeading: `Features of ${branding.brandName} Menubar`,
  features: [
    "Roving Horizontal Focus: Perfectly maps the Left and Right arrow keys to traverse the top-level bar.",
    "Native Desktop Feel: Mimics the exact hover-intent delay behaviors expected from native OS menus.",
    "Multi-tiered Submenus: Supports deeply nested flyout menus with collision detection to prevent off-screen clipping.",
    "Zero Dependency Lock-in: Direct source access allows for deep visual customization of active states.",
    "Keyboard Shortcut Ready: Easily maps visible keyboard hints to actual application logic."
  ],
  integrationHeading: "Integration and Compatibility",
  integrationDescription: [
    `${branding.brandName} Menubar is essential for building complex, desktop-class web applications (like Figma, Notion, or Google Docs).`,
    "You can effortlessly integrate it into advanced layouts such as:"
  ],
  integrationList: [
    "Design Tool Interfaces",
    "Advanced Code Editors",
    "Rich Text Editors",
    "Complex Financial Dashboards"
  ],
  integrationNote:
    "It will also adhere to your global design system. Menubar will inherit any changes you make to the subtle hover colors, font sizes or border styles that you have made in Tailwind.",
  faqs: []
};
