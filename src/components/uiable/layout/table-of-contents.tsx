"use client"

import { useEffect, useState } from "react"

// project
import { cn } from "@/lib/utils"

interface TocItem {
  title: string
  url: string
  items?: TocItem[]
}

interface TableOfContentsProps {
  items: TocItem[]
}

//  ------------------------------ | LAYOUT - TABLE OF CONTENTS | ------------------------------  //

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string | null>(null)

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

    items.forEach((item) => {
      const element = document.getElementById(item.url.replace("#", ""))
      if (element) observer.observe(element)
      item.items?.forEach((subItem) => {
        const subElement = document.getElementById(subItem.url.replace("#", ""))
        if (subElement) observer.observe(subElement)
      })
    })

    return () => observer.disconnect()
  }, [items])

  return (
    <div className="space-y-4">
      <ul className="">
        {items.map((item) => (
          <li key={item.url}>
            <a
              href={item.url}
              className={cn(
                "block border-l-2 border-l-transparent py-1 pl-3 transition-all hover:text-primary",
                activeId === item.url.replace("#", "")
                  ? "border-primary text-primary"
                  : "text-muted-foreground"
              )}
            >
              {item.title}
            </a>
            {item.items && item.items.length > 0 && (
              <ul className="my-2.5 pl-3">
                {item.items.map((subItem) => (
                  <li key={subItem.url}>
                    <a
                      href={subItem.url}
                      className={cn(
                        "block border-l-2 border-border/50 py-1 pl-3 transition-colors hover:text-primary",
                        activeId === subItem.url.replace("#", "")
                          ? "border-primary text-primary"
                          : "text-muted-foreground"
                      )}
                    >
                      {subItem.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
