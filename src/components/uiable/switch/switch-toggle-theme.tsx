"use client"

import { useState } from "react"
// assets
import { Moon, Sun } from "lucide-react"

// projects
import { cn } from "@/lib/utils"
// shadcn
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

//  ------------------------------ | SWITCH - TOGGLE THEME | ------------------------------  //

export function SwitchToggleTheme() {
  const [darkBetween, setDarkBetween] = useState(true)

  return (
    <div className="flex items-center justify-center gap-2.5 py-4">
      <Button
        variant="link"
        size="icon-xs"
        onClick={() => setDarkBetween(false)}
        className={cn(
          "cursor-pointer transition-colors",
          !darkBetween
            ? "text-amber-500 dark:text-amber-400"
            : "text-muted-foreground"
        )}
        aria-label="Light mode"
      >
        <Sun className="size-4" />
      </Button>
      <Switch
        id="switch-theme-between"
        checked={darkBetween}
        onCheckedChange={setDarkBetween}
        className="!rounded-md [&_[data-slot=switch-thumb]]:!rounded-sm"
      />
      <Button
        variant="link"
        size="icon-xs"
        onClick={() => setDarkBetween(true)}
        className={cn(
          "cursor-pointer transition-colors",
          darkBetween ? "text-foreground" : "text-muted-foreground"
        )}
        aria-label="Dark mode"
      >
        <Moon className="size-4" />
      </Button>
    </div>
  )
}
