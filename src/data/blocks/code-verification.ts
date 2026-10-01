// types
import { CategoryInfo } from "./types"

export const codeVerificationInfo: CategoryInfo = {
  title: "Code Verification",
  description: [
    "Shadcn Code Verification blocks provide a segmented one-time-passcode (OTP) input for email or SMS verification flows.",
    "They include auto-advancing digit fields, paste support, and a resend-code action.",
    "Our Code Verification blocks are responsive, accessible, and easily customizable with Tailwind CSS.",
  ],
  whatIsHeading: "What is a Shadcn Code Verification Block?",
  whatIsDescription: [
    "A code verification block is a form built around a segmented OTP input, where a user types or pastes a code sent to their email or phone.",
    "It's built with accessible input primitives so focus moves between digits correctly with both keyboard and paste input.",
  ],
  whyUseHeading: "Why Use Shadcn Code Verification Blocks?",
  whyUseDescription: [
    "Familiar Pattern. Segmented digit inputs are an established UX convention users already recognize.",
    "Faster Verification. Auto-advance and paste support reduce friction compared to a single free-text field.",
    "Zero Setup Hassle. Pre-built with Tailwind CSS and Shadcn UI primitives, ready to drop into any Next.js application.",
  ],
  featuresHeading: "Key Features of Code Verification Blocks",
  features: [
    "Segmented OTP Input. Individual digit boxes with automatic focus advancing.",
    "Paste Support. Pasting a full code fills every digit box at once.",
    "Resend Countdown. A disabled resend action with a visible cooldown timer.",
    "Full Dark Mode. Automatic adaptation across light and dark theme modes.",
  ],
  integrationHeading: "Works Well With Other Sections",
  integrationDescription: [
    "Pair a <b>Code Verification Block</b> with <b>Sign Up</b> or <b>Check Mail</b> for a complete email/SMS verification flow.",
    "Combine with a <b>Login</b> block for two-factor authentication after a password is verified.",
  ],
  faqs: [
    {
      question: "Does the code get validated automatically?",
      answer:
        "No. The block collects the digits and calls your submit handler with the full code — you validate it against your backend or auth provider.",
    },
    {
      question: "Can I change the number of digits in the code?",
      answer:
        "Yes. The number of input boxes is a configurable prop, commonly set to 4 or 6 digits.",
    },
  ],
}
