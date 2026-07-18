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

//  ------------------------------ | SWITCH - COLOR OPTIONS | ------------------------------  //

export function SwitchColorOptions() {
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
          <FieldLabel htmlFor="switch-color-success">Success</FieldLabel>
        </FieldContent>
        <Switch
          id="switch-color-success"
          checked={states.success}
          onCheckedChange={(checked) =>
            setStates((prev) => ({ ...prev, success: checked }))
          }
          className="focus-visible:ring-green-500/50 data-checked:bg-green-500 data-checked:ring-green-500"
        />
      </Field>

      {/* Info */}
      <Field orientation="horizontal">
        <FieldContent>
          <FieldLabel htmlFor="switch-color-info">Info</FieldLabel>
        </FieldContent>
        <Switch
          id="switch-color-info"
          checked={states.info}
          onCheckedChange={(checked) =>
            setStates((prev) => ({ ...prev, info: checked }))
          }
          className="focus-visible:ring-cyan-500/50 data-checked:bg-cyan-500 data-checked:ring-cyan-500"
        />
      </Field>

      {/* Warning */}
      <Field orientation="horizontal">
        <FieldContent>
          <FieldLabel htmlFor="switch-color-warning">Warning</FieldLabel>
        </FieldContent>
        <Switch
          id="switch-color-warning"
          checked={states.warning}
          onCheckedChange={(checked) =>
            setStates((prev) => ({ ...prev, warning: checked }))
          }
          className="focus-visible:ring-yellow-500/50 data-checked:bg-yellow-500 data-checked:ring-yellow-500"
        />
      </Field>

      {/* Danger */}
      <Field orientation="horizontal">
        <FieldContent>
          <FieldLabel htmlFor="switch-color-danger">Danger</FieldLabel>
        </FieldContent>
        <Switch
          id="switch-color-danger"
          checked={states.danger}
          onCheckedChange={(checked) =>
            setStates((prev) => ({ ...prev, danger: checked }))
          }
          className="focus-visible:ring-red-500/50 data-checked:bg-red-500 data-checked:ring-red-500"
        />
      </Field>
    </FieldGroup>
  )
}
