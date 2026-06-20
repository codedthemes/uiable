"use client"

import { useCallback, useEffect, useState } from "react"

// shadcn
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

// third party
import { useTheme } from "next-themes"

// project
import { useThemeRadius } from "@/hooks/use-theme-radius"
import { RadiusControl } from "./RadiusControl"
// import { ThemePresetButtons } from "./ThemePresetButtons";
import { ThemePresetStyles } from "./ThemePresetStyles"

// assets
import { CircleCheckBig, Moon, Settings, Sun } from "lucide-react"

// constants
const THEME_PRESET_KEY = "theme-preset"

const themeClasses = [
  "default",
  "ghibli-studio",
  "perplexity",
  "marvel",
  "material",
  "vscode",
  "datta",
  "flat",
  "guru",
  "berry",
  ...Array.from({ length: 17 }, (_, i) => `preset-${i + 2}`),
]

const customPresetIds = Array.from({ length: 17 }, (_, i) => i + 2)

//  ------------------------------ | CUSTOMIZER - THEME TOGGLE | ------------------------------  //

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const { radius, setRadius, syncRadiusFromBody } = useThemeRadius()

  useEffect(() => {
    setTimeout(() => setMounted(true), 0)
  }, [])

  useEffect(() => {
    if (mounted) {
      // Restore saved preset class from localStorage on mount
      const savedPreset = localStorage.getItem(THEME_PRESET_KEY)
      if (savedPreset && savedPreset !== "default") {
        const body = document.body
        themeClasses.forEach((cls) => body.classList.remove(cls))
        body.classList.add(savedPreset)
      }
      // Only sync radius from CSS if there's no saved radius preference
      // (syncRadiusFromBody removes inline --radius which causes a flash)
      if (!localStorage.getItem("theme-radius")) {
        syncRadiusFromBody()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted])

  const toggleBodyClass = useCallback(
    (className: string) => {
      const body = document.body
      const isCurrentlyActive = body.classList.contains(className)

      themeClasses.forEach((cls) => body.classList.remove(cls))

      if (!isCurrentlyActive) {
        body.classList.add(className)
        localStorage.setItem(THEME_PRESET_KEY, className)
      } else {
        localStorage.removeItem(THEME_PRESET_KEY)
      }

      syncRadiusFromBody()
    },
    [syncRadiusFromBody]
  )

  const handleThemeChange = useCallback(
    (newTheme: string, event: React.MouseEvent<HTMLButtonElement>) => {
      if (theme === newTheme) return

      const doc = document as any
      if (
        typeof window === "undefined" ||
        !doc.startViewTransition ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        setTheme(newTheme)
        return
      }

      const x = event.clientX
      const y = event.clientY
      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      )

      const transition = doc.startViewTransition(() => {
        setTheme(newTheme)
      })

      transition.ready.then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${endRadius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 500,
            easing: "ease-in-out",
            pseudoElement: "::view-transition-new(root)",
          }
        )
      })
    },
    [theme, setTheme]
  )

  const handlePresetChange = useCallback(
    (presetClass: string, event: React.MouseEvent<HTMLButtonElement>) => {
      const doc = document as any
      if (
        typeof window === "undefined" ||
        !doc.startViewTransition ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        toggleBodyClass(presetClass)
        return
      }

      const x = event.clientX
      const y = event.clientY
      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      )

      const transition = doc.startViewTransition(() => {
        toggleBodyClass(presetClass)
      })

      transition.ready.then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${endRadius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 500,
            easing: "ease-in-out",
            pseudoElement: "::view-transition-new(root)",
          }
        )
      })
    },
    [toggleBodyClass]
  )

  const resetDefault = useCallback(() => {
    setTheme("light")
    themeClasses.forEach((cls) => document.body.classList.remove(cls))
    document.body.classList.add("preset-7")
    localStorage.removeItem(THEME_PRESET_KEY)
    localStorage.removeItem("theme-radius")
    document.body.style.removeProperty("--radius")
    syncRadiusFromBody()
  }, [setTheme, syncRadiusFromBody])

  if (!mounted) {
    return (
      <div className="h-9 w-9 rounded-lg border border-transparent bg-muted/50" />
    )
  }

  return (
    <>
      <ThemePresetStyles />
      <Sheet modal={true}>
        <SheetTrigger
          render={
            <Button
              variant="ghost"
              size="icon-lg"
              className="flex h-10.5 w-10.5 items-center justify-center rounded-sm text-foreground hover:bg-foreground/10 hover:text-foreground dark:hover:bg-muted"
              aria-label="Toggle Theme"
            >
              <Settings className="size-4.5" />
            </Button>
          }
        >
          Open Sheet
        </SheetTrigger>
        <SheetContent className="data-[side=right]:sm:max-w-80 [&~[data-slot='sheet-overlay']]:hidden">
          <SheetHeader>
            <SheetTitle>Settings</SheetTitle>
          </SheetHeader>
          <div className="no-scrollbar overflow-y-auto px-5">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <h6>Theme Mode</h6>
                <p className="text-foreground">Choose light or dark mode</p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Button
                  onClick={(e) => handleThemeChange("light", e)}
                  className="inline-flex flex-col items-center justify-center gap-1 py-4"
                  aria-label="Toggle Theme"
                  variant={theme === "light" ? "default" : "outline"}
                >
                  <Sun className="size-6" />
                  Light
                </Button>
                <Button
                  onClick={(e) => handleThemeChange("dark", e)}
                  className="inline-flex flex-col items-center justify-center gap-1 py-4"
                  aria-label="Toggle Theme"
                  variant={theme === "dark" ? "default" : "outline"}
                >
                  <Moon className="size-6" />
                  Dark
                </Button>
              </div>
              {/* <Separator />
              <div className="hidden">
                <div className="flex flex-col gap-1">
                  <h6>Theme Preset</h6>
                  <p className="text-foreground text-sm">
                    Choose preset mode for theme
                  </p>
                </div>
                <ThemePresetButtons onSelectPreset={toggleBodyClass} />
                <Separator />
              </div> */}
              <RadiusControl radius={radius} onRadiusChange={setRadius} />
              <Separator />
              <div className="flex flex-col gap-1">
                <h6>Custom Theme</h6>
                <p className="text-foreground">
                  Choose your primary theme color
                </p>
              </div>
              <div className="hidden">
                <div className="group-[.preset-10]/body:flex group-[.preset-11]/body:flex group-[.preset-12]/body:flex group-[.preset-13]/body:flex group-[.preset-14]/body:flex group-[.preset-15]/body:flex group-[.preset-16]/body:flex group-[.preset-17]/body:flex group-[.preset-18]/body:flex group-[.preset-2]/body:flex group-[.preset-3]/body:flex group-[.preset-4]/body:flex group-[.preset-5]/body:flex group-[.preset-6]/body:flex group-[.preset-7]/body:flex group-[.preset-8]/body:flex group-[.preset-9]/body:flex"></div>
              </div>
              <div className="flex flex-wrap gap-2">
                {customPresetIds.map((num) => (
                  <Button
                    variant="link"
                    className="p-0"
                    key={num}
                    data-value="material"
                    onClick={(e) => handlePresetChange(`preset-${num}`, e)}
                  >
                    <div className="flex w-full items-center gap-3">
                      <div className="relative">
                        <span
                          className={`block size-11 rounded-lg bg-primary preset-${num}`}
                        ></span>

                        <div
                          className={`hidden group-[.preset-${num}]/body:flex absolute inset-0 z-10 items-center justify-center text-white`}
                        >
                          <CircleCheckBig className="size-5" />
                        </div>
                      </div>
                    </div>
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <SheetFooter>
            <div className="grid">
              <Button type="button" onClick={resetDefault}>
                Reset Default
              </Button>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  )
}
