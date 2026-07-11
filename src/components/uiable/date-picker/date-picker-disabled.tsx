"use client"

import { useState } from "react"
// assets
import { CalendarIcon } from "lucide-react"

// shadcn
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Field, FieldLabel } from "@/components/ui/field"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

//  ------------------------------ | DATE PICKER - DISABLED | ------------------------------  //

export function DatePickerDisabled() {
  const [date] = useState<Date | undefined>(undefined)

  return (
    <Field className="mx-auto w-52">
      <FieldLabel htmlFor="date-picker-disabled" className="opacity-50">
        Date (Disabled)
      </FieldLabel>
      <Popover>
        <PopoverTrigger
          disabled
          render={
            <Button
              id="date-picker-disabled"
              variant="outline"
              disabled
              className="flex w-full justify-between font-normal disabled:cursor-not-allowed disabled:opacity-50"
            />
          }
        >
          <span className="flex items-center gap-2">
            <CalendarIcon className="size-4 opacity-50" />
            Pick a date
          </span>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar mode="single" selected={date} disabled />
        </PopoverContent>
      </Popover>
    </Field>
  )
}
