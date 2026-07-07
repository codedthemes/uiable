// projects imports
import branding from "@/branding.json"

// types
import { CategoryInfo } from "./types"

export const bubbleInfo: CategoryInfo = {
  title: "Bubble",
  description: [
    "Display speech bubbles and conversation messages with the flexible Bubble component. Supports left/right orientation, alignments, and custom styling.",
  ],
  whatIsHeading: `What is ${branding.brandName} Bubble?`,
  whatIsDescription: [
    `${branding.brandName} Bubble is a speech bubble component designed to represent conversational messages, text logs, or chat replies. It features responsive widths, rounded borders, and clear text lines.`,
    "Direct source code access lets you easily integrate custom content templates, user indicators, or double-tick status indicators.",
    "It works seamlessly inside chat windows, user comments, or message scrollers.",
  ],
  whyUseHeading: `Why ${branding.brandName} Bubble?`,
  whyUseDescription: [
    `Speech bubbles are the foundation of any chat interface. ${branding.brandName} Bubble gives you a polished layout that supports right/left alignment, custom background colors, and typography configurations.`,
    "It scales perfectly on any device, automatically wrapping text and maintaining proper spacing.",
  ],
  featuresHeading: `Features of ${branding.brandName} Bubble`,
  features: [
    "Responsive Layouts. Automatic text wrapping and bubble adjustment.",
    "Alignment Options. Supports left-aligned (incoming) and right-aligned (outgoing) formats.",
    "Highly Customizable. Edit colors, border radius, and text padding directly via Tailwind CSS.",
  ],
  integrationHeading: "Integration & Compatibility",
  integrationDescription: [
    "Integrates effortlessly with state management libraries for handling dynamic message lists and chat interfaces.",
  ],
  faqs: [],
}
