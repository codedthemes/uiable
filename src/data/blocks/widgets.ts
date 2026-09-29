// types
import { CategoryInfo } from "./types"

export const widgetsInfo: CategoryInfo = {
  title: "Widgets",
  description: [
    "Widgets are compact, self-contained UI units that surface key metrics, quick actions, and at-a-glance information inside dashboards and admin panels.",
    "They condense data into scannable cards, stat tiles, and mini-charts so users can grasp what matters without digging through pages.",
    "Our Widget blocks are designed to snap into any grid layout, staying legible and balanced across every breakpoint.",
  ],
  whatIsHeading: "What is a Widget Block?",
  whatIsDescription: [
    "A Widget block is a modular card-based section that highlights a single piece of information — a KPI, a trend, a status, or a shortcut.",
    "It is the building block of dashboards, letting you compose rich overviews by arranging several widgets side by side.",
  ],
  whyUseHeading: "Why Use our Widget Blocks?",
  whyUseDescription: [
    "Instant Insight. Surface the numbers your users care about the moment a page loads.",
    "Composable Layouts. Drop widgets into responsive grids that reflow cleanly from desktop to mobile.",
    "Consistent Styling. Built entirely on shadcn primitives for a cohesive, themeable look.",
  ],
  featuresHeading: "Key Features of Widget Blocks",
  features: [
    "Stat Tiles. Bold values paired with trend indicators for quick comparison.",
    "Icon Accents. Visual cues that make each metric identifiable at a glance.",
    "Trend Badges. Up/down deltas with contextual color to signal performance.",
    "Responsive Grid. Cards scale and wrap to fit any dashboard column count.",
    "Theme Aware. Full light and dark mode support out of the box.",
  ],
  integrationHeading: "Works Well With Other Sections",
  integrationDescription: [
    "Pair <b>Widget Blocks</b> with <b>Statistics</b> and <b>Chart</b> sections to build a complete analytics overview.",
    "Combine with a <b>Dashboard Layout</b> and <b>Sidebar</b> for a full admin experience.",
  ],
  faqs: [
    {
      question: "How many widgets should I show in one row?",
      answer:
        "Three to four on desktop keeps each card readable. Let the grid collapse to one or two columns on smaller screens.",
    },
    {
      question: "Can I use widgets outside of a dashboard?",
      answer:
        "Yes. Widgets work anywhere you need to summarize data — pricing comparisons, profile stats, or feature highlights.",
    },
  ],
}
