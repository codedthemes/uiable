import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "*",
        disallow: [
          "/auth/login",
          "/auth/forgot-password",
          "/auth/register",
          "/auth/verify-email",
          "/auth/reset-password",
          "/auth/callback",
          "/admin/*",
          "/auth/error",
          "/assets/svg/*",
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
