// shadcn

// assets
import { ShieldAlert } from "lucide-react"

import { Alert } from "@/components/ui/alert"

//  ------------------------------ | ALERT - ICON DANGER | ------------------------------  //

export default function AlertIconDanger() {
  return (
    <Alert className="mb-3 flex items-center gap-3 rounded-lg border border-red-500/20 bg-red-500/10 px-5 py-3 font-medium text-red-500">
      <ShieldAlert className="h-5 w-5" />
      <span>A simple danger alert—check it out!</span>
    </Alert>
  )
}
