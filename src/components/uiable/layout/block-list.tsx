"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
// project
import CATEGORY_COUNTS from "@/category-counts.json"
import { NAV_BLOCKS } from "@/components-grid"

import { cn } from "@/lib/utils"

interface BlockListProps {
  search?: string
  onSelect?: () => void
}

//  ------------------------------ | LAYOUT - BLOCK LIST | ------------------------------  //

export default function BlockList({ search = "", onSelect }: BlockListProps) {
  const pathname = usePathname()

  const filteredSections = NAV_BLOCKS.map((section) => ({
    ...section,
    items: section.items.filter(
      (item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.slug.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter((section) => section.items.length > 0)

  const totalBlocks = NAV_BLOCKS.reduce((total, section) => {
    return (
      total +
      section.items.reduce((secTotal, item) => {
        return (
          secTotal +
          (CATEGORY_COUNTS[item.slug as keyof typeof CATEGORY_COUNTS] || 0)
        )
      }, 0)
    )
  }, 0)

  return (
    <div className="flex flex-col gap-1 p-2">
      <Link
        href="/blocks"
        onClick={onSelect}
        className={cn(
          "group flex items-center justify-between rounded-lg p-2 text-sm font-medium",
          pathname === "/blocks"
            ? "bg-primary/10 text-primary"
            : "text-sidebar-foreground hover:bg-muted-foreground/6 hover:text-foreground"
        )}
      >
        <span>All Blocks</span>
        <span
          className={cn(
            "text-xs transition-colors",
            pathname === "/blocks" ? "text-primary" : "text-sidebar-ring"
          )}
        >
          {totalBlocks}
        </span>
      </Link>
      {filteredSections.map((section) => (
        <div key={section.title} className="flex flex-col gap-1">
          {section.items.map((item) => {
            const href = `/blocks/${item.slug}`
            const isActive = pathname === href
            return (
              <Link
                key={item.slug}
                href={href}
                onClick={onSelect}
                className={cn(
                  "group flex items-center justify-between rounded-lg p-2 text-sm font-medium transition-all",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-sidebar-foreground hover:bg-muted-foreground/6 hover:text-foreground"
                )}
              >
                <span className="capitalize">{item.title}</span>
                <span
                  className={cn(
                    "text-xs transition-colors",
                    isActive ? "text-primary" : "text-sidebar-ring"
                  )}
                >
                  {CATEGORY_COUNTS[item.slug as keyof typeof CATEGORY_COUNTS] ||
                    0}
                </span>
              </Link>
            )
          })}
        </div>
      ))}
    </div>
  )
}
