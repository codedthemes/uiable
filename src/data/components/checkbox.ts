// projects imports
import branding from "@/branding.json"

// types
import { CategoryInfo } from "./types"

export const checkboxInfo: CategoryInfo = {
  title: "Checkbox",
  description: [
    "Upgrade your forms with a flexible and easy-to-use checkbox component. Built with Tailwind CSS, shadcn ui, and Base UI, it keeps interactions smooth and works well with keyboard navigation.",
    "Grab the code and use it in your project instantly.",
  ],
  whatIsHeading: `What is ${branding.brandName} Checkbox?`,
  whatIsDescription: [
    `${branding.brandName} Checkbox is a simple form component used when you need to toggle something on/off or let users pick multiple options from a list. It’s built on using shadcn UI and follows Base UI principles, so things like checked states, indeterminate behavior, and native input handling just work properly without extra effort.`,
    "One big difference here is that it’s not packed inside an npm package. You get the actual code directly in your project, which means you can change the structure, customize, and extend the DOM structure and SVGs however you need.",
    "Styling is done with Tailwind CSS, so managing focus rings, disabled states, and even custom check animations feels straightforward. No need to override heavy third-party CSS.",
  ],
  variantsHeading: "Popular Checkbox Variants",
  variants: [
    "Default . Standard square checkbox for forms and settings",
    "With Label . Checkbox tightly coupled with a clickable text label for better hit targets",
    "Indeterminate . Mixed state checkbox often used for 'select all' group functionality",
    "Card Checkbox . Large, visually distinct selectable cards for premium forms",
    "Disabled . Read-only state with muted styling and blocked interactions",
  ],
  whyUseHeading: `Why ${branding.brandName} Checkbox?`,
  whyUseDescription: [
    `${branding.brandName} Checkbox abstracts away the frustrating cross-browser inconsistencies of native HTML checkboxes. It follows Base UI principles, ensuring that the component remains fully accessible to screen readers, handles spacebar toggles flawlessly, and manages aria-checked states automatically.`,
    "Since the code lives completely inside your project, there is absolutely zero dependency lock-in. You have total control over the component architecture, making it trivial to swap out checkmark icons, change animation durations, or integrate with complex form validation libraries like React Hook Form or Zod.",
    "It works smoothly with Tailwind CSS and CVA (class-variance-authority). This guarantees that whether you are using sm, md, or lg checkboxes, the sizing, padding, and focus rings automatically maintain a cohesive, type-safe design system.",
  ],
  featuresHeading: `Features of ${branding.brandName} Checkbox`,
  features: [
    "Anatomical Base UI Roots. Built on Base UI primitives for industry-standard accessibility, ensuring perfect screen reader announcements.",
    "Zero Dependency Lock-in. Direct source access allows for deep visual customization without fighting library-specific CSS selectors.",
    "Advanced State Management. Native support for checked, unchecked, and indeterminate states with distinct, animatable visual cues.",
    "Accessible Focus Rings. Smart focus management using Tailwind's focus-visible utilities to ensure keyboard users have clear navigation trails.",
    "Type-Safe Composition. Powered by TypeScript and CVA to seamlessly distribute size and color variant properties safely.",
  ],
  integrationHeading: "Integration & Compatibility",
  integrationDescription: [
    `${branding.brandName} Checkbox is designed for highly composable form architectures. It seamlessly supports integration into complex form layouts without disrupting native HTML submission logic.`,
    "You can effortlessly integrate it into advanced layouts such as:",
  ],
  integrationList: [
    "Multi-select Data Table Rows",
    "Complex Application Settings",
    "Terms of Service Agreements",
    "E-commerce Filter Sidebars",
  ],
  integrationNote:
    "It also fully respects your global design system. If you update your primary colors, border radius, or ring offsets in your Tailwind configuration, the Checkbox will automatically inherit and reflect those changes instantly.",
  faqs: [],
}
