"use client"

import { useEffect } from "react"

// shadcn
import { Button } from "@/components/ui/button"

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

//  ------------------------------ | PAGE - 500 ERROR | ------------------------------  //

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-foreground">
      <div className="flex max-w-md flex-col items-center gap-6 text-center">
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
          className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Try Again
        </Button>
      </div>
    </div>
  )
}
