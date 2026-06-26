// projects imports
import branding from "@/branding.json"

// types
import { CategoryInfo } from "./types"

export const labelInfo: CategoryInfo = {
  title: "Label",
  description: [
    "Browse the Tailwind CSS Label UI to create cleaner, accessible form experiences with ready to use code",
  ],
  whatIsHeading: `What is ${branding.brandName} Label?`,
  whatIsDescription: [
    `${branding.brandName} Label (also known as a semantic label) is a text component that is strictly linked to a form control. The label automatically toggles (or passes focus) to the input element associated with it when a user clicks on it.`,
    "It is built on Base UI standards and adheres to strict accessibility standards.",
    "This component, unlike traditional UI libraries, is not contained within an npm package. The source code is directly in your project. This allows you to customize and extend the peer states and typography as you see fit.",
    "Tailwind CSS is used to style the entire site. It handles user-selectable protections, peer-disabled states and visual states effortlessly without having to write custom CSS logic.",
  ],
  variantsHeading: "Popular Label Variants",
  variants: [
    "Default: Standard medium-weight text sitting above an input",
    "Required (Asterisk): Label that automatically renders a red asterisk to indicate mandatory fields",
    "Disabled State: Label that turns faded or grayed-out when its associated input is disabled",
    "Inline (For Checkboxes/Radios): Label optimized to sit perfectly centered to the right of small toggle inputs",
  ],
  whyUseHeading: `Why ${branding.brandName} Label?`,
  whyUseDescription: [
    "Using the regular HTML <label> tags just looks easy, but requires manual CSS overriding.",
    "For example: when a user double clicks on a label to focus an input then they often accidentally highlight the label text. It manages user-select: none automatically.",
    "It also utilizes Tailwind’s peer utilities to visually fade the text if the input it is attached to is disabled.",
    "The code stays inside the project so there is no dependency lock-in. One can control the entire component architecture so it’s easy to change font size, spacing or set up custom required field indicators.",
    "Tailwind CSS is easy to use so typography in forms will automatically adjust to a consistent design system.",
  ],
  featuresHeading: `Features of ${branding.brandName} Label`,
  features: [
    "Native Input Toggling: Clicking the label perfectly routes the event to the associated input via htmlFor.",
    "Peer-Disabled Styling: Automatically reduces opacity if the adjacent input field is disabled.",
    "Prevents Text Selection: Uses Tailwind's select-none to prevent frustrating blue highlight blocks on double-clicks.",
    "Zero Dependency Lock-in: Direct source access allows for deep typographic customization.",
    "Anatomical Base UI Roots: Built on Base UI primitives for industry-standard accessibility.",
  ],
  integrationHeading: "Integration and Compatibility",
  integrationDescription: [
    `${branding.brandName} Labels are the most commonly used typography components within data entry applications.`,
    "It can be easily integrated into advanced layouts, such as:",
  ],
  integrationList: [
    "Text Inputs Textareas and Select Menus",
    "Checkbox Toggles Radio Group Options",
    "Labels for Switch / Toggle Components",
    "Multi-step forms that require complex multi-step processes",
  ],
  integrationNote:
    "The Label component also respects the global design system. The Label component will inherit any changes you make to your Tailwind configuration. This includes font families, weights, and primary text colors.",
  faqs: [],
}
