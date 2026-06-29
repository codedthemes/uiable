// projects imports
import branding from "@/branding.json"

// types
import { CategoryInfo } from "./types"

export const popoverInfo: CategoryInfo = {
  title: "Popover",
  description: [
    "Present rich interactive content dynamically with a fully accessible Popover built on Tailwind CSS and Base UI. Handle form overlays without modals, browse and copy the code to get started.",
  ],
  whatIsHeading: `What is ${branding.brandName} Popover?`,
  whatIsDescription: [
    `${branding.brandName} Popover is a lightweight floating panel that stays anchored to a trigger element. While tooltips are limited to short text on hover, popovers are click activated and designed for interactive content like forms, date pickers, and settings interfaces.`,
    "Built on shadcn/ui components and Base UI architecture, it ensures precise overlay positioning.",
    "Because the source code is available directly inside your project, you are free to modify it as needed. You can update structure, extend functionality, or change animation behavior without working around library constraints.",
    "It uses Tailwind CSS for styling, simplifying the handling of fixed overlays, layering, and responsive adjustments.",
  ],
  variantsHeading: "Popular Popover Variants",
  variants: [
    "Default: Standard floating panel containing text or simple actions triggered by a button click",
    'With Form Inputs: Popover containing text fields and submit buttons (e.g., a "Quick Edit" flyout)',
    `Date Picker Container: Popover specifically sized to hold the ${branding.brandName} Calendar component`,
    "Alignments: Popovers configured to align perfectly to the Start, Center, or End of their trigger button",
    "Combobox Container: Popover housing a complex searchable list of items",
  ],
  whyUseHeading: `Why ${branding.brandName} Popover?`,
  whyUseDescription: [
    "Building popovers correctly requires handling edge cases like screen collision, outside clicks, and focus management.",
    `The panel must close on outside interaction and reposition itself when it reaches viewport boundaries. ${branding.brandName} simplifies this by using Base UI to manage these interaction rules and ensure accessible keyboard behavior.`,
    "The component is fully embedded in your codebase, giving you complete flexibility over how it behaves. You can modify animations, change backdrop logic, or extend internal structure without any dependency limitations.",
    "With Tailwind CSS, it maintains a consistent design language across your UI, aligning naturally with cards, menus, and other floating elements.",
  ],
  featuresHeading: `Features of ${branding.brandName} Popover`,
  features: [
    "Smart Collision Detection: Integrates overlay positioning to ensure popovers never clip outside the browser window.",
    "Focus Trapping: Seamlessly traps keyboard focus inside the popover if it contains interactive form elements.",
    "Click-Outside Dismissal: Automatically closes the panel when the user clicks anywhere else on the screen or hits Escape.",
    "Zero Dependency Lock-in: Direct source access allows for deep visual customization of the overlay.",
    "Fluid Animations: Utilizes Tailwind's attributes to trigger buttery-smooth CSS scale and fade transitions.",
  ],
  integrationHeading: "Integration and Compatibility",
  integrationDescription: [
    `${branding.brandName} Popover is the perfect middle-ground between a tiny tooltip and a massive screen-blocking Modal Dialog.`,
    "You can effortlessly integrate it into advanced layouts such as:",
  ],
  integrationList: [
    "Inline Date Pickers and Range Selectors",
    "Complex Filter Menus in Data Tables",
    'Quick Settings or "More Options" Panels',
    "Searchable Combobox Dropdowns",
  ],
  integrationNote:
    "It also fully respects your global design system. If you update your surface colors, drop shadows, or border radii in your Tailwind configuration, the Popover will automatically inherit and reflect those changes instantly.",
  faqs: [],
}
