// types
import { CategoryInfo } from "./types"

export const chartsInfo: CategoryInfo = {
  title: "Chart",
  description: [
    "Chart blocks turn raw numbers into clear, scannable visuals — revenue trends, comparisons, and performance at a glance.",
    "They pair a headline metric with an interactive graph so users grasp the story behind the data without reading a single table.",
    "Our Chart blocks are built on shadcn primitives and Recharts, staying legible and responsive across every breakpoint.",
  ],
  whatIsHeading: "What is a Chart Block?",
  whatIsDescription: [
    "A Chart block is a self-contained card that presents a dataset as a graph — bars, lines, or areas — alongside a title, summary value, and trend indicator.",
    "It is the analytical backbone of dashboards, letting you communicate change over time or between categories in one compact section.",
  ],
  whyUseHeading: "Why Use our Chart Blocks?",
  whyUseDescription: [
    "Clarity at a Glance. Surface the trend that matters the moment the page loads.",
    "Interactive Tooltips. Reveal exact values on hover for deeper inspection.",
    "Consistent Styling. Built entirely on shadcn primitives for a cohesive, themeable look.",
  ],
  featuresHeading: "Key Features of Chart Blocks",
  features: [
    "Headline Metric. A bold summary value with a contextual trend badge.",
    "Grouped Series. Compare multiple data series side by side in a single view.",
    "Interactive Tooltips. Hover to inspect precise, formatted values.",
    "Responsive Canvas. Charts scale fluidly from desktop to mobile.",
    "Theme Aware. Full light and dark mode support out of the box.",
  ],
  integrationHeading: "Works Well With Other Sections",
  integrationDescription: [
    "Pair <b>Chart Blocks</b> with <b>Widgets</b> and <b>Statistics</b> to build a complete analytics overview.",
    "Combine with a <b>Dashboard Layout</b> and <b>Sidebar</b> for a full admin experience.",
  ],
  faqs: [
    {
      question: "What charting library do these blocks use?",
      answer:
        "Chart blocks are built on Recharts wrapped in shadcn's Chart primitives, so they inherit your theme tokens and stay accessible.",
    },
    {
      question: "Can I swap in my own data?",
      answer:
        "Yes. Replace the sample dataset and chart config, and the axes, legend, and tooltips adapt automatically.",
    },
  ],
}
