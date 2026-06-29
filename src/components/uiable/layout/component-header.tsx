"use client"

import { useState } from "react"
import Link from "next/link"
// assets
import { FolderGit2, Layout, Menu, ShoppingCart } from "lucide-react"

// shadcn
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/customizer"

// project
import ComponentList from "./component-list"
import ComponentSearch from "./shared/component-search"
import Logo from "./shared/logo"
import MobileNav from "./shared/mobile-nav"

//  ------------------------------ | COMPONENT - HEADER | ------------------------------  //

export default function ComponentHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isComponentsOpen, setIsComponentsOpen] = useState(false)
  const [search, setSearch] = useState("")

  return (
    <header className="sticky top-0 z-50 w-full bg-card/70 shadow-[0_0_24px_rgba(27,46,94,.05)] backdrop-blur-md dark:shadow-[0_0_24px_rgba(27,46,94,.05)]">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 sm:px-8">
        <div className="flex items-center gap-2 sm:gap-8">
          <Logo />
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <nav className="hidden items-center gap-6 md:flex">
            <Link
              href="/dashboard"
              className="text-base font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Dashboard
            </Link>
            <Link
              href="/components"
              className="text-base font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Components
            </Link>
            <Link
              href="/blocks"
              className="text-base font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Blocks
            </Link>
            <Link
              href="/doc"
              className="text-base font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Documentation
            </Link>
          </nav>
          <div className="mx-2 hidden h-6 w-px bg-border sm:block" />
          {/* Mobile Components Toggle */}
          <Sheet open={isComponentsOpen} onOpenChange={setIsComponentsOpen}>
            <SheetTrigger className="h-9 gap-2 border-primary/20 px-3 text-primary hover:bg-primary/5 lg:hidden">
              <Layout className="h-4 w-4" />
              <span className="xs:inline hidden">Components</span>
            </SheetTrigger>
            {/*  */}
            <SheetContent
              side="left"
              className="w-80 gap-0 bg-card p-0 *:data-[slot=sheet-close]:top-8"
            >
              <SheetHeader className="border-b p-6 text-left ltr:pr-10 rtl:pl-10">
                <ComponentSearch value={search} onChange={setSearch} />
              </SheetHeader>
              <ScrollArea className="h-[calc(100vh-100px)] px-4 py-6">
                <ComponentList
                  search={search}
                  onSelect={() => setIsComponentsOpen(false)}
                />
              </ScrollArea>
            </SheetContent>
          </Sheet>
          {/* Mobile Menu Toggle */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger className="h-9 gap-2 border-primary/20 px-3 text-primary hover:bg-primary/5 lg:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-72 bg-card p-0 *:data-[slot=sheet-close]:top-6"
            >
              <SheetTitle className="px-6 pt-6">
                <Logo />
              </SheetTitle>
              <div className="flex flex-col gap-4 p-6">
                <MobileNav onSelect={() => setIsMenuOpen(false)} />
                <div className="flex flex-col gap-3 border-t pt-4">
                  <Button variant="default" className="gap-2">
                    <ShoppingCart className="h-4 w-4" />
                    <span>Purchase Now</span>
                  </Button>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
                  >
                    <FolderGit2 className="h-4 w-4" />
                    <span>GitHub Repository</span>
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <div className="hidden items-center gap-2 sm:flex">
            <ThemeToggle />
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-transparent text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
            >
              <FolderGit2 className="size-5" />
            </a>
            <Button className="gap-2 bg-green-500 hover:bg-green-500/90">
              <ShoppingCart className="size-5" />
              <span>Purchase Now</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
