// projects imports
import branding from "@/branding.json";

// types
import { CategoryInfo } from "./types";

export const navigationMenuInfo: CategoryInfo = {
  title: "Navigation Menu",
  description: [
    "Create elegant website headers with a powerful Navigation Menu built on Tailwind CSS and Base UI. Ensure seamless mega menu animations, browse and copy the code to get started."
  ],
  whatIsHeading: `What is ${branding.brandName} Navigation Menu?`,
  whatIsDescription: [
    `${branding.brandName} Navigation Menu helps create polished website headers with advanced navigation patterns. It includes smooth animated indicators and expandable mega menus that resize dynamically depending on the content.`,
    "Built using shadcn/ui components and Base UI architecture, it handles interactive states and viewport transitions efficiently.",
    "The implementation is fully open inside the project, making it simple to adjust behavior based on design needs. From changing dropdown layouts to refining interaction patterns, everything stays easy to control.",
    "Tailwind CSS styling makes it easier to handle complex dropdown alignment, animations, and responsive navigation across devices."
  ],
  variantsHeading: "Popular Navigation Menu Variants",
  variants: [
    "Standard Links: Simple horizontal navigation bar with direct links",
    "Mega Menu: Wide, multi-column dropdown panels triggered by hovering a primary link",
    'Viewport-Constrained: A single animated dropdown "viewport" that resizes smoothly as the user hovers between different tabs',
    "With Icon Grids: Mega menus featuring complex grids of icons and descriptions",
    "Responsive: Navigation that seamlessly collapses into a mobile hamburger menu on small screens"
  ],
  whyUseHeading: `Why ${branding.brandName} Navigation Menu?`,
  whyUseDescription: [
    "Animating a dropdown panel resizing dynamically as the user hovers between different tabs, similar to Stripe’s navigation, is a premium level interaction that is difficult to implement correctly.",
    `${branding.brandName} Navigation Menu uses Base UI’s viewport engine to manage these layout calculations and deliver smooth transform based animations.`,
    "Having direct access to the source makes customization straightforward. You can integrate routing components like Next.js <Link>, redesign menu structures, or fine tune interaction behavior without fighting any library constraints.",
    "It works smoothly with Tailwind CSS, helping your site headers stay visually consistent and aligned with modern design standards."
  ],
  featuresHeading: `Features of ${branding.brandName} Navigation Menu`,
  features: [
    "Fluid Viewport Animations: The dropdown container animates its width and height dynamically based on the active content inside.",
    "Hover Intent Delays: Smart logic prevents menus from opening or closing instantly if the user's mouse accidentally brushes past a trigger.",
    "Zero Dependency Lock-in: Direct source access allows for deep structural customization of the mega menus.",
    "Keyboard Navigation: Full support for Tab and Enter to ensure complex mega menus remain perfectly accessible.",
    "Animated Indicators: Optional tracking lines that smoothly slide beneath the active navigation item."
  ],
  integrationHeading: "Integration and Compatibility",
  integrationDescription: [
    `${branding.brandName} Navigation Menu is the flagship component for building premium marketing sites and complex SaaS headers.`,
    "You can effortlessly integrate it into advanced layouts such as:"
  ],
  integrationList: [
    "E-commerce Category Headers",
    "Marketing Site Global Navigation",
    "Software Documentation Portals",
    "Enterprise Application Dashboards"
  ],
  integrationNote:
    "It seamlessly adapts to your design system. When you adjust accent colors, backdrop blur, or spacing values in Tailwind, the Navigation Menu updates automatically to match.",
  faqs: []
};
