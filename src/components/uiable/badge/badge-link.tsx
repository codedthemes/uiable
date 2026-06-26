// shadcn

// assets
import { ArrowUpRightIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"

//  ------------------------------ | BADGE - LINK | ------------------------------  //

export function BadgeAsLink() {
  return (
    <Badge render={<a href="#link" />}>
      Open Link <ArrowUpRightIcon data-icon="inline-end" />
    </Badge>
  )
}
