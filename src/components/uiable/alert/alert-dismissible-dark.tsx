"use client"

import { useState } from "react"
// assets
import { Moon, X } from "lucide-react"

// shadcn
import { Alert, AlertAction } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

//  ------------------------------ | ALERT - DISMISSIBLE DARK | ------------------------------  //

export default function AlertDismissibleDark() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <Alert className="border-dark-800/20 bg-dark-800/10 text-dark-800 dark:text-dark-300 relative mb-3 flex grid-cols-1 items-center gap-3 rounded-lg border px-5 py-3 pr-10">
      <Moon className="h-5 w-5 shrink-0" />
      <span>
        <strong>Dark Mode</strong> is now enabled for your account.
      </span>
      <AlertAction className="absolute top-2 right-2">
        <Button
          size="icon"
          onClick={() => setIsVisible(false)}
          className="hover:bg-dark/5 flex h-7 w-7 items-center justify-center rounded bg-transparent text-lg text-inherit dark:hover:bg-white/5"
        >
          <X className="h-4 w-4" />
        </Button>
      </AlertAction>
    </Alert>
  )
}
