"use client"

import { useState } from "react"

// shadcn
import { Button } from "@/components/ui/button"

// project imports
import { cn } from "@/lib/utils"

// assets
import { Moon, Sun1 } from "iconsax-reactjs"

//  ------------------------------ | BUTTON TOGGLE | ------------------------------  //

export default function ButtonToggle() {
  const [isDark, setIsDark] = useState(false)

  return (
    <Button
      className={cn(
        "text-md flex h-10.5 w-10.5 items-center justify-center p-0 leading-6 font-medium",
        isDark
          ? "bg-mist-800/10 text-mist-800 hover:bg-mist-800 hover:text-white dark:bg-mist-300/10 dark:text-mist-300"
          : "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500 hover:text-white"
      )}
      onClick={() => setIsDark((prev) => !prev)}
    >
      {isDark ? <Moon className="size-4.5" /> : <Sun1 className="size-5" />}
    </Button>
  )
}
