"use client";

// shadcn
import { Button } from "@/components/ui/button";

// third party
import { toast } from "sonner";

//  ------------------------------ | SONNER - TYPES | ------------------------------  //

export function SonnerTypes() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button onClick={() => toast("Event has been created")}>Default</Button>
      <Button onClick={() => toast.success("Event has been created")}>
        Success
      </Button>
      <Button
        onClick={() =>
          toast.info("Be at the area 10 minutes before the event time")
        }
      >
        Info
      </Button>
      <Button
        onClick={() =>
          toast.warning("Event start time cannot be earlier than 8am")
        }
      >
        Warning
      </Button>
      <Button onClick={() => toast.error("Event has not been created")}>
        Error
      </Button>
      <Button
        onClick={() => {
          toast.promise<{ name: string }>(
            () =>
              new Promise((resolve) =>
                setTimeout(() => resolve({ name: "Event" }), 2000),
              ),
            {
              loading: "Loading...",
              success: (data) => `${data.name} has been created`,
              error: "Error",
            },
          );
        }}
      >
        Promise
      </Button>
    </div>
  );
}
