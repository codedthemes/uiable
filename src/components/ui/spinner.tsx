import { ComponentProps } from "react"

// project-imports
import { cn } from "@/lib/utils"

// assets
// assests
import { Loader2Icon } from "lucide-react"

function Spinner({ className, ...props }: ComponentProps<"svg">) {
  return (
    <Loader2Icon
      role="status"
      aria-label="Loading"
      className={cn("size-4 animate-spin", className)}
      {...props}
    />
  )
}

export { Spinner }
