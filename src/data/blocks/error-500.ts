// types
import { CategoryInfo } from "./types"

export const error500Info: CategoryInfo = {
  title: "Error 500",
  description: [
    "Shadcn Error 500 blocks give visitors a clear, reassuring message when something breaks on the server side, instead of a blank crash screen.",
    "They combine a short explanation, a retry action, and a way to report the issue or return home.",
    "Our Error 500 blocks are responsive, accessible, and easily customizable with Tailwind CSS.",
  ],
  whatIsHeading: "What is a Shadcn Error 500 Block?",
  whatIsDescription: [
    "An error 500 block is a full-page section shown when an unexpected server or application error occurs.",
    "It typically pairs a short, non-technical explanation with a retry button and a link back to the homepage.",
  ],
  whyUseHeading: "Why Use Shadcn Error 500 Blocks?",
  whyUseDescription: [
    "Reduced Panic. A calm, branded message reassures users instead of exposing a raw stack trace.",
    "Faster Recovery. A retry action gives users an immediate next step instead of a dead end.",
    "Zero Setup Hassle. Pre-built with Tailwind CSS and Shadcn UI primitives, ready to drop into any Next.js application.",
  ],
  featuresHeading: "Key Features of Error 500 Blocks",
  features: [
    "Illustration Slot. Room for a graphic, icon, or animation to soften the error state.",
    "Retry Action. A button to re-attempt the failed request or reload the page.",
    "Support Link. An optional link to contact support or report the issue.",
    "Full Dark Mode. Automatic adaptation across light and dark theme modes.",
  ],
  integrationHeading: "Works Well With Other Sections",
  integrationDescription: [
    "Drop an <b>Error 500 Block</b> straight into your framework's <code>error</code> boundary page.",
    "Pair with your site's <b>Navbar</b> and <b>Footer</b> so the error page still feels part of the same site.",
  ],
  faqs: [
    {
      question: "How do I use this as my Next.js error boundary?",
      answer:
        "Copy the block's code into your route's error.tsx file, and wire the retry button to the reset() function Next.js provides.",
    },
    {
      question: "Can I show the actual error message to users?",
      answer:
        "You can, but it's usually best to keep the visible message generic and log the technical details separately.",
    },
  ],
}
