// projects imports
import branding from "@/branding.json";

// types
import { CategoryInfo } from "./types";

export const toggleInfo: CategoryInfo = {
  title: "Toggle",
  description: [
    "Build intuitive on/off interactions with a customizable Toggle button built on Tailwind CSS and Base UI, ensuring smooth state switching and easy implementation."
  ],
  whatIsHeading: `What is ${branding.brandName} Toggle?`,
  whatIsDescription: [
    `The ${branding.brandName} Toggle is an element for working with binary states like enabling or disabling formatting options (bold/italic) or setting bookmarks. You do not have to include bulky dependencies like npm packages because code itself resides directly into the project.`,
    "That means that the DOM, state, and interaction flow are all under your control from day one.",
    "Tailwind CSS is fully utilized for styling to make it effortless to style hover effects, background colors, changing text color for the active state, and even creating focus rings without using any hacks or battling inflexible third-party styles.",
    "On the internal level, it makes accessibility easier by handling pressing states and focus states automatically. Because you have full access to the source code, adding custom features, such as micro-interactions or adding analytics on clicks, becomes just a few minutes work."
  ],
  variantsHeading: "Popular Toggle Variants",
  variants: [
    "Default . Standard icon-only toggle button",
    "Outline . Toggle with a border that fills with color when active",
    "With Text . Toggle featuring both an icon and a text label",
    "Sized Variants . Small, Default, and Large toggles to match varying UI densities"
  ],
  whyUseHeading: `Why ${branding.brandName} Toggle?`,
  whyUseDescription: [
    `${branding.brandName} Toggle abstracts away the accessibility complexities of binary, two-state buttons. Built on Base UI principles, it ensures screen readers correctly interpret the aria-pressed attribute, announcing whether the option is 'pressed' or 'unpressed' without you having to manually wire up ARIA logic or manage focus states from scratch.`,
    "Because the component file lives completely inside your project, there is zero dependency lock-in. You have total control over the architecture, making it trivial to introduce custom active-state animations, swap out icon sets, or wire the click handler directly into complex local or global state management tools.",
    "It integrates seamlessly with Tailwind CSS and CVA (Class Variance Authority). This guarantees that whether the toggle is active, inactive, hovered, or disabled, its visual styles remain highly predictable, type-safe, and perfectly aligned with your design system's existing utility tokens."
  ],
  featuresHeading: `Features of ${branding.brandName} Toggle`,
  features: [
    "Anatomical Base UI Roots: Built on Base UI primitives for industry-standard accessibility.",
    "Zero Dependency Lock-in: Direct source access allows for deep visual customization of active states.",
    "Semantic ARIA States: Automatically manages aria-pressed based on user interaction.",
    "Accessible Focus Rings: Smart focus management using Tailwind's focus-visible utilities.",
    "Type-Safe Composition: Powered by TypeScript and CVA to seamlessly distribute size and variant properties safely."
  ],
  integrationHeading: "Integration and Compatibility",
  integrationDescription: [
    `${branding.brandName} Toggle is designed for highly composable interactive architectures. It acts as the perfect foundational block for user-driven settings.`,
    "You can effortlessly integrate it into advanced layouts such as:"
  ],
  integrationList: [
    "Rich Text Editor Formatting Bars",
    "Favorite / Bookmark Buttons",
    "Map Layer Toggles (Terrain/Satellite)",
    "Advanced Search Filters"
  ],
  integrationNote:
    "It also fully respects your global design system. If you update your primary accent colors or border radii in your Tailwind configuration, the Toggle will automatically inherit and reflect those changes instantly.",
  faqs: []
};
