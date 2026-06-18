// projects imports
import branding from "@/branding.json";

// types
import { CategoryInfo } from "./types";

export const accordionInfo: CategoryInfo = {
  title: "Accordion",
  description: [
    "Browse the accordion, copy the code, and quickly turn long content into clean, collapsible sections."
  ],
  whatIsHeading: `What is ${branding.brandName} Accordion?`,
  whatIsDescription: [
    `${branding.brandName} Accordion lets you organize content into stacked sections where each heading can be clicked to show or hide its content. It’s built using shadcn ui components and follows Base UI principles, so things like state tracking and smooth height animations work seamlessly in the background.`,
    "This isn’t tied to any npm package. The full source code lives inside the project. It gives complete freedom to adjust the structure, tweak behaviors, or refine animations the way individual want.",
    "It uses Tailwind CSS for styling so handling chevron movement, borders, and active states feels straightforward. There’s no need to deal with heavy or restrictive third-party styles, everything stays flexible and easy to manage."
  ],
  variantsHeading: "Popular Accordion Variants",
  variants: [
    "Single . Strict accordion where opening one panel automatically closes the previously opened one",
    "Multiple . Flexible accordion allowing several panels to remain open simultaneously",
    "Flush . Accordion with no outer borders, designed to sit seamlessly inside a Card or Sidebar",
    "With Icons . Triggers featuring leading icons for quicker visual scanning",
    "Disabled . Read-only panels that cannot be toggled open or closed"
  ],
  whyUseHeading: `Why ${branding.brandName} Accordion?`,
  whyUseDescription: [
    `Animating the height of an element from 0 to auto using pure CSS is technically impossible. Standard workarounds involve clunky JavaScript height calculations. ${branding.brandName} Accordion solves this elegantly by utilizing Base UI's CSS variables, enabling butter-smooth, native CSS height transitions effortlessly.`,
    "Since the code lives completely inside your project, there is absolutely zero dependency lock-in. One has total control over the component architecture, making it trivial to change the Chevron icon, alter the animation duration or inject custom backgrounds on active panels.",
    "It works smoothly with Tailwind CSS. This guarantees that your collapsible interfaces automatically maintain a cohesive, type-safe design system globally."
  ],
  featuresHeading: `Features of ${branding.brandName} Accordion`,
  features: [
    "Fluid Height Animations. Natively transitions the container height for an ultra-premium feel without JavaScript jank.",
    "Anatomical Base UI Roots. Built on Base UI primitives for industry-standard accessibility.",
    "Keyboard Accessible. Full support for traversing headings with Arrow keys and toggling with Space/Enter.",
    "Zero Dependency Lock-in. Direct source access allows for deep visual customization.",
    'Single/Multi Management. Easily configure behavior using the type="single" or type="multiple" props natively.'
  ],
  integrationHeading: "Integration & Compatibility",
  integrationDescription: [
    `${branding.brandName} Accordion is an essential pattern for reducing visual clutter on text-heavy pages.`,
    "You can effortlessly integrate it into advanced layouts such as:"
  ],
  integrationList: [
    "Frequently Asked Questions (FAQ) Pages",
    "Complex Settings Grouping",
    "Multi-step Checkout Forms",
    "Nested Sidebar Navigation Menus"
  ],
  integrationNote:
    "It also fully respects your global design system. If you update your text colors, border styles, or spacing variables in your Tailwind configuration, the Accordion will automatically inherit and reflect those changes instantly.",
  faqs: []
};
