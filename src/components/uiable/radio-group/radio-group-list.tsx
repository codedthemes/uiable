"use client"

import { useState } from "react"

// shadcn
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

// assets
import { Globe, Lock, Users } from "lucide-react"

//  ------------------------------ | RADIO GROUP - LIST | ------------------------------  //

// constants
const options = [
  {
    value: "public",
    icon: Globe,
    label: "Public",
    description: "Anyone on the internet can see this.",
  },
  {
    value: "team",
    icon: Users,
    label: "Team Only",
    description: "Only members of your team can access.",
  },
  {
    value: "private",
    icon: Lock,
    label: "Private",
    description: "Only you can see this content.",
  },
]

//  ------------------------------ | RADIO GROUP - LIST | ------------------------------  //

export function RadioGroupList() {
  const [value, setValue] = useState("team")

  return (
    <RadioGroup
      value={value}
      onValueChange={setValue}
      className="w-full max-w-sm gap-0 overflow-hidden rounded-xl border border-border bg-card"
    >
      {options.map((opt, idx) => {
        const Icon = opt.icon
        const isSelected = value === opt.value
        return (
          <label
            key={opt.value}
            htmlFor={`list-${opt.value}`}
            className={`flex cursor-pointer items-center gap-4 px-5 py-4 transition-colors ${
              idx !== options.length - 1 ? "border-b border-border" : ""
            } ${isSelected ? "bg-primary/5" : "hover:bg-muted/40"}`}
          >
            <Avatar className="size-9 rounded-lg after:rounded-lg after:border-0">
              <AvatarFallback
                className={`rounded-lg transition-colors ${
                  isSelected
                    ? "bg-primary/10 text-primary"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                <Icon className="size-4" />
              </AvatarFallback>
            </Avatar>
            <span className="flex flex-1 flex-col gap-0.5">
              <span className="text-sm leading-none font-medium">
                {opt.label}
              </span>
              <span className="text-xs text-muted-foreground">
                {opt.description}
              </span>
            </span>
            <RadioGroupItem value={opt.value} id={`list-${opt.value}`} />
          </label>
        )
      })}
    </RadioGroup>
  )
}
