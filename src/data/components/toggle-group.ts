// projects imports
import branding from "@/branding.json";

// types
import { CategoryInfo } from "./types";

export const toggleGroupInfo: CategoryInfo = {
  title: "Toggle Group",
  description: [
    "Build modern segmented controls with a Toggle Group built on Tailwind CSS and Base UI, optimized for keyboard navigation and clean state management."
  ],
  whatIsHeading: `What is ${branding.brandName} Toggle Group?`,
  whatIsDescription: [
    `The ${branding.brandName} Toggle Group is a structural layout component built on top of shadcn/ui and Base UI primitives. It handles selection states both single (mutually exclusive) and multiple across a collection of toggle buttons.`,
    "Instead of being locked inside a black-box npm package, you own the actual source code. It lives directly in your project, giving you total control over the DOM structure, state management, and keyboard navigation logic.",
    "Styling is handled entirely via Tailwind CSS, solving the classic CSS headache of button groups out of the box. It leverages negative margins and relative positioning on hover/focus to perfectly collapse adjacent borders.",
    "It also applies smart corner-rounding to only the outermost edges of the group, keeping the inner corners perfectly square without requiring hacky CSS overrides."
  ],
  variantsHeading: "Popular Toggle Group Variants",
  variants: [
    "Single Selection . Acts like radio buttons; only one toggle can be active at a time",
    "Multiple Selection . Acts like checkboxes; multiple toggles can be active simultaneously",
    "Outline Group . Bordered toggles where internal borders collapse perfectly",
    "Icon Only . Compact group of icon toggles ideal for toolbars"
  ],
  whyUseHeading: `Why ${branding.brandName} Toggle Group?`,
  whyUseDescription: [
    `${branding.brandName} Toggle Group abstracts away the tedious accessibility requirements of grouping interactive components — specifically the "roving tabindex" pattern. It ensures screen readers announce the group correctly out of the box, while allowing keyboard users to seamlessly navigate between buttons using arrow keys without breaking focus or breaking the page flow.`,
    "Because the source code lives directly in your codebase, there is zero dependency lock-in or black-box frustration. You retain total control over the component architecture, making it so easy to inject custom active-state logic, swap flex layouts, or enforce mandatory selections where a user can't uncheck the last remaining active item.",
    "It is built to play nice with Tailwind CSS and CVA (Class Variance Authority). This makes managing complex visual states, variant combinations, and layout alignments incredibly clean, ensuring the button group naturally adheres to your existing design tokens without fighting rigid third-party CSS."
  ],
  featuresHeading: `Features of ${branding.brandName} Toggle Group`,
  features: [
    "Anatomical Base UI Roots: Built on Base UI primitives for industry-standard accessibility.",
    "Roving Focus Management: Automatically handles complex ArrowLeft and ArrowRight keyboard routing between items.",
    "Zero Dependency Lock-in: Direct source access allows for deep structural customization.",
    'Flexible Value Management: Natively supports both type="single" and type="multiple" state tracking.',
    "Type-Safe Composition: Powered by TypeScript and CVA to seamlessly distribute required context properties to child toggles."
  ],
  integrationHeading: "Integration and Compatibility",
  integrationDescription: [
    `${branding.brandName} Toggle Group is designed for highly composable toolbar architectures. It seamlessly acts as the accessible wrapper around your ${branding.brandName} Toggle components.`,
    "You can effortlessly integrate it into advanced layouts such as:"
  ],
  integrationList: [
    "Text Alignment Controls (Left/Center/Right)",
    "Chart Data Granularity Toggles (Day/Week/Month)",
    "View Switchers (Grid/List/Map)",
    "Application Theme Pickers"
  ],
  integrationNote:
    "It also fully respects your global design system. If you update your primary colors or spacing variables in your Tailwind configuration, the Toggle Group will automatically inherit and reflect those changes instantly.",
  faqs: []
};
