"use client"

import { useState } from "react"

// shadcn
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

// project-imports
import Logo from "@/components/uiable/layout/shared/logo"

// assets
import {
  FolderGit2,
  Menu,
  Search,
  Settings,
  ShoppingCart,
  X,
} from "lucide-react"

// ── Dummy data ────────────────────────────────────────────────────────────── //

const DUMMY_SECTIONS = [
  {
    title: "Layout",
    items: [
      { title: "Accordion", count: 5 },
      { title: "Aspect Ratio", count: 3 },
      { title: "Card", count: 8 },
    ],
  },
  {
    title: "Forms",
    items: [
      { title: "Button", count: 9 },
      { title: "Checkbox", count: 5 },
      { title: "Input", count: 5 },
      { title: "Label", count: 3 },
    ],
  },
  {
    title: "Navigation",
    items: [
      { title: "Breadcrumb", count: 5 },
      { title: "Menubar", count: 4 },
      { title: "Navbar", count: 2 },
    ],
  },
  {
    title: "Data Display",
    items: [
      { title: "Avatar", count: 5 },
      { title: "Badge", count: 5 },
      { title: "Calendar", count: 3 },
    ],
  },
  {
    title: "Feedback",
    items: [
      { title: "Alert", count: 5 },
      { title: "Alert Dialog", count: 3 },
      { title: "Dialog", count: 3 },
    ],
  },
]

const TOTAL = DUMMY_SECTIONS.reduce(
  (acc, s) => acc + s.items.reduce((a, i) => a + i.count, 0),
  0
)

const nav_links = ["Dashboard", "Components", "Blocks", "Documentation"]

//  ------------------------------ | BLOCK - COMPONENT LAYOUT | ------------------------------  //

export default function ComponentLayout() {
  const [search, setSearch] = useState("")
  const [activeItem, setActiveItem] = useState<string | null>(null)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const filtered = DUMMY_SECTIONS.map((section) => ({
    ...section,
    items: section.items.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter((section) => section.items.length > 0)

  return (
    <div className="flex h-[600px] w-full flex-col overflow-hidden bg-background">
      {/* ── Navbar ── */}
      <header className="w-full shrink-0 border-b border-border/50 bg-card/70 shadow-[0_0_24px_rgba(27,46,94,.05)] backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-3">
            {/* Mobile sidebar trigger */}
            <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
              <SheetTrigger className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-primary md:hidden">
                <Menu className="size-5" />
                <span className="sr-only">Toggle sidebar</span>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-72 gap-0 p-0 *:data-[slot=sheet-close]:hidden"
              >
                <SheetHeader className="border-b border-border/50 px-4 py-3">
                  <SheetTitle className="sr-only">Components</SheetTitle>
                  <div className="flex items-center gap-2">
                    <div className="relative flex-1">
                      <Search className="absolute top-3.5 left-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search Components"
                        className="h-auto py-3 pl-10"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                      />
                    </div>
                    <SheetClose className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
                      <X className="size-4" />
                    </SheetClose>
                  </div>
                </SheetHeader>
                <ScrollArea className="h-[calc(100vh-73px)]">
                  <div className="flex flex-col gap-1 px-2 py-3">
                    <Button
                      variant="ghost"
                      onClick={() => {
                        setActiveItem("all")
                        setIsSidebarOpen(false)
                      }}
                      className={`flex w-full items-center justify-between rounded-md px-4 py-2.5 text-left text-base font-medium transition-colors ${
                        activeItem === "all"
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      <span className="font-semibold text-foreground">
                        All Components
                      </span>
                      <span className="text-[11px] opacity-60">{TOTAL}</span>
                    </Button>
                    {filtered.map((section) => (
                      <div
                        key={section.title}
                        className="mt-2 flex flex-col gap-0.5"
                      >
                        <p className="px-4 py-1.5 text-[16px] font-bold tracking-widest text-muted-foreground/60 uppercase">
                          {section.title}
                        </p>
                        {section.items.map((item) => (
                          <Button
                            variant="ghost"
                            key={item.title}
                            onClick={() => {
                              setActiveItem(item.title)
                              setIsSidebarOpen(false)
                            }}
                            className={`flex w-full items-center justify-between rounded-md px-4 py-2 text-left text-base font-medium transition-colors ${
                              activeItem === item.title
                                ? "bg-primary/10 text-primary"
                                : "text-muted-foreground hover:bg-muted hover:text-foreground"
                            }`}
                          >
                            <span className="capitalize">{item.title}</span>
                            <span className="text-[11px] opacity-60">
                              {item.count}
                            </span>
                          </Button>
                        ))}
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </SheetContent>
            </Sheet>
            <Logo />
          </div>
          <div className="flex items-center justify-end gap-10">
            <nav className="hidden items-center gap-6 md:flex">
              {nav_links.map((link) => (
                <a
                  key={link}
                  href=""
                  className="text-md font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {link}
                </a>
              ))}
            </nav>
            <div className="mx-2 hidden h-6 w-px bg-border sm:block" />
            <div className="flex items-center gap-1">
              {/* Settings */}
              <Button
                variant="ghost"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
              >
                <Settings className="size-5" />
              </Button>

              {/* GitHub */}
              <a
                href="#"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
              >
                <FolderGit2 className="size-5" />
              </a>

              <Button className="hidden gap-2 bg-green-500 hover:bg-green-500/90 sm:flex">
                <ShoppingCart className="size-4" />
                <span>Purchase Now</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Body: Sidebar + Content ── */}
      <div className="container mx-auto mt-8 flex flex-1 gap-3 overflow-hidden p-3">
        {/* ── Sidebar ── */}
        <aside className="hidden w-72 shrink-0 flex-col overflow-hidden rounded-xl border bg-background md:flex">
          <Card className="mb-0 flex h-full flex-col rounded-none border-0 shadow-none">
            <CardHeader>
              {/* Search — matches ComponentSearch design */}
              <div className="relative w-full">
                <Search className="absolute top-3.5 left-3 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search Components"
                  className="h-auto py-3 pl-10"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </CardHeader>
            <ScrollArea className="h-[350px] flex-1">
              <CardContent className="flex flex-1 flex-col gap-3 pb-4">
                {/* All Components row — matches ComponentList design */}
                <Button
                  variant="ghost"
                  onClick={() => setActiveItem("all")}
                  className={`flex w-full items-center justify-between rounded-sm px-6 py-3 text-left text-base font-medium transition-colors ${
                    activeItem === "all"
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-background hover:text-foreground"
                  }`}
                >
                  <span className="font-semibold text-foreground">
                    All Component
                  </span>
                  <span className="text-[11px] opacity-60">{TOTAL}</span>
                </Button>

                {filtered.map((section) => (
                  <div key={section.title} className="flex flex-col gap-1">
                    <p className="sticky top-0 z-10 mb-2 border-b border-b-border/30 bg-card px-6 py-3 text-start text-[16px] font-semibold tracking-widest uppercase">
                      {section.title}
                    </p>
                    {section.items.map((item) => (
                      <Button
                        variant="ghost"
                        key={item.title}
                        onClick={() => setActiveItem(item.title)}
                        className={`flex w-full items-center justify-between rounded-sm px-6 py-3 text-left text-base font-medium transition-colors ${
                          activeItem === item.title
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover:bg-background hover:text-foreground"
                        }`}
                      >
                        <span className="capitalize">{item.title}</span>
                        <span className="text-[11px] opacity-60">
                          {item.count}
                        </span>
                      </Button>
                    ))}
                  </div>
                ))}
              </CardContent>
            </ScrollArea>
          </Card>
        </aside>

        {/* ── Main content ── */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="flex flex-col gap-4">
            <div className="grid auto-rows-min gap-4 lg:grid-cols-3">
              <div className="aspect-video rounded-xl bg-card" />
              <div className="aspect-video rounded-xl bg-card" />
              <div className="aspect-video rounded-xl bg-card" />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
