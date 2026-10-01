"use client"

import { useState } from "react"

// shadcn
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

// assets
import { RotateCcw, X } from "lucide-react"

const INITIAL_TAGS = [
  { id: "react", label: "React" },
  { id: "typescript", label: "TypeScript" },
  { id: "tailwind", label: "Tailwind CSS" },
  { id: "nextjs", label: "Next.js" },
]

//  ------------------------------ | BADGE - CLOSABLE | ------------------------------  //

export function BadgeClosable() {
  const [tags, setTags] = useState(INITIAL_TAGS)

  const handleRemove = (id: string) => {
    setTags((prev) => prev.filter((tag) => tag.id !== id))
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      {tags.map((tag) => (
        <Badge
          key={tag.id}
          variant="secondary"
          className="gap-1.5 pr-1 transition-all hover:bg-secondary/80"
        >
          {tag.label}
          <Button
            type="button"
            variant="ghost"
            size="icon-xs"
            onClick={() => handleRemove(tag.id)}
            aria-label={`Remove ${tag.label}`}
            className="size-4 rounded-full hover:bg-muted-foreground/20"
          >
            <X className="size-3" />
          </Button>
        </Badge>
      ))}
      {tags.length === 0 && (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setTags(INITIAL_TAGS)}
          className="h-7 gap-1.5 text-xs text-muted-foreground"
        >
          <RotateCcw className="size-3" />
          Reset Tags
        </Button>
      )}
    </div>
  )
}
