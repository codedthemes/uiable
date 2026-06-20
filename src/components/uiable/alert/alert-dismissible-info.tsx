"use client";

import { useState } from "react";

// shadcn
import { Alert, AlertAction } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

// assets
import { Info, X } from "lucide-react";

//  ------------------------------ | ALERT - DISMISSIBLE INFO | ------------------------------  //

export default function AlertDismissibleInfo() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <Alert className="px-5 py-3 mb-3 rounded-lg border grid-cols-1 flex items-center gap-3 border-cyan-500/20 bg-cyan-500/10 text-cyan-700 relative pr-10">
      <Info className="h-5 w-5 shrink-0" />
      <span>
        <strong>Note:</strong> A new update is available for your software.
      </span>
      <AlertAction className="absolute right-2 top-2">
        <Button
          size="icon"
          onClick={() => setIsVisible(false)}
          className="text-lg flex items-center justify-center rounded w-7 h-7 text-inherit bg-transparent hover:bg-cyan/5 dark:hover:bg-white/5"
        >
          <X className="h-4 w-4" />
        </Button>
      </AlertAction>
    </Alert>
  );
}
