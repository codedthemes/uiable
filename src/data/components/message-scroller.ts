// projects imports
import branding from "@/branding.json"

// types
import { CategoryInfo } from "./types"

export const messageScrollerInfo: CategoryInfo = {
  title: "Message Scroller",
  description: [
    "Manage scrollable message containers, chat log lists, and auto-scrolling threads with the Message Scroller component.",
  ],
  whatIsHeading: `What is ${branding.brandName} Message Scroller?`,
  whatIsDescription: [
    `${branding.brandName} Message Scroller is a scrollable container wrapper designed specifically for message histories and conversation feeds. It integrates scroll bars, scroll triggers, and overflow styling.`,
    "Supports customizable scrollbars, load-more indicators, and bottom-snapping features.",
  ],
  whyUseHeading: `Why ${branding.brandName} Message Scroller?`,
  whyUseDescription: [
    `Managing scroll states in a chat window (such as snapping to bottom on new messages or pagination when scrolling up) is complex. ${branding.brandName} Message Scroller provides a solid container shell to simplify this task.`,
  ],
  featuresHeading: `Features of ${branding.brandName} Message Scroller`,
  features: [
    "Custom Scrollbars. Sleek scrollbar track and thumb styling matching the overall theme.",
    "Overflow Controls. Managed overflow configurations to prevent layout breaks.",
    "Content Containment. Designed to wrap multiple Message or Bubble items seamlessly.",
  ],
  integrationHeading: "Integration & Compatibility",
  integrationDescription: [
    "Acts as the perfect parent wrapper for dynamic chat list layouts.",
  ],
  faqs: [],
}
