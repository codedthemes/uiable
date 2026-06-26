"use client"

import { useState } from "react"
// assets
import { X } from "lucide-react"

// shadcn
import { Alert, AlertAction } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

//  ------------------------------ | ALERT - DISMISSIBLE SECONDARY | ------------------------------  //

export default function AlertDismissibleSecondary() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <Alert className="relative mb-3 grid-cols-1 rounded-lg border border-secondary/20 bg-secondary/10 px-5 py-3 pr-10 text-secondary">
      <strong>Holy guacamole!</strong> You should check in on some of those
      fields below.
      <AlertAction className="absolute top-2 right-2">
        <Button
          size="icon"
          onClick={() => setIsVisible(false)}
          className="flex h-7 w-7 items-center justify-center rounded bg-transparent text-lg text-inherit hover:bg-secondary/5 dark:hover:bg-secondary/5"
        >
          <X className="h-4 w-4" />
        </Button>
      </AlertAction>
    </Alert>
  )
}
