"use client"

// shadcn
import { Button } from "@/components/ui/button"

// third-party
import { toast } from "sonner"

//  ------------------------------ | SONNER - ACTION | ------------------------------  //

export function SonnerAction() {
  return (
    <Button
      onClick={() =>
        toast("Event has been created", {
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
      }
      className="w-fit"
    >
      Show Action Toast
    </Button>
  )
}
