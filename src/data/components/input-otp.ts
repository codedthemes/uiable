// projects imports
import branding from "@/branding.json";

// types
import { CategoryInfo } from "./types";

export const inputOtpInfo: CategoryInfo = {
  title: "Input OTP",
  description: [
    "Browse the code and build a secure OTP Input with Tailwind CSS and Base UI for flawless auto-fill and smooth keyboard navigation."
  ],
  whatIsHeading: `What is ${branding.brandName} Input OTP?.,`,
  whatIsDescription: [
    `${branding.brandName} Input OTP is a specialized verification input designed for secure multi-character code entry flows.`,
    "Built using shadcn/ui components and Base UI principles, it handles complex behaviors such as automatic caret progression, cross-field backspace handling, and intelligent paste parsing.",
    "The component is not distributed as a locked dependency. Instead, the full implementation exists inside the codebase, making it fully editable and extensible for different authentication requirements.",
    "Tailwind CSS ensures clean handling of focus transitions and multi-box alignment without external styling conflicts."
  ],
  variantsHeading: "Popular Input OTP Variants",
  variants: [
    "Default: Standard array of separated input boxes for each character",
    "Grouped: Input boxes visually connected together with shared borders",
    "With Separator: OTP input with dashes or symbols between groups (e.g., 123-456)",
    "Masked: Visually hidden values for entering secure pins",
    "Error State: Red borders and shake animations when an invalid code is entered"
  ],
  whyUseHeading: `Why ${branding.brandName} Input OTP?`,
  whyUseDescription: [
    `${branding.brandName} Input OTP is designed to solve the difficult edge cases involved in building multi-field verification inputs, including mobile keyboard quirks, paste events, and caret movement between slots. It also supports native SMS auto-fill on modern mobile devices.`,
    "Unlike traditional component libraries, it is not locked behind an npm package. The full implementation exists in the codebase, allowing complete control over structure and behavior, including slot count and validation logic.",
    "With Tailwind CSS and CVA, styling remains consistent and type-safe, covering focus states, animations, and error borders across all input fields."
  ],
  featuresHeading: `Features of ${branding.brandName} Input OTP`,
  features: [
    'SMS Auto-fill Ready: Properly configured autocomplete="one-time-code" attributes to intercept 2FA texts on mobile devices.',
    "Zero Dependency Lock-in: Direct source access allows for deep visual customization of individual slots.",
    "Advanced Caret Management: Automatically moves focus forward on typing and backward on deletion.",
    "Smart Paste Handling: Intercepts pasted strings and distributes characters across slots instantly.",
    "Type-Safe Composition: Powered by TypeScript and CVA to cleanly manage active and filled states."
  ],
  integrationHeading: "Integration and Compatibility",
  integrationDescription: [
    `${branding.brandName} Input OTP is a composable authentication component designed to plug into complex form systems without friction.`,
    "It can be used in scenarios such as:"
  ],
  integrationList: [
    "Two-factor authentication prompts",
    "OTP-based email or phone verification",
    "Banking or payment confirmation steps",
    "Secure app unlock experiences"
  ],
  integrationNote:
    "It also integrates tightly with the Tailwind design system, meaning any updates to colors, spacing, or focus ring configurations are automatically reflected in the input UI.",
  faqs: []
};
