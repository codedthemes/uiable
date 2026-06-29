// projects imports
import branding from "@/branding.json"

// types
import { CategoryInfo } from "./types"

export const buttonInfo: CategoryInfo = {
  title: "Button",
  description: [
    `Browse and use ${branding.brandName} button components built for actions, forms, and state management, powered by Tailwind CSS, shadcn ui, and Base UI.`,
  ],
  whatIsHeading: `What is ${branding.brandName} Button?`,
  whatIsDescription: [
    `${branding.brandName} Button is a customizable button component built using Shadcn UI and Base UI concepts. It uses @base-ui/react/button for handling behavior like focus, keyboard actions, and accessibility.`,
    "Unlike traditional UI libraries, this button is not locked inside a package. You get the actual code inside your project, so you can edit it, customize it, or extend it however you want.",
    "It is styled using Tailwind CSS and uses CVA (class-variance-authority) to manage different styles like size and variants in a clean way.",
  ],
  variantsHeading: "Popular Button Variants",
  variants: [
    "Default . Main button used for primary actions",
    "Outline . Border-only button for secondary actions",
    "Secondary . Less important actions with softer styling",
    "Ghost . Minimal button, no background, shows on hover",
    "Destructive . Red button for delete or risky actions",
    "Link . Looks like a text link but works like a button",
  ],
  whyUseHeading: `Why ${branding.brandName} Button?`,
  whyUseDescription: [
    `${branding.brandName} Button follows the Base UI pattern, where logic and styling are handled separately. It already handles things like keyboard navigation, focus states and ARIA attributes for accessibility. You don’t need to handle these manually, so you can focus more on UI and design.`,
    "At the same time, you still have full control because the code lives inside your project. There is no dependency lock-in, so you can easily customize behavior, styles, or structure based on your needs.",
    "It also works smoothly with Tailwind CSS and CVA (class-variance-authority). This gives you a clean and type-safe way to manage sizes and variants, instead of writing messy conditional strings. As your project grows, it helps maintain a consistent design system, so your sm, md, and lg buttons stay consistent across all screen sizes.",
  ],
  featuresHeading: `Features of ${branding.brandName} Button`,
  features: [
    "Anatomical Base UI Roots. Built on `@base-ui/react` primitives for industry-standard accessibility and robust event handling.",
    "Zero Dependency Lock-in. Direct source access allows for deep customization without waiting for upstream package updates.",
    "Dynamic Size Matrix. Includes internal variants for `xs`, `sm`, `lg`, and dedicated `icon` sizes to maintain vertical rhythm.",
    "Smart Icon Composition. Optimized SVG handling with `data-icon` attributes to automatically adjust padding when icons are present.",
    "State-Aware Logic. Built-in support for `disabled` and `aria-expanded` states with coordinated visual feedback.",
    "Type-Safe Variants. Powered by TypeScript and CVA for predictable, compile-time checked styling permutations.",
  ],
  integrationHeading: "Integration & Compatibility",
  integrationDescription: [
    `${branding.brandName} Button is easy to use with other components.`,
    "It supports the asChild pattern, so you can use it with components like Next.js `Link` or custom navigation elements without breaking the DOM hierarchy.",
    "You can use it inside layouts like:",
  ],
  integrationList: ["Card Footer", "Dialog Actions", "Input Groups"],
  integrationNote:
    "It also follows your global styles. So if you change colors in your main CSS file, all buttons will update automatically.",
  faqs: [
    {
      question: "What button variant should I use for the primary action?",
      answer:
        "Use the default (blue) variant for the main action users should take. Secondary variant for alternative actions. Destructive (red) for delete or irreversible actions only.",
    },
    {
      question: "Should buttons be full-width or fixed size?",
      answer:
        "Full-width on mobile and in forms for easier touch targeting. Fixed-width in toolbars and inline contexts. Match your layout and touch target guidelines (44px minimum).",
    },
    {
      question: "How do I show a loading state on a button?",
      answer:
        "Disable the button, show a spinner icon, and optionally change text to 'Saving...' or 'Loading...'. Pair with a disabled prop to prevent duplicate clicks.",
    },
    {
      question: "Can I use a button as a link?",
      answer:
        "Yes, use the link variant or render a button-styled link element. In Next.js, use Link component with asChild prop from Radix Slot.",
    },
    {
      question: "What's the difference between secondary and ghost buttons?",
      answer:
        "Secondary is outlined with moderate contrast. Ghost is minimal, low-contrast, used sparingly in toolbars. Secondary works better for alternate actions.",
    },
    {
      question: "How do I handle button focus states for accessibility?",
      answer:
        "Shadcn applies focus-visible so keyboard users see a ring. Ensure sufficient contrast (AA standard) and test with keyboard navigation.",
    },
    {
      question:
        "How are ReUI button patterns different from isolated component demos?",
      answer:
        "They show buttons inside forms, dialogs, toolbars, and cards so you evaluate hierarchy, spacing, and icon placement in realistic contexts.",
    },
  ],
}
