// types
import { CategoryInfo } from "./types"

export const comingSoonInfo: CategoryInfo = {
  title: "Coming Soon",
  description: [
    "Coming Soon blocks are captivating placeholder pages designed to build excitement and capture leads before a product or feature launch.",
    "They feature animated visual showcases, countdown timers, email newsletter capture, and social links to keep users engaged while you build.",
    "Our Coming Soon blocks are responsive, accessible, and easily customizable with Tailwind CSS.",
  ],
  whatIsHeading: "What is a Coming Soon Block?",
  whatIsDescription: [
    "A Coming Soon block is a dedicated pre-launch section that informs visitors about an upcoming release, website relaunch, or maintenance mode.",
    "It typically combines a teaser headline, countdown clock or dynamic graphics, and an email subscription field to collect early adopter leads.",
  ],
  whyUseHeading: "Why Use our Coming Soon Blocks?",
  whyUseDescription: [
    "Lead Generation. Collect interested user emails and build a waitlist prior to your official product debut.",
    "Brand Awareness. Establish anticipation with high-impact visual design and social media connectivity.",
    "Zero Setup Hassle. Production-ready layout with built-in timers, animations, and forms that integrate seamlessly into any Next.js app.",
  ],
  featuresHeading: "Key Features of Coming Soon Blocks",
  features: [
    "Countdown Timer. Real-time days, hours, minutes, and seconds countdown cards.",
    "Infinite Scroll Showcase. Animated dual-column template preview with smooth infinite marquee loop.",
    "Lead Capture Form. Sleek email input and notify button to grow your pre-launch audience.",
    "Social Integrations. Direct action buttons to connect users with your brand community.",
    "Full Dark Mode. Automatic adaptation across light and dark theme modes.",
  ],
  integrationHeading: "Works Well With Other Sections",
  integrationDescription: [
    "Pair a <b>Coming Soon Block</b> with a <b>Footer</b> or <b>Navbar</b> for brand consistency across pre-launch marketing sites.",
    "Combine with <b>Waitlist</b> or <b>Newsletter</b> workflows for seamless automated onboarding.",
  ],
  faqs: [
    {
      question: "Can I customize the countdown target date?",
      answer:
        "Yes. The target date in the countdown component can easily be configured by passing a specific Date object or timestamp.",
    },
    {
      question: "How do I connect the email input to my backend?",
      answer:
        "The email input can be wired to any API endpoint, server action, or third-party mailing service such as Mailchimp, Resend, or Supabase.",
    },
  ],
}
