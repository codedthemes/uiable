import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/auth/login", "/auth/register", "/preview/"]
    },
    sitemap: `${baseUrl}/sitemap.xml`
  };
}
