// types
import { CategoryInfo } from "./types";

export const navbarInfo: CategoryInfo = {
  title: "Navbar",
  description: [
    "The Navbar is the primary navigation element for your application, providing users with quick access to the main sections and features.",
    "It supports various layouts including centered links, logo-first designs, and utility sections for search, profiles, and notifications.",
    "Built with responsiveness in mind, it seamlessly transitions from a desktop horizontal bar to a mobile-friendly menu."
  ],
  whatIsHeading: "What is a Navbar?",
  whatIsDescription: [
    "A Navbar (Navigation Bar) is a horizontal header that contains links, brand identity, and global actions. It is typically fixed to the top of the viewport or the main content area.",
    "It serves as the 'home' for global navigation, ensuring that users can always find their way around the app regardless of their current page."
  ],
  whyUseHeading: "Why Use our Navbar?",
  whyUseDescription: [
    "Optimized Navigation. Provides a clear and consistent hierarchy for your app's main pages, improving discoverability.",
    "Responsive Adaptability. Includes built-in support for mobile 'hamburger' menus and collapsible sections without complex custom logic.",
    "Design Flexibility. Highly customizable using Tailwind CSS, allowing you to create everything from minimal bars to feature-rich headers with mega-menus."
  ],
  featuresHeading: "Key Features of Navbar",
  features: [
    "Responsive Toggle. Built-in support for mobile menus and drawer transitions.",
    "Sticky & Fixed Support. Easily pin the navbar to the top of the screen.",
    "Multi-section Layout. Dedicated areas for branding, links, and utility actions.",
    "Interactive States. Pre-styled hover and active states for navigation links.",
    "Accessibility. Semantic HTML and keyboard navigation support out of the box."
  ],
  integrationHeading: "Works Well With Other Components",
  integrationDescription: [
    "Use <b>Navbar</b> with <b>Dropdown Menu</b> for sub-navigation and user profiles. Combine with <b>Button</b> for call-to-action links like 'Sign Up'.",
    "Integrate <b>Search</b> inputs directly into the utility section for global site search."
  ],
  faqs: [
    {
      question: "Should the Navbar be fixed or scroll with the page?",
      answer:
        "Fixed navbars are great for accessibility and quick navigation. Scrolling navbars (static) are better for content-heavy sites where screen space is at a premium. Use the one that fits your app's workflow."
    },
    {
      question: "How do I add a logo to the Navbar?",
      answer:
        "You can place an img tag or an SVG component inside the branding section of the Navbar. Use Tailwind to adjust its size and alignment."
    }
  ]
};
