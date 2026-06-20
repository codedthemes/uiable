// projects imports
import branding from "@/branding.json";

// types
import { CategoryInfo } from "./types";

export const tabsInfo: CategoryInfo = {
  title: "Tabs",
  description: [
    "Organize dense information efficiently with accessible Tabs built on Tailwind CSS and Base UI, ensuring smooth keyboard navigation with ready to use code."
  ],
  whatIsHeading: `What is ${branding.brandName} Tabs?`,
  whatIsDescription: [
    `${branding.brandName} Tabs is a structural component consisting of layered sections of content (tab panels). It displays exactly one panel of content at a time, determined by the currently active tab trigger. Built using shadcn/ui components and Base UI principles, it manages complex state tracking and roving focus automatically.`,
    "There is no external package boundary, as the entire implementation resides in the codebase. This allows full flexibility in adjusting structure, extending behavior, or customizing animations as required.",
    "Tailwind CSS handles styling, including active states, disabled conditions, and smooth content switching without reliance on external CSS overrides."
  ],
  variantsHeading: "Popular Tabs Variants",
  variants: [
    "Default (Underline) . Standard tabs where the active item is indicated by a colored bottom border",
    "Pill / Segmented Control . Tabs styled as a connected toggle group with a sliding background pill",
    "Vertical . Sidebar-style tabs oriented vertically, perfect for complex settings pages",
    "With Icons . Tab triggers featuring leading icons for quicker visual scanning"
  ],
  whyUseHeading: `Why ${branding.brandName} Tabs?`,
  whyUseDescription: [
    "Building tabs seems like a quick weekend task until accessibility enters the chat. The official WAI-ARIA pattern actually dictates using Left/Right arrow keys for navigation, reserving the Tab key for moving out of the tab list entirely.",
    `Implementing this "roving focus" manually is a tedious exercise in focus management and keyboard event listeners, but using Base UI allows ${branding.brandName} Tabs to handle that complex accessibility plumbing right out of the box, ensuring screen readers and keyboard users get a flawless experience without extra overhead.`,
    "Because the component code lives directly within the project repository, full control over the architecture remains intact with zero dependency lock-in. This thing makes it easy to inject Framer Motion for smooth sliding layout animations, tweak the flexbox layouts, or sync the active state directly with URL routing.",
    "Furthermore, the setup plays perfectly with Tailwind CSS, guaranteeing that tab interfaces automatically maintain a cohesive, type-safe design system globally without the need to fight opinionated library styles."
  ],
  featuresHeading: `Features of ${branding.brandName} Tabs`,
  features: [
    "Roving Focus Management: Automatically handles complex Arrow key routing between tab triggers.",
    "Zero Content Shift: Renders and hides content panels cleanly without causing jarring page layout shifts.",
    "Anatomical Base UI Roots: Built on Base UI primitives for industry-standard accessibility.",
    "Zero Dependency Lock-in: Direct source access allows for deep visual customization of the active indicators.",
    "Type-Safe Composition: Powered by TypeScript and CVA to seamlessly distribute context properties to all child panels."
  ],
  integrationHeading: "Integration and Compatibility",
  integrationDescription: [
    `${branding.brandName} Tabs is an essential pattern for condensing massive amounts of information into a single digestible view.`,
    "You can effortlessly integrate it into advanced layouts such as:"
  ],
  integrationList: [
    "Application Settings and Preferences Panels",
    "User Profile Pages (e.g., Posts, Likes, About)",
    "Dashboard Data Views (e.g., Daily, Weekly, Monthly)",
    "E-commerce Product Details (e.g., Description, Reviews, Specs)"
  ],
  integrationNote:
    "It also fully respects your global design system. If you update your primary accent colors, border radii, or spacing variables in your Tailwind configuration, the Tabs will automatically inherit and reflect those changes instantly.",
  faqs: []
};
