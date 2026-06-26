// projects imports
import branding from "@/branding.json"

// types
import { CategoryInfo } from "./types"

export const paginationInfo: CategoryInfo = {
  title: "Pagination",
  description: [
    "Navigate large datasets easily with an accessible Pagination component built on Tailwind CSS. Standardize list traversal—browse and copy the code to get started.",
  ],
  whatIsHeading: `What is ${branding.brandName} Pagination?`,
  whatIsDescription: [
    `${branding.brandName} Pagination is designed to split large amounts of content into smaller, more manageable pages. It offers straightforward controls that make navigation across data fast and intuitive.`,
    "With the component living inside your codebase, customization becomes completely flexible. You can refine logic, change structure, or enhance interactions based on your needs.",
    "Tailwind CSS handles all styling, ensuring consistent button design, spacing, and responsive behavior across devices.",
  ],
  variantsHeading: "Popular Pagination Variants",
  variants: [
    "Default (Numbers): Standard pagination displaying previous/next buttons and a range of page numbers",
    'Compact: Minimalist pagination displaying only "Previous" and "Next" controls',
    "With Ellipsis: Advanced pagination utilizing an ellipsis (...) to truncate massive page counts (e.g., 1, 2, 3 ... 50)",
    "Outline: Ghost variant utilizing only borders for a lighter visual footprint",
    "Simple Text: Pure text-based links without button borders, often used in blogs",
  ],
  whyUseHeading: `Why ${branding.brandName} Pagination?`,
  whyUseDescription: [
    "Without a proper system, pagination controls often feel inconsistent and hard to use due to small click areas and uneven spacing.",
    `${branding.brandName} Pagination addresses this by enforcing a 44px minimum hit area and standardizing all elements through ${branding.brandName} Button and Icon components.`,
    "The structure is open and editable, allowing you to fine tune both UI and logic. From URL handling to pagination flow, everything can be aligned with your architecture.",
    "Tailwind CSS keeps everything responsive and consistent, allowing the pagination to adapt gracefully to mobile screens by simplifying the number display when space is tight.",
  ],
  featuresHeading: `Features of ${branding.brandName} Pagination`,
  features: [
    'Semantic HTML Wrapper: Utilizes the <nav aria-label="pagination"> tag to ensure perfect screen reader compatibility.',
    "Accessible Hit Targets: Enforces adequate padding to ensure numbers are easily clickable on touch devices.",
    "Zero Dependency Lock-in: Direct source access allows for deep visual customization.",
    "Easy Truncation Support: Provides a clean Ellipsis component for managing large numeric ranges.",
    "Highly Composable: Easily accepts custom Link components from frameworks like Next.js or React Router.",
  ],
  integrationHeading: "Integration and Compatibility",
  integrationDescription: [
    `${branding.brandName} Pagination is an essential tool for managing large lists of data efficiently.`,
    "You can effortlessly integrate it into advanced layouts such as:",
  ],
  integrationList: [
    "Data Table Footers",
    "E-commerce Product Grids",
    "Blog Post and Article Archives",
    "Search Result Pages",
  ],
  integrationNote:
    "Because it follows your global design system, any updates to Tailwind styles like color themes, border radius, or font settings are automatically inherited.",
  faqs: [],
}
