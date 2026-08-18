import { ComponentProps } from "react"

// third-party
import { Input as InputPrimitive } from "@base-ui/react/input"

// project-imports
import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "disabled:bg-secondary-200/10 block w-full rounded-lg border border-border bg-input px-3 py-[.8rem] text-base placeholder:text-[#bec8d0] focus:border-primary focus:outline-none disabled:pointer-events-none dark:focus:border-primary",
        className
      )}
      {...props}
    />
  )
}

export { Input }
