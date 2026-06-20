// projects imports
import branding from "@/branding.json";

// types
import { CategoryInfo } from "./types";

export const fieldInfo: CategoryInfo = {
  title: `${branding.brandName} Field`,
  description: [
    "Browse the Tailwind CSS Field examples and copy the code to design consistent form layouts"
  ],
  whatIsHeading: `What is ${branding.brandName} Field?`,
  whatIsDescription: [
    "The `UiableField` component is a wrapper around structure that groups form inputs and their labels, helper text, and validation error messages into a single component.",
    "This is not locked inside a npm package like the traditional UI libraries. You get the actual source code inside your project directly so you can edit, customize and extend the flexbox layout and error alignments as you need.",
    "It’s completely styled with Tailwind CSS, eliminating the pain of vertically stacked forms and dealing with dynamically injected error messages without breaking page layouts."
  ],
  variantsHeading: "Popular Field Variants",
  variants: [
    "Vertical Layout: Standard layout where the label sits directly above the input",
    "Horizontal Layout: Layout where the label sits to the left of the input (ideal for dense settings panels)",
    "With Error State: Field dynamically rendering validation text beneath the input in a destructive red color",
    "With Helper Text: Field providing a subtle hint or instruction below the input",
    "Required Indicator: Field automatically rendering an asterisk (*) next to the label"
  ],
  whyUseHeading: `Why ${branding.brandName} Field?`,
  whyUseDescription: [
    `Misaligned form elements are common when developers manually stack inputs, labels, and error messages by hand with raw div tags. ${branding.brandName} Field gives you a strict flexbox layout, so all forms in your app are mathematically perfect.`,
    "No dependency lock-in whatsoever, because the code resides 100% within your project. You have total control over the component architecture, so changing the gap space between labels and inputs is trivial, as is animating the error message sliding in.",
    "It works great with Tailwind CSS. This way, whether you’re rendering a generic text input, a select dropdown, or a complex combobox, the surrounding field structure automatically enforces a cohesive design system."
  ],
  featuresHeading: `Features of ${branding.brandName} Field`,
  features: [
    "Semantic Grouping: Keeps related form pieces tightly coupled in the DOM.",
    "Accessible ID Linking: Natively designed to easily link htmlFor on the label to the id of the input.",
    "Built-in Error State Styling: Standardizes how and where validation errors appear.",
    "Zero Dependency Lock-in: Direct source access allows for deep layout customization.",
    "Highly Composable: Works flawlessly with any custom or native input element."
  ],
  integrationHeading: "Integration & Compatibility",
  integrationDescription: [
    `${branding.brandName} Field is the atomic building block for all form architectures within your application.`,
    "You can effortlessly integrate it into advanced layouts such as:",
    "It also fully respects your global design system. If you update your destructive error colors, typography sizing, or spacing variables in your Tailwind configuration, the Field component will automatically inherit and reflect those changes instantly."
  ],
  integrationList: [
    "Complex User Registration and Login Forms",
    "E-commerce Checkout Addresses and Payment Details",
    "Application Settings and Preferences Panels",
    "Multi-step Wizard Forms"
  ],
  integrationNote:
    "It also fully respects your global design system. If you update your destructive error colors, typography sizing, or spacing variables in your Tailwind configuration, the Field component will automatically inherit and reflect those changes instantly.",
  faqs: []
};
