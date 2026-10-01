// types
import { CategoryInfo } from "./types"

export const resetPasswordInfo: CategoryInfo = {
  title: "Reset Password",
  description: [
    "Shadcn Reset Password blocks let users set a new password after following a password-reset link, with confirmation and strength feedback.",
    "They pair a new-password and confirm-password field with clear validation states.",
    "Our Reset Password blocks are responsive, accessible, and easily customizable with Tailwind CSS.",
  ],
  whatIsHeading: "What is a Shadcn Reset Password Block?",
  whatIsDescription: [
    "A reset password block is the form users land on after clicking a password-reset link — it collects and confirms a new password.",
    "It's built with accessible form primitives so mismatched confirmation and weak-password errors are announced correctly.",
  ],
  whyUseHeading: "Why Use Shadcn Reset Password Blocks?",
  whyUseDescription: [
    "Complete Recovery Flow. Pairs with Forgot Password to close the loop from request to a working new password.",
    "Consistent UX. Matches the same design language as your Login, Sign Up, and Forgot Password blocks.",
    "Zero Setup Hassle. Pre-built with Tailwind CSS and Shadcn UI primitives, ready to drop into any Next.js application.",
  ],
  featuresHeading: "Key Features of Reset Password Blocks",
  features: [
    "Confirm Password Field. Built-in mismatch validation between the new password and its confirmation.",
    "Password Visibility Toggle. Optional show/hide icon for both password fields.",
    "Submission Feedback. Success state confirming the password was updated, with a link to Login.",
    "Full Dark Mode. Automatic adaptation across light and dark theme modes.",
  ],
  integrationHeading: "Works Well With Other Sections",
  integrationDescription: [
    "Pair a <b>Reset Password Block</b> with a <b>Forgot Password</b> block to complete the account-recovery flow.",
    "Combine with a <b>Login</b> block as the destination once the password has been updated.",
  ],
  faqs: [
    {
      question: "How does the block know the reset token from the email link?",
      answer:
        "The block itself only handles the UI — you read the token from the URL (e.g. a search param) and pass it along with the new password to your auth provider.",
    },
    {
      question: "Does it enforce a minimum password strength?",
      answer:
        "The block includes the field and error-state styling; the actual strength rules are up to your validation logic or auth provider.",
    },
  ],
}
