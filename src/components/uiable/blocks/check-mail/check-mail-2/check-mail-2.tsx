"use client"

import { useRef } from "react"

// next
import Link from "next/link"

// shadcn
import { Button } from "@/components/ui/button"

// third-party
import { motion, useMotionValue, useMotionTemplate } from "framer-motion"

// assets
import { MailCheck } from "lucide-react"

//  ------------------------------ | CHECK MAIL 2 | ------------------------------  //

export default function CheckMail2() {
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
      className="dark relative z-20 flex min-h-screen w-full items-center justify-center overflow-hidden bg-slate-950 p-4 text-white md:p-8"
      onMouseMove={handleMouseMove}
      ref={formRef}
    >
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.6,
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
        className="relative z-10 flex w-full max-w-[440px] flex-col items-center overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0B0F19]/80 p-8 text-center shadow-2xl backdrop-blur-xl md:p-10"
      >
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                300px circle at ${mouseX}px ${mouseY}px,
                rgba(56, 189, 248, 0.15),
                transparent 80%
              )
            `,
          }}
        />

        <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10">
          <MailCheck className="h-8 w-8 text-cyan-400" />
        </div>

        <div className="relative z-10 mb-8 text-center">
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-white">
            Check your email
          </h1>
          <p className="mx-auto mt-2 max-w-[280px] text-sm font-medium text-gray-400">
            We've sent a temporary login link. Please check your inbox and click
            the link to continue.
          </p>
        </div>

        <div className="relative z-10 w-full">
          <Link href="#" className="w-full">
            <Button className="w-full rounded-full bg-cyan-600 py-6 text-base font-bold text-white transition-all hover:scale-[1.02] hover:bg-cyan-500 active:scale-[0.98]">
              Back to Login
            </Button>
          </Link>
        </div>

        <div className="relative z-10 mt-6 text-center">
          <p className="text-xs font-semibold text-gray-400">
            Didn't receive the email?{" "}
            <button className="text-cyan-400 transition-colors hover:text-cyan-300">
              Click to resend
            </button>
          </p>
        </div>
      </motion.div>
    </div>
  )
}
