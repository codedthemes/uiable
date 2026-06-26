// shadcn

// assets
import { AlertTriangle } from "lucide-react"

import { Button } from "@/components/ui/button"

//  ------------------------------ | BUTTON ICON WARNING | ------------------------------  //

export default function ButtonIconWarning() {
  return (
    <Button className="gap-2 bg-yellow-500 text-white hover:bg-yellow-600">
      <AlertTriangle className="size-5" /> Warning
    </Button>
  )
}
