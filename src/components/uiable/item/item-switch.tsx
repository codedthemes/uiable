"use client"

import { useState } from "react"
// assets
import { Bell, Globe, Lock, Moon } from "lucide-react"

// shadcn
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { Switch } from "@/components/ui/switch"

const settings = [
  {
    id: "dark-mode",
    icon: Moon,
    iconColor: "text-violet-500",
    title: "Dark Mode",
    description: "Switch the interface to a darker theme.",
    defaultChecked: false,
  },
  {
    id: "notifications",
    icon: Bell,
    iconColor: "text-blue-500",
    title: "Push Notifications",
    description: "Receive alerts for messages and updates.",
    defaultChecked: true,
  },
  {
    id: "privacy",
    icon: Lock,
    iconColor: "text-emerald-500",
    title: "Private Profile",
    description: "Only approved followers can see your posts.",
    defaultChecked: true,
  },
  {
    id: "language",
    icon: Globe,
    iconColor: "text-orange-500",
    title: "Auto-translate",
    description: "Automatically translate content to your language.",
    defaultChecked: false,
  },
]

//  ------------------------------ | ITEM - SWITCH | ------------------------------  //

export function ItemSwitch() {
  const [checked, setChecked] = useState<Record<string, boolean>>(
    Object.fromEntries(settings.map((s) => [s.id, s.defaultChecked]))
  )

  return (
    <ItemGroup className="w-full max-w-md">
      {settings.map(({ id, icon: Icon, iconColor, title, description }) => (
        <Item key={id} variant="outline">
          <ItemMedia variant="icon">
            <Icon className={`size-5 ${iconColor}`} />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>{title}</ItemTitle>
            <ItemDescription>{description}</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Switch
              id={`switch-${id}`}
              checked={checked[id]}
              onCheckedChange={(val) =>
                setChecked((prev) => ({ ...prev, [id]: val }))
              }
            />
          </ItemActions>
        </Item>
      ))}
    </ItemGroup>
  )
}
