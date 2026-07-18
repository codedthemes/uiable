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

//  ------------------------------ | SWITCH - OUTLINE | ------------------------------  //

export function SwitchOutline() {
  const [states, setStates] = useState({
    success: true,
    info: true,
    warning: true,
    danger: true,
  })

  return (
    <FieldGroup className="w-full max-w-xs">
      {/* Success */}
      <Field orientation="horizontal">
        <FieldContent>
          <FieldLabel htmlFor="switch-outline-success">Success</FieldLabel>
        </FieldContent>
        <Switch
          id="switch-outline-success"
          checked={states.success}
          onCheckedChange={(checked) =>
            setStates((prev) => ({ ...prev, success: checked }))
          }
          className="border border-green-500 ring-0 data-checked:bg-transparent data-checked:ring-0 [&_[data-slot=switch-thumb]]:data-checked:bg-green-500 [&_[data-slot=switch-thumb]]:data-unchecked:translate-x-0.5"
        />
      </Field>

      {/* Info */}
      <Field orientation="horizontal">
        <FieldContent>
          <FieldLabel htmlFor="switch-outline-info">Info</FieldLabel>
        </FieldContent>
        <Switch
          id="switch-outline-info"
          checked={states.info}
          onCheckedChange={(checked) =>
            setStates((prev) => ({ ...prev, info: checked }))
          }
          className="border border-cyan-500 ring-0 data-checked:bg-transparent data-checked:ring-0 [&_[data-slot=switch-thumb]]:data-checked:bg-cyan-500 [&_[data-slot=switch-thumb]]:data-unchecked:translate-x-0.5"
        />
      </Field>

      {/* Warning */}
      <Field orientation="horizontal">
        <FieldContent>
          <FieldLabel htmlFor="switch-outline-warning">Warning</FieldLabel>
        </FieldContent>
        <Switch
          id="switch-outline-warning"
          checked={states.warning}
          onCheckedChange={(checked) =>
            setStates((prev) => ({ ...prev, warning: checked }))
          }
          className="border border-yellow-500 ring-0 data-checked:bg-transparent data-checked:ring-0 [&_[data-slot=switch-thumb]]:data-checked:bg-yellow-500 [&_[data-slot=switch-thumb]]:data-unchecked:translate-x-0.5"
        />
      </Field>

      {/* Danger */}
      <Field orientation="horizontal">
        <FieldContent>
          <FieldLabel htmlFor="switch-outline-danger">Danger</FieldLabel>
        </FieldContent>
        <Switch
          id="switch-outline-danger"
          checked={states.danger}
          onCheckedChange={(checked) =>
            setStates((prev) => ({ ...prev, danger: checked }))
          }
          className="border border-red-500 ring-0 data-checked:bg-transparent data-checked:ring-0 [&_[data-slot=switch-thumb]]:data-checked:bg-red-500 [&_[data-slot=switch-thumb]]:data-unchecked:translate-x-0.5"
        />
      </Field>
    </FieldGroup>
  )
}
