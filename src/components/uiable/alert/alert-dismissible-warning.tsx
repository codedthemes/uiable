"use client";

import { useState } from "react";

// shadcn
import { Alert, AlertAction } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

// assets
import { AlertTriangle, X } from "lucide-react";

//  ------------------------------ | ALERT - DISMISSIBLE WARNING | ------------------------------  //

export default function AlertDismissibleWarning() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <Alert className="px-5 py-3 mb-3 rounded-lg border grid-cols-1 flex items-center gap-3 border-yellow-500/20 bg-yellow-500/10 text-yellow-700 relative pr-10">
      <AlertTriangle className="h-5 w-5 shrink-0" />
      <span>
        <strong>Warning!</strong> Your subscription will expire in 3 days.
      </span>
      <AlertAction className="absolute right-2 top-2">
        <Button
          size="icon"
          onClick={() => setIsVisible(false)}
          className="text-lg flex items-center justify-center rounded w-7 h-7 text-inherit bg-transparent hover:bg-yellow/5 dark:hover:bg-yellow/5"
        >
          <X className="h-4 w-4" />
        </Button>
      </AlertAction>
    </Alert>
  );
}
