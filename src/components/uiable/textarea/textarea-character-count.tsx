"use client"

import { useState } from "react"

// shadcn
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Textarea } from "@/components/ui/textarea"

//  ------------------------------ | TEXTAREA - CHARACTER COUNT | ------------------------------  //

export function TextareaCharacterCount() {
  const [text, setText] = useState("")
  const maxLength = 200

  return (
    <Field>
      <FieldLabel htmlFor="textarea-char-count">Short Biography</FieldLabel>
      <Textarea
        id="textarea-char-count"
        placeholder="Write a few sentences about your professional background..."
        value={text}
        maxLength={maxLength}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="flex items-center justify-between">
        <FieldDescription>
          Brief summary for your profile card.
        </FieldDescription>
        <span className="text-xs text-muted-foreground tabular-nums">
          {text.length}/{maxLength}
        </span>
      </div>
    </Field>
  )
}
