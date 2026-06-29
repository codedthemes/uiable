"use client"

import { useState } from "react"
// assets
import { Info, X } from "lucide-react"

// shadcn
import { Alert, AlertAction } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

//  ------------------------------ | ALERT - DISMISSIBLE INFO | ------------------------------  //

export default function AlertDismissibleInfo() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <Alert className="relative mb-3 flex grid-cols-1 items-center gap-3 rounded-lg border border-cyan-500/20 bg-cyan-500/10 px-5 py-3 pr-10 text-cyan-700">
      <Info className="h-5 w-5 shrink-0" />
      <span>
        <strong>Note:</strong> A new update is available for your software.
      </span>
      <AlertAction className="absolute top-2 right-2">
        <Button
          size="icon"
          onClick={() => setIsVisible(false)}
          className="hover:bg-cyan/5 flex h-7 w-7 items-center justify-center rounded bg-transparent text-lg text-inherit dark:hover:bg-white/5"
        >
          <X className="h-4 w-4" />
        </Button>
      </AlertAction>
    </Alert>
  )
}
