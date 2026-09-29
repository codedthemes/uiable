// types
import { CategoryInfo } from "./types"

export const checkMailInfo: CategoryInfo = {
  title: "Check Mail",
  description: [
    "Shadcn Check Mail blocks confirm that a verification or password-reset email was sent, with a resend action and a link back to sign-in.",
    "They keep users informed during the gap between submitting a form and receiving an email.",
    "Our Check Mail blocks are responsive, accessible, and easily customizable with Tailwind CSS.",
  ],
  whatIsHeading: "What is a Shadcn Check Mail Block?",
  whatIsDescription: [
    "A check mail block is a confirmation screen shown after a user submits their email for verification, sign-up, or password reset.",
    "It typically displays the masked email address, a resend link, and instructions to check spam folders.",
  ],
  whyUseHeading: "Why Use Shadcn Check Mail Blocks?",
  whyUseDescription: [
    "Reduced Confusion. Clearly tells users what to do next instead of leaving them on a blank or redirected page.",
    'Fewer Support Tickets. A visible resend action cuts down on "I never got the email" requests.',
    "Zero Setup Hassle. Pre-built with Tailwind CSS and Shadcn UI primitives, ready to drop into any Next.js application.",
  ],
  featuresHeading: "Key Features of Check Mail Blocks",
  features: [
    "Resend Action. A button to trigger another verification or reset email, often with a cooldown timer.",
    "Masked Email Display. Shows the destination email address for reassurance without exposing it fully.",
    "Return-to-Login Link. Quick path back for users who already verified in another tab.",
    "Full Dark Mode. Automatic adaptation across light and dark theme modes.",
  ],
  integrationHeading: "Works Well With Other Sections",
  integrationDescription: [
    "Pair a <b>Check Mail Block</b> with <b>Sign Up</b> or <b>Forgot Password</b> as the confirmation step right after submission.",
    "Combine with <b>Code Verification</b> when your flow expects a one-time code instead of a magic link.",
  ],
  faqs: [
    {
      question: "Does the resend button actually resend the email?",
      answer:
        "The button is UI only — wire its click handler to your auth provider's resend-email endpoint.",
    },
    {
      question: "Can I show the real email address instead of a masked one?",
      answer:
        "Yes. Pass the email as a prop and render it however you'd like, masked or in full.",
    },
  ],
}
