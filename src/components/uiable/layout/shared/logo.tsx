"use client"

// next
import dynamic from "next/dynamic"
import Link from "next/link"

// third-party
import { cn } from "cn"

// project-imports
import branding from "@/branding.json"

// assets
const brandFavLogo = "https://cdn.uiable.com/brand/favicon.svg"
const brandLogoDark = "https://cdn.uiable.com/brand/logo-white.svg"
const brandLogoLight = "https://cdn.uiable.com/brand/logo-dark.svg"

const LocalLightLogo = dynamic<{ className?: string }>(
  () =>
    import("@/images/brand/light-logo")
      .then((mod) => mod.default)
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
    import("@/images/brand/dark-logo")
      .then((mod) => mod.default)
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
  link?: boolean
  href?: string
}

//  ------------------------------ | SHARED - LOGO | ------------------------------  //

export default function Logo({
  className,
  link = true,
  href = "/",
}: LogoProps) {
  const content = (
    <>
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
    </>
  )

  const containerClassName = cn("group flex items-center gap-3", className)

  if (!link) {
    return <div className={containerClassName}>{content}</div>
  }

  return (
    <Link
      href={href}
      aria-label={`${branding.brandName} Home`}
      className={containerClassName}
    >
      {content}
    </Link>
  )
}
