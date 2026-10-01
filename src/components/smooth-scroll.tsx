"use client"

import { ReactNode, useEffect, useRef } from "react"

// third-party
import { ReactLenis, useLenis } from "lenis/react"

//  ------------------------------ | COMPONENT - SMOOTH SCROLL | ------------------------------  //

const LENIS_OPTIONS = { lerp: 0.1, duration: 1.6 }

const OPEN_MODAL_SELECTOR =
  '[role="dialog"][data-open], [role="alertdialog"][data-open]'

function hasOpenModal() {
  return document.querySelector(OPEN_MODAL_SELECTOR) !== null
}

function ScrollLocker() {
  const lenis = useLenis()
  const lockedRef = useRef(false)

  useEffect(() => {
    if (!lenis) return

    const applyState = () => {
      const locked = hasOpenModal()
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
      subtree: true,
      attributes: true,
      attributeFilter: ["data-open", "data-closed"],
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
