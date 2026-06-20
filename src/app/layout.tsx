import { ReactNode } from "react";
import { Metadata } from "next";

// shadcn
import { TooltipProvider } from "@/components/ui/tooltip";

// third-party
import { Toaster } from "sonner";

// project
import branding from "@/branding.json";
import { ThemeProvider } from "@/components/theme-provider";

// assets
import "./globals.css";

const baseUrl = process.env.NEXT_PUBLIC_APP_URL!;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: "/",
  },
  title: `UI component library built on shadcn and Base UI - ${branding.brandName}`,
  description:
    "A set of beautifully designed UI components you can customize, extend, and make your own. Open source and built for Next.js",
  robots: {
    index: false,
    follow: false,
  },
  icons: { icon: "https://cdn.uiable.com/brand/favicon.svg" },
  openGraph: {
    title: `UI component library built on shadcn and Base UI - ${branding.brandName}`,
    description:
      "A set of beautifully designed UI components you can customize, extend, and make your own. Open source and built for Next.js",
    images: [
      {
        url: "https://cdn.uiable.com/og/components-to-complete-interfaces.png",
        width: 1200,
        height: 630,
        alt: `${branding.brandName} Banner`,
      },
    ],
  },
};

//  ------------------------------ | LAYOUT - ROOT | ------------------------------  //

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: baseUrl,
        name: branding.brandName,
        description: `UI component library built on shadcn and Base UI - ${branding.brandName}`,
        publisher: {
          "@id": `${baseUrl}/#organization`,
        },
      },
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        name: branding.brandName,
        url: baseUrl,
        logo: `${baseUrl}https://cdn.uiable.com/og/components-to-complete-interfaces.png`,
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="group/body font-sans antialiased bg-background **:outline-none [&_*:focus]:outline-none">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>{children}</TooltipProvider>
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
