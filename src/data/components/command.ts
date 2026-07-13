// projects imports
import branding from "@/branding.json"

// types
import { CategoryInfo } from "./types"

export const commandInfo: CategoryInfo = {
  title: `${branding.brandName} Command`,
  description: [
    "Add a Spotlight-inspired command palette with Tailwind CSS, shadcn ui, and Base UI. Copy the code and build faster.",
  ],
  whatIsHeading: `What is ${branding.brandName} Command?`,
  whatIsDescription: [
    `${branding.brandName} Command is a sophisticated, highly interactive search and navigation palette component. Built using shadcn ui components and Base UI principles, it handles fuzzy searching, keyboard navigation, and structural grouping with extreme performance.`,
    "Unlike standard UI libraries, this component is not contained within a npm package. You get the actual source code right inside your project, so you may update, customize, and extend the search algorithms or layout structure as needed.",
    "It is styled with Tailwind CSS, which easily handles complex stylistic issues such as sticky headers, active item highlights, and backdrop blurring, resulting in a premium, native-feeling design system.",
  ],
  variantsHeading: "Popular Command Variants",
  variants: [
    "Default Dialog . Modal-based command palette triggered via keyboard shortcut",
    "Inline Command . Command menu embedded directly into a page or sidebar",
    "Command with Groups . Search results separated into logical categories (e.g., Pages, Settings, Users)",
    "Developer Actions . Workflow-first command palette for shipping, branching, and release operations",
    "Invite Members . Friendly collaboration palette for teammates, roles, and onboarding flows",
    "Search & Filter . Multi-faceted discovery experience with radio-button filters, category organization, and intelligent sorting options for refined content discovery",
    "With Description . Items displayed with icons, titles, and descriptive subtitles for contact directories or structured information display",
    "Action-Oriented . Command palette tailored for executing functions rather than just navigating",
    "Nested Command . Deeply nested command menus allowing users to drill down into sub-menus",
  ],
  whyUseHeading: `Why ${branding.brandName} Command?`,
  whyUseDescription: [
    `${branding.brandName} Command helps build a command menu or search palette in a simple way. It handles keyboard shortcuts, modal focus, and fast search interactions, so everything works smoothly from the start. It also supports accessibility, making search results easier to use.`,
    "The source code stays inside the project, so it can be edited anytime. Custom search features, API connection, and empty state design can be changed based on project needs.",
    "Built with Tailwind CSS and CVA, it matches modern project styles easily. Dark mode, typography, and design stay consistent without writing extra CSS.",
  ],
  featuresHeading: `Features of ${branding.brandName} Command`,
  features: [
    "Anatomical Base UI Roots . Built on Base UI primitives for industry-standard accessibility, ensuring modal focus trapping and keyboard routing work perfectly.",
    "Zero Dependency Lock-in . Direct source access allows for deep structural customization without waiting for upstream package updates.",
    "Blazing Fast Navigation . Optimized for arrow-key navigation and rapid rendering of large lists of actionable items.",
    "Global Shortcut Ready . Designed to easily bind to application-wide keyboard shortcuts like Ctrl+K or Cmd+K.",
    "Type-Safe Composition . Powered by TypeScript and CVA to seamlessly distribute consistent hover, active, and selected states to all command items.",
    "Advanced Filtering . Built-in radio-group filters for category-based and sort-based content discovery without external dependencies.",
  ],
  integrationHeading: "Integration & Compatibility",
  integrationDescription: [
    `${branding.brandName} Command fits well in modern projects where quick navigation and search are important.`,
    "It can be used to create a central command menu for searching pages, accessing shortcuts, or handling quick actions across the interface.",
    "You can effortlessly integrate it into advanced layouts such as:",
  ],
  integrationList: [
    "Global Application Search Bars",
    "Developer Quick-Action Tools",
    "Help Documentation Navigators",
    "Contextual Right-Click Menus",
    "Content Discovery with Filters",
    "Multi-Faceted Search Experiences",
  ],
  integrationNote:
    "The existing design system works seamlessly with the system. The command palette reflects all Tailwind setting changes which include color adjustments and shadow modifications and background style updates to maintain project visual consistency.",
  faqs: [],
}
