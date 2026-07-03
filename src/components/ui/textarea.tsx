import { ComponentProps } from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        " bg-input border-border aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 disabled:bg-secondary-200/10 dark:disabled:bg-secondary-200/10 placeholder:text-[#bec8d0] flex field-sizing-content min-h-22 w-full rounded-lg border py-[.8rem] px-3 text-base transition-colors outline-none disabled:cursor-not-allowed disabled:opacity-50 focus:border-primary dark:focus:border-primary disabled:pointer-events-none focus:outline-none",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
