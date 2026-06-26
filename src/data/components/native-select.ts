// projects imports
import branding from "@/branding.json"

// types
import { CategoryInfo } from "./types"

export const nativeSelectInfo: CategoryInfo = {
  title: "Native Select",
  description: [
    "Browse the Tailwind CSS Native Select examples to build responsive form controls with native behavior and modern styling",
  ],
  whatIsHeading: `What is ${branding.brandName} Native Select?`,
  whatIsDescription: [
    `${branding.brandName} Native Select is a version of the HTML select element. It helps your web app look good on devices.`,
    "This is done by letting mobile operating systems like iOS and Android use their highly optimized picker interfaces.",
    `${branding.brandName} Native Select is different from UI libraries. You get the code in your project. This means you can easily change, customize and add to it as you need.`,
    "The styling is done using Tailwind CSS. This thing makes it easy to change how it looks in the browser. It can add custom icons and manage focus without needing a lot of JavaScript code.",
    `${branding.brandName} Native Select uses Tailwind CSS to make these changes and helps to make the select element look good and work well.`,
  ],
  variantsHeading: "Popular Native Select Variants",
  variants: [
    "Default: Standard styled select dropdown for forms",
    "With Floating Label: Select with an animated label that moves out of the way on focus",
    "Error State: Select displaying clear visual indicators (red borders) when validation fails",
    "Disabled: Read-only state with muted styling and blocked interactions",
    "Ghost: Minimalist select with no background or borders until focused",
  ],
  whyUseHeading: `Why ${branding.brandName} Native Select?`,
  whyUseDescription: [
    `${branding.brandName} Native Select avoids the massive JavaScript overhead and accessibility pitfalls of fully custom JS-driven dropdowns.`,
    "For many forms especially on mobile devices, users prefer the native spinning wheels or bottom sheets provided by their operating system.",
    "Native Select component gives the best of both worlds: beautiful styling on the page and also perfect native behavior when clicked.",
    "There is absolutely zero dependency lock-in. You have total control over the component architecture that makes it easy to swap out the dropdown arrow icon, adjust padding or integrate with form validation libraries like React Hook Form.",
    "It works well with Tailwind CSS and CVA (class-variance-authority) that guarantees inputs and selects maintain a unified, type-safe design system side-by-side.",
  ],
  featuresHeading: `Features of ${branding.brandName} Native Select`,
  features: [
    "Native OS Performance: Zero JavaScript required for overlay positioning or state management.",
    "Zero Dependency Lock-in: Direct source access allows for deep visual customization of the wrapper shell.",
    "Custom Caret Icons: Hides the ugly default browser arrow and replaces it with a fully stylable SVG icon.",
    "Accessible Focus Rings: Smart focus management using Tailwind's focus-visible utilities.",
    "Type-Safe Composition: Powered by TypeScript and CVA to ensure size and variant consistency with standard Text Inputs.",
  ],
  integrationHeading: "Integration and Compatibility",
  integrationDescription: [
    `${branding.brandName} Native Select is designed for highly performant form architectures. It seamlessly supports standard HTML form submission and integrates flawlessly with any validation tool.`,
    "You can effortlessly integrate it into layouts such as:",
  ],
  integrationList: [
    "Mobile Checkout Forms",
    "Application Settings Panels",
    "Date and Time Pickers (Month/Year selection)",
    "Fast-loading Landing Page Lead Forms",
  ],
  integrationNote:
    "It stays fully aligned with the global design system. When primary colors, border radius, or ring offsets are updated in Tailwind CSS config, the Native Select automatically inherits those changes and keeps the styling consistent across the interface.",
  faqs: [],
}
