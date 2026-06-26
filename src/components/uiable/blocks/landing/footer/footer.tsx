import { ComponentProps } from "react"
import Link from "next/link"
// project
import branding from "@/branding.json"
// assets
import {
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandX,
} from "@tabler/icons-react"

import { cn } from "@/lib/utils"
import Logo from "@/components/uiable/layout/shared/logo"

interface FooterProps extends ComponentProps<"footer"> {
  containerClassName?: string
}

// constants
const navLinks = [
  { href: "/components", label: "Components" },
  { href: "/doc/introduction", label: "Documentation" },
]

const socialLinks = [
  { Icon: IconBrandX, href: branding.company.socialLink.x, label: "Twitter" },
  {
    Icon: IconBrandDiscord,
    href: branding.company.socialLink.discord,
    label: "Discord",
  },
  {
    Icon: IconBrandGithub,
    href: branding.company.socialLink.github,
    label: "Github",
  },
]

//  ------------------------------ | LAYOUT - FOOTER | ------------------------------  //

export default function Footer({
  className,
  containerClassName,
  ...props
}: FooterProps) {
  return (
    <footer
      style={{
        background:
          "linear-gradient(to top, var(--primary) -180%, var(--background) 95%)",
      }}
      className={cn("w-full", className)}
      {...props}
    >
      <div
        className={cn(
          "container mx-auto flex flex-col gap-8 border-border/60 px-4 py-10 sm:px-8 md:flex-row md:items-center md:justify-between",
          containerClassName
        )}
      >
        {/* LEFT */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2.5">
            <Logo />
          </div>

          <p className="text-base leading-6 font-normal text-foreground">
            v1.0 | Built by{" "}
            <Link
              href={branding.company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              {branding.company.name}
            </Link>
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center md:items-center">
          {/* NAV LINKS */}
          <nav className="flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="font-sans text-base leading-6 font-normal text-foreground transition hover:text-primary"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* DIVIDER */}
          <div className="hidden h-6 w-px bg-black/10 sm:block" />

          {/* SOCIALS */}
          <div className="flex items-center gap-2.5">
            {socialLinks.map(({ Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-card text-foreground transition-colors hover:bg-muted dark:hover:bg-muted"
              >
                <Icon size={18} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
