// types
import { CategoryInfo } from "./types"

export const underConstructionInfo: CategoryInfo = {
  title: "Under Construction",
  description: [
    "Under Construction blocks inform visitors that your website or application is undergoing maintenance or active development.",
    "They provide helpful context, estimated availability, and quick navigation links so users remain engaged while updates are deployed.",
    "Our Under Construction blocks are responsive, accessible, and easily customizable with Tailwind CSS.",
  ],
  whatIsHeading: "What is an Under Construction Block?",
  whatIsDescription: [
    "An Under Construction block is a dedicated placeholder page displayed when a website, web app, or specific feature is temporarily offline for upgrades.",
    "It communicates current maintenance status, reassures visitors, and offers a clear call-to-action like returning to the home page or reaching support.",
  ],
  whyUseHeading: "Why Use our Under Construction Blocks?",
  whyUseDescription: [
    "Clear Communication. Keep users informed about scheduled maintenance and avoid confusion during site downtime.",
    "Brand Polish. Maintain a professional aesthetic with polished vector illustrations and modern typography even when offline.",
    "Zero Setup Hassle. Pre-built, responsive layouts built with Tailwind CSS and Shadcn UI primitives ready to drop into any Next.js app.",
  ],
  featuresHeading: "Key Features of Under Construction Blocks",
  features: [
    "Visual Illustrations. Engaging SVG artwork tailored for maintenance and construction states.",
    "Responsive Layouts. Seamlessly scales across mobile, tablet, and desktop viewports.",
    "One-Click Actions. Direct navigation buttons to guide users back to available sections or home.",
    "Full Dark Mode. Automatic adaptation across light and dark theme modes.",
  ],
  integrationHeading: "Works Well With Other Sections",
  integrationDescription: [
    "Pair an <b>Under Construction Block</b> with a <b>Navbar</b> or <b>Footer</b> for brand consistency during scheduled maintenance windows.",
    "Combine with <b>Support</b> or <b>Contact</b> blocks to give visitors an immediate way to reach out.",
  ],
  faqs: [
    {
      question:
        "Can I customize the illustration or text in the Under Construction block?",
      answer:
        "Yes. All illustrations, headings, descriptions, and action buttons are fully customizable with your own assets and copy.",
    },
    {
      question: "How do I redirect users to another page instead of home?",
      answer:
        "Update the Link component href prop to point to your desired destination, such as /contact or /status.",
    },
  ],
}
