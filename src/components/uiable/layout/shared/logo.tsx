"use client"

import dynamic from "next/dynamic"
import Link from "next/link"
// project imports
import branding from "@/branding.json"

import { cn } from "@/lib/utils"

// assets
const brandFavLogo = "/assets/images/brand/favicon.svg"
const brandLogoDark = "/assets/images/brand/logo-white.svg"
const brandLogoLight = "/assets/images/brand/logo-dark.svg"

const LocalLightLogo = dynamic<{ className?: string }>(
  () =>
    import("@/images/brand")
      .then((mod) => mod.LightLogo)
      .catch(() => {
        return function FallbackLightLogo({ className, ...props }: any) {
          return (
            <img
              src={brandLogoLight}
              alt={`${branding.brandName} Logo`}
              className={className}
              {...props}
            />
          )
        }
      }),
  { ssr: false }
)

const LocalDarkLogo = dynamic<{ className?: string }>(
  () =>
    import("@/images/brand")
      .then((mod) => mod.DarkLogo)
      .catch(() => {
        return function FallbackDarkLogo({ className, ...props }: any) {
          return (
            <img
              src={brandLogoDark}
              alt={`${branding.brandName} Logo`}
              className={className}
              {...props}
            />
          )
        }
      }),
  { ssr: false }
)

interface LogoProps {
  className?: string
}

//  ------------------------------ | SHARED - LOGO | ------------------------------  //

export default function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={cn("group flex items-center gap-3", className)}>
      <div className="hidden dark:block">
        <LocalDarkLogo
          className={cn("group-data-[collapsible=icon]:hidden", className)}
        />
        <img
          src={brandFavLogo}
          alt={`${branding.brandName} Logo`}
          className={cn(
            "hidden group-data-[collapsible=icon]:block",
            className
          )}
        />
      </div>
      <div className="block dark:hidden">
        <LocalLightLogo
          className={cn("group-data-[collapsible=icon]:hidden", className)}
        />
        <img
          src={brandFavLogo}
          alt={`${branding.brandName} Logo`}
          className={cn(
            "hidden group-data-[collapsible=icon]:block",
            className
          )}
        />
      </div>
    </Link>
  )
}
