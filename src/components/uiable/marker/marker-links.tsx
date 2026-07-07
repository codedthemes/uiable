"use client"

// third party
import { toast } from "sonner"

// shadcn
import { Marker, MarkerContent, MarkerIcon } from "@/components/ui/marker"

// assets
import { GitBranchIcon, RotateCcwIcon } from "lucide-react"

//  ------------------------------ | MARKER - LINKS | ------------------------------  //

export function MarkerLinks() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <Marker
        render={
          <a href="#links-and-buttons">
            <MarkerIcon>
              <GitBranchIcon />
            </MarkerIcon>
            <MarkerContent>View the pull request</MarkerContent>
          </a>
        }
      />
      <Marker
        render={
          <button
            type="button"
            className="transition-colors hover:text-foreground"
            onClick={() => toast.success("You clicked the revert button")}
          >
            <MarkerIcon>
              <RotateCcwIcon />
            </MarkerIcon>
            <MarkerContent>Revert this change</MarkerContent>
          </button>
        }
      />
    </div>
  )
}
