// shadcn

// assets
import { Info } from "lucide-react"

import { Alert } from "@/components/ui/alert"

//  ------------------------------ | ALERT - ICON INFO | ------------------------------  //

export default function AlertIconInfo() {
  return (
    <Alert className="mb-3 flex items-center gap-3 rounded-lg border border-cyan-500/20 bg-cyan-500/10 px-5 py-3 text-cyan-700 dark:text-cyan-400">
      <Info className="h-5 w-5" />
      <span>A simple info alert—check it out!</span>
    </Alert>
  )
}
