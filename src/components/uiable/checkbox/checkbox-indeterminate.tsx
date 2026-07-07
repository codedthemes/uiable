"use client"

import { useState } from "react"

// third party
import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox"

// shadcn
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field"

// project
import { cn } from "@/lib/utils"

// assets
import { CheckIcon, MinusIcon } from "lucide-react"

// Custom Checkbox component
function Checkbox({ className, ...props }: CheckboxPrimitive.Root.Props) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer relative flex size-[17.5px] shrink-0 items-center justify-center rounded-[4px] border transition-colors outline-none",
        "border-border dark:bg-input/30",
        // Checked state
        "data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary",
        // Indeterminate state
        "data-indeterminate:border-primary data-indeterminate:bg-primary data-indeterminate:text-primary-foreground dark:data-indeterminate:bg-primary",
        // Invalid state
        "aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aria-invalid:aria-checked:border-primary dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
        // Focus state
        "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
        // Disabled state
        "group-has-disabled/field:opacity-50 disabled:cursor-not-allowed disabled:opacity-50",
        // Interactive layout helper
        "after:absolute after:-inset-x-3 after:-inset-y-2",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="grid place-content-center text-current transition-none [&>svg]:size-3 [&>svg]:stroke-3"
        render={(indicatorProps, state) => (
          <span {...indicatorProps}>
            {state.indeterminate ? <MinusIcon /> : <CheckIcon />}
          </span>
        )}
      />
    </CheckboxPrimitive.Root>
  )
}

//  ------------------------------ | CHECKBOX - INDETERMINATE | ------------------------------  //

export function CheckboxIndeterminate() {
  const [checkedItems, setCheckedItems] = useState<boolean[]>([true, false])

  const allChecked = checkedItems.every(Boolean)
  const someChecked = checkedItems.some(Boolean) && !allChecked

  const handleParentChange = (checked: boolean) => {
    setCheckedItems(checkedItems.map(() => checked))
  }

  const handleChildChange = (index: number) => (checked: boolean) => {
    const nextCheckedItems = [...checkedItems]
    nextCheckedItems[index] = checked
    setCheckedItems(nextCheckedItems)
  }

  return (
    <FieldSet className="mx-auto w-60">
      <FieldGroup className="gap-3">
        <Field orientation="horizontal">
          <Checkbox
            id="parent"
            name="parent"
            checked={allChecked}
            indeterminate={someChecked}
            onCheckedChange={handleParentChange}
          />
          <FieldLabel htmlFor="parent" className="font-semibold">
            Parent checkbox
          </FieldLabel>
        </Field>
        <FieldGroup className="ml-2 gap-3 border-l pl-4">
          <Field orientation="horizontal">
            <Checkbox
              id="child1"
              name="child1"
              checked={checkedItems[0]}
              onCheckedChange={handleChildChange(0)}
            />
            <FieldLabel htmlFor="child1" className="font-normal">
              Child checkbox 1
            </FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <Checkbox
              id="child2"
              name="child2"
              checked={checkedItems[1]}
              onCheckedChange={handleChildChange(1)}
            />
            <FieldLabel htmlFor="child2" className="font-normal">
              Child checkbox 2
            </FieldLabel>
          </Field>
        </FieldGroup>
      </FieldGroup>
    </FieldSet>
  )
}
