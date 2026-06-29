// shadcn
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

//  ------------------------------ | INPUT - BUTTON GROUP | ------------------------------  //

export function InputButtonGroup() {
  return (
    <Field>
      <FieldLabel htmlFor="input-button-group">Search</FieldLabel>
      <ButtonGroup className="items-stretch">
        <Input
          id="input-button-group"
          className="rounded-r-none"
          placeholder="Type to search..."
        />
        <Button variant="outline">Search</Button>
      </ButtonGroup>
    </Field>
  )
}
