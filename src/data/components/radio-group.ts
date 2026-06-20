// projects imports
import branding from "@/branding.json";

// types
import { CategoryInfo } from "./types";

export const radioGroupInfo: CategoryInfo = {
  title: "Radio Group",
  description: [
    "Handle multiple radio buttons cleanly with an accessible Radio Group built on Tailwind CSS and Base UI. Ensure proper screen reader support and keyboard roving, browse and copy the code to get started."
  ],
  whatIsHeading: `What is ${branding.brandName} Radio Group?`,
  whatIsDescription: [
    `${branding.brandName} Radio Group brings multiple radio buttons together into a single structured selection system where only one option can be active at a time.`,
    "It is built with shadcn/ui components and Base UI principles, ensuring smooth and accessible keyboard navigation out of the box.",
    "It is designed as real project code rather than a packaged abstraction, so you can directly work with its structure. This makes it easy to adapt grouping logic, adjust markup, or reshape how options behave inside your layout.",
    "Tailwind CSS powers the styling, keeping spacing, orientation, and validation states consistent without needing additional custom CSS rules."
  ],
  variantsHeading: "Popular Radio Group Variants",
  variants: [
    "Horizontal: Radios laid out side-by-side in a row",
    "Vertical (Stacked): Standard vertical list of radio options",
    "Card Grid: A grid of large, selectable radio cards for premium interfaces",
    "Segmented Control: Visually looks like a toggle switch, but acts as a radio group under the hood",
    "With Descriptions: Radio options accompanied by secondary helper text"
  ],
  whyUseHeading: `Why ${branding.brandName} Radio Group?`,
  whyUseDescription: [
    "Radio groups are not just visual components, they require precise keyboard and accessibility handling to work correctly.",
    `${branding.brandName} Radio Group manages this by implementing roving tabindex and ensuring smooth focus movement across options with proper screen reader announcements.`,
    "Because it is directly in your code you can think of it as UI logic. It's not a fixed library component. This means you can change how it handles state, rearrange its layout or adjust its behavior for product flows.",
    "The component stays consistent and responsive, with Tailwind CSS and CVA handling the styling. It also aligns fully with your design tokens and works well across parts of your product."
  ],
  featuresHeading: `Features of ${branding.brandName} Radio Group`,
  features: [
    "Anatomical Base UI Roots: Built on Base UI primitives for industry-standard accessibility, ensuring groups are properly announced to screen readers.",
    "Roving Focus Management: Automatically handles complex ArrowUp, ArrowDown, ArrowLeft, and ArrowRight keyboard routing between radio items.",
    "Zero Dependency Lock-in: Direct source access allows for deep structural customization.",
    "Dynamic Orientation: Built-in support for both horizontal (flex-row) and vertical (flex-col) layouts with coordinated spacing.",
    "Type-Safe Composition: Powered by TypeScript and CVA to seamlessly distribute required context properties to all child radios."
  ],
  integrationHeading: "Integration and Compatibility",
  integrationDescription: [
    `${branding.brandName} Radio Group is designed for highly composable form architectures. It seamlessly acts as the accessible wrapper around your ${branding.brandName} Radio components, integrating flawlessly with form libraries like React Hook Form.`,
    "You can effortlessly integrate it into advanced layouts such as:"
  ],
  integrationList: [
    "Subscription Pricing Tiers",
    "Delivery Time Selectors",
    "Application Theme Pickers",
    "Multi-step Onboarding Wizards"
  ],
  integrationNote:
    "All styling is controlled through your Tailwind configuration, ensuring consistent updates across spacing, colors, and layout rules.",
  faqs: []
};
