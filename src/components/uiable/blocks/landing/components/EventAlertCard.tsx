import { useState } from "react";

// shadcn
import { Button } from "@/components/ui/button";

// ------------------------------ | EVENT ALERT CARD | ------------------------------ //

export default function EventAlertCard() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="border border-border rounded-xl p-4 flex items-center justify-between gap-3 bg-card">
      <div className="flex flex-col gap-1">
        <p className="text-sm font-medium leading-5 tracking-normal text-foreground">
          Event has been created
        </p>
        <p className="text-xs font-normal leading-4 tracking-normal text-muted-foreground">
          Sunday, December 03, 2023 at 9:00 AM
        </p>
      </div>
      <Button
        size="sm"
        onClick={() => setEnabled(!enabled)}
        className={`text-xs font-semibold px-4 py-2 h-8.5 rounded-lg transition-colors ${enabled
          ? "bg-muted text-muted-foreground hover:bg-muted/80"
          : "bg-primary hover:bg-primary/90 text-primary-foreground"
          }`}
      >
        {enabled ? "Disable" : "Enable"}
      </Button>
    </div>
  );
}
