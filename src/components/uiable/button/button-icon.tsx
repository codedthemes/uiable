// shadcn

// assets
import { CircleFadingArrowUpIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

//  ------------------------------ | BUTTON ICON | ------------------------------  //

export default function ButtonIcon() {
  return (
    <Button variant="outline" size="icon">
      <CircleFadingArrowUpIcon />
    </Button>
  )
}
