// projects imports
import branding from "@/branding.json"

// types
import { CategoryInfo } from "./types"

export const buttonGroupInfo: CategoryInfo = {
  title: "Button Group",
  description: [
    "Bring your actions together with a clean, ready-to-use component. Built with Tailwind CSS, shadcn ui, and Base UI, it keeps borders smooth and alignment perfect.",
    "Copy the code and start using it instantly.",
  ],
  whatIsHeading: `What is ${branding.brandName} Button Group?`,
  whatIsDescription: [
    `${branding.brandName} Button Group is a structural layout component designed to seamlessly connect multiple related buttons. Built using shadcn ui components and Base UI principles, it manages the alignment, spacing, and unified styling of grouped actions while maintaining proper accessibility.`,
    "Unlike other traditional UI libraries, this component isn’t tied to an npm package. You get the actual source code in your project directly so you can easily edit, customize and extend it however you want.",
    "It uses Tailwind CSS that makes styling simple. Even tricky things like merging borders and rounding only the outer corners are handled cleanly, so your design stays neat and consistent.",
  ],
  variantsHeading: "Popular Button Group Variants",
  variants: [
    "Default . Standard horizontal grouping for primary related actions",
    "Vertical . Stacked vertical arrangement perfect for sidebars or tight spaces",
    "Icon Group . Compact grouping of icon-only buttons for application toolbars",
    "Split Button . Primary action tightly coupled with a dropdown toggle for secondary choices",
    "Radio Group . Mutually exclusive selections utilizing standard button aesthetics",
  ],
  whyUseHeading: `Why ${branding.brandName} Button Group?`,
  whyUseDescription: [
    `${branding.brandName} Button Group abstracts away the frustrating CSS complexities of grouping elements specifically handling adjacent borders and outer corner rounding. It follows Base UI principles, ensuring that grouped buttons remain logically connected for assistive technologies while retaining their individual focus states and keyboard navigation capabilities.`,
    "Since the code lives completely inside your project, there is absolutely zero dependency lock-in. You have total control over the component architecture, making it trivial to inject custom active-state logic, alter flex layouts, or modify behavior based on your specific application requirements.",
    "It works well with Tailwind CSS and CVA (class-variance-authority), so you can group buttons like sm, md, or lg buttons easily. The parent group automatically maintains a cohesive, type-safe design without requiring messy, hardcoded conditional CSS strings.",
  ],
  featuresHeading: `Features of ${branding.brandName} Button Group`,
  features: [
    "Anatomical Base UI Roots. Built on Base UI primitives for industry-standard accessibility, ensuring groups are properly announced to screen readers.",
    "Zero Dependency Lock-in. Direct source access allows for deep structural customization without waiting for upstream package updates.",
    "Smart Edge Management. Automatically handles first and last child border radii while collapsing internal borders cleanly using Tailwind utilities.",
    "Dynamic Orientation. Built-in support for both horizontal (`flex-row`) and vertical (`flex-col`) layouts with coordinated internal styling.",
    "Type-Safe Composition. Powered by TypeScript and CVA to seamlessly distribute size and variant properties consistently to all child buttons.",
  ],
  integrationHeading: "Integration & Compatibility",
  integrationDescription: [
    `${branding.brandName} Button Group is designed for highly composable UI architectures. It seamlessly supports wrapping standard ${branding.brandName} Buttons, icon buttons, and custom dropdown triggers without disrupting the DOM hierarchy or breaking accessibility tree structures.`,
    "You can effortlessly integrate it into advanced layouts such as:",
  ],
  integrationList: [
    "Rich Text Editor Toolbars",
    "Data Grid Pagination Controls",
    "Segmented Content Filters",
    "Dialog Action Bars",
  ],
  integrationNote:
    "It also fully respects your global design system. If you update your primary colors, border radii, or spacing variables in your Tailwind configuration, the Button Group will automatically inherit and reflect those changes instantly.",
  faqs: [],
}
