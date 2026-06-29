// shadcn

// assets
import { CircleCheck } from "lucide-react"

import { Alert } from "@/components/ui/alert"

//  ------------------------------ | ALERT - ICON SUCCESS | ------------------------------  //

export default function AlertIconSuccess() {
  return (
    <Alert className="mb-3 flex items-center gap-3 rounded-lg border border-green-600/20 bg-green-600/10 px-5 py-3 text-green-700 dark:text-green-400">
      <CircleCheck className="h-5 w-5" />
      <span>A simple success alert—check it out!</span>
    </Alert>
  )
}
