// shadcn
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

//  ------------------------------ | DATE PICKER - NEUTRAL | ------------------------------  //

export function DatePickerNeutral() {
  return (
    <FieldGroup className="mx-auto max-w-xs flex-row flex-wrap">
      <Field>
        <FieldLabel htmlFor="date-picker-neutral">Date</FieldLabel>
        <Input id="date-picker-neutral" type="date" />
      </Field>
      <Field>
        <FieldLabel htmlFor="time-picker-neutral">Time</FieldLabel>
        <Input id="time-picker-neutral" type="time" />
      </Field>
    </FieldGroup>
  )
}
