"use client"

import { useState } from "react"

// shadcn
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const statuses = [
  {
    label: "Backlog",
    value: "backlog",
    dotColor: "bg-slate-400 dark:bg-slate-500",
  },
  {
    label: "In Progress",
    value: "in-progress",
    dotColor: "bg-blue-500",
  },
  {
    label: "Under Review",
    value: "under-review",
    dotColor: "bg-amber-500",
  },
  {
    label: "Completed",
    value: "completed",
    dotColor: "bg-emerald-500",
  },
  {
    label: "Cancelled",
    value: "cancelled",
    dotColor: "bg-rose-500",
  },
]

//  ------------------------------ | SELECT - WITH STATUS | ------------------------------  //

export function SelectWithStatus() {
  const [value, setValue] = useState("in-progress")
  const selectedStatus = statuses.find((s) => s.value === value)

  return (
    <Select
      items={statuses}
      value={value}
      onValueChange={(val) => val && setValue(val)}
    >
      <SelectTrigger className="w-full max-w-56">
        <SelectValue>
          {selectedStatus && (
            <span className="flex items-center gap-2.5">
              <Badge
                className={`size-2 rounded-full border-0 p-0 ${selectedStatus.dotColor}`}
              />
              <span className="font-medium">{selectedStatus.label}</span>
            </span>
          )}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {statuses.map((status) => (
            <SelectItem key={status.value} value={status.value}>
              <span className="flex items-center gap-2.5">
                <Badge
                  className={`size-2 rounded-full border-0 p-0 ${status.dotColor}`}
                />
                <span>{status.label}</span>
              </span>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
