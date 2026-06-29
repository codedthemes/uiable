// projects imports
import branding from "@/branding.json"

// types
import { CategoryInfo } from "./types"

export const comboboxInfo: CategoryInfo = {
  title: "Combobox",
  description: [
    "Build smarter forms with a searchable Combobox using Tailwind CSS, shadcn ui, and Base UI. Browse examples and copy the code to build faster.",
  ],
  whatIsHeading: `What is ${branding.brandName} Combobox?`,
  whatIsDescription: [
    `${branding.brandName} Combobox is an advanced form input component that merges a text input with a dropdown list, giving users the ability to quickly filter and select from large datasets. Built with shadcn ui components and Base UI principles, it handles complex keyboard focus trapping, search filtering, and overlay positioning with grace.`,
    "This component is not locked inside a npm package, as is the case with traditional UI libraries. You get the actual source code right inside your project so you can edit, customize and extend the search logic or dropdown structure however you need.",
    "It's styled with Tailwind CSS. It removes the hassle of styling floating popovers, active selection states, and custom scrollbars, providing you a clean and consistent design language.",
  ],
  variantsHeading: "Popular Combobox Variants",
  variants: [
    "Default: Standard searchable dropdown for selecting a single option",
    "Multi-Select: Combobox allowing multiple selections with removable tag badges",
    "Async Loading: Combobox with loading spinners for fetching remote API data",
    "Grouped Items: Searchable dropdown with options categorized by distinct headers",
    "With Avatars: Rich option list displaying user avatars or icons alongside text",
  ],
  whyUseHeading: `Why ${branding.brandName} Combobox?`,
  whyUseDescription: [
    `${branding.brandName} Combobox resolves the intense engineering complexity of building custom selects from scratch specifically handling floating overlay positioning and focus management. It follows Base UI principles, ensuring that keyboard users can use arrow keys to navigate options and escape to close, while screen readers correctly interpret the aria-expanded and aria-activedescendant attributes.`,
    "Since the code lives completely inside your project, there is absolutely zero dependency lock-in. You have total control over the component architecture, making it trivial to inject custom debounce logic, alter the empty state UI, or modify how search results are highlighted.",
    "It's great with Tailwind CSS and CVA (class-variance-authority). It means dropdowns, hover states, and input borders will automatically be cohesive, type safe, and match the rest of project perfectly.",
  ],
  featuresHeading: `Features of ${branding.brandName} Combobox`,
  features: [
    "Anatomical Base UI Roots: Built on Base UI primitives for industry-standard accessibility, ensuring complex dropdown navigation is flawless.",
    "Zero Dependency Lock-in: Direct source access allows for deep structural customization, like adding custom 'Create New' buttons inside the list.",
    "Smart Positioning: Integrates overlay positioning to ensure dropdowns never clip outside the viewport or get hidden by overflow: hidden.",
    "Keyboard Optimized: Full support for Up, Down, Enter, and Escape keys to navigate and select options rapidly.",
    "Type-Safe Composition: Powered by TypeScript and CVA to seamlessly distribute styling properties to both the trigger input and the dropdown list.",
  ],
  integrationHeading: "Integration & Compatibility",
  integrationDescription: [
    `${branding.brandName} Combobox is meant for very composable UI architectures. It also integrates smoothly with external form libraries such as React Hook Form and state management tools.`,
    "You can easily embed it into advanced layouts such as:",
  ],
  integrationList: [
    "Country and Region Selectors",
    "Relational Database Item Pickers",
    "Tagging and Categorization Systems",
    "Complex Reporting Filters",
  ],
  integrationNote:
    "It even fully respects your global design system. Edit your surface colors, text sizing or border radius in your tailwind configuration and the combobox will inherit those changes and reflect it instantly.",
  faqs: [],
}
