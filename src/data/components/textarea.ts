// projects imports
import branding from "@/branding.json";

// types
import { CategoryInfo } from "./types";

export const textareaInfo: CategoryInfo = {
  title: "Textarea",
  description: [
    "Enhance form usability with a flexible Textarea component built on Tailwind CSS and Base UI, built for smooth multi line text interactions and scalability."
  ],
  whatIsHeading: `What is ${branding.brandName} Textarea?`,
  whatIsDescription: [
    `${branding.brandName} Textarea sits as a basic multiline input layer for forms where longer user content is required. Built on shadcn/ui and Base UI, it keeps behavior consistent across typing, focus changes, validation feedback, and scroll handling without relying on ad-hoc fixes per use case.`,
    "No packaging layer sits on top of it. The implementation is exposed directly in the codebase, so structure, wrappers, or internal DOM flow can be changed without waiting on library constraints or API limits.",
    "Styling is handled through Tailwind CSS, so state changes like focus, disabled, and error don’t depend on custom CSS overrides. Everything follows the same design tokens used across the system."
  ],
  variantsHeading: "Popular Textarea Variants",
  variants: [
    "Default . Standard multi-line text input field for basic data entry",
    "Auto-Resizing . Textarea that automatically expands its height based on the user's content",
    "Error State . Textarea displaying clear visual indicators (red borders) when validation fails",
    "Disabled . Read-only state with muted styling and blocked interactions"
  ],
  whyUseHeading: `Why ${branding.brandName} Textarea?`,
  whyUseDescription: [
    `Cross-browser textarea behavior is inconsistent by default, especially around resizing, spacing, and layout rendering. ${branding.brandName} Textarea standardizes these issues using Base UI patterns while maintaining full accessibility support, including proper ARIA attributes and label relationships.`,
    "Since the code lives completely inside your project, there is absolutely zero dependency lock-in. You have total control over the component architecture, making it trivial to inject auto-resize logic, change transition durations, or integrate with form validation libraries like React Hook Form or Zod.",
    "It works smoothly with Tailwind CSS and CVA (class-variance-authority). This guarantees that whether you are using small comment boxes or large document editors, the sizing, padding, and focus rings automatically maintain a cohesive, type-safe design system."
  ],
  featuresHeading: `Features of ${branding.brandName} Textarea`,
  features: [
    "Anatomical Base UI Roots: Built on Base UI primitives for industry-standard accessibility.",
    "Zero Dependency Lock-in: Direct source access allows for deep visual customization.",
    "Advanced State Management: Native support for disabled, readonly, and error states.",
    "Customizable Resizing: Easily constrain resizing to purely vertical, purely horizontal, or disable it entirely using Tailwind classes.",
    "Type-Safe Composition: Powered by TypeScript and CVA for predictable styling permutations."
  ],
  integrationHeading: "Integration and Compatibility",
  integrationDescription: [
    `${branding.brandName} Textarea is designed for highly composable form architectures. It seamlessly supports integration into complex form layouts without disrupting native HTML submission logic.`,
    "You can effortlessly integrate it into advanced layouts such as:"
  ],
  integrationList: [
    "Contact and Support Ticket Forms",
    "Social Media Comment Sections",
    "Profile Biography Editors",
    "Product Review Submissions"
  ],
  integrationNote:
    "The Textarea is fully theme-aware, meaning any updates to core Tailwind design tokens like primary color, border radius, or ring offset are reflected automatically across all states.",
  faqs: []
};
