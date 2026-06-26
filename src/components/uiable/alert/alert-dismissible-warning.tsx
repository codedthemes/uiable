"use client"

import { useState } from "react"
// assets
import { AlertTriangle, X } from "lucide-react"

// shadcn
import { Alert, AlertAction } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

//  ------------------------------ | ALERT - DISMISSIBLE WARNING | ------------------------------  //

export default function AlertDismissibleWarning() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <Alert className="relative mb-3 flex grid-cols-1 items-center gap-3 rounded-lg border border-yellow-500/20 bg-yellow-500/10 px-5 py-3 pr-10 text-yellow-700">
      <AlertTriangle className="h-5 w-5 shrink-0" />
      <span>
        <strong>Warning!</strong> Your subscription will expire in 3 days.
      </span>
      <AlertAction className="absolute top-2 right-2">
        <Button
          size="icon"
          onClick={() => setIsVisible(false)}
          className="hover:bg-yellow/5 dark:hover:bg-yellow/5 flex h-7 w-7 items-center justify-center rounded bg-transparent text-lg text-inherit"
        >
          <X className="h-4 w-4" />
        </Button>
      </AlertAction>
    </Alert>
  )
}
