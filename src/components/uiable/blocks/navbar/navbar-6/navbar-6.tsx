"use client"

import { useState } from "react"

// shadcn
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

// project-imports
import Logo from "@/components/uiable/layout/shared/logo"
import MobileNav from "@/components/uiable/layout/shared/mobile-nav"

// assets
import { ArrowRight, Menu } from "lucide-react"

//  ------------------------------ | NAVBAR - CENTERED | ------------------------------  //

export default function Navbar6() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full bg-background/95 px-5 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between">
        {/* Left: Mobile Menu + Logo */}
        <div className="flex items-center gap-2">
          {/* Mobile Menu Toggle */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger className="h-9 gap-2 px-2 text-primary hover:bg-primary/5 lg:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-72 bg-card p-0 *:data-[slot=sheet-close]:top-6"
            >
              <SheetTitle className="px-6 pt-6">
                <Logo />
              </SheetTitle>
              <div className="flex flex-col gap-4 p-6">
                <MobileNav onSelect={() => setIsMenuOpen(false)} />
              </div>
            </SheetContent>
          </Sheet>
          <Logo />
        </div>

        {/* Center: Navigation Menu */}
        <div className="hidden lg:flex">
          <nav className="flex items-center gap-6">
            <a
              href="#"
              className="text-base font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="text-base font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Components
            </a>
            <a
              href="#"
              className="text-base font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Blocks
            </a>
            <a
              href="#"
              className="text-base font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Documentation
            </a>
          </nav>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" className="hidden sm:inline-flex">
            Log in
          </Button>
          <Button size="icon" className="h-9 w-9 sm:hidden">
            <ArrowRight className="size-4" />
            <span className="sr-only">Get Started</span>
          </Button>
          <Button className="hidden sm:inline-flex">Get Started</Button>
        </div>
      </div>
    </header>
  )
}
