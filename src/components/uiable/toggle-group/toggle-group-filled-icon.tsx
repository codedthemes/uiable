"use client"

import { useState } from "react"
// assets
import { Bell, Bookmark, Heart, Pin, Star } from "lucide-react"

// projects
import { cn } from "@/lib/utils"
// shadcn
import { Badge } from "@/components/ui/badge"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

interface FilledIconItem {
  value: string
  label: string
  icon: React.ComponentType<{ className?: string; fill?: string }>
}

const ITEMS: FilledIconItem[] = [
  { value: "bookmark", label: "Bookmark", icon: Bookmark },
  { value: "favorite", label: "Favorite", icon: Heart },
  { value: "star", label: "Star", icon: Star },
  { value: "pin", label: "Pin", icon: Pin },
  { value: "notify", label: "Notify", icon: Bell },
]

//  ------------------------------ | TOGGLE GROUP - FILLED ICON | ------------------------------  //

export function ToggleGroupFilledIcon() {
  const [selected, setSelected] = useState<string[]>(["favorite", "star"])

  return (
    <div className="flex flex-col items-center gap-5 rounded-lg border border-border/60 bg-gradient-to-b from-card/80 to-card/40 p-6">
      <ToggleGroup
        value={selected}
        onValueChange={(val) => setSelected(val)}
        variant="outline"
        spacing={2}
        size="lg"
        className="flex flex-wrap items-center justify-center gap-2"
      >
        {ITEMS.map((item) => {
          const Icon = item.icon
          const isActive = selected.includes(item.value)

          return (
            <ToggleGroupItem
              key={item.value}
              value={item.value}
              aria-label={item.label}
              className={cn(
                "group relative flex size-12 flex-col items-center justify-center border transition-all duration-300",
                isActive
                  ? "border-primary bg-primary text-white hover:bg-primary/95 aria-pressed:bg-primary aria-pressed:text-white data-[state=on]:bg-primary data-[state=on]:text-white dark:text-white dark:aria-pressed:text-white dark:data-[state=on]:text-white"
                  : "border-border/60 bg-muted/30 text-muted-foreground hover:border-border hover:bg-muted/70 hover:text-foreground"
              )}
            >
              <Icon
                fill={isActive ? "currentColor" : "none"}
                className={cn(
                  "size-5 transition-transform duration-300",
                  isActive
                    ? "scale-110 text-white dark:text-white"
                    : "text-muted-foreground group-hover:scale-105 group-hover:text-foreground"
                )}
              />
              <span className="sr-only">{item.label}</span>
            </ToggleGroupItem>
          )
        })}
      </ToggleGroup>

      <div className="flex flex-wrap items-center justify-center gap-1.5 text-xs text-muted-foreground">
        <span>Active toggles:</span>
        {selected.length > 0 ? (
          selected.map((val) => {
            const item = ITEMS.find((i) => i.value === val)
            return (
              <Badge key={val} className="bg-primary/10 text-primary">
                {item?.label}
              </Badge>
            )
          })
        ) : (
          <span>None selected</span>
        )}
      </div>
    </div>
  )
}
