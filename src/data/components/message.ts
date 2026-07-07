// projects imports
import branding from "@/branding.json"

// types
import { CategoryInfo } from "./types"

export const messageInfo: CategoryInfo = {
  title: "Message",
  description: [
    "Display modern chat threads, replies, and list cards with the configurable Message component. Features bubble compositions, avatars, and status icons.",
  ],
  whatIsHeading: `What is ${branding.brandName} Message?`,
  whatIsDescription: [
    `${branding.brandName} Message provides UI compositions for individual chat rows or comments. It wraps message bubbles, user avatar indicators, and timestamps into a clean unified component.`,
    "Designed to be highly composable, it adapts to dynamic chat screens and support interfaces.",
  ],
  whyUseHeading: `Why ${branding.brandName} Message?`,
  whyUseDescription: [
    `Building chat rows with proper spacing between bubbles, avatars, and borders is tricky. ${branding.brandName} Message handles the layout math for you, ensuring perfect alignments and responsiveness.`,
  ],
  featuresHeading: `Features of ${branding.brandName} Message`,
  features: [
    "Avatar Alignment. Places user avatars on the left or right side of messages.",
    "Grouped Layouts. Clean layouts representing conversational flows.",
    "Seamless Styles. High quality defaults built directly into class-variance-authority (CVA).",
  ],
  integrationHeading: "Integration & Compatibility",
  integrationDescription: [
    "Easily connects with WebSocket connections or real-time databases to show live message feeds.",
  ],
  faqs: [],
}
