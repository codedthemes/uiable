"use client"

import { useState } from "react"

// shadcn
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"

//  ------------------------------ | CALENDAR - WEEK NUMBERS | ------------------------------  //

export function CalendarWeekNumbers() {
  const [date, setDate] = useState<Date | undefined>(
    new Date(new Date().getFullYear(), 0, 12)
  )

  return (
    <Card className="mx-auto w-fit p-0">
      <CardContent className="p-0">
        <Calendar
          mode="single"
          defaultMonth={date}
          selected={date}
          onSelect={setDate}
          showWeekNumber
        />
      </CardContent>
    </Card>
  )
}
