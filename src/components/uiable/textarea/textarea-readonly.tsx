// shadcn
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Textarea } from "@/components/ui/textarea"

//  ------------------------------ | TEXTAREA - READONLY | ------------------------------  //

export function TextareaReadonly() {
  return (
    <Field>
      <FieldLabel htmlFor="textarea-readonly">
        API Configuration Notes
      </FieldLabel>
      <Textarea
        id="textarea-readonly"
        defaultValue={
          "Endpoint: https://api.example.com/v1/webhooks\nEnvironment: Production (us-east-1)\nStatus: Active and verified"
        }
        readOnly
      />
      <FieldDescription>
        This configuration is read-only. Contact your administrator to request
        changes.
      </FieldDescription>
    </Field>
  )
}
