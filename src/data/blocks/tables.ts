// types
import { CategoryInfo } from "./types"

export const tablesInfo: CategoryInfo = {
  title: "Tables",
  description: [
    "Table blocks organize dense and complex data sets into structured, readable, and responsive layouts.",
    "Built for modern web applications, dashboards, and enterprise platforms with rich filtering, actions, and status tracking.",
    "Designed with modern typography, high contrast accessibility, and seamless dark mode support.",
  ],
  whatIsHeading: "What is a Table Block?",
  whatIsDescription: [
    "A Table block is a comprehensive layout component used to display tabular data such as invoices, orders, user accounts, and transaction records.",
    "It combines table rows and columns with contextual actions, batch selections, filtering headers, and pagination controls.",
  ],
  whyUseHeading: "Why Use our Table Blocks?",
  whyUseDescription: [
    "Clean Information Density. Display large amounts of relational data clearly without overwhelming users.",
    "Rich Interactive Controls. Built-in search, filtering tabs, column sorting, and row action triggers.",
    "Production Ready. Fully styled with Tailwind CSS, supporting responsive mobile card views and dark mode.",
  ],
  featuresHeading: "Key Features of Table Blocks",
  features: [
    "Comprehensive Row Actions. Context menus for viewing details, downloading files, and editing records.",
    "Status Indicators. Visually distinct badges for tracking states like Paid, Pending, Overdue, and Shipped.",
    "Customizable Headers. Integrated search inputs, date pickers, filter dropdowns, and batch action toolbars.",
    "Responsive Design. Optimized horizontally scrolling tables with mobile-friendly typography and padding.",
    "Integrated Pagination. Clean page navigation, count summaries, and page size selectors.",
  ],
  integrationHeading: "Works Well With Other Sections",
  integrationDescription: [
    "Combine <b>Table Blocks</b> with <b>Statistics Blocks</b> above them to highlight summary KPIs (total revenue, pending invoices, active users).",
    "Pair with <b>Sidebar & Dashboard Layouts</b> to build full-featured administrative portals and SaaS platforms.",
  ],
  faqs: [
    {
      question: "How do I connect the table to a live backend or database?",
      answer:
        "Replace the mock state array with data fetched from your API (such as TanStack Query, SWR, or Server Actions) and wire up the search and filter handlers.",
    },
    {
      question: "Is the table fully responsive on smaller screens?",
      answer:
        "Yes, the table container features smooth horizontal scrolling with sticky headers and responsive text truncation so it never breaks layout on mobile devices.",
    },
  ],
}
