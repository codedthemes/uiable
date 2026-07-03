// projects imports
import branding from "@/branding.json";

// types
import { CategoryInfo } from "./types";

export const alertInfo: CategoryInfo = {
  title: "Alert",
  description: [
    "Check it out, copy the code, and quickly add clean alert messages to your layout. Built with Tailwind CSS, it makes important information easy to notice."
  ],
  whatIsHeading: `What is ${branding.brandName} Alert?`,
  whatIsDescription: [
    `${branding.brandName} Alert is a non-intrusive banner component used to communicate system states, warnings, or informational messages directly inline within the page layout.`,
    "Unlike traditional UI libraries, this component is not locked inside an npm package. You get the actual source code directly inside your project, allowing you to edit, customize, and extend the DOM structure and icon placements however you need.",
    "It is styled using Tailwind CSS, effortlessly handling complex vertical alignment between icons and text, varying background tints, and border styles without the hassle of overriding rigid third-party CSS."
  ],
  variantsHeading: "Popular Alert Variants",
  variants: [
    "Default (Informational) . Neutral blue or gray alert for general system information",
    "Success . Green-tinted alert indicating a positive outcome or completed action",
    "Warning . Yellow/Orange alert used to caution users before proceeding",
    "Destructive (Error) . Red-tinted alert highlighting critical failures or destructive consequences",
    "With Icon . Alert featuring a leading SVG icon for quicker visual recognition"
  ],
  whyUseHeading: `Why ${branding.brandName} Alert?`,
  whyUseDescription: [
    `Standardizing inline messaging across an application ensures users quickly recognize when something requires their attention. Instead of building random div boxes with red text every time an error occurs, ${branding.brandName} Alert provides a mathematically perfect, semantic container.`,
    "Since the code lives completely inside your project, there is absolutely zero dependency lock-in. You have total control over the component architecture, making it trivial to inject custom close buttons, add animated entry transitions, or enforce strict branding colors.",
    "It works smoothly with Tailwind CSS and CVA (class-variance-authority). This guarantees that whether you are displaying a minor info notice or a massive system failure warning, the padding, typography, and contrast automatically maintain a cohesive, type-safe design system."
  ],
  featuresHeading: `Features of ${branding.brandName} Alert`,
  features: [
    'Semantic ARIA Roles. Utilizes standard role="alert" attributes to ensure screen readers announce critical messages immediately.',
    "Perfect Icon Alignment. Uses flexbox and strictly calculated line-heights to ensure icons align perfectly with the first line of text.",
    "Zero Dependency Lock-in. Direct source access allows for deep visual customization.",
    "Pure CSS Execution. Zero JavaScript overhead ensures blazing fast rendering.",
    "Type-Safe Composition. Powered by TypeScript and CVA to seamlessly distribute color and style variant properties safely."
  ],
  integrationHeading: "Integration & Compatibility",
  integrationDescription: [
    `${branding.brandName} Alert is designed for highly communicative UI architectures. It seamlessly acts as the primary feedback mechanism within page layouts.`,
    "You can effortlessly integrate it into advanced layouts such as:"
  ],
  integrationList: [
    "Form Submission Error Summaries",
    "Application Maintenance and Downtime Warnings",
    "Empty State Suggestions",
    "Payment Success Confirmations"
  ],
  integrationNote:
    "It also fully respects your global design system. If you update your primary status colors (success, destructive, warning) or border rigid in your Tailwind configuration, the Alerts will automatically inherit and reflect those changes instantly.",
  faqs: []
};
