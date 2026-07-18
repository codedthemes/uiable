"use client"

import { useState } from "react"
// third party
import { addMonths, format, subMonths } from "date-fns"
// assets
import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

// shadcn
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"

//  ------------------------------ | CALENDAR - RIGHT NAVIGATION | ------------------------------  //

export function CalendarRightNavigation() {
  const [date, setDate] = useState<Date | undefined>(
    new Date(new Date().getFullYear(), new Date().getMonth(), 18)
  )
  const [currentMonth, setCurrentMonth] = useState<Date>(
    new Date(new Date().getFullYear(), new Date().getMonth(), 1)
  )

  return (
    <Card className="mx-auto w-full max-w-fit overflow-hidden p-0">
      {/* Top Header with Right-Aligned Navigation Controls */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b bg-muted/20 px-4 py-3 sm:px-5 sm:py-3.5">
        <div className="flex items-center gap-2">
          <CalendarIcon className="size-4 text-primary" />
          <h3 className="text-sm font-semibold capitalize">
            {format(currentMonth, "MMMM yyyy")}
          </h3>
        </div>

        {/* Right Side Header Navigation */}
        <div className="flex items-center gap-1">
          <Button
            variant="outline"
            size="icon-xs"
            onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
            aria-label="Previous Month"
          >
            <ChevronLeftIcon className="size-3.5" />
          </Button>
          <Button
            variant="outline"
            size="icon-xs"
            onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
            aria-label="Next Month"
          >
            <ChevronRightIcon className="size-3.5" />
          </Button>
        </div>
      </div>

      <CardContent className="flex justify-center p-3 sm:p-4">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          month={currentMonth}
          onMonthChange={setCurrentMonth}
          classNames={{
            nav: "hidden",
            month_caption: "hidden",
          }}
          className="p-0 [--cell-size:--spacing(8)] sm:[--cell-size:--spacing(9.5)]"
        />
      </CardContent>
    </Card>
  )
}
