"use client"

// shadcn
import { Button } from "@/components/ui/button"

// third-party
import { toast } from "sonner"

// assets
import { CheckCircle2 } from "lucide-react"

//  ------------------------------ | SONNER - CUSTOM | ------------------------------  //

export function SonnerCustom() {
  return (
    <Button
      onClick={() =>
        toast.custom((t) => (
          <div className="flex w-full items-center gap-3 rounded-lg border border-border bg-background p-4 shadow-lg">
            <CheckCircle2 className="size-5 text-green-500" />
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium">Custom Layout</span>
              <span className="text-xs text-muted-foreground">
                This is a fully custom toast component.
              </span>
            </div>
            <Button
              size="sm"
              variant="outline"
              className="ml-auto h-7 text-xs"
              onClick={() => toast.dismiss(t)}
            >
              Dismiss
            </Button>
          </div>
        ))
      }
      className="w-fit"
    >
      Show Custom Toast
    </Button>
  )
}
