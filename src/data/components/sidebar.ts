// projects imports
import branding from "@/branding.json";

// types
import { CategoryInfo } from "./types";

export const sidebarInfo: CategoryInfo = {
  title: "Sidebar",
  description: [
    "Design scalable UI systems with a Sidebar built on Tailwind CSS, ensuring adaptive collapsing behavior and a clean implementation experience."
  ],
  whatIsHeading: `What is ${branding.brandName} Sidebar?`,
  whatIsDescription: [
    `${branding.brandName} Sidebar is a basic sidebar layout that can be used as a primary vertical navigation panel positioned to the left. The element has been designed to efficiently transition between a fully opened desktop layout and a collapsed mobile layout.`,
    "Unlike other UI libraries, this UI library is not limited to the npm package format. The actual code is included in your project directory, giving you complete freedom in manipulating the structure, breakpoints, and collapsing behavior.",
    "The element is built with Tailwind CSS styling only. Thus, it allows for effortless flexbox layout and width transitions."
  ],
  variantsHeading: "Popular Sidebar Variants",
  variants: [
    "Default (Fixed Width) . Standard permanent sidebar that sits alongside the main content",
    "Collapsible (Icon-Only) . Sidebar that shrinks to a narrow strip showing only icons to save screen space",
    "Overlay (Mobile Slide-Over) . Sidebar that hides entirely on small screens and slides out via a hamburger menu trigger",
    "With Nested Groups . Sidebar featuring complex Accordions and collapsible sub-menus"
  ],
  whyUseHeading: `Why ${branding.brandName} Sidebar?`,
  whyUseDescription: [
    `Handling the state between having the sidebar fully expanded on the desktop screen to hiding it on the mobile view demands very precise interplay between CSS grid and flexbox layouts and React state. ${branding.brandName} Sidebar solves this problem by giving you the ability to use an absolute mathematical container with no headaches.`,
    "Because the source code sits entirely within your app, there's not a hint of dependency lock-in. You're in full control of the architecture of the component and can do anything you like with it, such as modifying the collapsed width to 80px or inserting the user profile area at the bottom or custom scrollbars.",
    "The component works great with Tailwind CSS, ensuring your application shell has consistent design and instant support for both Light and Dark themes."
  ],
  featuresHeading: `Features of ${branding.brandName} Sidebar`,
  features: [
    "Responsive Breakpoints: Automatically adapts behavior based on Tailwind's md or lg screen sizes.",
    "Smooth Width Transitions: Utilizes Tailwind's transition-all utility for fluid collapsing and expanding animations.",
    "Zero Dependency Lock-in: Direct source access allows for deep structural customization.",
    "Sticky Positioning: Seamlessly locks to the side of the screen while allowing the main content to scroll independently.",
    `Highly Composable: Designed to easily accept ${branding.brandName} Accordions, Dropdown Menus, and Scroll Areas.`
  ],
  integrationHeading: "Integration and Compatibility",
  integrationDescription: [
    `${branding.brandName} Sidebar is the best structural block to develop desktop-quality web apps and dashboards.`,
    "You can effortlessly integrate it into advanced layouts such as:"
  ],
  integrationList: [
    "SaaS Admin Dashboards",
    "Software Documentation Sites",
    "Email Clients and Messaging Apps",
    "Complex File Management Systems"
  ],
  integrationNote: `In addition, ${branding.brandName} Sidebar adheres to your entire design system. Anytime you tweak surface color, border style, or spacing variables in your Tailwind settings file, Sidebar inherits them right away.`,
  faqs: []
};
