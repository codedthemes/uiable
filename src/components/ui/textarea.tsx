import { ComponentProps } from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "disabled:bg-secondary-200/10 dark:disabled:bg-secondary-200/10 flex field-sizing-content min-h-22 w-full rounded-lg border border-border bg-input px-3 py-[.8rem] text-base transition-colors outline-none placeholder:text-[#bec8d0] focus:border-primary focus:outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive dark:focus:border-primary dark:aria-invalid:border-destructive/50",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
