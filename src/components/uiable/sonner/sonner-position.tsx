"use client";

// shadcn
import { Button } from "@/components/ui/button";

// third party
import { toast } from "sonner";

//  ------------------------------ | SONNER - POSITION | ------------------------------  //

export function SonnerPosition() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-wrap justify-center gap-2">
        <Button
          onClick={() =>
            toast("Event has been created", { position: "top-left" })
          }
        >
          Top Left
        </Button>
        <Button
          onClick={() =>
            toast("Event has been created", { position: "top-center" })
          }
        >
          Top Center
        </Button>
        <Button
          onClick={() =>
            toast("Event has been created", { position: "top-right" })
          }
        >
          Top Right
        </Button>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        <Button
          onClick={() =>
            toast("Event has been created", { position: "bottom-left" })
          }
        >
          Bottom Left
        </Button>
        <Button
          onClick={() =>
            toast("Event has been created", { position: "bottom-center" })
          }
        >
          Bottom Center
        </Button>
        <Button
          onClick={() =>
            toast("Event has been created", { position: "bottom-right" })
          }
        >
          Bottom Right
        </Button>
      </div>
    </div>
  );
}
