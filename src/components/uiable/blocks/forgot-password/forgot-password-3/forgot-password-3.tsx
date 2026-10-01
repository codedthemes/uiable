"use client"

import { useState, useRef } from "react"

// next
import Link from "next/link"

// shadcn
import { Button } from "@/components/ui/button"

// third-party
import { motion, useMotionValue, useMotionTemplate } from "framer-motion"

// project-imports
import Logo from "@/images/landings/LightLogo"

// assets
import { Mail } from "lucide-react"

//  ------------------------------ | FORGOT PASSWORD 3 | ------------------------------  //

export default function ForgotPassword3() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const formRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!formRef.current) return
    const { left, top } = formRef.current.getBoundingClientRect()
    mouseX.set(e.clientX - left)
    mouseY.set(e.clientY - top)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
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

        <div className="relative z-10 mb-10 text-center">
          <Link href="#" className="group mb-6 inline-flex items-center gap-2">
            <Logo />
          </Link>

          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-teal-100/50 bg-gradient-to-br from-teal-50 to-emerald-50 shadow-inner">
            <Mail className="h-7 w-7 text-teal-600" />
          </div>

          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-teal-950">
            Reset your password
          </h1>
          <p className="mx-auto mt-2 max-w-[280px] text-sm font-medium text-slate-500">
            Enter your email and we&apos;ll send you a verification code
          </p>
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold tracking-wider text-slate-500 uppercase">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="sarah@globaltech.com"
                className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 shadow-sm transition-all outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10"
              />
            </div>

            <Button
              type="submit"
              className="w-full rounded-full bg-teal-700 py-6 text-base font-bold text-white shadow-lg shadow-teal-700/20 transition-all hover:scale-[1.02] hover:bg-teal-800 active:scale-[0.98]"
            >
              Send Verification Code
            </Button>
          </form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              type: "spring" as const,
              stiffness: 120,
              damping: 20,
            }}
            className="relative z-10 text-center"
          >
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-100">
              <svg
                className="h-6 w-6 text-teal-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <p className="text-sm font-semibold text-teal-800">Code sent!</p>
            <p className="mt-1 text-xs text-slate-500">
              Redirecting to verification...
            </p>
          </motion.div>
        )}

        <div className="relative z-10 mt-10 text-center">
          <Link
            href="#"
            className="text-sm font-semibold text-slate-500 transition-colors hover:text-teal-700"
          >
            ← Back to Sign In
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
