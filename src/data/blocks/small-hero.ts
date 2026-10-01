// types
import { CategoryInfo } from "./types"

export const smallHeroInfo: CategoryInfo = {
  title: "Small Hero",
  description: [
    "Small Hero blocks are compact, focused header sections ideal for inner pages, blog posts, product listings, and landing sub-sections.",
    "They deliver a clear headline and call-to-action without the full-page impact of a traditional hero — perfect when you need context without drama.",
    "Our Small Hero sections are clean, responsive, and easy to drop into any page layout.",
  ],
  whatIsHeading: "What is a Small Hero Block?",
  whatIsDescription: [
    "A Small Hero block is a concise, above-the-fold section used on interior pages. It typically contains a short headline, a brief description, and one or two action buttons.",
    "Unlike full hero sections, it occupies a fraction of the viewport height, leaving room for content below while still establishing page context.",
  ],
  whyUseHeading: "Why Use our Small Hero Blocks?",
  whyUseDescription: [
    "Space Efficient. Delivers strong first impressions without consuming the full viewport, letting users reach main content faster.",
    "Versatile. Works equally well on about pages, feature pages, blog index pages, and marketing landing sub-sections.",
    "Easy to Customize. Minimal markup with Tailwind classes means you can swap colors, text, and buttons in seconds.",
  ],
  featuresHeading: "Key Features of Small Hero Blocks",
  features: [
    "Compact Layout. Designed to fit above the fold without dominating the page.",
    "Gradient Backgrounds. Subtle gradient backgrounds that complement any color scheme.",
    "Pill / Badge Support. Optional announcement badges to highlight new features or offers.",
    "Dual CTA. Primary and secondary action buttons for flexible user journeys.",
    "Fully Responsive. Scales cleanly from mobile to widescreen with no layout shifts.",
  ],
  integrationHeading: "Works Well With Other Sections",
  integrationDescription: [
    "Pair a <b>Small Hero Block</b> with <b>Feature</b> or <b>Content</b> blocks to build complete inner pages quickly.",
    "Use with a <b>Navbar</b> at the top and <b>Footer</b> at the bottom for a cohesive, production-ready page layout.",
  ],
  faqs: [
    {
      question: "When should I use a Small Hero instead of a full Hero?",
      answer:
        "Use a Small Hero on any page that is not the primary landing page — such as about, pricing, or blog pages — where you need to orient the user without overshadowing the page content.",
    },
    {
      question: "Can I add an image to a Small Hero?",
      answer:
        "Yes. You can extend the block by placing an illustration or product screenshot alongside the text. Keep the image compact so the overall section height remains modest.",
    },
  ],
}
