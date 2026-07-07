// projects imports
import branding from "@/branding.json"

// types
import { CategoryInfo } from "./types"

export const attachmentInfo: CategoryInfo = {
  title: "Attachment",
  description: [
    "Display files, documents, and image uploads with the flexible Attachment component. Clean design, support for download actions, upload states, and different layouts.",
  ],
  whatIsHeading: `What is ${branding.brandName} Attachment?`,
  whatIsDescription: [
    `${branding.brandName} Attachment helps you display uploaded documents, images, and other media assets. Built on shadcn/ui design patterns, it supports a wide variety of states (uploading, error, done), orientations (horizontal and vertical), and customizable media previews (icons or images).`,
    "Direct source code access allows you to easily customize remove actions, download triggers, or loading state shimmers to match your project's upload backend requirements.",
    "Perfect for chat interfaces, file lists, and document upload forms, the component works seamlessly with Tailwind CSS and class-variance-authority (CVA).",
  ],
  variantsHeading: "Popular Attachment Variants",
  variants: [
    "Horizontal Done . Displays file previews and metadata with download/remove actions once uploaded.",
    "Horizontal Uploading . Shows a shimmer progress animation and a cancel action while a file is uploading.",
    "Vertical Layout . Compact vertical card style suitable for grids or gallery compositions.",
    "Image Preview . Renders a square image thumbnail inside the attachment media zone.",
    "Attachment Group . Horizontal snapping carousel to manage multiple attachments elegantly.",
  ],
  whyUseHeading: `Why ${branding.brandName} Attachment?`,
  whyUseDescription: [
    `${branding.brandName} Attachment gives you a pre-styled, accessibility-friendly wrapper for displaying attachment lists. Handling multiple upload states (idle, uploading, processing, error, done) is built directly into the CVA styles, ensuring visual consistency.`,
    "Direct component ownership means you can easily replace action icons, add tooltips, or customize the loader without wrestling with a closed npm library.",
    "It scales perfectly across desktop and mobile screens. With default, small, and extra-small sizes, it fits anywhere from a chat compose bar to a dense table row.",
  ],
  featuresHeading: `Features of ${branding.brandName} Attachment`,
  features: [
    "Comprehensive State Classes. Pre-styled classes for error states, uploading states, and shimmer animations.",
    "Orientation Flexibility. Support for both horizontal rows and vertical cards out of the box.",
    "Size Variants. Default, SM, and XS sizes configured via type-safe CVA parameters.",
    "Group Snapping. An AttachmentGroup utility for responsive horizontal scroll container support.",
    "Composable Actions. Simple markup structure to append download, remove, preview, or retry buttons.",
  ],
  integrationHeading: "Integration & Compatibility",
  integrationDescription: [
    `${branding.brandName} Attachment is designed to connect easily with your frontend file upload library (e.g., React Dropzone or Uploadthing) to display files before and after upload.`,
    "You can integrate it into advanced application layouts such as:",
  ],
  integrationList: [
    "AI & Support Chat Composer Bars",
    "Ticket and Issue Tracking Boards",
    "Profile or Business Settings Upload Lists",
    "File Manager Grid Displays",
  ],
  integrationNote:
    "The component fully respects global Tailwind styling, automatically inheriting font and color system configurations.",
  faqs: [],
}
