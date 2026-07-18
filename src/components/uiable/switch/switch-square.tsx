"use client"

import { useState } from "react"

// shadcn
import {
  Field,
  FieldContent,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Switch } from "@/components/ui/switch"

//  ------------------------------ | SWITCH - SQUARE | ------------------------------  //

export function SwitchSquare() {
  const [sharp, setSharp] = useState(true)
  const [roundedSquare, setRoundedSquare] = useState(false)
  const [softSquare, setSoftSquare] = useState(true)

  return (
    <FieldGroup className="w-full max-w-xs">
      {/* Sharp Square */}
      <Field orientation="horizontal">
        <FieldContent>
          <FieldLabel htmlFor="switch-square-sharp">Sharp square</FieldLabel>
        </FieldContent>
        <Switch
          id="switch-square-sharp"
          checked={sharp}
          onCheckedChange={setSharp}
          className="!rounded-none [&_[data-slot=switch-thumb]]:!rounded-none"
        />
      </Field>

      {/* Rounded Square */}
      <Field orientation="horizontal">
        <FieldContent>
          <FieldLabel htmlFor="switch-square-rounded">
            Rounded square
          </FieldLabel>
        </FieldContent>
        <Switch
          id="switch-square-rounded"
          checked={roundedSquare}
          onCheckedChange={setRoundedSquare}
          className="!rounded-md [&_[data-slot=switch-thumb]]:!rounded-sm"
        />
      </Field>

      {/* Soft Square */}
      <Field orientation="horizontal">
        <FieldContent>
          <FieldLabel htmlFor="switch-square-soft">Soft square</FieldLabel>
        </FieldContent>
        <Switch
          id="switch-square-soft"
          checked={softSquare}
          onCheckedChange={setSoftSquare}
          className="!rounded-lg [&_[data-slot=switch-thumb]]:!rounded-md"
        />
      </Field>
    </FieldGroup>
  )
}
