"use client"

import { useState } from "react"

// shadcn
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

// third-party
import { format } from "date-fns"

// assets
import { CalendarIcon } from "lucide-react"

//  ------------------------------ | CALENDAR - DIALOG | ------------------------------  //

export function CalendarDialog() {
  const [open, setOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date(new Date().getFullYear(), new Date().getMonth(), 15)
  )
  const [currentMonth, setCurrentMonth] = useState<Date>(
    new Date(new Date().getFullYear(), new Date().getMonth(), 1)
  )

  return (
    <Card className="mx-auto w-full max-w-[380px]">
      <CardHeader className="pt-3 pb-3">
        <CardTitle className="text-base font-semibold">
          Schedule Consultation
        </CardTitle>
        <CardDescription className="text-xs">
          Select a preferred date for your upcoming session
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger
            render={
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal"
              />
            }
          >
            <CalendarIcon className="mr-2 size-4 text-muted-foreground" />
            {selectedDate ? (
              <span className="font-medium text-foreground">
                {format(selectedDate, "EEE, MMM dd, yyyy")}
              </span>
            ) : (
              <span className="text-muted-foreground">
                Pick an appointment date
              </span>
            )}
          </DialogTrigger>

          <DialogContent className="max-w-[360px] overflow-hidden p-0 sm:max-w-[400px]">
            <DialogHeader className="justify-center border-b px-5 py-4">
              <DialogTitle className="text-base font-semibold">
                Select Appointment Date
              </DialogTitle>
            </DialogHeader>

            <div className="flex justify-center p-3">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                month={currentMonth}
                onMonthChange={setCurrentMonth}
                className="p-0 [--cell-size:--spacing(9.5)]"
              />
            </div>

            <DialogFooter className="m-0 mx-0 mb-0 flex flex-row items-center justify-between border-t bg-muted/20 px-5 py-3.5 sm:flex-row sm:justify-between">
              <Button
                variant="ghost"
                onClick={() => setSelectedDate(undefined)}
                className="text-xs text-muted-foreground"
              >
                Clear
              </Button>
              <Button disabled={!selectedDate} onClick={() => setOpen(false)}>
                Confirm Date
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {selectedDate && (
          <div className="rounded-md border border-dashed p-3 text-xs text-muted-foreground">
            <span className="font-medium text-foreground">Next step: </span>
            Your consultation is reserved for{" "}
            <span className="font-medium text-primary">
              {format(selectedDate, "EEEE, MMMM d")}
            </span>
            .
          </div>
        )}
      </CardContent>
    </Card>
  )
}
