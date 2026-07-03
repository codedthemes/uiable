// projects imports
import branding from "@/branding.json";

// types
import { CategoryInfo } from "./types";

export const tableInfo: CategoryInfo = {
  title: "Table",
  description: [
    "Present complex data in a clean, structured way with a robust Table component built on Tailwind CSS, making data grids easy to standardize with ready to use code."
  ],
  whatIsHeading: `What is ${branding.brandName} Table?`,
  whatIsDescription: [
    `If you've ever tried styling raw HTML tables from scratch then you know how incredibly frustrating it can be to deal with border-collapse quirks and responsive horizontal overflow. That is exactly what ${branding.brandName} Table solves.`,
    "It’s a comprehensive suite of components that gives you beautiful, semantic HTML tables with a premium, modern look right out of the box. The coolest part is that it completely skips the traditional npm package route. You get the actual source code dropped straight into your repository so you have total freedom to tweak the DOM structure or adjust the border alignments however you see fit.",
    "Plus, because it’s styled entirely with Tailwind CSS, managing those painful layout issues and responsive padding feels completely effortless."
  ],
  variantsHeading: "Popular Table Variants",
  variants: [
    "Default . Clean, minimal table with subtle horizontal dividers between rows",
    "Striped Rows . Alternating row background colors for easier tracking across wide datasets (Zebra striping)",
    "Hoverable Rows . Rows that slightly highlight when the mouse hovers over them to indicate interactivity",
    "Bordered . Table featuring vertical borders between every column for Excel-like density"
  ],
  whyUseHeading: `Why ${branding.brandName} Table?`,
  whyUseDescription: [
    "Styling native HTML tables is notoriously difficult due to the unpredictable way browsers render borders and padding. Furthermore, creating a table that scrolls horizontally on mobile without breaking the layout typically requires complex wrapper elements.",
    `${branding.brandName} Table abstracts these complexities into a collection of perfectly styled, composable sub-components including Table, TableHeader, TableBody, and TableCell. Since this code is added directly to your project, you avoid dependency lock-in entirely.`,
    "You retain full control over the component architecture, making it simple to inject custom column sorting icons, implement sticky headers, or integrate checkbox selection columns.",
    "Built natively with Tailwind CSS, the suite ensures your data grids effortlessly inherit your global design system, seamlessly adapting to dark mode and matching your brand's typography instantly."
  ],
  featuresHeading: `Features of ${branding.brandName} Table`,
  features: [
    "Perfect Border Collapsing: There is no problem with the existence of extra borders on either side of the table.",
    "Responsive Wrappers: The table is automatically enclosed within a div tag that enables the scrolling feature on mobile devices.",
    "Semantic HTML: Strict adherence to standard table tags for perfect screen reader and SEO compatibility.",
    "Hover Row Highlights: Seamless classes make tracking data across wide screens effortless.",
    "Zero Dependency Lock-in: Direct source access allows for deep layout customization of cells and headers."
  ],
  integrationHeading: "Integration and Compatibility",
  integrationDescription: [
    `${branding.brandName} Table is the core component for any data-heavy application, SaaS product, or internal tool.`,
    "You can effortlessly integrate it into advanced layouts such as:"
  ],
  integrationList: [
    "Admin Dashboards and User Management Directories",
    "Financial Data Views and Invoices",
    "Complex E-commerce Order Histories",
    "Sortable and Filterable Data Grids (using libraries like TanStack Table)"
  ],
  integrationNote:
    "Moreover, it will easily integrate within any existing global configuration you may be using. Since everything is based on your Tailwind configuration, the component adjusts automatically when you make changes to text colors, slight border colors, or font size changes. There’s nothing more you need to do — the entire set of tables simply inherits the style.",
  faqs: []
};
