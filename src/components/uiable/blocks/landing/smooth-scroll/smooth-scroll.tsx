"use client"

import { ReactNode } from "react"
import { ReactLenis } from "lenis/react"

//  ------------------------------ | COMPONENT - SMOOTH SCROLL | ------------------------------  //

export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 2.2 }}>
      {children}
    </ReactLenis>
  )
}
