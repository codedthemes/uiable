// next
import { Metadata } from "next"

// project-imports
import BlocksPageClient from "./blocks-page-client"
import branding from "@/branding.json"

// constant
export const metadata: Metadata = {
  title: `Blocks Guide - ${branding.brandName}`,
  description: `Learn how to browse and install ${branding.brandName}'s ready-made, page-level blocks — free and Pro.`,
  alternates: {
    canonical: "/doc/blocks",
  },
}

//  ------------------------------ | PAGE - BLOCKS | ------------------------------  //

export default function BlocksDocPage() {
  return <BlocksPageClient />
}
