"use client"

import { useEffect, useState } from "react"

// shadcn
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

// project
import { cn } from "@/lib/utils"
import { CHANGELOG_DATA } from "@/data/changelog-data"

// assets
import { ListTree } from "lucide-react"

//  ------------------------------ | COMPONENT - CHANGELOG MOBILE TOC | ------------------------------  //

export default function ChangelogMobileToc() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "0% 0% -80% 0%" }
    )

    CHANGELOG_DATA.forEach((release) => {
      const element = document.getElementById(release.anchor)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const handleClick = (anchor: string) => {
    setOpen(false)
    // Small delay to let sheet close before scrolling
    requestAnimationFrame(() => {
      const element = document.getElementById(anchor)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    })
  }

  return (
    <div className="xl:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger
          render={
            <Button
              variant="outline"
              className="w-fit gap-2 text-muted-foreground"
            />
          }
        >
          <ListTree className="size-4" />
          <span>On this page</span>
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>On this page</SheetTitle>
          </SheetHeader>
          <nav
            aria-label="Changelog version navigation"
            className="overflow-y-auto px-5 pb-5"
          >
            <ul className="flex flex-col gap-0.5">
              {CHANGELOG_DATA.map((release) => (
                <li key={release.anchor}>
                  <button
                    onClick={() => handleClick(release.anchor)}
                    className={cn(
                      "block w-full cursor-pointer rounded-md px-3 py-2 text-left text-sm transition-colors hover:bg-muted hover:text-primary",
                      activeId === release.anchor
                        ? "bg-muted font-medium text-primary"
                        : "text-muted-foreground"
                    )}
                  >
                    v{release.version} - {release.date}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}
