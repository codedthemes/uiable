// projects imports
// projects imports
import branding from "@/branding.json"

// types
import { CategoryInfo } from "./types"

export const cardInfo: CategoryInfo = {
  title: "Card",
  description: [
    "Build professional dashboard sections with a lightweight and customizable Card component. Browse demos, copy the code, and speed up your UI workflow.",
  ],
  whatIsHeading: `What is ${branding.brandName} Card?`,
  whatIsDescription: [
    `${branding.brandName} Card is a flexible layout container that groups related content and actions within a clean and organized layout. It has common sections used such as Header, Title, Description, Content and Footer so you can easily create consistent UI layouts across dashboards and websites.`,
    "You can fully customize the component to match your design needs, from layout and spacing to your own structure and styles. The source code is directly in the project so editing and extending the component feels simple and natural.",
    "The component is built entirely with Tailwind CSS and helps to maintain consistency with spacing, borders, background surfaces and overall visual balance without adding unnecessary complexity or heavy JavaScript dependencies.",
  ],
  variantsHeading: "Popular Card Variants",
  variants: [
    "Default . Standard white/dark-surface card with a subtle border and shadow",
    "Interactive . Card with hover effects (lifts up, shadow deepens) indicating it is clickable",
    "With Image Header . Card featuring a full-width image or banner at the top",
    "Dashboard Metric . Compact card optimized for displaying large numbers and sparklines",
    "Ghost/Flat . Card with no shadow and a subtle gray background for nested layouts",
  ],
  whyUseHeading: `Why ${branding.brandName} Card?`,
  whyUseDescription: [
    `Maintaining consistent spacing (padding, margins, gaps) is one of the toughest things about UI design in complex dashboards and lists. ${branding.brandName} Card resolves this pain by offering a pre-calibrated suite of sub-components (CardHeader, CardContent, etc.) that are mathematically perfectly aligned to each other.`,
    "Since the code is entirely within your project, there is absolutely ZERO dependency lock-in. You're in complete control of the component architecture, so it's trivial to change the default padding from p-6 to p-4 globally, or add custom blur backdrops to your glassmorphism designs.",
    "It works great with Tailwind CSS. This way your containers will automatically stay consistent in a design system, adapting nicely to dark mode and mobile screen sizes out of the box.",
  ],
  featuresHeading: `Features of ${branding.brandName} Card`,
  features: [
    "Semantic Sectioning. Provides distinct sub-components (Header, Title, Content, Footer) for clean JSX organization.",
    "Zero Dependency Lock-in. Get straight to the source code to customize the inner workings, without waiting on package updates upstream.",
    "Consistent Padding Math. Carefully curated spacing utilities ensure elements inside the card align beautifully.",
    "Pure CSS Execution. Zero JavaScript overhead ensures instant rendering.",
    "Highly Composable. Designed to wrap literally anything from simple text to complex data tables and charts.",
  ],
  integrationHeading: "Integration & Compatibility",
  integrationDescription: [
    `${branding.brandName} Card is the backbone of most web application interfaces. It is designed to act as the primary surface area for your data.`,
    "You can effortlessly integrate it into advanced layouts such as:",
  ],
  integrationList: [
    "Dashboard Analytics Widgets",
    "E-commerce Product Grids",
    "Blog Post Previews and Feeds",
    "Complex Form Containers and Settings Pages",
  ],
  integrationNote:
    "The component also works smoothly with your existing design system. If you update colors, border radius or shadow styles in your Tailwind setup, every Card automatically stays visually consistent without needing extra changes.",
  faqs: [],
}
