// types
import { CategoryInfo } from "./types"

export const featureInfo: CategoryInfo = {
  title: "Feature",
  description: [
    "Feature blocks are pre-designed sections used to showcase the main value propositions, benefits, or functionalities of a product or service.",
    "They typically include icons, headings, and descriptive text to clearly communicate key selling points to users.",
    "Commonly used on homepages, landing pages, and product overview sections to drive user engagement and conversion.",
  ],
  whatIsHeading: "What is a Feature Block?",
  whatIsDescription: [
    "A feature block is a structural component designed to highlight specific aspects of an application. It often uses a grid layout to present multiple features side-by-side.",
    "These blocks are crafted to be visually appealing and highly readable, ensuring users can quickly scan and understand the core offerings.",
  ],
  whyUseHeading: "Why Use Feature Blocks?",
  whyUseDescription: [
    "They provide a professional and consistent look across your marketing pages. By using pre-built blocks, you save time and ensure design harmony.",
    "Feature blocks are optimized for responsiveness, ensuring your message is delivered clearly on both desktop and mobile devices.",
  ],
  featuresHeading: "Key Features of Feature Blocks",
  features: [
    "Grid Layouts. Easily present 1, 2, 3, or more features in a clean, organized manner.",
    "Icon Integration. Support for Lucide icons or custom SVG assets for visual clarity.",
    "Responsive Design. Automatically adjusts layouts based on screen size for optimal viewing.",
    "Customizable Styling. Tailor colors, typography, and spacing to match your brand's aesthetic.",
    "High Performance. Optimized for fast loading and smooth rendering on all browsers.",
  ],
  integrationHeading: "Works Well With Other Blocks",
  integrationDescription: [
    "Combine <b>Feature Blocks</b> with <b>Hero Sections</b> to create a compelling landing page. Use <b>Pricing Tables</b> below feature blocks to drive conversions.",
    "Integrate <b>Testimonials</b> nearby to provide social proof for the features you're highlighting.",
  ],
  faqs: [
    {
      question: "Are these blocks responsive?",
      answer:
        "Yes, all feature blocks are built with responsive design principles and work seamlessly across different device sizes.",
    },
    {
      question: "Can I customize the icons?",
      answer:
        "Absolutely. You can replace the default icons with any Lucide icons or custom SVG components that fit your needs.",
    },
    {
      question: "Can I change the number of features in a row?",
      answer:
        "Yes, you can easily adjust the grid columns using Tailwind CSS classes to display as many features per row as you prefer.",
    },
  ],
}
