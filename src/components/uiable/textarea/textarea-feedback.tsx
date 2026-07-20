// shadcn
import { Button } from "@/components/ui/button"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Textarea } from "@/components/ui/textarea"

//  ------------------------------ | TEXTAREA - FEEDBACK | ------------------------------  //

export function TextareaFeedback() {
  return (
    <div className="grid w-full gap-3">
      <Field>
        <FieldLabel htmlFor="textarea-feedback">Your Feedback</FieldLabel>
        <FieldDescription>
          Tell us what you love or what could be improved.
        </FieldDescription>
        <Textarea
          id="textarea-feedback"
          placeholder="Share your thoughts, suggestions, or report an issue..."
          className="min-h-24"
        />
      </Field>
      <div className="flex items-center justify-between gap-1">
        <p className="text-xs text-muted-foreground">
          We read every piece of feedback carefully.
        </p>
        <Button size="sm">Submit Feedback</Button>
      </div>
    </div>
  )
}
