"use client"

import { MouseEvent, useState } from "react"

// shadcn
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

// third-party
import { cn } from "cn"

// assets
import { ChevronDown, X } from "lucide-react"

const techOptions = [
  { label: "React", value: "react" },
  { label: "TypeScript", value: "typescript" },
  { label: "Next.js", value: "nextjs" },
  { label: "Tailwind CSS", value: "tailwindcss" },
  { label: "Node.js", value: "nodejs" },
  { label: "GraphQL", value: "graphql" },
  { label: "PostgreSQL", value: "postgresql" },
]

//  ------------------------------ | SELECT - MULTI SELECT | ------------------------------  //

export function SelectMulti() {
  const [selected, setSelected] = useState<string[]>([
    "react",
    "nextjs",
    "tailwindcss",
  ])
  const [open, setOpen] = useState(false)

  const handleToggle = (value: string) => {
    setSelected((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    )
  }

  const handleRemove = (value: string, e: MouseEvent) => {
    e.stopPropagation()
    setSelected((prev) => prev.filter((item) => item !== value))
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        className={cn(
          "flex min-h-11 w-full max-w-80 items-center justify-between rounded-lg border border-border bg-input px-3 py-1.5 text-base transition-colors outline-none focus:border-primary focus:outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 dark:hover:bg-input/50"
        )}
      >
        <div className="flex flex-wrap items-center gap-1.5 pr-2">
          {selected.length === 0 ? (
            <span className="text-base">Select skills...</span>
          ) : (
            selected.map((value) => {
              const option = techOptions.find((o) => o.value === value)
              if (!option) return null
              return (
                <Badge
                  key={value}
                  variant="secondary"
                  className="gap-1 px-2 py-0.5 text-xs"
                >
                  {option.label}
                  <span
                    role="button"
                    tabIndex={0}
                    onClick={(e) => handleRemove(value, e)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault()
                        handleRemove(value, e as any)
                      }
                    }}
                    className="cursor-pointer rounded-full p-0.5 hover:bg-muted-foreground/20"
                  >
                    <X className="size-3" />
                  </span>
                </Badge>
              )
            })
          )}
        </div>
        <ChevronDown className="size-4 shrink-0 text-muted-foreground" />
      </PopoverTrigger>
      <PopoverContent className="w-80 p-1" align="start">
        <div className="flex max-h-64 flex-col gap-0.5 overflow-y-auto p-1">
          {techOptions.map((option) => {
            const isSelected = selected.includes(option.value)
            return (
              <Button
                key={option.value}
                type="button"
                variant="ghost"
                onClick={() => handleToggle(option.value)}
                className={cn(
                  "flex h-auto w-full items-center justify-between rounded-md px-2.5 py-2 text-left text-sm font-normal transition-colors",
                  isSelected && "bg-muted/50 font-medium"
                )}
              >
                <span>{option.label}</span>
                <Checkbox
                  checked={isSelected}
                  className="pointer-events-none"
                />
              </Button>
            )
          })}
        </div>
      </PopoverContent>
    </Popover>
  )
}
