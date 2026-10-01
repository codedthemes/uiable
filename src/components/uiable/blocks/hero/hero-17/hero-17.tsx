"use client"

import { useRef } from "react"

// third-party
import { motion, useMotionValue, useMotionTemplate } from "framer-motion"

// project-imports
import HeroBackground from "@/components/uiable/blocks/landing/components/HeroBackground"

const fadeInUp: any = {
  hidden: { opacity: 0, y: 25 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
}

export default function Hero17() {
  const heroRef = useRef<HTMLElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!heroRef.current) return
    const { left, top } = heroRef.current.getBoundingClientRect()
    mouseX.set(e.clientX - left)
    mouseY.set(e.clientY - top)
  }

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden px-4 pt-32 pb-16 text-center md:px-8 md:pt-38 md:pb-20"
    >
      <HeroBackground />
      {/* Dynamic Glow following mouse */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(45, 212, 191, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div className="pointer-events-none absolute top-10 left-10 -z-10 h-72 w-72 rounded-full bg-teal-100/40 blur-[100px]" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        custom={0}
        className="relative z-10 container mx-auto"
      >
        <span className="mb-6 inline-block rounded-full border border-teal-100/50 bg-teal-50/80 px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-teal-700 uppercase shadow-sm">
          Our Capabilities
        </span>
        <h1 className="text-4xl leading-[1.1] font-extrabold tracking-tight text-teal-950 sm:text-5xl md:text-6xl">
          A complete toolkit for{" "}
          <span className="bg-gradient-to-r from-teal-600 to-emerald-500 bg-clip-text text-transparent">
            digital finance
          </span>
        </h1>
        <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-slate-600 sm:text-xl">
          Power payments, authorize card transactions, sync internal ledger
          accounts, and manage automated currency conversion out of the box.
        </p>
      </motion.div>
    </section>
  )
}
