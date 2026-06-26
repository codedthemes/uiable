// projects imports
import branding from "@/branding.json"

// types
import { CategoryInfo } from "./types"

export const skeletonInfo: CategoryInfo = {
  title: "Skeleton",
  description: [
    "Build better loading states with a customizable Skeleton loader built on Tailwind CSS, ensuring users stay engaged during data retrieval.",
  ],
  whatIsHeading: `What is ${branding.brandName} Skeleton?`,
  whatIsDescription: [
    `${branding.brandName} Skeleton is a loading component that mimics the structure of actual content while the data is being loaded from an API or database. It ensures a quicker user experience by presenting something visually than nothing at all.`,
    "It is different from most UI libraries since it does not come packed in an npm package. Instead, the source code lies within the project itself, giving users full flexibility to alter the structure, control the animations, and even restructure the entire skeleton.",
    "Using Tailwind CSS, it takes care of the animation cycle, spacing, and contrast without requiring any keyframe customization or CSS logic.",
  ],
  variantsHeading: "Popular Skeleton Variants",
  variants: [
    "Text Lines . Thin rectangular bars mimicking paragraphs or headers",
    "Avatar (Circular) . Perfectly round circles mimicking user profile pictures",
    "Card Skeleton . A composite of multiple skeletons arranged to look exactly like a loading Card component",
    "Data Table Rows . Repeating horizontal bars mimicking rows of data loading into a grid",
  ],
  whyUseHeading: `Why ${branding.brandName} Skeleton?`,
  whyUseDescription: [
    "Loading spinners are great for small buttons, but when an entire page is fetching data, a spinner provides no context. Skeleton screens drastically improve perceived performance by giving the user's brain an immediate structural blueprint of what is about to appear.",
    `More importantly, ${branding.brandName} Skeleton reserves the exact DOM dimensions, completely eliminating jarring Cumulative Layout Shifts (CLS) when the real data finally arrives.`,
    "Because the code runs entirely within your application, you have no dependency lock-in whatsoever. You can fully control the architecture of the components, and changing pulse speed, switching background colors when using dark mode, or creating your own custom skeletons for complex components becomes an incredibly simple task.",
    "It integrates seamlessly with Tailwind CSS, meaning that your loading screens will always be part of your design system and match your typography and font sizes.",
  ],
  featuresHeading: `Features of ${branding.brandName} Skeleton`,
  features: [
    "Infinite CSS Pulse Animation: Uses native Tailwind animate-pulse for smooth, low-CPU rendering.",
    "Zero Layout Shifts: Prevents UI jumping by occupying the exact physical space the real content will take.",
    "Pure CSS Execution: Zero JavaScript overhead ensures instant rendering before data even begins to fetch.",
    "Zero Dependency Lock-in: Direct source access allows for deep visual customization.",
    "Highly Composable: Designed to be easily shaped using standard Tailwind w- and h- utilities.",
  ],
  integrationHeading: "Integration and Compatibility",
  integrationDescription: [
    `${branding.brandName} Skeleton is a crucial UX pattern for data-driven architectures and Single Page Applications (SPAs).`,
    "You can effortlessly integrate it into advanced layouts such as:",
  ],
  integrationList: [
    "Dashboard Initial Loads",
    "Infinite Scrolling Social Feeds",
    "Complex Data Table Fetching States",
    "E-commerce Product Grid Suspense Boundaries",
  ],
  integrationNote:
    "It is also completely aligned with your design system globally. In case you have made some changes to your muted background colors or border radiuses in your Tailwind setup, Skeletons will pick that up immediately.",
  faqs: [],
}
