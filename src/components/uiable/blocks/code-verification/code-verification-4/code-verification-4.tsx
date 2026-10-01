"use client"

import { useRef } from "react"

// next
import Link from "next/link"

// shadcn
import { Button } from "@/components/ui/button"

// third-party
import { motion, useMotionValue, useMotionTemplate } from "framer-motion"

// project-imports
import Logo from "@/images/landings/LightLogo"

//  ------------------------------ | CODE VERIFICATION 4 | ------------------------------  //

export default function CodeVerification4() {
  const formRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!formRef.current) return
    const { left, top } = formRef.current.getBoundingClientRect()
    mouseX.set(e.clientX - left)
    mouseY.set(e.clientY - top)
  }

  return (
    <div
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-slate-50/50 p-4 md:p-8"
      onMouseMove={handleMouseMove}
      ref={formRef}
    >
      <div className="pointer-events-none absolute top-[-20%] left-[-20%] h-[600px] w-[600px] rounded-full bg-teal-200/40 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-20%] bottom-[-20%] h-[600px] w-[600px] rounded-full bg-emerald-200/40 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.6,
          type: "spring" as const,
          stiffness: 100,
          damping: 20,
        }}
        className="relative z-10 w-full max-w-[440px] rounded-[2.5rem] border border-white bg-white/70 p-8 shadow-2xl shadow-teal-900/10 backdrop-blur-xl md:p-10"
      >
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-[2.5rem] opacity-30"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                300px circle at ${mouseX}px ${mouseY}px,
                rgba(20, 184, 166, 0.15),
                transparent 80%
              )
            `,
          }}
        />

        <div className="relative z-10 text-center">
          <Link href="#" className="group mb-8 inline-flex items-center gap-2">
            <Logo />
          </Link>

          {/* Animated Success Checkmark */}
          <div className="relative mx-auto mb-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.2,
                type: "spring" as const,
                stiffness: 200,
                damping: 15,
              }}
              className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 shadow-xl shadow-teal-500/30"
            >
              <motion.svg
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
                className="h-10 w-10 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </motion.svg>
            </motion.div>

            {/* Decorative rings */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.3, opacity: 0 }}
              transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
              className="absolute inset-0 mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-teal-400/40"
            />
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.6, opacity: 0 }}
              transition={{ delay: 0.5, duration: 1.4, ease: "easeOut" }}
              className="absolute inset-0 mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-teal-300/20"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-teal-950">
              Email Verified!
            </h1>
            <p className="mx-auto mt-3 max-w-[300px] text-sm leading-relaxed font-medium text-slate-500">
              Your email has been successfully confirmed. You can now access all
              features of your account.
            </p>
          </motion.div>

          {/* Email confirmation badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.4 }}
            className="mx-auto mt-6 inline-flex items-center gap-2 rounded-full border border-teal-100/50 bg-teal-50/80 px-5 py-2.5"
          >
            <svg
              className="h-4 w-4 text-teal-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span className="text-xs font-bold tracking-wide text-teal-700">
              s***@globaltech.com
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.4 }}
            className="mt-10 space-y-4"
          >
            <Link href="#">
              <Button className="w-full rounded-full bg-teal-700 py-6 text-base font-bold text-white shadow-lg shadow-teal-700/20 transition-all hover:scale-[1.02] hover:bg-teal-800 active:scale-[0.98]">
                Continue to Sign In
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.4 }}
            className="mt-6 text-center"
          >
            <Link
              href="#"
              className="text-sm font-semibold text-slate-500 transition-colors hover:text-teal-700"
            >
              ← Back to Home
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
