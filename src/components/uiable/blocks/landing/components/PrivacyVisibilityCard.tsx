"use client"

import { ReactNode, useState } from "react"
// assets
import { Globe, Lock, Users } from "lucide-react"

// shadcn
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// constants
const visibilityOptions = [
  { value: "public", label: "Public", Icon: Globe },
  { value: "private", label: "Private", Icon: Lock },
  { value: "friends", label: "Friends Only", Icon: Users },
] as const

const visibilityItems: Record<string, ReactNode> = {
  public: (
    <span className="flex items-center gap-2">
      <Globe className="size-4 text-muted-foreground" />
      Public
    </span>
  ),
  private: (
    <span className="flex items-center gap-2">
      <Lock className="size-4 text-muted-foreground" />
      Private
    </span>
  ),
  friends: (
    <span className="flex items-center gap-2">
      <Users className="size-4 text-muted-foreground" />
      Friends Only
    </span>
  ),
}

const preferencesConfig = [
  { id: "email", label: "Show email", weight: "font-medium" },
  { id: "phone", label: "Show Phone", weight: "font-semibold" },
  { id: "location", label: "Show location", weight: "font-semibold" },
  {
    id: "activityStatus",
    label: "Show activity status",
    weight: "font-semibold",
  },
] as const

type PreferenceKey = (typeof preferencesConfig)[number]["id"]

//  ------------------------------ | BLOCK - PRIVACY VISIBILITY CARD | ------------------------------  //

export default function PrivacyVisibilityCard() {
  const [visibility, setVisibility] = useState("public")
  const [preferences, setPreferences] = useState<
    Record<PreferenceKey, boolean>
  >({
    email: false,
    phone: true,
    location: true,
    activityStatus: false,
  })

  const togglePreference = (key: PreferenceKey) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <div className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6">
      <div className="flex flex-col gap-1">
        <p className="text-base font-semibold text-foreground">Privacy</p>
        <p className="text-xs text-muted-foreground">Profile visibility</p>
      </div>

      <Select
        value={visibility}
        onValueChange={(val) => {
          if (val) setVisibility(val)
        }}
        items={visibilityItems}
      >
        <SelectTrigger className="h-auto w-full rounded-lg bg-card px-3.5 py-2.5 text-xs font-semibold">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {visibilityOptions.map(({ value, label, Icon }) => (
            <SelectItem key={value} value={value}>
              <Icon className="size-4 text-muted-foreground" />
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <div className="mt-2 flex flex-col gap-3.5">
        {preferencesConfig.map(({ id, label, weight }) => {
          const checked = preferences[id]
          return (
            <label
              key={id}
              className={`flex cursor-pointer items-center gap-3 text-xs transition-colors ${weight} ${
                checked
                  ? "text-foreground"
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              <Checkbox
                checked={checked}
                onCheckedChange={() => togglePreference(id)}
              />
              {label}
            </label>
          )
        })}
      </div>
    </div>
  )
}
