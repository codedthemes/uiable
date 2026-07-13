"use client"

import { useState } from "react"

// shadcn
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

// assets
import { Cloud, HardDrive, Server } from "lucide-react"

// constants
const plans = [
  {
    value: "local",
    icon: HardDrive,
    label: "Local",
    description: "Stored on your device",
    badge: "Free",
  },
  {
    value: "cloud",
    icon: Cloud,
    label: "Cloud",
    description: "Synced across devices",
    badge: "$5/mo",
  },
  {
    value: "server",
    icon: Server,
    label: "Server",
    description: "Dedicated infrastructure",
    badge: "$20/mo",
  },
]

//  ------------------------------ | RADIO GROUP - BOX | ------------------------------  //

export function RadioGroupBox() {
  const [value, setValue] = useState("cloud")

  return (
    <RadioGroup
      value={value}
      onValueChange={setValue}
      className="grid grid-cols-1 gap-3 md:grid-cols-3"
    >
      {plans.map((plan) => {
        const Icon = plan.icon
        const isSelected = value === plan.value
        return (
          <label
            key={plan.value}
            htmlFor={`box-${plan.value}`}
            className={`relative flex cursor-pointer flex-col gap-3 rounded-xl border p-4 transition-all duration-150 ${
              isSelected
                ? "border-primary bg-primary/5 shadow-sm ring-1 ring-primary"
                : "border-border bg-card hover:border-primary/40 hover:bg-muted/30"
            }`}
          >
            <div className="flex items-center justify-between">
              <Avatar className="size-8 rounded-lg after:rounded-lg after:border-0">
                <AvatarFallback
                  className={`rounded-lg transition-colors ${
                    isSelected
                      ? "bg-primary/15 text-primary"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  <Icon className="size-4" />
                </AvatarFallback>
              </Avatar>
              <RadioGroupItem
                value={plan.value}
                id={`box-${plan.value}`}
                className="mt-0.5"
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm leading-none font-semibold">
                {plan.label}
              </span>
              <span className="text-xs text-muted-foreground">
                {plan.description}
              </span>
            </div>
            <Badge
              variant="secondary"
              className={
                isSelected
                  ? "bg-primary/10 text-primary"
                  : "bg-muted text-muted-foreground"
              }
            >
              {plan.badge}
            </Badge>
          </label>
        )
      })}
    </RadioGroup>
  )
}
