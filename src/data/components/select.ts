// projects imports
import branding from "@/branding.json";

// types
import { CategoryInfo } from "./types";

export const selectInfo: CategoryInfo = {
  title: "Select",
  description: [
    "Make data selection more intuitive with a custom Select component built on Tailwind CSS, shadcn/ui, and Base UI, offering stable overlay behavior and flexible styling so you can browse and copy the code to get started."
  ],
  whatIsHeading: `What is ${branding.brandName} Select?`,
  whatIsDescription: [
    `${branding.brandName} Select is a fully custom, JavaScript-driven dropdown component designed for selecting options when native HTML selects don't offer enough styling flexibility.`,
    "Built using shadcn/ui components and Base UI principles. It manages complex keyboard focus trapping, overlay positioning and state management flawlessly.",
    `Most UI libraries lock you into predefined components but ${branding.brandName} works differently. One gets full access to the source code inside the project so one can freely adjust the dropdown structure and adapt it to your exact requirements.`,
    "With Tailwind CSS handling the styling, challenges like popover positioning, active states, and custom scroll behavior are already solved, ensuring a consistent design across browsers."
  ],
  variantsHeading: "Popular Select Variants",
  variants: [
    "Default: Standard custom dropdown for selecting a single option",
    "Multi-Select: Select allowing multiple selections with removable tag badges",
    "Grouped Options: Dropdown with options categorized by distinct, unselectable headers"
  ],
  whyUseHeading: `Why ${branding.brandName} Select?`,
  whyUseDescription: [
    "Building a fully accessible select component is one of the most challenging parts of UI development. We need correct overlay placement, focus handling, and complete keyboard support while ensuring screen readers interpret everything properly.",
    `${branding.brandName} Select solves this by following Base UI standards and managing all of that complexity.`,
    "It moves past the constraints of external dependencies. Because the source code lives directly inside the project, we have total freedom to extend, tweak, or completely rewrite it.",
    "Whether we need custom empty states, unique interaction patterns or refined selection behavior, we stay in the driver's seat.",
    "Built to integrate flawlessly with Tailwind CSS and CVA so it ensures your design system remains perfectly consistent across dropdowns, inputs, and interactive states."
  ],
  featuresHeading: `Features of ${branding.brandName} Select`,
  features: [
    "Anatomical Base UI Roots: Built on Base UI primitives for industry-standard accessibility, ensuring complex dropdown navigation is flawless.",
    "Zero Dependency Lock-in: Direct source access allows for deep structural customization, like adding custom icons inside the trigger.",
    "Smart Positioning: It keeps dropdowns fully visible even inside containers with overflow constraints.",
    "Keyboard Optimized: Power-user friendly with full support for Up, Down, Enter, and Escape keys to navigate and select options rapidly without a mouse.",
    "Type-Safe Composition: Fully powered by TypeScript and CVA (Class Variance Authority) to seamlessly distribute styling properties to both the trigger and the dropdown list."
  ],
  integrationHeading: "Integration and Compatibility",
  integrationDescription: [
    `${branding.brandName} Select is designed for highly composable UI architectures. It seamlessly supports integration with external form libraries like React Hook Form and state management tools.`,
    "You can effortlessly integrate it into advanced layouts such as:"
  ],
  integrationList: [
    "Custom Application Theme Pickers",
    "Relational Database Item Assigners",
    "E-commerce Product Variant Selectors",
    "Complex Reporting Filters"
  ],
  integrationNote:
    "It also fully respects your global design system. If you update your surface colors, text sizing, or border radius in your Tailwind configuration, the Select will automatically inherit and reflect those changes instantly.",
  faqs: []
};
