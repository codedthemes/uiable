// shadcn
import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field"

//  ------------------------------ | CHECKBOX - COLORS | ------------------------------  //

export function CheckboxColors() {
  return (
    <FieldSet className="mx-auto w-64">
      <FieldGroup className="gap-3">
        {/* Success */}
        <Field orientation="horizontal">
          <Checkbox
            id="success"
            name="success"
            defaultChecked
            className="focus-visible:border-green-600 focus-visible:ring-green-600/50 dark:focus-visible:border-green-500 dark:focus-visible:ring-green-500/50 data-checked:border-green-600 data-checked:bg-green-600 dark:data-checked:border-green-500 dark:data-checked:bg-green-500"
          />
          <FieldLabel htmlFor="success" className="font-normal">
            Success
          </FieldLabel>
        </Field>

        {/* Danger */}
        <Field orientation="horizontal">
          <Checkbox
            id="danger"
            name="danger"
            defaultChecked
            className="focus-visible:border-red-600 focus-visible:ring-red-600/50 dark:focus-visible:border-red-500 dark:focus-visible:ring-red-500/50 data-checked:border-red-600 data-checked:bg-red-600 dark:data-checked:border-red-500 dark:data-checked:bg-red-500"
          />
          <FieldLabel htmlFor="danger" className="font-normal">
            Danger
          </FieldLabel>
        </Field>

        {/* Warning */}
        <Field orientation="horizontal">
          <Checkbox
            id="warning"
            name="warning"
            defaultChecked
            className="focus-visible:border-amber-500 focus-visible:ring-amber-500/50 dark:focus-visible:border-amber-500 dark:focus-visible:ring-amber-500/50 data-checked:border-amber-500 data-checked:bg-amber-500 dark:data-checked:border-amber-500 dark:data-checked:bg-amber-500"
          />
          <FieldLabel htmlFor="warning" className="font-normal">
            Warning
          </FieldLabel>
        </Field>

        {/* Info */}
        <Field orientation="horizontal">
          <Checkbox
            id="info"
            name="info"
            defaultChecked
            className="focus-visible:border-sky-500 focus-visible:ring-sky-500/50 dark:focus-visible:border-sky-400 dark:focus-visible:ring-sky-400/50 data-checked:border-sky-500 data-checked:bg-sky-500 dark:data-checked:border-sky-400 dark:data-checked:bg-sky-400"
          />
          <FieldLabel htmlFor="info" className="font-normal">
            Info
          </FieldLabel>
        </Field>
      </FieldGroup>
    </FieldSet>
  )
}
