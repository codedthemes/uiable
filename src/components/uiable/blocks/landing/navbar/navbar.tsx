"use client"

import { ReactNode, useEffect, useRef, useState } from "react"

// next
import Link from "next/link"
import { usePathname } from "next/navigation"

// shadcn
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

// third-party
import { cn } from "cn"

// project-imports
import branding from "@/branding.json"
import { ThemeToggle } from "@/components/customizer"
import NavSearchDialog from "@/components/uiable/blocks/landing/components/NavSearchDialog"
import Logo from "@/components/uiable/layout/shared/logo"
import { useGithubStarCount } from "@/hooks/use-github-star-count"
import Star from "@/images/svg/icons/star"

// assets
import {
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandX,
  type Icon as TablerIcon,
} from "@tabler/icons-react"
import { ChevronDown, Menu, Search, X } from "lucide-react"

// types
interface NavLink {
  label: string
  href: string
}

interface ResourceLink {
  label: string
  href: string
  external?: boolean
}

interface SocialLink {
  label: string
  href: string
  icon: TablerIcon
}

const navLinks: NavLink[] = [
  { label: "Components", href: "/components" },
  { label: "Blocks", href: "/blocks" },
]

const resourceLinks: ResourceLink[] = [
  { label: "Get Started", href: "/doc/introduction" },
  { label: "Changelog", href: "/doc/changelog" },
  {
    label: "Support",
    href: "https://codedthemes.support-hub.io/",
    external: true,
  },
]

interface ResourcesMenuProps {
  className?: string
  onLinkClick?: () => void
}

function ResourcesMenu({ className, onLinkClick }: ResourcesMenuProps) {
  const pathname = usePathname()
  const isResourcesActive = resourceLinks.some(
    (item) =>
      !item.external &&
      Boolean(pathname) &&
      (pathname === item.href || pathname.startsWith(`${item.href}/`))
  )

  return (
    <div className={cn("group relative", className)}>
      <Button
        variant="ghost"
        className={cn(
          "gap-1 py-1.5 text-sm leading-6 font-medium group-hover:text-primary hover:bg-transparent hover:text-primary dark:hover:bg-transparent",
          isResourcesActive ? "text-primary" : "text-foreground"
        )}
      >
        Resources
        <ChevronDown
          aria-hidden="true"
          className="size-4 transition-transform duration-200 group-hover:rotate-180"
        />
      </Button>
      <div className="invisible absolute top-full left-0 z-50 min-w-40 pt-2 opacity-0 group-hover:visible group-hover:opacity-100">
        <div className="flex flex-col rounded-md border border-border bg-background py-1">
          {resourceLinks.map((item) => {
            const isActive =
              !item.external &&
              Boolean(pathname) &&
              (pathname === item.href || pathname.startsWith(`${item.href}/`))

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={onLinkClick}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className={cn(
                  "px-3 py-2 text-sm hover:text-primary",
                  isActive ? "font-medium text-primary" : "text-foreground"
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function Divider({ className }: { className?: string }) {
  return (
    <Separator orientation="vertical" className={cn("my-1.5", className)} />
  )
}

interface NavLinksProps {
  className?: string
  onLinkClick?: () => void
}

function NavLinks({ className, onLinkClick }: NavLinksProps) {
  const pathname = usePathname()

  return (
    <>
      {navLinks.map((item) => {
        const isActive =
          Boolean(pathname) &&
          (pathname === item.href ||
            (item.href !== "/" && pathname.startsWith(`${item.href}/`)))

        return (
          <Button
            key={item.label}
            variant="ghost"
            nativeButton={false}
            onClick={onLinkClick}
            render={<Link href={item.href} />}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "py-1.5 text-sm leading-6 font-medium hover:bg-transparent hover:text-primary dark:hover:bg-transparent",
              isActive ? "text-primary" : "text-foreground",
              className
            )}
          >
            {item.label}
          </Button>
        )
      })}
    </>
  )
}

const socialLinks: SocialLink[] = [
  { label: "Twitter", href: branding.company.socialLink.x, icon: IconBrandX },
  {
    label: "Discord",
    href: branding.company.socialLink.discord,
    icon: IconBrandDiscord,
  },
]

interface SocialActionsProps {
  className?: string
  githubStars: string
  showThemeToggle?: boolean
  onSearchClick?: () => void
}

function SocialActions({
  className = "",
  githubStars,
  showThemeToggle = true,
  onSearchClick,
}: SocialActionsProps) {
  return (
    <div className={className}>
      <Button
        variant="ghost"
        size="icon-lg"
        aria-label="Search"
        onClick={onSearchClick}
        className="flex h-10.5 w-10.5 items-center justify-center rounded-sm hover:bg-foreground/10 dark:hover:bg-muted"
      >
        <Search aria-hidden="true" className="size-4.5" />
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
          <social.icon aria-hidden="true" className="size-4.5" />
        </Button>
      ))}

      <Button
        variant="ghost"
        aria-label="Github"
        nativeButton={false}
        render={
          <Link
            href={branding.company.socialLink.github}
            target="_blank"
            rel="noopener noreferrer"
          />
        }
        className="flex h-9 items-center gap-2 rounded-full bg-sidebar-border px-3.5 text-foreground hover:bg-sidebar-border/90 hover:text-foreground"
      >
        <IconBrandGithub aria-hidden="true" className="size-4" />
        <span className="text-sm font-semibold">{githubStars}</span>
      </Button>

      {showThemeToggle && (
        <>
          <Divider />
          <ThemeToggle />
        </>
      )}
    </div>
  )
}

function StickyWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="relative container mx-auto border-x border-border/60 max-[1199px]:max-w-none!">
        {children}
        <div className="absolute bottom-0 left-0 z-50 -translate-x-2/4 translate-y-2/4 text-border/60">
          <Star />
        </div>
        <div className="absolute right-0 bottom-0 z-50 translate-x-2/4 translate-y-2/4 text-border/60">
          <Star />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 h-px w-full bg-border/60" />
    </div>
  )
}

//  ------------------------------ | LAYOUT - NAVBAR | ------------------------------  //

export default function Navbar() {
  const pathname = usePathname()
  const [prevPathname, setPrevPathname] = useState(pathname)
  const [searchOpen, setSearchOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const githubStars = useGithubStarCount()

  if (pathname !== prevPathname) {
    setPrevPathname(pathname)
    setMenuOpen(false)
  }

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
      // The search dialog renders in a portal on <body>, i.e. outside menuRef.
      // Without this guard, tapping into it counts as an "outside" click and
      // tears down the mobile menu — along with the item being tapped —
      // before its handler runs, so the links appear dead on mobile.
      if (
        target instanceof Element &&
        target.closest(
          '[data-slot="dropdown-menu-content"],[role="menu"],[role="dialog"]'
        )
      ) {
        return
      }
      setMenuOpen(false)
    }

    document.addEventListener("mousedown", handlePointerDown)
    return () => document.removeEventListener("mousedown", handlePointerDown)
  }, [menuOpen])

  return (
    <StickyWrapper>
      <header className="w-full">
        <div className="z-50 flex h-19.5 w-full items-center justify-between px-4 sm:px-8">
          <div className="flex items-center gap-8 lg:gap-4 xl:gap-8">
            <Logo />

            <nav className="hidden items-center gap-0.5 lg:flex xl:gap-0.5">
              <NavLinks className="px-3" />
              <ResourcesMenu />
            </nav>
          </div>

          <SocialActions
            className="hidden items-center gap-2 lg:flex"
            githubStars={githubStars}
            onSearchClick={() => setSearchOpen(true)}
          />

          <div className="flex items-center gap-1 lg:hidden">
            <SocialActions
              className="hidden items-center gap-2 md:flex"
              githubStars={githubStars}
              onSearchClick={() => setSearchOpen(true)}
            />
            <Button
              ref={toggleRef}
              variant="ghost"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-sm"
            >
              {menuOpen ? (
                <X aria-hidden="true" className="size-4.5" />
              ) : (
                <Menu aria-hidden="true" className="size-4.5" />
              )}
            </Button>

            <div className="md:hidden">
              <ThemeToggle />
            </div>
          </div>
        </div>

        {menuOpen && (
          <div
            ref={menuRef}
            className="absolute top-full left-0 w-full border-b border-border/60 bg-background shadow-lg lg:hidden"
          >
            <div className="flex flex-col gap-4 p-4">
              <nav className="flex flex-col gap-3">
                <NavLinks
                  className="justify-start px-0 text-base"
                  onLinkClick={() => setMenuOpen(false)}
                />
                <div className="flex flex-col gap-1 border-t border-border/60 pt-3">
                  <span className="px-0 pb-1 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                    Resources
                  </span>
                  {resourceLinks.map((item) => {
                    const isActive =
                      !item.external &&
                      Boolean(pathname) &&
                      (pathname === item.href ||
                        pathname.startsWith(`${item.href}/`))

                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className={cn(
                          "py-1.5 text-base font-medium hover:text-primary",
                          isActive ? "text-primary" : "text-foreground"
                        )}
                      >
                        {item.label}
                      </Link>
                    )
                  })}
                </div>
              </nav>
              <div className="mt-auto flex flex-col border-t border-border/60 pt-4 pb-4 md:hidden">
                <SocialActions
                  className="flex flex-wrap items-center justify-center gap-2"
                  githubStars={githubStars}
                  showThemeToggle={false}
                  onSearchClick={() => {
                    setSearchOpen(true)
                    setMenuOpen(false)
                  }}
                />
              </div>
            </div>
          </div>
        )}
        <NavSearchDialog open={searchOpen} setOpen={setSearchOpen} />
      </header>
    </StickyWrapper>
  )
}
