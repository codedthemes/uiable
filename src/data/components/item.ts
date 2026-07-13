// projects imports
import branding from "@/branding.json"

// types
import { CategoryInfo } from "./types"

export const itemInfo: CategoryInfo = {
  title: "Item",
  description: [
    "Build scalable dropdowns and command interfaces with an interactive Item component. Browse the code and start creating.",
  ],
  whatIsHeading: `What is ${branding.brandName} Item?`,
  whatIsDescription: [
    `${branding.brandName} Item is a foundational atomic component used to build interactive collections such as lists, dropdown menus, and command palettes.`,
    "Built on Base UI principles, it handles core interaction states including active selection, keyboard focus, and disabled behavior with consistent accessibility.",
    "The component is delivered as source code inside the project rather than as a locked package, making structural customization and layout extensions straightforward.",
    "Tailwind CSS manages hover states, selection indicators, and data-state styling cleanly without requiring third-party style overrides.",
  ],
  variantsHeading: "Popular Item Variants",
  variants: [
    "Default: Standard clickable text item for lists and menus",
    "With Icon: Item featuring a leading or trailing icon for visual context",
    "Interactive: Item with distinct hover, focus, and active styling states",
    "Destructive: Red-tinted item used for delete or warning actions",
    "Disabled: Read-only state with muted styling and pointer events disabled",
  ],
  whyUseHeading: `Why ${branding.brandName} Item?`,
  whyUseDescription: [
    `${branding.brandName} Item abstracts the hidden complexity involved in building interactive menu lists, especially keyboard navigation with up/down arrow keys and correct aria-selected state handling. It follows Base UI principles to maintain accessible behavior for screen readers and keyboard interactions.`,
    "Since the implementation is included directly in the project, there is no dependency lock-in. The structure can be customized freely, including icon replacements, secondary descriptions, or integration with drag-and-drop systems.",
    "Tailwind CSS and CVA ensure items remain visually consistent whether used in compact menus or spacious mobile list layouts, while preserving a type-safe design system.",
  ],
  featuresHeading: `Features of ${branding.brandName} Item`,
  features: [
    "Anatomical Base UI Roots: Built on Base UI primitives for industry-standard accessibility, ensuring perfect screen reader announcements.",
    "Zero Dependency Lock-in: Direct source access allows for deep visual and structural customization.",
    "Accessible Focus Management: Smart routing of keyboard events when used inside complex overlay components.",
    "Data-State Styling: Utilizes data-[state=active] attributes for seamless Tailwind styling of complex states.",
    "Type-Safe Composition: Powered by TypeScript and CVA to distribute size and variant properties safely.",
  ],
  integrationHeading: "Integration and Compatibility",
  integrationDescription: [
    `${branding.brandName} Item is the building block for highly composable interactive architectures. It acts as the backbone for almost all navigational components.`,
    "You can effortlessly integrate it into advanced layouts such as:",
  ],
  integrationList: [
    "Context Menus and Dropdowns",
    "Sidebar Navigation Links",
    "Search Result Palettes",
    "Complex Form Select Lists",
  ],
  integrationNote: `${branding.brandName} Item follows the Tailwind design system closely. Adjusting theme values like hover backgrounds, font sizing, or border radius automatically updates the component styling throughout the interface.`,
  faqs: [],
}
