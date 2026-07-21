"use client"

import { ReactNode, useEffect, useRef } from "react"
import { ReactLenis, useLenis } from "lenis/react"

//  ------------------------------ | COMPONENT - SMOOTH SCROLL | ------------------------------  //

const LENIS_OPTIONS = { lerp: 0.1, duration: 2.2 }

function isScrollLocked() {
  return (
    document.body.hasAttribute("data-scroll-locked") ||
    document.body.style.overflow === "hidden"
  )
}

function ScrollLocker() {
  const lenis = useLenis()
  const lockedRef = useRef(false)

  useEffect(() => {
    if (!lenis) return

    const applyState = () => {
      const locked = isScrollLocked()
      if (locked === lockedRef.current) return
      lockedRef.current = locked
      if (locked) {
        lenis.stop()
      } else {
        lenis.start()
      }
    }

    const observer = new MutationObserver(applyState)

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["data-scroll-locked", "style"],
    })

    applyState()

    return () => observer.disconnect()
  }, [lenis])

  return null
}

export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={LENIS_OPTIONS}>
      <ScrollLocker />
      {children}
    </ReactLenis>
  )
}
