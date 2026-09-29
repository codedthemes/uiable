// types
import { CategoryInfo } from "./types"

export const joinWaitlistInfo: CategoryInfo = {
  title: "Join Waitlist",
  description: [
    "Join Waitlist blocks help you capture high-intent leads and build excitement before launching a product, service, or feature.",
    "They feature clean call-to-action forms, social proof indicators, and sleek backgrounds to maximize conversions.",
    "Our Join Waitlist blocks are responsive, accessible, and easily customizable with Tailwind CSS.",
  ],
  whatIsHeading: "What is a Join Waitlist Block?",
  whatIsDescription: [
    "A Join Waitlist block is a conversion-focused section designed to collect early access emails and subscriber sign-ups prior to an official launch.",
    "It combines compelling copy, an intuitive email input, and social proof elements like member avatar stacks to generate anticipation and trust.",
  ],
  whyUseHeading: "Why Use our Join Waitlist Blocks?",
  whyUseDescription: [
    "Higher Conversions. Designed with proven lead-generation patterns, clear input fields, and social proof.",
    "Modern Aesthetic. Polished typography, ambient gradient glows, and delicate curved horizon lines that elevate your brand.",
    "Zero Setup Hassle. Pre-built with Tailwind CSS and Shadcn UI primitives, ready to drop into any Next.js application.",
  ],
  featuresHeading: "Key Features of Join Waitlist Blocks",
  features: [
    "Social Proof Avatars. Display active community member counts and avatar stacks to build early momentum.",
    "Responsive Layouts. Perfectly centered and optimized across mobile, tablet, and desktop screens.",
    "Social Links Integration. Direct links to GitHub, Dribbble, YouTube, and other social channels.",
    "Full Dark Mode. Automatic adaptation across light and dark theme modes.",
  ],
  integrationHeading: "Works Well With Other Sections",
  integrationDescription: [
    "Pair a <b>Join Waitlist Block</b> with a <b>Navbar</b> or <b>Footer</b> for a complete standalone landing experience.",
    "Combine with <b>Feature</b> or <b>FAQ</b> blocks to provide additional product context.",
  ],
  faqs: [
    {
      question: "Can I connect the email form to an email marketing service?",
      answer:
        "Yes. You can attach standard React form handlers, Server Actions, or third-party integrations like Loops, Mailchimp, Resend, or Supabase.",
    },
    {
      question: "How do I customize the avatars and member count?",
      answer:
        "You can easily pass your own list of avatar image URLs or member data to the component.",
    },
  ],
}
