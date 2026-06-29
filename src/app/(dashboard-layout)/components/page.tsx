import { Metadata } from "next"
// projects imports
import branding from "@/branding.json"

import ComponentsPageClient from "./components-page-client"

export const metadata: Metadata = {
  title: `UI Components - ${branding.brandName}`,
  description:
    "450+ production-ready React UI components built with Tailwind CSS, powered by shadcn/ui and Base UI. Designed for modern Next.js applications with accessibility, customization, and developer experience in mind.",
  alternates: {
    canonical: "/components",
  },
  openGraph: {
    title: `UI Components - ${branding.brandName}`,
    description:
      "450+ production-ready React UI components built with Tailwind CSS, powered by shadcn/ui and Base UI. Designed for modern Next.js applications with accessibility, customization, and developer experience in mind.",
    images: [
      {
        url: "https://cdn.uiable.com/og/components.png",
        width: 1200,
        height: 630,
        alt: `UI Components - ${branding.brandName}`,
      },
    ],
  },
}

export default function ComponentsPage() {
  return <ComponentsPageClient />
}
