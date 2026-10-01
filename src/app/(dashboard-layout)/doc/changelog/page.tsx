// next
import { Metadata } from "next"

// project-imports
import ChangelogPageClient from "./changelog-page-client"
import branding from "@/branding.json"

// constant
export const metadata: Metadata = {
  title: `Changelog - ${branding.brandName}`,
  description: `See what's new in ${branding.brandName} — release notes for components, blocks, and templates.`,
  alternates: {
    canonical: "/doc/changelog",
  },
}

//  ------------------------------ | PAGE - CHANGELOG | ------------------------------  //

export default function ChangelogPage() {
  return <ChangelogPageClient />
}
