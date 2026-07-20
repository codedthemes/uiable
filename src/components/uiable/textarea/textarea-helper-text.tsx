// shadcn
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Textarea } from "@/components/ui/textarea"

//  ------------------------------ | TEXTAREA - HELPER TEXT | ------------------------------  //

export function TextareaHelperText() {
  return (
    <Field>
      <FieldLabel htmlFor="textarea-helper-text">
        Project Description
      </FieldLabel>
      <Textarea
        id="textarea-helper-text"
        placeholder="Type your message here."
      />
      <FieldDescription>
        Markdown formatting is supported. Your description will be visible to
        your team members.
      </FieldDescription>
    </Field>
  )
}
