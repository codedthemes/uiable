"use client"

// shadcn
import { Button } from "@/components/ui/button"

// third-party
import { toast } from "sonner"

//  ------------------------------ | SONNER - CLOSE BUTTON | ------------------------------  //

export function SonnerCloseButton() {
  return (
    <Button
      onClick={() =>
        toast("Toast with close button", {
          description: "You can close this toast using the button.",
          closeButton: true,
          classNames: {
            closeButton: "!-right-4 !left-auto",
          },
        })
      }
      className="w-fit"
    >
      Show Closeable Toast
    </Button>
  )
}
