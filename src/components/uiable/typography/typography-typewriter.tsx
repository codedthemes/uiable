"use client"

// shadcn
import { Typewriter } from "@/components/ui/typewriter"

//  ------------------------------ | TYPOGRAPHY - TYPEWRITER | ------------------------------  //

export function TypographyTypewriter() {
  return (
    <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
      <Typewriter
        text="Craft stunning user interfaces with Shadcn and Framer Motion."
        speed={45}
        delay={300}
        cursorStyle="bar"
        hideCursorOnComplete={false}
      />
    </h2>
  )
}
