// shadcn
import { Calendar } from "@/components/ui/calendar"

//  ------------------------------ | CALENDAR - CAPTION | ------------------------------  //

export function CalendarCaption() {
  return (
    <Calendar
      mode="single"
      captionLayout="dropdown"
      className="rounded-lg border"
    />
  )
}
