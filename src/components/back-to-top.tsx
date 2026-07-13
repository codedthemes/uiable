"use client"

import { useCallback, useEffect, useRef, useState } from "react"

// shadcn
import { Button } from "@/components/ui/button"

// project imports
import { cn } from "@/lib/utils"

// assets
import { ArrowUp } from "lucide-react"

const SCROLL_THRESHOLD = 300

//  ------------------------------ | BACK TO TOP | ------------------------------  //

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const tickingRef = useRef(false)

  useEffect(() => {
    function handleScroll(event: Event) {
      if (tickingRef.current) return
      tickingRef.current = true

      requestAnimationFrame(() => {
        const target = event.target
        const scrollTop =
          target instanceof HTMLElement && target.id === "main-scroll-area"
            ? target.scrollTop
            : window.scrollY

        setIsVisible((prev) => {
          const next = scrollTop > SCROLL_THRESHOLD
          return prev === next ? prev : next
        })

        tickingRef.current = false
      })
    }

    window.addEventListener("scroll", handleScroll, {
      capture: true,
      passive: true,
    })

    return () => {
      window.removeEventListener("scroll", handleScroll, { capture: true })
    }
  }, [])

  const scrollToTop = useCallback(() => {
    const scrollArea = document.getElementById("main-scroll-area")
    if (scrollArea) {
      scrollArea.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }, [])

  return (
    <Button
      onClick={scrollToTop}
      className={cn(
        "fixed right-10 bottom-6 z-50 h-12 w-12 rounded-full shadow-lg transition-all duration-300",
        "bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90",
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-10 opacity-0"
      )}
    >
      <ArrowUp className="size-6.5" />
      <span className="sr-only">Scroll to top</span>
    </Button>
  )
}
