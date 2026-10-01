// next
import { Metadata } from "next"

// project-imports
import CliPageClient from "./cli-page-client"
import branding from "@/branding.json"

// constant
export const metadata: Metadata = {
  title: `Shadcn CLI - ${branding.brandName}`,
  description: `Configure the Shadcn CLI to resolve ${branding.brandName} components and bring variants into your project with a single command.`,
  alternates: {
    canonical: "/doc/cli",
  },
}

//  ------------------------------ | PAGE - CLI | ------------------------------  //

export default function ShadcnCliPage() {
  return <CliPageClient />
}
