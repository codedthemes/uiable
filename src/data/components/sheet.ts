// projects imports
import branding from "@/branding.json"

// types
import { CategoryInfo } from "./types"

export const sheetInfo: CategoryInfo = {
  title: "Sheet",
  description: [
    "Design smooth side panels with a Slide-out Sheet built on Tailwind CSS and Base UI, built for real world form flows, browse and copy the code to get started.",
  ],
  whatIsHeading: `What is ${branding.brandName} Sheet?`,
  whatIsDescription: [
    `The ${branding.brandName} Sheet is a custom implementation of the Modal Dialog component that appears on the screen by sliding in from either the left, right, top, or bottom side, rather than being centered. Designed using shadcn/ui elements and the concepts of Base UI, it handles keyboard focus trapping, overlay placement, and smooth transitions seamlessly.`,
    "As opposed to other UI frameworks, the library is not confined within an npm module. Instead, the source code of this sheet is available directly within your project, enabling you to tweak, modify, and enhance the underlying HTML structure and sliding mechanics.",
    `The ${branding.brandName} Sheet uses Tailwind CSS for its styling, simplifying the process of styling fixed-position sidebars, backdrop blur effects, and dynamic width sizes.`,
  ],
  variantsHeading: "Popular Sheet Variants",
  variants: [
    "Right Sidebar . Slides in from the right edge, standard for e-commerce carts and settings panels",
    "Left Navigation . Slides in from the left edge, perfect for mobile hamburger menus",
    "Bottom Panel . Slides up from the bottom (desktop alternative to the mobile Drawer)",
    "Top Dropdown . Slides down from the top edge, often used for global site searches",
  ],
  whyUseHeading: `Why ${branding.brandName} Sheet?`,
  whyUseDescription: [
    `Sometimes, the centered modal just does not provide enough room to enter complex data, while sending users off to a completely new page seems too big and disrupts the current process. The ${branding.brandName} Sheet comes as the ideal solution here: it gives enormous space for complex form input while keeping your previous context visible in the background.`,
    "Being fully contained in your project, there is absolutely no dependency lock-in here. All decisions about the architecture of the component can be taken freely, and you will never have trouble injecting any sticky header or Scroll Areas into your page or adjusting the duration of the slide-in effect.",
    `${branding.brandName} Sheet is fully compatible with Tailwind CSS. It means your panels will always be visually consistent with your application’s cards.`,
  ],
  featuresHeading: `Features of ${branding.brandName} Sheet`,
  features: [
    "Anatomical Base UI Roots: Built on Base UI Dialog primitives for perfect accessibility and focus management.",
    "Edge-based Animations: Beautiful, performant CSS transitions map perfectly to top, bottom, left, and right placements.",
    "Automatic Scroll Locking: Seamlessly hides the <body> scrollbar to prevent the background page from jumping when the sheet opens.",
    "Zero Dependency Lock-in: Direct source access allows for deep structural customization of the Header, Body, and Footer sections.",
    "Escape Key Dismissal: Automatically binds and handles the Escape key and click-outside events for rapid closure.",
  ],
  integrationHeading: "Integration and Compatibility",
  integrationDescription: [
    `${branding.brandName} Sheet is designed for highly composable, data-heavy application architectures. It acts as a powerful secondary workspace.`,
    "You can effortlessly integrate it into advanced layouts such as:",
  ],
  integrationList: [
    "E-commerce Shopping Carts and Checkout Flows",
    "Complex Application Settings and Preferences Panels",
    "Mobile Responsive Hamburger Navigation Menus",
    "Detailed Data Table Row Inspections",
  ],
  integrationNote:
    "It also fully respects your global design system. If you update your surface colors, backdrop opacities, or shadow definitions in your Tailwind configuration, the Sheet will automatically inherit and reflect those changes instantly.",
  faqs: [],
}
