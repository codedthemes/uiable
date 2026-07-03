"use client";

import { useState } from "react";

// shadcn
import { Alert, AlertAction } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

// assets
import { X } from "lucide-react";

//  ------------------------------ | ALERT - DISMISSIBLE SECONDARY | ------------------------------  //

export default function AlertDismissibleSecondary() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <Alert className="px-5 py-3 mb-3 rounded-lg border grid-cols-1 border-secondary/20 bg-secondary/10 text-secondary relative pr-10">
      <strong>Holy guacamole!</strong> You should check in on some of those
      fields below.
      <AlertAction className="absolute right-2 top-2">
        <Button
          size="icon"
          onClick={() => setIsVisible(false)}
          className="text-lg flex items-center justify-center rounded w-7 h-7 text-inherit bg-transparent hover:bg-secondary/5 dark:hover:bg-secondary/5"
        >
          <X className="h-4 w-4" />
        </Button>
      </AlertAction>
    </Alert>
  );
}
