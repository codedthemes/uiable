"use client";

import { useEffect } from "react";

// shadcn
import { Button } from "@/components/ui/button";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

//  ------------------------------ | PAGE - 500 ERROR | ------------------------------  //

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-4">
      <div className="flex flex-col items-center gap-6 text-center max-w-md">
        <h1 className="text-8xl font-bold text-destructive">500</h1>
        <div className="flex flex-col gap-2">
          <h2>Something Went Wrong</h2>
          <p className="text-muted-foreground">
            An unexpected error occurred. Please try again or contact support if
            the problem persists.
          </p>
        </div>
        <Button
          variant="ghost"
          onClick={reset}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          Try Again
        </Button>
      </div>
    </div>
  );
}
