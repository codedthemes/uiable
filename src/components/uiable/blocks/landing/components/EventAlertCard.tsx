"use client"

import { useState } from "react"

// shadcn
import { Button } from "@/components/ui/button"

// ------------------------------ | EVENT ALERT CARD | ------------------------------ //

export default function EventAlertCard() {
  const [enabled, setEnabled] = useState(false)

  return (
    <div className="flex items-center justify-between gap-3 rounded-xl border border-border bg-card p-4">
      <div className="flex flex-col gap-1">
        <p className="text-sm leading-5 font-medium tracking-normal text-foreground">
          Event has been created
        </p>
        <p className="text-xs leading-4 font-normal tracking-normal text-muted-foreground">
          Sunday, December 03, 2023 at 9:00 AM
        </p>
      </div>
      <Button
        size="sm"
        onClick={() => setEnabled(!enabled)}
        className={`h-8.5 rounded-lg px-4 py-2 text-xs font-semibold transition-colors ${
          enabled
            ? "bg-muted text-muted-foreground hover:bg-muted/80"
            : "bg-primary text-primary-foreground hover:bg-primary/90"
        }`}
      >
        {enabled ? "Disable" : "Enable"}
      </Button>
    </div>
  )
}
