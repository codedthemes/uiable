import { MetadataRoute } from "next";
import { categoryInfoMap as componentCategoryInfoMap } from "@/data/components";
import { blockCategoryInfoMap } from "@/data/blocks";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL;

  // Static routes
  const staticRoutes = [
    "",
    "/components",
    "/blocks",
    "/doc",
    "/doc/introduction",
    "/doc/installation",
    "/doc/cli"
    // "/doc/license"
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8
  }));

  // Dynamic component routes
  const componentRoutes = Object.keys(componentCategoryInfoMap).map((slug) => ({
    url: `${baseUrl}/components/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6
  }));

  // Dynamic block routes
  const blockRoutes = Object.keys(blockCategoryInfoMap).map((slug) => ({
    url: `${baseUrl}/blocks/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6
  }));

  return [...staticRoutes, ...componentRoutes, ...blockRoutes];
}
