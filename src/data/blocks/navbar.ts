// types
import { CategoryInfo } from "./types"

export const navbarInfo: CategoryInfo = {
  title: "Navbar",
  description: [
    "Shadcn Navbar blocks are top-level site navigation bars with logo, links, and call-to-action slots, including mobile menu behavior.",
    "They range from simple centered links to mega-menu layouts with dropdowns and highlighted actions.",
    "Our Navbar blocks are responsive, accessible, and easily customizable with Tailwind CSS.",
  ],
  whatIsHeading: "What is a Shadcn Navbar?",
  whatIsDescription: [
    "A navbar is the persistent top bar that houses your logo, primary navigation links, and key actions like sign in or get started.",
    "It's built to collapse into an accessible mobile menu automatically at smaller breakpoints.",
  ],
  whyUseHeading: "Why Use Shadcn Navbar Blocks?",
  whyUseDescription: [
    "Consistent Orientation. Visitors always know where the logo, navigation, and primary action are, across every page.",
    "Mobile-Ready by Default. Collapses into a working hamburger menu without extra configuration.",
    "Zero Setup Hassle. Pre-built with Tailwind CSS and Shadcn UI primitives, ready to drop into any Next.js application.",
  ],
  featuresHeading: "Key Features of Navbar Blocks",
  features: [
    "Responsive Mobile Menu. Automatic collapse into a drawer or sheet menu on small screens.",
    "Dropdown & Mega Menu Support. Optional multi-column dropdowns for larger navigation structures.",
    "Sticky & Transparent Variants. Options for a sticky bar or a transparent bar that solidifies on scroll.",
    "Full Dark Mode. Automatic adaptation across light and dark theme modes.",
  ],
  integrationHeading: "Works Well With Other Sections",
  integrationDescription: [
    "Pair a <b>Navbar Block</b> with a <b>Hero</b> directly beneath it for a strong first-screen impression.",
    "Reuse the same <b>Navbar</b> across every page, including your <b>Login</b>, <b>Sign Up</b>, and <b>Error 404</b> pages, for a consistent shell.",
  ],
  faqs: [
    {
      question: "Does the navbar highlight the current active link?",
      answer:
        "Active-link styling is included in the markup — wire it to your router's current pathname to toggle it.",
    },
    {
      question: "Can I add a mega menu with multiple columns?",
      answer:
        "Yes, several Navbar variants include a multi-column dropdown panel you can populate with your own links.",
    },
  ],
}
