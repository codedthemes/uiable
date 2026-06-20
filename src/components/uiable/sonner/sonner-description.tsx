"use client";

// shadcn
import { Button } from "@/components/ui/button";

// third party
import { toast } from "sonner";

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
  );
}
