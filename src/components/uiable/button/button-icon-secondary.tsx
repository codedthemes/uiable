// shadcn

// assets
import { Info } from "lucide-react"

import { Button } from "@/components/ui/button"

//  ------------------------------ | BUTTON ICON SECONDARY | ------------------------------  //

export default function ButtonIconSecondary() {
  return (
    <Button className="gap-2 bg-slate-500 hover:bg-slate-600">
      <Info className="size-5" /> Secondary
    </Button>
  )
}
