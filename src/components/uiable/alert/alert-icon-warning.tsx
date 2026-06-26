// shadcn

// assets
import { AlertTriangle } from "lucide-react"

import { Alert } from "@/components/ui/alert"

//  ------------------------------ | ALERT - ICON WARNING | ------------------------------  //

export default function AlertIconWarning() {
  return (
    <Alert className="mb-3 flex items-center gap-3 rounded-lg border border-yellow-500/20 bg-yellow-500/10 px-5 py-3 text-yellow-700 dark:text-yellow-400">
      <AlertTriangle className="h-5 w-5" />
      <span>A simple warning alert—check it out!</span>
    </Alert>
  )
}
