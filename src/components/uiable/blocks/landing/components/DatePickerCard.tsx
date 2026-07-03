"use client";

import { useState } from "react";

// shadcn
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";

// third party
import { format } from "date-fns";

// assets
import { Calendar as CalendarIcon } from "lucide-react";

// ------------------------------ | DATE PICKER CARD | ------------------------------ //

export default function DatePickerCard() {
  const [date, setDate] = useState<Date | undefined>(new Date(2025, 5, 1));

  return (
    <div className="border border-border rounded-xl px-3 py-2 flex items-center justify-between text-sm text-foreground bg-background">
      <span className="font-medium">
        {date ? format(date, "MMMM dd, yyyy") : "Pick a date"}
      </span>
      <Popover>
        <PopoverTrigger
          render={
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="size-8 rounded-lg hover:bg-accent text-muted-foreground hover:text-foreground"
            />
          }
        >
          <CalendarIcon className="size-4.5" />
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="end">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-lg border"
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
