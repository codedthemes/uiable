"use client"

import { useState } from "react"
// assets
import { CircleCheck, X } from "lucide-react"

// shadcn
import { Alert, AlertAction } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

//  ------------------------------ | ALERT - DISMISSIBLE SUCCESS | ------------------------------  //

export default function AlertDismissibleSuccess() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <Alert className="relative mb-3 flex grid-cols-1 items-center gap-3 rounded-lg border border-green-600/20 bg-green-600/10 px-5 py-3 pr-10 text-green-700 dark:text-green-400">
      <CircleCheck className="h-5 w-5 shrink-0" />
      <span>
        <strong>Success!</strong> Your changes have been saved successfully.
      </span>
      <AlertAction className="absolute top-2 right-2">
        <Button
          size="icon"
          onClick={() => setIsVisible(false)}
          className="flex h-7 w-7 items-center justify-center rounded bg-transparent text-lg text-inherit hover:bg-green-500/5 dark:hover:bg-green-500/5"
        >
          <X className="h-4 w-4" />
        </Button>
      </AlertAction>
    </Alert>
  )
}
