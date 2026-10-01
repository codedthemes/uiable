// types
import { CategoryInfo } from "./types"

export const error404Info: CategoryInfo = {
  title: "Error 404",
  description: [
    "Shadcn Error 404 blocks turn a dead end into a helpful, on-brand page when a visitor lands on a URL that doesn't exist.",
    "They combine clear messaging, an illustration or graphic, and quick links back to safety.",
    "Our Error 404 blocks are responsive, accessible, and easily customizable with Tailwind CSS.",
  ],
  whatIsHeading: "What is a Shadcn Error 404 Block?",
  whatIsDescription: [
    "An error 404 block is a full-page section shown when a route can't be matched — it replaces the default framework error screen with something on-brand.",
    "It typically pairs a short explanation with a primary action, like returning home or searching the site.",
  ],
  whyUseHeading: "Why Use Shadcn Error 404 Blocks?",
  whyUseDescription: [
    "Lower Bounce Rate. A helpful 404 page keeps visitors on your site instead of hitting back immediately.",
    "On-Brand Experience. Replaces a generic browser or framework error page with your own design language.",
    "Zero Setup Hassle. Pre-built with Tailwind CSS and Shadcn UI primitives, ready to drop into any Next.js application.",
  ],
  featuresHeading: "Key Features of Error 404 Blocks",
  features: [
    "Illustration Slot. Room for a graphic, icon, or animation to soften the error state.",
    "Primary Action Button. A clear call-to-action back to the homepage or a key section.",
    "Optional Search Bar. Lets visitors search for what they were originally looking for.",
    "Full Dark Mode. Automatic adaptation across light and dark theme modes.",
  ],
  integrationHeading: "Works Well With Other Sections",
  integrationDescription: [
    "Drop an <b>Error 404 Block</b> straight into your framework's <code>not-found</code> page.",
    "Pair with your site's <b>Navbar</b> and <b>Footer</b> so the error page still feels part of the same site.",
  ],
  faqs: [
    {
      question: "How do I use this as my Next.js 404 page?",
      answer:
        "Copy the block's code into your app's not-found.tsx file at the route level where you want it to apply.",
    },
    {
      question: "Can I add a search input that queries my site?",
      answer:
        "Yes. Swap the placeholder search field for your own search component or API call.",
    },
  ],
}
