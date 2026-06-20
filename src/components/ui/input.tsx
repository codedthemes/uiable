import { ComponentProps } from "react";

import { Input as InputPrimitive } from "@base-ui/react/input";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "border rounded-lg block text-base py-[.8rem] px-3 w-full placeholder:text-[#bec8d0] disabled:bg-secondary-200/10 disabled:pointer-events-none focus:outline-none focus:border-primary dark:focus:border-primary border-border bg-input",
        className
      )}
      {...props}
    />
  );
}

export { Input };
