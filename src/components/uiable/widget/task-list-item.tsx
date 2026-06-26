"use client"

// shadcn
// assets
import { Paperclip } from "lucide-react"

// project
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"

interface TaskListItemProps {
  title: string
  dotColor: string
  badgeCount?: number
}

//  ------------------------------ | BLOCK - TASK LIST ITEM | ------------------------------  //

export default function TaskListItem({
  title,
  dotColor,
  badgeCount,
}: TaskListItemProps) {
  return (
    <a
      href="#"
      className={cn(
        buttonVariants({ variant: "ghost" }),
        "group h-auto w-full justify-start rounded-xl p-2 hover:bg-muted/50"
      )}
    >
      <div className="flex w-full items-center">
        <div className={cn("mr-3 h-2 w-2 rounded-full", dotColor)}></div>
        <span className="flex-grow truncate text-left font-medium">
          {title}
        </span>
        {badgeCount !== undefined && (
          <Badge
            variant="outline"
            className="ml-2 gap-1 border-none bg-muted/50 text-muted-foreground"
          >
            <Paperclip className="h-3 w-3" /> {badgeCount}
          </Badge>
        )}
      </div>
    </a>
  )
}
