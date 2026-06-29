"use client"

import { useState } from "react"
// assets
import { ShieldAlert, X } from "lucide-react"

// shadcn
import { Alert, AlertAction } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

//  ------------------------------ | ALERT - DISMISSIBLE DANGER | ------------------------------  //

export default function AlertDismissibleDanger() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <Alert className="relative flex grid-cols-1 items-center gap-3 rounded-lg border border-red-500/20 bg-red-500/10 pr-10 text-red-500">
      <ShieldAlert className="h-5 w-5 shrink-0" />
      <span>
        <strong>Error!</strong> Something went wrong while processing your
        request.
      </span>
      <AlertAction className="absolute top-2 right-2">
        <Button
          size="icon"
          onClick={() => setIsVisible(false)}
          className="flex h-7 w-7 items-center justify-center rounded bg-transparent text-lg text-inherit hover:bg-black/5 dark:hover:bg-white/5"
        >
          <X className="h-4 w-4" />
        </Button>
      </AlertAction>
    </Alert>
  )
}
