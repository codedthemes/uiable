"use client"

import { useState } from "react"

// shadcn
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const users = [
  {
    label: "Olivia Martin",
    name: "Olivia Martin",
    value: "olivia",
    role: "Product Designer",
    initials: "OM",
    color:
      "bg-blue-500/15 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300",
  },
  {
    label: "Jackson Lee",
    name: "Jackson Lee",
    value: "jackson",
    role: "Frontend Lead",
    initials: "JL",
    color:
      "bg-purple-500/15 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300",
  },
  {
    label: "Isabella Nguyen",
    name: "Isabella Nguyen",
    value: "isabella",
    role: "UX Researcher",
    initials: "IN",
    color:
      "bg-emerald-500/15 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300",
  },
  {
    label: "William Kim",
    name: "William Kim",
    value: "william",
    role: "DevOps Engineer",
    initials: "WK",
    color:
      "bg-amber-500/15 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300",
  },
  {
    label: "Sofia Davis",
    name: "Sofia Davis",
    value: "sofia",
    role: "Product Manager",
    initials: "SD",
    color:
      "bg-rose-500/15 text-rose-700 dark:bg-rose-500/20 dark:text-rose-300",
  },
]

//  ------------------------------ | SELECT - WITH USERS | ------------------------------  //

export function SelectWithUsers() {
  const [value, setValue] = useState("olivia")
  const selectedUser = users.find((u) => u.value === value)

  return (
    <Select
      items={users}
      value={value}
      onValueChange={(val) => val && setValue(val)}
    >
      <SelectTrigger className="w-full max-w-72">
        <SelectValue>
          {selectedUser && (
            <span className="flex items-center gap-2">
              <Avatar className="after:border-none">
                <AvatarFallback className={`${selectedUser.color}`}>
                  {selectedUser.initials}
                </AvatarFallback>
              </Avatar>
              <span className="font-medium">{selectedUser.name}</span>
            </span>
          )}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {users.map((user) => (
            <SelectItem key={user.value} value={user.value}>
              <span className="flex items-center gap-2.5 py-0.5">
                <Avatar className="after:border-none">
                  <AvatarFallback className={`${user.color}`}>
                    {user.initials}
                  </AvatarFallback>
                </Avatar>
                <span className="flex flex-col text-left">
                  <span className="text-sm leading-none font-medium">
                    {user.name}
                  </span>
                  <span className="mt-0.5 text-xs text-muted-foreground">
                    {user.role}
                  </span>
                </span>
              </span>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
