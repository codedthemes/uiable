// projects imports
import branding from "@/branding.json"

// types
import { CategoryInfo } from "./types"

export const alertDialogInfo: CategoryInfo = {
  title: "Alert Dialog",
  description: [
    "Try it out, browse the component, copy the code, and add a secure alert dialog to your app. Built with Tailwind CSS and Base UI, it keeps focus properly trapped and prevents accidental destructive actions.",
  ],
  whatIsHeading: `What is ${branding.brandName} Alert Dialog?`,
  whatIsDescription: [
    `${branding.brandName} Alert Dialog is a focused modal used when you need users to stop and confirm important actions like deleting data or leaving without saving. It’s built with shadcn ui components and follows Base UI principles, so it clearly guides users to make a conscious decision before moving forward.`,
    "All source files are included in your project instead of relying on a publicly published npm module. This gives complete to modify structure, change functionality or fine-tune animations etc. according to the needs of project.",
    "Styling is handled with Tailwind CSS, making it easy to manage things like centered overlays, background blur, and properly aligned action buttons without dealing with heavy or restrictive styles.",
  ],
  variantsHeading: "Popular Alert Dialog Variants",
  variants: [
    'Destructive Action . Standard warning dialog featuring a red "Delete" or "Confirm" button',
    'Acknowledgment . Informational dialog requiring the user to explicitly click "I Understand" to proceed',
    "Non-Dismissible . Dialog that completely disables the Escape key and clicking outside, forcing a button click",
    'With Verification . Dialog requiring the user to type a confirmation word (e.g., "DELETE") before the action enables',
  ],
  whyUseHeading: `Why ${branding.brandName} Alert Dialog?`,
  whyUseDescription: [
    `Standard modals are easy to close whether by clicking outside or pressing Escape. That’s alright for simple use cases but it’s risky for actions like deleting data. ${branding.brandName} Alert Dialog avoids this by requiring users to clearly choose between Cancel and Continue so that nothing happens by mistake.`,
    "The code is part of the project so we are not dependent on any external package. We can easily adjust how it looks or behaves like changing the backdrop, adding custom icons, or showing a loading state during API actions.",
    "It works seamlessly with Tailwind CSS, keeping alerts clear, consistent, and easy to notice without extra styling effort.",
  ],
  featuresHeading: `Features of ${branding.brandName} Alert Dialog`,
  features: [
    "Anatomical Base UI Roots. Built on Base UI primitives for industry-standard accessibility, ensuring focus is perfectly trapped inside the modal.",
    "Forced Interaction. By default, clicking the backdrop overlay will not close the dialog.",
    "Accessible Screen Reader Routing. Automatically forces assistive technologies to read the dialog title and description immediately upon opening.",
    "Scroll Locking. Seamlessly hides the <body> scrollbar to prevent the background page from moving.",
    "Zero Dependency Lock-in. Direct source access allows for deep structural and logical customization.",
  ],
  integrationHeading: "Integration & Compatibility",
  integrationDescription: [
    `${branding.brandName} Alert Dialog acts as a safety layer for your interface especially when users are about to take actions that can’t be undone. It’s essential for platforms that handle sensitive data or important user decisions such as:`,
  ],
  integrationList: [
    "Account and Workspace Deletion Flows",
    "Discarding Unsaved Form Changes",
    "Permanent Irreversible Database Actions",
    "Changing Critical Security Settings",
  ],
  integrationNote:
    "It also stays in sync with design system. If you update colors, button styles, or border radius in Tailwind setup then those changes are reflected automatically in the Alert Dialog without extra work.",
  faqs: [],
}
