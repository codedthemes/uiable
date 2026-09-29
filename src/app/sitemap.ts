// next
import { MetadataRoute } from "next"

// project-imports
import { blockCategoryInfoMap } from "@/data/blocks"
import { categoryInfoMap as componentCategoryInfoMap } from "@/data/components"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL

  // Static routes
  const staticRoutes = [
    "",
    "/components",
    "/blocks",
    "/doc/introduction",
    "/doc/installation",
    "/doc/shadcn-cli",
    "/doc/changelog",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }))

  // Dynamic component routes
  const componentRoutes = Object.keys(componentCategoryInfoMap).map((slug) => ({
    url: `${baseUrl}/components/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }))

  // Dynamic block routes
  const blockRoutes = Object.keys(blockCategoryInfoMap).map((slug) => ({
    url: `${baseUrl}/blocks/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...componentRoutes, ...blockRoutes]
}
