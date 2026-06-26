import { ComponentProps } from "react"
import { cn } from "@/lib/utils"

function Kbd({ className, ...props }: ComponentProps<"kbd">) {
  return (
    <kbd
      data-slot="kbd"
      className={cn(
        "pointer-events-none inline-flex h-5 items-center gap-1 rounded-lg border border-border bg-background px-1.5 font-mono text-[10px] leading-0 font-medium text-foreground opacity-100 select-none",
        className
      )}
      {...props}
    />
  )
}

function KbdGroup({ className, ...props }: ComponentProps<"div">) {
  return (
    <kbd
      data-slot="kbd-group"
      className={cn("flex items-center gap-1", className)}
      {...props}
    />
  )
}

export { Kbd, KbdGroup }
