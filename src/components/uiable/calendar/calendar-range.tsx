"use client"

import { useState } from "react"
// third party
import { addDays } from "date-fns"
import { DateRange } from "react-day-picker"

// shadcn
import { Calendar } from "@/components/ui/calendar"

//  ------------------------------ | CALENDAR - RANGE | ------------------------------  //

export function CalendarRange() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(new Date().getFullYear(), 0, 12),
    to: addDays(new Date(new Date().getFullYear(), 0, 12), 30),
  })

  return (
    <Calendar
      mode="range"
      defaultMonth={dateRange?.from}
      selected={dateRange}
      onSelect={setDateRange}
      numberOfMonths={2}
      className="rounded-lg border"
    />
  )
}
