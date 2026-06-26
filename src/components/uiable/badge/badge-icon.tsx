// shadcn

// assets
import { BadgeCheck, BookmarkIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"

//  ------------------------------ | BADGE - ICON | ------------------------------  //

export function BadgeWithIconLeft() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default">
        <BadgeCheck data-icon="inline-start" />
        Verified
      </Badge>
      <Badge variant="outline">
        Bookmark
        <BookmarkIcon data-icon="inline-end" />
      </Badge>
    </div>
  )
}
