// shadcn

// assets
import { BotIcon, ChevronDownIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Textarea } from "@/components/ui/textarea"

//  ------------------------------ | BUTTON GROUP - POPOVER | ------------------------------  //

export default function ButtonGroupPopover() {
  return (
    <ButtonGroup className="items-stretch">
      <Button className="gap-2">
        <BotIcon /> Copilot
      </Button>
      <Popover>
        <PopoverTrigger
          render={
            <Button size="icon" className="h-auto!" aria-label="Open Popover" />
          }
        >
          <ChevronDownIcon />
        </PopoverTrigger>
        <PopoverContent align="end" className="rounded-xl text-sm">
          <PopoverHeader>
            <PopoverTitle className="h5">
              Start a new task with Copilot
            </PopoverTitle>
            <PopoverDescription>
              Describe your task in natural language.
            </PopoverDescription>
          </PopoverHeader>
          <Field>
            <FieldLabel htmlFor="task" className="sr-only">
              Task Description
            </FieldLabel>
            <Textarea
              id="task"
              placeholder="I need to..."
              className="resize-none"
            />
            <FieldDescription>
              Copilot will open a pull request for review.
            </FieldDescription>
          </Field>
        </PopoverContent>
      </Popover>
    </ButtonGroup>
  )
}
