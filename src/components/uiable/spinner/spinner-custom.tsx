import { ComponentProps } from "react"
// assets
import { LoaderIcon } from "lucide-react"

// project
import { cn } from "@/lib/utils"

function Spinner({ className, ...props }: ComponentProps<"svg">) {
  return (
    <LoaderIcon
      role="status"
      aria-label="Loading"
      className={cn("size-4 animate-spin", className)}
      {...props}
    />
  )
}

//  ------------------------------ | SPINNER - CUSTOM | ------------------------------  //

export function SpinnerCustom() {
  return (
    <div className="flex items-center gap-4">
      <Spinner />
    </div>
  )
}
