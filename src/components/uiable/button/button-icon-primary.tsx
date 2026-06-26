// shadcn

// assets
import { ThumbsUp } from "lucide-react"

import { Button } from "@/components/ui/button"

//  ------------------------------ | BUTTON ICON PRIMARY | ------------------------------  //

export default function ButtonIconPrimary() {
  return (
    <Button className="gap-2">
      <ThumbsUp className="size-5" /> Primary
    </Button>
  )
}
