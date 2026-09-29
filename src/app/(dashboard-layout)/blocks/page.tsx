// next
import { Metadata } from "next"

// project-imports
import BlocksPageClient from "./blocks-page-client"
import branding from "@/branding.json"

// constant
export const metadata: Metadata = {
  title: `All Blocks - ${branding.brandName}`,
  description: `Browse through our comprehensive library of UI blocks and their variants - ${branding.brandName}`,
  alternates: {
    canonical: "/blocks",
  },
  openGraph: {
    title: `All Blocks - ${branding.brandName}`,
    description: `Browse through our comprehensive library of UI blocks and their variants - ${branding.brandName}`,
  },
}

export default function BlocksPage() {
  return <BlocksPageClient />
}
