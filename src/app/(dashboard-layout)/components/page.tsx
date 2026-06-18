import { Metadata } from "next";

// projects imports
import branding from "@/branding.json";
import ComponentsPageClient from "./components-page-client";

export const metadata: Metadata = {
  title: `All Components - ${branding.brandName}`,
  description:
    "Browse through our comprehensive library of UI components and their variants.",
  alternates: {
    canonical: "/components",
  },
  openGraph: {
    title: `All Components - ${branding.brandName}`,
    description:
      "Browse through our comprehensive library of UI components and their variants.",
    images: [
      {
        url: "https://cdn.uiable.com/og/components.png",
        width: 1200,
        height: 630,
        alt: `All Components - ${branding.brandName}`,
      },
    ],
  },
};

export default function ComponentsPage() {
  return <ComponentsPageClient />;
}
