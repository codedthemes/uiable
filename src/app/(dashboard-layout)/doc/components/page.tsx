// next
import { Metadata } from "next"

// project-imports
import ComponentsPageClient from "./components-page-client"
import branding from "@/branding.json"

// constant
export const metadata: Metadata = {
  title: `Components Guide - ${branding.brandName}`,
  description: `Learn the two ways to add ${branding.brandName} components to your app: the Shadcn CLI, or manual copy-paste.`,
  alternates: {
    canonical: "/doc/components",
  },
}

//  ------------------------------ | PAGE - COMPONENTS | ------------------------------  //

export default function ComponentsPage() {
  return <ComponentsPageClient />
}
