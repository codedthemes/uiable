// projects imports
import branding from "@/branding.json";

// types
import { CategoryInfo } from "./types";

export const radioInfo: CategoryInfo = {
  title: "Radio",
  description: [
    "Control mutually exclusive choices with an accessible customizable Radio button built on Tailwind CSS and Base UI. Ensure flawless keyboard navigation, browse and copy the code to get started."
  ],
  whatIsHeading: `What is ${branding.brandName} Radio?`,
  whatIsDescription: [
    `${branding.brandName} Radio is a form control designed for selecting one option from a predefined set. It provides clear visual feedback for active selection while managing hidden native input behavior and state synchronization behind the scenes.`,
    "Built using shadcn/ui components and Base UI principles, it ensures consistent accessibility and interaction patterns.",
    "The implementation lives directly in your project, giving you complete freedom to modify structure and visuals. You can adjust the DOM layout, replace indicator styles, or customize the inner selection marker based on your design needs.",
    "Styling is handled with Tailwind CSS, making it easy to manage focus states, disabled styles, and selection animations without dealing with rigid external CSS overrides."
  ],
  variantsHeading: "Popular Radio Variants",
  variants: [
    "Default: Standard circular radio button for forms and settings",
    "With Label: Radio button tightly coupled with a clickable text label for better hit targets",
    "Card Radio: Large, visually distinct selectable cards for premium layouts",
    "Disabled: Read-only state with muted styling and blocked interactions",
    "Error State: Red-tinted radio buttons used when form validation fails"
  ],
  whyUseHeading: `Why ${branding.brandName} Radio?`,
  whyUseDescription: [
    `${branding.brandName} Radio eliminates the annoying cross-browser discrepancies of native HTML radio inputs.`,
    "It adheres to Base UI standards, making the component completely accessible to screen readers, seamlessly handling spacebar toggles, and automatically managing aria-checked states.",
    "Because the code exists entirely within your project, there is no dependency lock-in. You have complete control over the component design, making it simple to replace the inner selection dot, adjust animation durations, or interact with complicated form validation libraries such as React Hook Form or Zod.",
    "It works well with Tailwind CSS and CVA (class-variance-authority). This ensures that whether you're using sm, md, or lg radios, the size, padding, and focus rings all follow a consistent, type-safe design."
  ],
  featuresHeading: `Features of ${branding.brandName} Radio`,
  features: [
    "Anatomical Base UI Roots: Built on Base UI primitives for industry-standard accessibility, ensuring perfect screen reader announcements.",
    "Zero Dependency Lock-in: Direct source access allows for deep visual customization without fighting library-specific CSS selectors.",
    "Advanced State Management: Native support for checked and unchecked states with distinct, animatable visual cues.",
    "Accessible Focus Rings: Smart focus management using Tailwind's focus-visible utilities to ensure keyboard users have clear navigation trails.",
    "Type-Safe Composition: Powered by TypeScript and CVA to seamlessly distribute size and color variant properties safely."
  ],
  integrationHeading: "Integration and Compatibility",
  integrationDescription: [
    `${branding.brandName} Radio is designed for highly composable form architectures. It seamlessly supports integration into complex form layouts without disrupting native HTML submission logic.`,
    "You can effortlessly integrate it into advanced layouts such as:"
  ],
  integrationList: [
    "Payment Method Selection",
    "Shipping Option Toggles",
    "User Preferences and Settings",
    "Survey and Polling Questionnaires"
  ],
  integrationNote:
    "The Radio component is tightly connected to your design system, meaning changes in Tailwind such as colors, radius, or focus ring settings are instantly applied everywhere it is used.",
  faqs: []
};
