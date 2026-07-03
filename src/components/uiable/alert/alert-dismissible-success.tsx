"use client";

import { useState } from "react";

// shadcn
import { Alert, AlertAction } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

// assets
import { CircleCheck, X } from "lucide-react";

//  ------------------------------ | ALERT - DISMISSIBLE SUCCESS | ------------------------------  //

export default function AlertDismissibleSuccess() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <Alert className="px-5 py-3 mb-3 rounded-lg border grid-cols-1 flex items-center gap-3 border-green-600/20 bg-green-600/10 text-green-700 dark:text-green-400 relative pr-10">
      <CircleCheck className="h-5 w-5 shrink-0" />
      <span>
        <strong>Success!</strong> Your changes have been saved successfully.
      </span>
      <AlertAction className="absolute right-2 top-2">
        <Button
          size="icon"
          onClick={() => setIsVisible(false)}
          className="text-lg flex items-center justify-center rounded w-7 h-7 text-inherit bg-transparent hover:bg-green-500/5 dark:hover:bg-green-500/5"
        >
          <X className="h-4 w-4" />
        </Button>
      </AlertAction>
    </Alert>
  );
}
