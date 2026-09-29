// types
import { CategoryInfo } from "./types"

export const bentoInfo: CategoryInfo = {
  title: "Bento",
  description: [
    "Shadcn Bento blocks arrange features, stats, and media into a modular grid of unevenly sized cards, inspired by bento box layouts.",
    "They're a compact way to showcase multiple product highlights in a single, visually balanced section.",
    "Our Bento blocks are responsive, accessible, and easily customizable with Tailwind CSS.",
  ],
  whatIsHeading: "What is a Shadcn Bento Grid?",
  whatIsDescription: [
    "A bento grid is a section made of asymmetric cards — some large, some small — tiled together to highlight several features, metrics, or media pieces at once.",
    "Each cell is a self-contained card, so you can mix text, icons, charts, and screenshots without the layout feeling cluttered.",
  ],
  whyUseHeading: "Why Use Shadcn Bento Blocks?",
  whyUseDescription: [
    "Scannable Density. Bento grids let visitors absorb several product highlights in one glance instead of scrolling through separate sections.",
    "Visual Hierarchy. Mixing card sizes naturally draws attention to your most important feature or stat.",
    "Zero Setup Hassle. Pre-built with Tailwind CSS and Shadcn UI primitives, ready to drop into any Next.js application.",
  ],
  featuresHeading: "Key Features of Bento Blocks",
  features: [
    "Asymmetric Grid. Mixed card spans for large highlight tiles and smaller supporting tiles.",
    "Media Ready. Slots for screenshots, icons, mini charts, or embedded illustrations inside each card.",
    "Responsive Layouts. Grid columns collapse gracefully down to a single column on mobile.",
    "Full Dark Mode. Automatic adaptation across light and dark theme modes.",
  ],
  integrationHeading: "Works Well With Other Sections",
  integrationDescription: [
    "Pair a <b>Bento Block</b> with a <b>Hero</b> above it and a <b>CTA</b> below it to build a complete features section.",
    "Combine with <b>Statistics</b> or <b>Feature</b> blocks to give individual highlights more room to breathe.",
  ],
  faqs: [
    {
      question: "Can I change how many cards span multiple columns?",
      answer:
        "Yes. Each card's grid span is controlled with standard Tailwind grid classes, so you can rearrange the layout freely.",
    },
    {
      question: "Can I put charts or images inside a bento card?",
      answer:
        "Yes. Bento cards are plain containers, so any component — a chart, an image, or custom markup — can be dropped inside.",
    },
  ],
}
