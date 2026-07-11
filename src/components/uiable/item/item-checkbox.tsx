"use client"

import { useState } from "react"
// assets
import { FileText, ImageIcon, Music, Video } from "lucide-react"

// shadcn
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

const files = [
  {
    id: "doc-001",
    icon: FileText,
    iconColor: "text-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-950",
    title: "Project Brief.docx",
    description: "Updated 2 days ago · 48 KB",
  },
  {
    id: "img-001",
    icon: ImageIcon,
    iconColor: "text-pink-500",
    bgColor: "bg-pink-50 dark:bg-pink-950",
    title: "Banner Design.png",
    description: "Updated 5 days ago · 2.1 MB",
  },
  {
    id: "vid-001",
    icon: Video,
    iconColor: "text-violet-500",
    bgColor: "bg-violet-50 dark:bg-violet-950",
    title: "Onboarding Tour.mp4",
    description: "Updated last week · 128 MB",
  },
  {
    id: "aud-001",
    icon: Music,
    iconColor: "text-emerald-500",
    bgColor: "bg-emerald-50 dark:bg-emerald-950",
    title: "Intro Jingle.mp3",
    description: "Updated 3 weeks ago · 3.4 MB",
  },
]

//  ------------------------------ | ITEM - CHECKBOX | ------------------------------  //

export function ItemCheckbox() {
  const [selected, setSelected] = useState<string[]>([])

  const toggle = (id: string) =>
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    )

  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <div className="flex items-center justify-between px-1">
        <span className="text-sm font-medium text-muted-foreground">
          {selected.length} of {files.length} selected
        </span>
        {selected.length > 0 && (
          <Button
            variant="link"
            size="sm"
            className="h-auto p-0 text-xs"
            onClick={() => setSelected([])}
          >
            Clear selection
          </Button>
        )}
      </div>
      <ItemGroup>
        {files.map((file) => {
          const Icon = file.icon
          const isSelected = selected.includes(file.id)
          return (
            <Item
              key={file.id}
              variant="outline"
              className={`cursor-pointer transition-all duration-150 ${
                isSelected
                  ? "border-primary/50 bg-primary/5 ring-1 ring-primary/20"
                  : "hover:bg-muted/30"
              }`}
              onClick={() => toggle(file.id)}
            >
              <ItemMedia>
                <Avatar
                  className={`size-9 rounded-lg after:border-none ${file.bgColor}`}
                >
                  <AvatarFallback
                    className={`rounded-lg bg-transparent ${file.iconColor}`}
                  >
                    <Icon className="size-4" />
                  </AvatarFallback>
                </Avatar>
              </ItemMedia>
              <ItemContent>
                <ItemTitle className="text-sm">{file.title}</ItemTitle>
                <ItemDescription className="text-xs">
                  {file.description}
                </ItemDescription>
              </ItemContent>
              <ItemActions>
                <div onClick={(e) => e.stopPropagation()}>
                  <Checkbox
                    id={`checkbox-${file.id}`}
                    checked={isSelected}
                    onCheckedChange={() => toggle(file.id)}
                  />
                </div>
              </ItemActions>
            </Item>
          )
        })}
      </ItemGroup>
    </div>
  )
}
