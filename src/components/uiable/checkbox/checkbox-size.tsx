// third party
import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox"

// shadcn
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"

// project imports
import { cn } from "@/lib/utils"

// assets
import { CheckIcon } from "lucide-react"

// Custom Checkbox component with size variants
function Checkbox({
  className,
  size = "default",
  ...props
}: CheckboxPrimitive.Root.Props & {
  size?: "sm" | "default" | "lg"
}) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      data-size={size}
      className={cn(
        "peer group/checkbox relative flex shrink-0 items-center justify-center rounded-[4px] border transition-colors outline-none",
        "border-border dark:bg-input/30",
        // Checked state
        "data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary",
        // Focus state
        "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
        // Disabled state
        "group-has-disabled/field:opacity-50 disabled:cursor-not-allowed disabled:opacity-50",
        // Interactive layout helper
        "after:absolute after:-inset-x-3 after:-inset-y-2",
        // Size variants
        "data-[size=default]:size-[17.5px] data-[size=lg]:size-5 data-[size=sm]:size-3.5",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className={cn(
          "grid place-content-center text-current transition-none",
          "group-data-[size=sm]/checkbox:[&>svg]:size-2.5 group-data-[size=sm]/checkbox:[&>svg]:stroke-3",
          "group-data-[size=default]/checkbox:[&>svg]:size-3 group-data-[size=default]/checkbox:[&>svg]:stroke-3",
          "group-data-[size=lg]/checkbox:[&>svg]:size-3.5 group-data-[size=lg]/checkbox:[&>svg]:stroke-3"
        )}
      >
        <CheckIcon />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

//  ------------------------------ | CHECKBOX - SIZES | ------------------------------  //

export function CheckboxSizes() {
  return (
    <FieldGroup className="mx-auto flex max-w-40 flex-row flex-wrap">
      {/* Small */}
      <Field orientation="horizontal">
        <Checkbox
          id="checkbox-sm"
          name="checkbox-sm"
          size="sm"
          defaultChecked
        />
        <FieldLabel htmlFor="checkbox-sm" className="text-xs font-normal">
          Small
        </FieldLabel>
      </Field>

      {/* Default */}
      <Field orientation="horizontal">
        <Checkbox
          id="checkbox-default"
          name="checkbox-default"
          size="default"
          defaultChecked
        />
        <FieldLabel htmlFor="checkbox-default" className="text-sm font-normal">
          Default
        </FieldLabel>
      </Field>

      {/* Large */}
      <Field orientation="horizontal">
        <Checkbox
          id="checkbox-lg"
          name="checkbox-lg"
          size="lg"
          defaultChecked
        />
        <FieldLabel htmlFor="checkbox-lg" className="text-base font-normal">
          Large
        </FieldLabel>
      </Field>
    </FieldGroup>
  )
}
