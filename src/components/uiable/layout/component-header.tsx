"use client";

import Link from "next/link";
import { useState } from "react";

// shadcn
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";

// project
import ComponentList from "./component-list";
import ComponentSearch from "./shared/component-search";
import Logo from "./shared/logo";
import MobileNav from "./shared/mobile-nav";
import { ThemeToggle } from "@/components/customizer";

// assets
import { FolderGit2, Layout, Menu, ShoppingCart } from "lucide-react";

//  ------------------------------ | COMPONENT - HEADER | ------------------------------  //

export default function ComponentHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isComponentsOpen, setIsComponentsOpen] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <header className="sticky top-0 z-50 w-full bg-card/70 backdrop-blur-md shadow-[0_0_24px_rgba(27,46,94,.05)] dark:shadow-[0_0_24px_rgba(27,46,94,.05)]">
      <div className="container flex py-4 items-center justify-between px-4 sm:px-8 mx-auto">
        <div className="flex items-center gap-2 sm:gap-8">
          <Logo />
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/dashboard"
              className="text-base font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href="/components"
              className="text-base font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Components
            </Link>
            <Link
              href="/blocks"
              className="text-base font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Blocks
            </Link>
            <Link
              href="/doc"
              className="text-base font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Documentation
            </Link>
          </nav>
          <div className="h-6 w-px bg-border mx-2 hidden sm:block" />
          {/* Mobile Components Toggle */}
          <Sheet open={isComponentsOpen} onOpenChange={setIsComponentsOpen}>
            <SheetTrigger className="lg:hidden h-9 px-3 gap-2 border-primary/20 text-primary hover:bg-primary/5">
              <Layout className="h-4 w-4" />
              <span className="hidden xs:inline">Components</span>
            </SheetTrigger>
            {/*  */}
            <SheetContent
              side="left"
              className="w-80 p-0 bg-card gap-0 *:data-[slot=sheet-close]:top-8"
            >
              <SheetHeader className="p-6 border-b text-left ltr:pr-10 rtl:pl-10">
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
            <SheetTrigger className="lg:hidden h-9 px-3 gap-2 border-primary/20 text-primary hover:bg-primary/5">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-72 p-0 bg-card *:data-[slot=sheet-close]:top-6"
            >
              <SheetTitle className="px-6 pt-6">
                <Logo />
              </SheetTitle>
              <div className="flex flex-col gap-4 p-6">
                <MobileNav onSelect={() => setIsMenuOpen(false)} />
                <div className="pt-4 border-t flex flex-col gap-3">
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
          <div className="hidden sm:flex items-center gap-2">
            <ThemeToggle />
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center h-9 w-9 rounded-lg border border-transparent text-muted-foreground hover:bg-muted hover:text-primary transition-colors"
            >
              <FolderGit2 className="size-5" />
            </a>
            <Button className="bg-green-500 hover:bg-green-500/90 gap-2">
              <ShoppingCart className="size-5" />
              <span>Purchase Now</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
