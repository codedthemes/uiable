"use client"

// shadcn
// third party
import { toast } from "sonner"

import { Button } from "@/components/ui/button"

//  ------------------------------ | SONNER - DESCRIPTION | ------------------------------  //

export function SonnerDescription() {
  return (
    <>
      <Button
        onClick={() =>
          toast("Event has been created", {
            description: "Monday, January 3rd at 6:00pm",
          })
        }
        className="w-fit"
      >
        Show Toast
      </Button>
    </>
  )
}
