"use client"

import { useEffect, useRef, useState } from "react"

// next
import Link from "next/link"

// shadcn
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar"

// third-party
import { cn } from "cn"

// project-imports
import branding from "@/branding.json"
import { ThemeToggle } from "@/components/customizer"
import NavSearchDialog from "@/components/uiable/blocks/landing/components/NavSearchDialog"
import Logo from "@/components/uiable/layout/shared/logo"

// assets
import {
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandX,
} from "@tabler/icons-react"
import { Menu, Search, X } from "lucide-react"

function Divider({ className }: { className?: string }) {
  return (
    <Separator orientation="vertical" className={cn("my-1.5", className)} />
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

interface HeaderActionsProps {
  className?: string
  showThemeToggle?: boolean
  onSearchClick?: () => void
}

function HeaderActions({
  className = "",
  showThemeToggle = true,
  onSearchClick,
}: HeaderActionsProps) {
  return (
    <div className={className}>
      <Button
        variant="ghost"
        size="icon-lg"
        aria-label="Search"
        onClick={onSearchClick}
        className="flex h-10.5 w-10.5 items-center justify-center rounded-sm hover:bg-foreground/10 dark:hover:bg-muted"
      >
        <Search className="size-4.5" />
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

      {showThemeToggle && (
        <>
          <Divider />
          <ThemeToggle />
        </>
      )}
    </div>
  )
}

//  ------------------------------ | DASHBOARD - HEADER | ------------------------------  //

export default function DashboardHeader() {
  const { state, isMobile } = useSidebar()
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  // The docked sidebar renders its own Logo. Show the header logo only when
  // that sidebar logo isn't visible (mobile drawer, or collapsed off-canvas),
  // so the two never appear at the same time.
  const showLogo = isMobile || state === "collapsed"
  const menuRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!menuOpen) return

    function handlePointerDown(event: MouseEvent) {
      const target = event.target as Node
      if (
        menuRef.current?.contains(target) ||
        toggleRef.current?.contains(target)
      ) {
        return
      }
      setMenuOpen(false)
    }

    document.addEventListener("mousedown", handlePointerDown)
    return () => document.removeEventListener("mousedown", handlePointerDown)
  }, [menuOpen])

  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md">
      <div className="flex h-16 shrink-0 items-center gap-1 px-4 sm:px-6">
        {/* Left-aligned toggle from the mobile breakpoint up (docked sidebar) */}
        <SidebarTrigger
          reverseIcon
          className="relative mx-1 -ml-1 hidden h-11 w-11 items-center justify-center rounded-lg min-[1200px]:flex"
        />

        {/* Below the mobile breakpoint (drawer mode) the header shows the logo,
            sized to match the sidebar drawer's own logo (h-7). */}
        {showLogo && <Logo className="h-7 w-auto min-[1200px]:hidden" />}

        <div className="flex-1" />

        {/* Right-aligned toggle below the mobile breakpoint (drawer mode) */}
        <SidebarTrigger className="relative mx-1 -mr-1 flex h-11 w-11 items-center justify-center rounded-lg min-[1200px]:hidden" />

        {/* Desktop actions */}
        <HeaderActions
          className="hidden items-center gap-2.5 md:flex"
          onSearchClick={() => setSearchOpen(true)}
        />

        {/* Mobile menu toggle + theme toggle */}
        <div className="flex items-center gap-1 md:hidden">
          <Button
            ref={toggleRef}
            variant="ghost"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-sm"
          >
            {menuOpen ? (
              <X className="size-4.5" />
            ) : (
              <Menu className="size-4.5" />
            )}
          </Button>
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="absolute top-full right-0 w-full border-b border-border/60 bg-background shadow-lg md:hidden"
        >
          <div className="flex flex-col gap-4 p-4">
            <HeaderActions
              className="flex flex-wrap items-center justify-center gap-2"
              showThemeToggle={false}
              onSearchClick={() => {
                setSearchOpen(true)
                setMenuOpen(false)
              }}
            />
          </div>
        </div>
      )}

      <NavSearchDialog open={searchOpen} setOpen={setSearchOpen} />
    </header>
  )
}
