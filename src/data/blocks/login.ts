// types
import { CategoryInfo } from "./types"

export const loginInfo: CategoryInfo = {
  title: "Login",
  description: [
    "Shadcn Login blocks are ready-made sign-in screens with email/password fields, social auth buttons, and validation states built in.",
    "They cover common layouts — centered card, split-screen with imagery, and minimal forms — so you can drop in a production-ready auth screen fast.",
    "Our Login blocks are responsive, accessible, and easily customizable with Tailwind CSS.",
  ],
  whatIsHeading: "What is a Shadcn Login Block?",
  whatIsDescription: [
    "A login block is a full sign-in page section combining a form, labels, error states, and links to sign-up or password recovery.",
    "It's built with accessible form primitives so focus order, labels, and error announcements work correctly out of the box.",
  ],
  whyUseHeading: "Why Use Shadcn Login Blocks?",
  whyUseDescription: [
    "Faster Auth Screens. Skip building sign-in forms from scratch — wire up your auth provider and ship.",
    "Consistent UX. Matches the same design language as your Sign Up, Forgot Password, and Reset Password blocks.",
    "Zero Setup Hassle. Pre-built with Tailwind CSS and Shadcn UI primitives, ready to drop into any Next.js application.",
  ],
  featuresHeading: "Key Features of Login Blocks",
  features: [
    "Form Validation States. Built-in error and helper text styling for invalid credentials.",
    "Social Auth Row. Optional Google, GitHub, or other provider buttons above or below the form.",
    "Split & Centered Layouts. Choose between a centered card or a split-screen layout with brand imagery.",
    "Full Dark Mode. Automatic adaptation across light and dark theme modes.",
  ],
  integrationHeading: "Works Well With Other Sections",
  integrationDescription: [
    "Pair a <b>Login Block</b> with a <b>Sign Up</b> and <b>Forgot Password</b> block for a complete authentication flow.",
    "Combine with a <b>Navbar</b> that swaps its call-to-action button once a session cookie is present.",
  ],
  faqs: [
    {
      question: "Does the Login block come wired up to an auth provider?",
      answer:
        "No. The block ships as UI only — you connect the form submit handler to your own auth provider, such as NextAuth, Clerk, or Supabase Auth.",
    },
    {
      question: "Can I remove the social login buttons?",
      answer:
        "Yes. The social auth row is a separate section you can delete or replace with your own providers.",
    },
  ],
}
