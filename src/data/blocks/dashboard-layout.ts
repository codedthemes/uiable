// types
import { CategoryInfo } from "./types"

export const dashboardLayoutInfo: CategoryInfo = {
  title: "Dashboard Layout",
  description: [
    "Shadcn Dashboard Layout blocks provide the application shell — sidebar, topbar, and content area — for building admin panels and internal tools.",
    "They handle sidebar collapse, active-route highlighting, and responsive behavior out of the box.",
    "Our Dashboard Layout blocks are responsive, accessible, and easily customizable with Tailwind CSS.",
  ],
  whatIsHeading: "What is a Shadcn Dashboard Layout?",
  whatIsDescription: [
    "A dashboard layout is the structural shell of an admin app: a navigable sidebar, a topbar with user and search controls, and a content region for pages.",
    "Every other admin block — tables, charts, and widgets — is designed to sit inside this shell.",
  ],
  whyUseHeading: "Why Use Shadcn Dashboard Layout Blocks?",
  whyUseDescription: [
    "Consistent App Shell. Every dashboard page shares the same navigation, so users never lose their place.",
    "Built-In Responsiveness. The sidebar collapses to an icon rail or drawer automatically on smaller screens.",
    "Zero Setup Hassle. Pre-built with Tailwind CSS and Shadcn UI primitives, ready to drop into any Next.js application.",
  ],
  featuresHeading: "Key Features of Dashboard Layout Blocks",
  features: [
    "Collapsible Sidebar. Toggle between expanded and icon-only rail states.",
    "Active Route Highlighting. Sidebar items reflect the current page automatically.",
    "Topbar Slots. Room for search, notifications, and a user menu in the header.",
    "Full Dark Mode. Automatic adaptation across light and dark theme modes.",
  ],
  integrationHeading: "Works Well With Other Sections",
  integrationDescription: [
    "Nest <b>Tables</b>, <b>Charts</b>, and <b>Widgets</b> blocks inside a <b>Dashboard Layout</b> to assemble a full admin page.",
    "Pair with a <b>Login</b> block as the entry point users see before reaching the dashboard shell.",
  ],
  faqs: [
    {
      question: "Does the sidebar state persist between pages?",
      answer:
        "The collapsed/expanded state is local UI state you can persist yourself, for example with a cookie or localStorage.",
    },
    {
      question: "Can I add my own navigation items?",
      answer:
        "Yes. The sidebar reads from a plain array of navigation items, which you replace with your own routes and icons.",
    },
  ],
}
