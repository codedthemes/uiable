// types
import { CategoryInfo } from "./types"

export const questionnaireInfo: CategoryInfo = {
  title: "Questionnaire",
  description: [
    "A multi-step questionnaire with single-choice, multiple-choice, freeform, and skippable questions.",
  ],
  whatIsHeading: "What is a Questionnaire?",
  whatIsDescription: [
    "A questionnaire component is designed to collect user input across multiple steps.",
    "It supports various question types and logic flows to provide an engaging user experience.",
  ],
  variantsHeading: "Popular Questionnaire Variants",
  variants: [
    "Basic: A standard multi-step questionnaire with straightforward navigation and choices",
    "Progress Tracking: Questionnaire with a progress bar indicating the user's completion status",
    "Skippable Steps: Allows users to bypass optional questions using a dedicated skip action",
    "Keyboard Shortcuts: Supports keyboard shortcuts (like A, B, C) for quickly selecting choices",
    "State Resume: Automatically saves progress to local storage so users can return where they left off",
    "Animated Transitions: Smooth layout and view animations between questions using Framer Motion",
    "Dialog Mode: Embeds the entire questionnaire inside a modal dialog for quick inline feedback",
  ],
  whyUseHeading: "Why use the Questionnaire component?",
  whyUseDescription: [
    "Use this component when you need to break down complex forms into manageable steps.",
    "It helps increase completion rates by presenting questions interactively rather than as a long wall of text.",
  ],
  featuresHeading: "Key Features",
  features: [
    "Multi-step navigation with Previous/Next controls",
    "Support for single and multiple choice questions",
    "Built-in progress tracking",
    "Skippable questions for optional steps",
  ],
  integrationHeading: "Integration",
  integrationDescription: [
    "Integrating the questionnaire into your application involves configuring the steps and handling the completion event.",
  ],
  integrationList: [
    "Import the Questionnaire primitives.",
    "Define each QuestionnaireItem with its respective choices and actions.",
    "Handle the `onComplete` event to process the collected data.",
  ],
  integrationNote:
    "Ensure that required questions are validated before allowing the user to proceed to the next step.",
  faqs: [],
}
