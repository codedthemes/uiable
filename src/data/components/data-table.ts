// projects imports
import branding from "@/branding.json";

// types
import { CategoryInfo } from "./types";

export const dataTableInfo: CategoryInfo = {
  title: "Data Table",
  description: [
    "Copy and start building. Handle complex datasets effortlessly with a Data Table powered by Tailwind CSS and TanStack Table.",
    "Optimized for sorting, filtering, and pagination at scale.",
    "Explore the code and speed up your workflow."
  ],
  whatIsHeading: `What is ${branding.brandName} Data Table?`,
  whatIsDescription: [
    `${branding.brandName} Data Table is made to handle large and complex data in an easy way. It is built using TanStack Table, which manages all table logic like sorting, filtering, and pagination.`,
    "The table keeps logic and design separate. It makes it easy to control how data works and how it looks, without mixing both parts.",
    `${branding.brandName} Data Table is not bound to a fixed library as normal npm table packages. You get full source code in project so one can change anything like columns, rows, headers and pagination.`,
    "It is styled using Tailwind CSS. This thing makes easy to deal with sticky headers, scrolling tables, hover effects and responsive layouts. It creates a clean, easy-to-use table system."
  ],
  variantsHeading: "Popular Data Table Variants",
  variants: [
    "Default: Clean, responsive table for displaying standard rows and columns",
    "Sortable Columns: Table featuring clickable headers to sort data ascending/descending",
    "With Row Selection: Table integrating checkboxes for bulk actions and multi-select",
    "Paginated: Table with integrated next/prev controls to handle thousands of rows",
    "Faceted Filtering: Table featuring complex sidebar filters (e.g., filter by status or category)"
  ],
  whyUseHeading: `Why ${branding.brandName} Data Table?`,
  whyUseDescription: [
    "The process of making advanced tables that involve sorting, filtering, and pagination tends to result in code that can become confusing and difficult to manage. This is where TanStack Table comes in since it takes care of the data part, but without any form of UI.",
    `${branding.brandName} Data Table fills this gap by wrapping TanStack Table’s headless system inside a clean, accessible UI built with Tailwind CSS. It gives you a ready-to-use visual structure while still keeping full control over the logic.`,
    "Since all the UI code stays inside your project, there is no dependency lock-in for design. You are free to change everything, including component structure, styles, and behavior. It is easy to add custom cell designs like avatar groups, status badges, or any other UI elements.",
    "You can also modify features like sticky headers, row expansion, and custom sub-rows without any limitation. This makes it flexible for different use cases.",
    "Overall, it helps you build enterprise-level tables that stay consistent with your design system and remain easy to maintain."
  ],
  featuresHeading: `Features of ${branding.brandName} Data Table`,
  features: [
    "Headless state management: Uses TanStack Table to manage sorting, filtering, and pagination logic in a clean and standard way.",
    "Full customization: Any aspect of the table from rows to headers and individual cells is entirely customizable through coding.",
    "Responsive by design: Works well on all screen sizes and supports smooth horizontal scrolling on mobile devices.",
    "Custom cell support: Render any React component inside table cells, such as badges, avatars, or buttons.",
    "Performance ready: Supports virtualization using tools like @tanstack/react-virtual to handle large datasets with ease."
  ],
  integrationHeading: "Integration & Compatibility",
  integrationDescription: [
    `${branding.brandName} Data Table is designed for complex, data-heavy architectures. It acts as the central hub for user management and reporting.`,
    "You can effortlessly integrate it into advanced layouts such as:"
  ],
  integrationList: [
    "Admin Dashboards and User Directories",
    "E-commerce Order Management Systems",
    "Financial Transaction Logs",
    "Support Ticket Queues"
  ],
  integrationNote:
    "It also conforms to your complete design system globally. Whenever you modify your surface colors, text sizes, or border colors within your Tailwind settings, the Data Table will automatically pick up these changes without any hassle at all.",
  faqs: []
};
