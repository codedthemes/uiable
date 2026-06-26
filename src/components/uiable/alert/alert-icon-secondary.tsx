// shadcn

// assets
import { Info } from "lucide-react"

import { Alert } from "@/components/ui/alert"

//  ------------------------------ | ALERT - ICON SECONDARY | ------------------------------  //

export default function AlertIconSecondary() {
  return (
    <Alert className="mb-3 flex items-center gap-3 rounded-lg border border-secondary/20 bg-secondary/10 px-5 py-3 text-secondary">
      <Info className="h-5 w-5" />
      <span>A simple secondary alert—check it out!</span>
    </Alert>
  )
}
