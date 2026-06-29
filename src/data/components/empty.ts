// projects imports
import branding from "@/branding.json"

// types
import { CategoryInfo } from "./types"

export const emptyInfo: CategoryInfo = {
  title: "Empty State",
  description: [
    "Browse the Tailwind CSS Empty State UI and create meaningful user journeys with ready code",
  ],
  whatIsHeading: `What is ${branding.brandName} Empty State?`,
  whatIsDescription: [
    `${branding.brandName} Empty State is a structural UI pattern used when there is no content to display in sections like tables, lists, or dashboards. It helps turn empty screens into meaningful experiences using an illustration, title, description, and a guided action button.`,
    "The component is not packaged in a restrictive dependency. But with full access to the source code, there are no limitations when it comes to changing layout, typography, spacing and interaction flow.",
    "With Tailwind CSS, centering content, managing responsive visuals, and maintaining subtle visual hierarchy becomes simple and consistent.",
  ],
  variantsHeading: "Popular Empty State Variants",
  variants: [
    "Default . Standard centered layout with an icon, title, and description",
    "With Illustration . Empty state featuring a large, brand-specific SVG illustration",
    'Action-Oriented . Layout strongly focused on a primary button (e.g., "Create your first project")',
    "Compact . Minimal empty state designed to fit inside small sidebars or dropdowns",
    "Search No Results . Specific variant designed for when search queries return zero hits",
  ],
  whyUseHeading: `Why ${branding.brandName} Empty State?`,
  whyUseDescription: [
    `Empty states are usually an afterthought to project development and result in broken looking UIs or blank white screens that confuse users. ${branding.brandName} Empty State standardizes the visual language for “nothing here” in your entire web app.`,
    "Since the code lives completely inside your project, there is absolutely zero dependency lock-in. You have total control over the component architecture, making it trivial to swap out icons for Lottie animations, adjust the maximum width of the text block, or integrate with routing libraries for the action buttons.",
    "It works smoothly with Tailwind CSS. This guarantees that your empty states automatically maintain a cohesive design system, perfectly matching the typography and spacing of your populated data views.",
  ],
  featuresHeading: `Features of ${branding.brandName} Empty State`,
  features: [
    "Pure CSS/HTML Execution: Zero JavaScript overhead ensures blazing fast render times.",
    "Zero Dependency Lock-in: Direct source access allows for deep visual and structural customization.",
    "Perfect Alignment: Pre-calibrated flexbox spacing ensures elements are optically centered and balanced.",
    `Highly Composable: Designed to easily accept custom SVGs, ${branding.brandName} Buttons, or complex Next.js Links.`,
    "Responsive by Default: Gracefully scales typography and image sizes down for mobile viewports.",
  ],
  integrationHeading: "Integration & Compatibility",
  integrationDescription: [
    `${branding.brandName} Empty State is the ultimate fallback component for data-driven architectures. It prevents user drop-off by always providing a clear next step.`,
    "You can effortlessly integrate it into advanced layouts such as:",
  ],
  integrationList: [
    "Empty Data Tables and Lists",
    "Cleared Inboxes and Notification Centers",
    "Zero-Result Search Pages",
    "First-time User Onboarding Screens",
  ],
  integrationNote:
    "It also fully respects your global design system. If you update your muted text colors or button styles in your Tailwind configuration, the Empty State will automatically inherit and reflect those changes instantly.",
  faqs: [],
}
