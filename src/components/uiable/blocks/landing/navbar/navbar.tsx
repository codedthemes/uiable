"use client"

import Link from "next/link"
import { useState } from "react"

// shadcn
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

// project imports
import branding from "@/branding.json"
import Logo from "@/components/uiable/layout/shared/logo"
import NavSearchDialog from "../components/NavSearchDialog"
import { ThemeToggle } from "@/components/customizer"

// assets
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

function SocialActions({
  className = "",
  onSearchClick,
}: {
  className?: string
  onSearchClick?: () => void
}) {
  return (
    <div className={className}>
      <ThemeToggle />
      <Divider />
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

      <Button
        variant="ghost"
        size="icon-lg"
        aria-label="Twitter"
        nativeButton={false}
        render={
          <Link
            href={branding.company.socialLink.x}
            target="_blank"
            rel="noopener noreferrer"
          />
        }
        className="flex h-10.5 w-10.5 items-center justify-center rounded-sm hover:bg-foreground/10 dark:hover:bg-muted"
      >
        <IconBrandX className="size-4.5" />
      </Button>
      <Divider />

      <Button
        variant="ghost"
        size="icon-lg"
        aria-label="Discord"
        nativeButton={false}
        render={
          <Link
            href={branding.company.socialLink.discord}
            target="_blank"
            rel="noopener noreferrer"
          />
        }
        className="flex h-10.5 w-10.5 items-center justify-center rounded-sm hover:bg-foreground/10 dark:hover:bg-muted"
      >
        <IconBrandDiscord className="size-4.5" />
      </Button>
      <Divider />

      <Button
        nativeButton={false}
        render={
          <Link
            href={branding.company.socialLink.github}
            target="_blank"
            rel="noopener noreferrer"
          />
        }
        className="text-md flex h-10.5 w-10.5 items-center rounded-full bg-foreground p-0 leading-6 font-medium text-secondary hover:bg-foreground/90"
      >
        <IconBrandGithub className="size-4.5" />
      </Button>
    </div>
  )
}

//  ------------------------------ | LAYOUT - NAVBAR | ------------------------------  //

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header>
      <div className="z-50 flex h-19.5 w-full items-center justify-between px-4 sm:px-8">
        {/* LEFT — Logo + nav links */}
        <div className="flex items-center gap-8">
          <Logo />

          {/* Nav links */}
          <nav className="hidden items-center gap-2 md:flex">
            {navlinks.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                nativeButton={false}
                render={<Link href={item.href} />}
                className="px-3 py-1.5 text-[14px] leading-6 font-medium text-foreground hover:bg-transparent hover:text-primary dark:hover:bg-transparent"
              >
                {item.label}
              </Button>
            ))}
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
            {navlinks.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                nativeButton={false}
                render={<Link href={item.href} />}
                className="justify-start px-0 py-1.5 text-[14px] leading-6 font-medium text-foreground hover:bg-transparent hover:text-primary dark:hover:bg-transparent"
              >
                {item.label}
              </Button>
            ))}
          </nav>
          <SocialActions
            className="flex items-center gap-2"
            onSearchClick={() => setSearchOpen(true)}
          />
        </div>
      )}
      <NavSearchDialog open={searchOpen} setOpen={setSearchOpen} />
    </header>
  )
}
