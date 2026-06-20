// shadcn
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput
} from "@/components/ui/input-group";

// assets
import { CopyIcon, TrashIcon } from "lucide-react";

//  ------------------------------ | INPUT GROUP - WITH BUTTONS | ------------------------------  //

export function InputGroupWithButtons() {
  return (
    <FieldGroup>
      <Field>
        <FieldLabel htmlFor="input-button-13">Button</FieldLabel>
        <InputGroup>
          <InputGroupInput id="input-button-13" />
          <InputGroupAddon>
            <InputGroupButton>Default</InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <InputGroup>
          <InputGroupInput id="input-button-14" />
          <InputGroupAddon>
            <InputGroupButton variant="outline">Outline</InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <InputGroup>
          <InputGroupInput id="input-button-15" />
          <InputGroupAddon>
            <InputGroupButton variant="secondary">Secondary</InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <InputGroup>
          <InputGroupInput id="input-button-16" />
          <InputGroupAddon align="inline-end">
            <InputGroupButton variant="secondary">Button</InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <InputGroup>
          <InputGroupInput id="input-button-17" />
          <InputGroupAddon align="inline-end">
            <InputGroupButton size="icon-xs">
              <CopyIcon />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <InputGroup>
          <InputGroupInput id="input-button-18" />
          <InputGroupAddon align="inline-end">
            <InputGroupButton variant="secondary" size="icon-xs">
              <TrashIcon />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </Field>
    </FieldGroup>
  );
}
