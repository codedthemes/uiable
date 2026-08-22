"use client"

// shadcn
import { Button } from "@/components/ui/button"

// third-party
import { toast } from "sonner"

// assets
import { Sparkles } from "lucide-react"

//  ------------------------------ | SONNER - ICON | ------------------------------  //

export function SonnerIcon() {
  return (
    <Button
      onClick={() =>
        toast("Feature Unlocked", {
          icon: <Sparkles className="size-4 text-primary" />,
          description: "You have unlocked the premium features.",
        })
      }
      className="w-fit"
    >
      Show Icon Toast
    </Button>
  )
}
