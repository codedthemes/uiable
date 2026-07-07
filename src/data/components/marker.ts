// projects imports
import branding from "@/branding.json"

// types
import { CategoryInfo } from "./types"

export const markerInfo: CategoryInfo = {
  title: "Marker",
  description: [
    "Highlight key features, sequence numbers, ratings, or points of interest on layout maps with the Marker component.",
  ],
  whatIsHeading: `What is ${branding.brandName} Marker?`,
  whatIsDescription: [
    `${branding.brandName} Marker is a highlight component used to draw attention to visual elements, display badges, indicate locations on images, or flag steps in a workflow.`,
    "It is built to be clean, modular, and easy to position anywhere in your app.",
  ],
  whyUseHeading: `Why ${branding.brandName} Marker?`,
  whyUseDescription: [
    `Markers are crucial for maps, walkthrough guides, and rating summaries. ${branding.brandName} Marker helps you build consistent visual indicators with built-in Tailwind color variants and hover behaviors.`,
  ],
  featuresHeading: `Features of ${branding.brandName} Marker`,
  features: [
    "Positioning Flexibility. Easy to overlay on images, maps, or cards.",
    "Visual Cleanliness. Simplified layouts with support for ratings, steps, or labels.",
    "Interactive States. Pre-styled hover effects for rich user engagement.",
  ],
  integrationHeading: "Integration & Compatibility",
  integrationDescription: [
    "Works perfectly with image galleries, step indicators, and rating list components.",
  ],
  faqs: [],
}
