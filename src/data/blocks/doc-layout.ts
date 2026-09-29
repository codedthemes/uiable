// types
import { CategoryInfo } from "./types"

export const docLayoutInfo: CategoryInfo = {
  title: "Doc Layout",
  description: [
    "Shadcn Doc Layout blocks provide the shell for a documentation page — a section sidebar, article content area, and an on-this-page table of contents.",
    "They're built for guides, changelogs, and other long-form documentation content.",
    "Our Doc Layout blocks are responsive, accessible, and easily customizable with Tailwind CSS.",
  ],
  whatIsHeading: "What is a Shadcn Doc Layout?",
  whatIsDescription: [
    "A doc layout is the structural shell for a documentation page: a sidebar for jumping between guides, a content column for the article, and a sticky table of contents.",
    "It's the same pattern used to write this documentation, packaged as a reusable block.",
  ],
  whyUseHeading: "Why Use Shadcn Doc Layout Blocks?",
  whyUseDescription: [
    "Faster Docs Sites. Skip building a documentation shell from scratch for your own product or library.",
    "Better Reading Experience. Sticky navigation and a table of contents keep long guides easy to skim and navigate.",
    "Zero Setup Hassle. Pre-built with Tailwind CSS and Shadcn UI primitives, ready to drop into any Next.js application.",
  ],
  featuresHeading: "Key Features of Doc Layout Blocks",
  features: [
    "Section Sidebar. Grouped links for navigating between guides and pages.",
    "Sticky Table of Contents. Auto-generated on-page navigation that tracks scroll position.",
    "Prev/Next Navigation. Built-in links to move sequentially through a guide.",
    "Full Dark Mode. Automatic adaptation across light and dark theme modes.",
  ],
  integrationHeading: "Works Well With Other Sections",
  integrationDescription: [
    "Pair a <b>Doc Layout Block</b> with your own MDX or CMS-driven content to build a documentation site.",
    "Combine with a <b>Navbar</b> and <b>Footer</b> for a complete standalone docs experience.",
  ],
  faqs: [
    {
      question: "Does the table of contents generate itself from headings?",
      answer:
        "The block ships with the layout and scroll-tracking behavior — you supply the list of headings, typically parsed from your content source.",
    },
    {
      question: "Can I reorder or group the sidebar sections?",
      answer:
        "Yes. The sidebar reads from a plain array of sections and links, which you can rearrange freely.",
    },
  ],
}
