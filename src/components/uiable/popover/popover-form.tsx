// shadcn
import { Button } from "@/components/ui/button"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"

//  ------------------------------ | POPOVER - FORM | ------------------------------  //

export function PopoverForm() {
  return (
    <>
      <Popover>
        <PopoverTrigger render={<Button />}>Open Popover</PopoverTrigger>
        <PopoverContent className="w-64" align="start">
          <PopoverHeader>
            <PopoverTitle className="h5">Dimensions</PopoverTitle>
            <PopoverDescription>
              Set the dimensions for the layer.
            </PopoverDescription>
          </PopoverHeader>
          <FieldGroup className="gap-4">
            <Field orientation="vertical">
              <FieldLabel htmlFor="width">Width</FieldLabel>
              <Input id="width" defaultValue="100%" />
            </Field>
            <Field orientation="vertical">
              <FieldLabel htmlFor="height">Height</FieldLabel>
              <Input id="height" defaultValue="25px" />
            </Field>
          </FieldGroup>
        </PopoverContent>
      </Popover>
    </>
  )
}
