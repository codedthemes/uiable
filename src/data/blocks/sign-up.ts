// types
import { CategoryInfo } from "./types"

export const signUpInfo: CategoryInfo = {
  title: "Sign Up",
  description: [
    "Shadcn Sign Up blocks are ready-made registration screens with name, email, and password fields, terms acceptance, and validation states built in.",
    "They cover centered card, split-screen, and multi-step layouts so you can ship a polished registration flow quickly.",
    "Our Sign Up blocks are responsive, accessible, and easily customizable with Tailwind CSS.",
  ],
  whatIsHeading: "What is a Shadcn Sign Up Block?",
  whatIsDescription: [
    "A sign up block is a registration page section combining input fields, a terms-of-service checkbox, and a link back to the login screen.",
    "It's built with accessible form primitives so labels, required-field indicators, and error messages work correctly out of the box.",
  ],
  whyUseHeading: "Why Use Shadcn Sign Up Blocks?",
  whyUseDescription: [
    "Faster Onboarding Screens. Skip building registration forms from scratch — wire up your backend and ship.",
    "Consistent UX. Matches the same design language as your Login, Forgot Password, and Reset Password blocks.",
    "Zero Setup Hassle. Pre-built with Tailwind CSS and Shadcn UI primitives, ready to drop into any Next.js application.",
  ],
  featuresHeading: "Key Features of Sign Up Blocks",
  features: [
    "Form Validation States. Built-in error and helper text styling for weak passwords or taken emails.",
    "Terms Acceptance. A checkbox linked to your terms and privacy policy pages, required before submit.",
    "Split & Centered Layouts. Choose between a centered card or a split-screen layout with brand imagery.",
    "Full Dark Mode. Automatic adaptation across light and dark theme modes.",
  ],
  integrationHeading: "Works Well With Other Sections",
  integrationDescription: [
    "Pair a <b>Sign Up Block</b> with a <b>Login</b> block and a <b>Check Mail</b> block for a complete registration and verification flow.",
    "Combine with a <b>Pricing</b> block for a plan-selection-then-signup flow.",
  ],
  faqs: [
    {
      question: "Does the Sign Up block include password strength validation?",
      answer:
        "The block ships with the input and error-state styling in place — you connect your own validation rules or backend response to drive them.",
    },
    {
      question: "Can I add extra fields like company name?",
      answer:
        "Yes. Extra fields can be added to the form the same way as the existing name, email, and password fields.",
    },
  ],
}
