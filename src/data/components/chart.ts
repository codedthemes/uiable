// projects imports
import branding from "@/branding.json";

// types
import { CategoryInfo } from "./types";

export const chartInfo: CategoryInfo = {
  title: "Chart",
  description: [
    "Browse ready-to-use chart examples, copy the code, and build beautiful data visualizations with responsive Chart components powered by Tailwind CSS and Recharts."
  ],
  whatIsHeading: `What is ${branding.brandName} Chart?`,
  whatIsDescription: [
    `${branding.brandName} Chart is a collection of highly customizable data visualization wrappers to easily render complex datasets. Powered by the industry-standard Recharts library and natively styled with Tailwind CSS variables, it connects powerful data logic with your application’s design system.`,
    `${branding.brandName} Chart is different from traditional charting libraries where you have to configure colors with huge JavaScript objects. You get the real wrapper source code right in your project so you can edit and extend the tooltips, axes and legends using familiar Tailwind classes.`,
    "It handles responsive resizing, gorgeous SVG animations & dynamic theme switching (Light/Dark mode) with ease without the trouble of manually updating chart instances."
  ],
  variantsHeading: "Popular Chart Variants",
  variants: [
    "Line Chart . Useful for showing trends of continuous data over time",
    "Bar Chart . Useful for comparing categorical data across groups",
    "Pie / Donut Chart . Nice for showing percentage distributions",
    "Area Chart . Volume or magnitude over time with filled areas",
    "Radar Chart . Visualizes multivariate data in a 2D plot"
  ],
  whyUseHeading: `Why ${branding.brandName} Chart?`,
  whyUseDescription: [
    `Syncing charting library colors with a global CSS framework is usually a massive pain. ${branding.brandName} Chart solves this by injecting your Tailwind CSS theme variables directly into the Recharts context. When a user switches to Dark Mode, the charts update instantly without requiring a page reload or complex JS state management.`,
    "Since the wrapper code lives completely inside your project, there is zero lock-in regarding the presentation layer. You have total control over the component architecture, making it trivial to build custom HTML tooltips, style the grid lines, or format the axis ticks perfectly.",
    "It guarantees that whether you are rendering a massive analytics dashboard or a tiny sparkline, the typography, colors, and animations maintain a cohesive design system."
  ],
  featuresHeading: `Features of ${branding.brandName} Chart`,
  features: [
    "Recharts Powered. Leverages a robust, battle-tested React charting library for complex data rendering.",
    "Tailwind Theme Synced. Utilizes CSS variables to ensure charts perfectly match your Tailwind config (including Dark Mode).",
    "Zero Presentation Lock-in. Direct source access to the Tooltip and Legend wrappers allows for beautiful HTML/CSS customizations.",
    "Fully Responsive. SVGs automatically scale to fit their parent Card or container effortlessly.",
    "Type-Safe Configuration. Define your chart colors and labels using a clean, typed configuration object."
  ],
  integrationHeading: "Integration & Compatibility",
  integrationDescription: [
    `${branding.brandName} Chart is designed for data-heavy, analytical architectures. It acts as the visual layer for your backend metrics.`,
    "You can effortlessly integrate it into advanced layouts such as:"
  ],
  integrationList: [
    "Financial and Revenue Dashboards",
    "User Analytics and Growth Tracking",
    "Server Performance Monitoring",
    "Habit and Fitness Progression Trackers"
  ],
  integrationNote:
    "It fully respects your global design system. If you update your brand colors or typography fonts in your Tailwind configuration, the Charts will automatically inherit and reflect those changes across all axes and tooltips instantly.",
  faqs: []
};
