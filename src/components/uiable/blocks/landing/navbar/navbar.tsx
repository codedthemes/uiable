"use client"

import { ReactNode, useState } from "react"
import Link from "next/link"

// shadcn
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

// project imports
import branding from "@/branding.json"
import { ThemeToggle } from "@/components/customizer"
import NavSearchDialog from "@/components/uiable/blocks/landing/components/NavSearchDialog"
import Logo from "@/components/uiable/layout/shared/logo"
import { cn } from "@/lib/utils"

// assets
import { Star } from "@/images/svg/icons"
import {
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandX,
  IconMenu2,
  IconSearch,
  IconX,
} from "@tabler/icons-react"

// constants
const navlinks = [
  { label: "Components", href: "/components" },
  { label: "Get Started", href: "/doc/introduction" },
]

function Divider() {
  return <Separator orientation="vertical" className="my-1.5" />
}

function NavLinks({ className }: { className?: string }) {
  return (
    <>
      {navlinks.map((item) => (
        <Button
          key={item.label}
          variant="ghost"
          nativeButton={false}
          render={<Link href={item.href} />}
          className={cn(
            "py-1.5 text-sm leading-6 font-medium text-foreground hover:bg-transparent hover:text-primary dark:hover:bg-transparent",
            className
          )}
        >
          {item.label}
        </Button>
      ))}
    </>
  )
}

const socialLinks = [
  { label: "Twitter", href: branding.company.socialLink.x, icon: IconBrandX },
  {
    label: "Discord",
    href: branding.company.socialLink.discord,
    icon: IconBrandDiscord,
  },
  {
    label: "Github",
    href: branding.company.socialLink.github,
    icon: IconBrandGithub,
  },
]

function SocialActions({
  className = "",
  onSearchClick,
}: {
  className?: string
  onSearchClick?: () => void
}) {
  return (
    <div className={className}>
      <Button
        variant="ghost"
        size="icon-lg"
        aria-label="Search"
        onClick={onSearchClick}
        className="flex h-10.5 w-10.5 items-center justify-center rounded-sm hover:bg-foreground/10 dark:hover:bg-muted"
      >
        <IconSearch className="size-4.5" />
      </Button>
      <Divider />

      {socialLinks.map((social) => (
        <Button
          key={social.label}
          variant="ghost"
          size="icon-lg"
          aria-label={social.label}
          nativeButton={false}
          render={
            <Link
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
            />
          }
          className="flex h-10.5 w-10.5 items-center justify-center rounded-sm hover:bg-foreground/10 dark:hover:bg-muted"
        >
          <social.icon className="size-4.5" />
        </Button>
      ))}

      <Divider />
      <ThemeToggle />
    </div>
  )
}

function StickyWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="relative container mx-auto border-x border-border/60">
        {children}
        <div className="absolute bottom-0 left-0 z-50 -translate-x-2/4 translate-y-2/4 text-border/60">
          <Star />
        </div>
        <div className="absolute right-0 bottom-0 z-50 translate-x-2/4 translate-y-2/4 text-border/60">
          <Star />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 h-px w-full bg-border/60" />
      <div className="pointer-events-none absolute top-full left-0 h-8 w-full bg-gradient-to-b from-background to-transparent" />
    </div>
  )
}

//  ------------------------------ | LAYOUT - NAVBAR | ------------------------------  //

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <StickyWrapper>
      <header className="w-full">
        <div className="z-50 flex h-19.5 w-full items-center justify-between px-4 sm:px-8">
          {/* LEFT — Logo + nav links */}
          <div className="flex items-center gap-8">
            <Logo />

            {/* Nav links */}
            <nav className="hidden items-center gap-2 md:flex">
              <NavLinks className="px-3" />
            </nav>
          </div>

          <SocialActions
            className="hidden items-center gap-2 md:flex"
            onSearchClick={() => setSearchOpen(true)}
          />
          <Button
            variant="ghost"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-sm md:hidden"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? (
              <IconX className="size-4.5" />
            ) : (
              <IconMenu2 className="size-4.5" />
            )}
          </Button>
        </div>
        {open && (
          <div className="container mx-auto flex flex-col gap-4 border-t border-border bg-background px-4 py-4 sm:px-8 md:hidden">
            <nav className="flex flex-col gap-3">
              <NavLinks className="justify-start px-0" />
            </nav>
            <SocialActions
              className="flex items-center gap-2"
              onSearchClick={() => setSearchOpen(true)}
            />
          </div>
        )}
        <NavSearchDialog open={searchOpen} setOpen={setSearchOpen} />
      </header>
    </StickyWrapper>
  )
}
