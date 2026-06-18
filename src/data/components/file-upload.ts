// types
import { CategoryInfo } from "../blocks/types";

export const fileUploadInfo: CategoryInfo = {
  title: "File Upload",
  description: [
    "Shadcn File Upload component allows users to select and upload files to your application.",
    "Built with local code, it handles focus, accessibility, and state out of the box.",
    "Used in forms, settings, and headers for secure, interactive file entry."
  ],
  whatIsHeading: "What is a Shadcn File Upload?",
  whatIsDescription: [
    "A file upload is a versatile element for file selection and upload flows (e.g., images, documents, and search). Shadcn File Upload composes with native HTML and Lucide for layout, padding, and state.",
    "File uploads can have zones, triggers, and interactive elements. Each file upload is a self-contained unit that helps organize your files."
  ],
  whyUseHeading: "Why Use Shadcn File Upload?",
  whyUseDescription: [
    "File uploads provide a structured way to present file selection without overwhelming users. They help with discovery, search, and scanning through files.",
    "Accessibility and consistency are built-in. By using file uploads, your application stays visually uniform while being accessible by default."
  ],
  featuresHeading: "Key Features of Shadcn File Upload",
  features: [
    "Search Support. Integrated search field for filtering long file-based lists.",
    "Size Variants. Full control over padding, shadows, and state using Tailwind.",
    "Responsive Design. File uploads work perfectly across all screen sizes and device types.",
    "Interactive States. Combine with hover effects or interactive elements like buttons.",
    "Flexible Layout. File uploads can be used in forms, settings, or as standalone blocks."
  ],
  integrationHeading: "Works Well With Other Components",
  integrationDescription: [
    "Use <b>Shadcn File Upload</b> inside <b>Shadcn Form</b> or <b>Shadcn Dialog</b> for upload actions. Combine with <b>Shadcn Progress</b> for upload feedback.",
    "Place <b>Shadcn Input</b> or <b>Shadcn Button</b> around a file upload for discoverable search and action menus."
  ],
  faqs: [
    {
      question: "Are file uploads interactive?",
      answer:
        "File uploads themselves are interactive points for secure file selection and action discovery."
    },
    {
      question: "Can I customize the filter behavior on a file upload?",
      answer:
        "Yes! Use the filter prop or custom logic to create the perfect search and match for your files."
    },
    {
      question: "What's the best use case for a file upload shortcut?",
      answer:
        "Use file upload shortcuts to provide quick keyboard-based access to common file-based actions."
    }
  ]
};
