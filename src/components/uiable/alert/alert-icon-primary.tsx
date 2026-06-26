// shadcn

// assets
import { Zap } from "lucide-react"

import { Alert } from "@/components/ui/alert"

//  ------------------------------ | ALERT - ICON PRIMARY | ------------------------------  //

export default function AlertIconPrimary() {
  return (
    <Alert className="mb-3 flex items-center gap-3 rounded-lg border border-primary/20 bg-primary/10 px-5 py-3 text-primary">
      <Zap className="h-5 w-5" />
      <span>A simple primary alert—check it out!</span>
    </Alert>
  )
}
