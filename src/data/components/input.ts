// projects imports
import branding from "@/branding.json";

// types
import { CategoryInfo } from "./types";

export const inputInfo: CategoryInfo = {
  title: "Input",
  description: [
    "Browse the source and add a flexible Input component built with Tailwind CSS, shadcn/ui, and Base UI to handle user data with consistent form behavior."
  ],
  whatIsHeading: `What is ${branding.brandName} Input?`,
  whatIsDescription: [
    `${branding.brandName} Input provides a reliable text input foundation for forms that require consistent interaction patterns and validation handling.`,
    "Built on shadcn/ui and Base UI principles, it abstracts common input behaviors like focus indication, validation feedback, and state transitions.",
    "Because the component exists as project-level source code, it can be customized freely without being constrained by external package APIs.",
    "Tailwind CSS simplifies styling for input states, including focus rings, disabled visuals, and error borders, while maintaining design consistency."
  ],
  variantsHeading: "Popular Input Variants",
  variants: [
    "Default: Standard text input field for basic data entry",
    "With Icon: Input with a leading or trailing icon for visual context (e.g., Search or Email)",
    "Password: Input with a toggleable mask for entering secure passwords",
    "File Upload: Specialized input for selecting and uploading local files",
    "Error State: Input displaying clear visual indicators when validation fails"
  ],
  whyUseHeading: `Why ${branding.brandName} Input?`,
  whyUseDescription: [
    `Cross-browser input behavior can introduce subtle inconsistencies in accessibility and styling. ${branding.brandName} Input solves this by applying Base UI patterns that ensure accessible labels, screen reader compatibility, and automatic validation state handling through aria-invalid.`,
    "The source code is included directly in the project, removing package constraints and allowing full architectural control. Icon swapping, transition customization, and integration with tools like React Hook Form or Zod can be handled without limitations.",
    "With Tailwind CSS and CVA, input variants such as sm, md, and lg remain visually consistent through shared sizing and state-driven styling."
  ],
  featuresHeading: `Features of ${branding.brandName} Input`,
  features: [
    "Anatomical Base UI Roots: Built on Base UI primitives for industry-standard accessibility.",
    "Zero Dependency Lock-in: Direct source access allows for deep visual customization.",
    "Advanced State Management: Native support for disabled, readonly, and error states.",
    "Accessible Focus Rings: Smart focus management using Tailwind's utilities.",
    "Type-Safe Composition: Powered by TypeScript and CVA for predictable styling permutations."
  ],
  integrationHeading: "Integration and Compatibility",
  integrationDescription: [
    `${branding.brandName} Input is designed for highly composable form architectures. It seamlessly supports integration into complex form layouts without disrupting native HTML submission logic.`,
    "You can effortlessly integrate it into advanced layouts such as:"
  ],
  integrationList: [
    "User Authentication and Login Pages",
    "Complex Application Settings",
    "Checkout and Payment Forms",
    "Real-time Search Bars"
  ],
  integrationNote:
    "It also fully respects your global design system. If you update your primary colors, border radius, or ring offsets in your Tailwind configuration, the Input will automatically inherit and reflect those changes instantly.",
  faqs: []
};
