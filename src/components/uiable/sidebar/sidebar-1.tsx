"use client"

import { useState } from "react"
// assets
import { Search } from "lucide-react"

// shadcn
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

// ── Dummy data ────────────────────────────────────────────────────────────── //

const DUMMY_SECTIONS = [
  {
    title: "Layout",
    items: [
      { title: "Accordion", count: 5 },
      { title: "Aspect Ratio", count: 3 },
      { title: "Card", count: 8 },
      { title: "Collapsible", count: 4 },
      { title: "Resizable", count: 3 },
      { title: "Scroll Area", count: 3 },
      { title: "Separator", count: 3 },
      { title: "Sheet", count: 2 },
    ],
  },
  {
    title: "Forms",
    items: [
      { title: "Button", count: 9 },
      { title: "Checkbox", count: 5 },
      { title: "Input", count: 5 },
      { title: "Label", count: 3 },
      { title: "Radio Group", count: 4 },
      { title: "Select", count: 5 },
      { title: "Slider", count: 5 },
      { title: "Switch", count: 5 },
      { title: "Textarea", count: 4 },
      { title: "Toggle", count: 5 },
    ],
  },
  {
    title: "Navigation",
    items: [
      { title: "Breadcrumb", count: 5 },
      { title: "Menubar", count: 4 },
      { title: "Navbar", count: 2 },
      { title: "Pagination", count: 5 },
      { title: "Sidebar", count: 2 },
      { title: "Tabs", count: 5 },
    ],
  },
  {
    title: "Data Display",
    items: [
      { title: "Avatar", count: 5 },
      { title: "Badge", count: 5 },
      { title: "Calendar", count: 3 },
      { title: "Chart", count: 5 },
      { title: "Progress", count: 5 },
      { title: "Skeleton", count: 5 },
      { title: "Table", count: 5 },
    ],
  },
  {
    title: "Feedback",
    items: [
      { title: "Alert", count: 5 },
      { title: "Alert Dialog", count: 3 },
      { title: "Dialog", count: 3 },
      { title: "Drawer", count: 3 },
      { title: "Popover", count: 5 },
      { title: "Sonner", count: 3 },
      { title: "Tooltip", count: 4 },
    ],
  },
]

const TOTAL = DUMMY_SECTIONS.reduce(
  (acc, s) => acc + s.items.reduce((a, i) => a + i.count, 0),
  0
)

//  ------------------------------ | COMPONENT - SIDEBAR 1 | ------------------------------  //

export default function Sidebar1() {
  const [search, setSearch] = useState("")
  const [activeItem, setActiveItem] = useState<string | null>(null)

  const filtered = DUMMY_SECTIONS.map((section) => ({
    ...section,
    items: section.items.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter((section) => section.items.length > 0)

  return (
    <div className="flex h-[500px] w-full rounded-lg border bg-background p-4">
      <aside className="flex h-[450px] w-72 shrink-0 flex-col overflow-hidden rounded-lg border bg-background">
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
                className={`flex w-full items-center justify-between rounded-lg px-6 py-3 text-left text-base font-medium transition-colors ${
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
                      className={`flex w-full items-center justify-between rounded-lg px-6 py-3 text-left text-base font-medium transition-colors ${
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
    </div>
  )
}
