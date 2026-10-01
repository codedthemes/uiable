// types
import { CategoryInfo } from "./types"

export const forgotPasswordInfo: CategoryInfo = {
  title: "Forgot Password",
  description: [
    "Shadcn Forgot Password blocks give users a simple way to request a password reset link by entering their account email.",
    "They pair a focused single-field form with clear instructional copy and a link back to the login screen.",
    "Our Forgot Password blocks are responsive, accessible, and easily customizable with Tailwind CSS.",
  ],
  whatIsHeading: "What is a Shadcn Forgot Password Block?",
  whatIsDescription: [
    "A forgot password block is a minimal form section that collects an email address to trigger a password-reset email.",
    "It's intentionally simple — one input, one action, and a clear explanation of what happens next.",
  ],
  whyUseHeading: "Why Use Shadcn Forgot Password Blocks?",
  whyUseDescription: [
    "Reduced Support Load. A clear, guided reset flow means fewer users emailing support to unlock their account.",
    "Consistent UX. Matches the same design language as your Login, Sign Up, and Reset Password blocks.",
    "Zero Setup Hassle. Pre-built with Tailwind CSS and Shadcn UI primitives, ready to drop into any Next.js application.",
  ],
  featuresHeading: "Key Features of Forgot Password Blocks",
  features: [
    "Single-Field Focus. One email input and one primary action, reducing drop-off.",
    "Submission Feedback. Built-in success state confirming the reset email was sent.",
    "Return-to-Login Link. Quick path back to the Login block for users who remember their password.",
    "Full Dark Mode. Automatic adaptation across light and dark theme modes.",
  ],
  integrationHeading: "Works Well With Other Sections",
  integrationDescription: [
    "Pair a <b>Forgot Password Block</b> with a <b>Login</b> block and a <b>Reset Password</b> block to complete the recovery flow.",
    "Combine with a <b>Check Mail</b> block to confirm the reset email was sent.",
  ],
  faqs: [
    {
      question: "Does this block send the actual reset email?",
      answer:
        "No. The block only captures the email and shows a confirmation state — you connect the submit handler to your own auth provider's reset-email endpoint.",
    },
    {
      question: "Can I customize the success message copy?",
      answer:
        "Yes. The confirmation text is plain markup you can edit directly, or pass in as a prop.",
    },
  ],
}
