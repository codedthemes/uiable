// projects imports
import branding from "@/branding.json";

// types
import { CategoryInfo } from "./types";

export const spinnerInfo: CategoryInfo = {
  title: "Spinner",
  description: [
    "Provide immediate visual feedback for asynchronous operations with a fully customizable Spinner, styled entirely with Tailwind CSS for smooth and consistent loading states."
  ],
  whatIsHeading: `What is ${branding.brandName} Spinner?`,
  whatIsDescription: [
    `The ${branding.brandName} Spinner is a minimalistic visual cue that indicates when a process is underway, including activities like loading data, submitting forms, or performing background tasks. It helps communicate system activity without disrupting the interface.`,
    `The difference between the ${branding.brandName} Spinner and other popular UI libraries is that it does not depend on third-party icons but is built-in into the application itself. Thus, the developer can fully customize the SVG code, animation, and rotation speed.`,
    "Created using Tailwind CSS, the library makes it easier to implement centered loadings and infinite animations."
  ],
  variantsHeading: "Popular Spinner Variants",
  variants: [
    "Default (Circular) . Standard infinitely rotating SVG circle with a highlighted edge",
    'Dots . Three dots that pulse or bounce sequentially (often used for "typing" indicators)',
    "Pulse . A solid shape that scales up and fades out infinitely",
    `Inside Button . Spinner specifically sized and aligned to replace text or icons inside a loading ${branding.brandName} Button`
  ],
  whyUseHeading: `Why ${branding.brandName} Spinner?`,
  whyUseDescription: [
    `Relying on random GIFs or massive icon libraries just to show a loading state is inefficient. ${branding.brandName} Spinner provides a standardized, brand-aligned loading indicator across your entire application using a few lines of inline SVG and CSS.`,
    "As everything resides fully within your project, there is absolutely no risk of any kind of dependency lock-in. You have full freedom to change the architectural makeup of the component, allowing you to easily change the SVG path to fit your logo, tweak the animate-spin animation duration, or modify the stroke thickness.",
    "It plays well with Tailwind CSS. This ensures that regardless of whether you’re placing a small w-4 h-4 spinner in your submit button or a large w-12 h-12 spinner on your dashboard, it adheres to a consistent, mathematically flawless design language."
  ],
  featuresHeading: `Features of ${branding.brandName} Spinner`,
  features: [
    "Pure SVG & CSS: Zero JavaScript overhead ensures instant rendering and prevents main-thread blocking.",
    "Infinite Native Animation: Utilizes native Tailwind animate-spin utilities for smooth, low-CPU rendering.",
    "Zero Dependency Lock-in: Direct source access allows for deep visual customization.",
    "Perfect Centering: Pre-calibrated flexbox or absolute positioning ensures the spinner never misaligns text.",
    "Type-Safe Composition: Easily accepts standard Tailwind text color classes (text-primary, text-muted-foreground) to colorize the SVG stroke dynamically."
  ],
  integrationHeading: "Integration and Compatibility",
  integrationDescription: [
    `${branding.brandName} Spinner is the essential fallback visual for asynchronous operations across your architecture.`,
    "You can effortlessly integrate it into layouts such as:"
  ],
  integrationList: [
    "Form Submit Buttons (Disabling the button and showing a spinner)",
    "Infinite Scroll Footers in Data Tables or Feeds",
    "Initial Page Load Suspense Boundaries",
    "Async Autocomplete or Combobox Search Indicators"
  ],
  integrationNote:
    "No hardcoded values here. By utilizing Tailwind’s currentColor, the Spinner automatically inherits and reflects your global primary accents and typography scale instantly.",
  faqs: []
};
