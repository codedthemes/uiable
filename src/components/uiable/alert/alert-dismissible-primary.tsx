"use client";

import { useState } from "react";

// shadcn
import { Alert, AlertAction } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

// assets
import { X } from "lucide-react";

//  ------------------------------ | ALERT - DISMISSIBLE PRIMARY | ------------------------------  //

export default function AlertDismissiblePrimary() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <Alert className="px-5 py-3 mb-3 rounded-lg border grid-cols-1 border-primary/20 bg-primary/10 text-primary relative pr-10">
      <strong>Holy guacamole!</strong> You should check in on some of those
      fields below.
      <AlertAction className="absolute right-2 top-2">
        <Button
          size="icon"
          onClick={() => setIsVisible(false)}
          className="text-lg flex items-center justify-center rounded w-7 h-7 text-inherit bg-transparent hover:bg-primary/5"
        >
          <X className="h-4 w-4" />
        </Button>
      </AlertAction>
    </Alert>
  );
}
