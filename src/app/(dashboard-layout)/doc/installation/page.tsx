// next
import { Metadata } from "next"

// project-imports
import InstallationPageClient from "./installation-page-client"
import branding from "@/branding.json"

// constant
export const metadata: Metadata = {
  title: `Installation - ${branding.brandName}`,
  description: `Set up the foundation for your ${branding.brandName} project — built on Shadcn UI, Base UI, Next.js, React, and Tailwind CSS.`,
  alternates: {
    canonical: "/doc/installation",
  },
}

//  ------------------------------ | PAGE - INSTALLATION | ------------------------------  //

export default function InstallationPage() {
  return <InstallationPageClient />
}
