"use client"

import { useState, useRef, useEffect, useCallback } from "react"

// next
import Link from "next/link"

// shadcn
import { Button } from "@/components/ui/button"

// third-party
import { motion, useMotionValue, useMotionTemplate } from "framer-motion"

// project-imports
import Logo from "@/images/landings/LightLogo"

// assets
import { ShieldCheck } from "lucide-react"

//  ------------------------------ | CODE VERIFICATION 5 | ------------------------------  //

export default function CodeVerification5() {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""))
  const [countdown, setCountdown] = useState(60)
  const [canResend, setCanResend] = useState(false)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  const formRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!formRef.current) return
    const { left, top } = formRef.current.getBoundingClientRect()
    mouseX.set(e.clientX - left)
    mouseY.set(e.clientY - top)
  }

  useEffect(() => {
    if (countdown <= 0) {
      const t = setTimeout(() => setCanResend(true), 0)
      return () => clearTimeout(t)
    }
    const timer = setTimeout(() => setCountdown(countdown - 1), 1000)
    return () => clearTimeout(timer)
  }, [countdown])

  const handleChange = useCallback(
    (index: number, value: string) => {
      if (value.length > 1) {
        // Handle paste
        const digits = value.replace(/\D/g, "").slice(0, 6).split("")
        const newOtp = [...otp]
        digits.forEach((digit, i) => {
          if (index + i < 6) newOtp[index + i] = digit
        })
        setOtp(newOtp)
        const nextIndex = Math.min(index + digits.length, 5)
        inputRefs.current[nextIndex]?.focus()
        return
      }

      if (value && !/^\d$/.test(value)) return

      const newOtp = [...otp]
      newOtp[index] = value
      setOtp(newOtp)

      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus()
      }
    },
    [otp]
  )

  const handleKeyDown = useCallback(
    (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Backspace" && !otp[index] && index > 0) {
        inputRefs.current[index - 1]?.focus()
      }
    },
    [otp]
  )

  const handleResend = () => {
    setCountdown(60)
    setCanResend(false)
    alert("Verification code resent!")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const code = otp.join("")
    if (code.length !== 6) {
      alert("Please enter the complete 6-digit code")
      return
    }
  }

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60)
    const s = seconds % 60
    return `${m}:${s.toString().padStart(2, "0")}`
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
            <ShieldCheck className="h-7 w-7 text-teal-600" />
          </div>

          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-teal-950">
            Enter verification code
          </h1>
          <p className="mx-auto mt-2 max-w-[280px] text-sm font-medium text-slate-500">
            We sent a 6-digit code to your email address
          </p>
        </div>

        <form onSubmit={handleSubmit} className="relative z-10">
          <div className="mb-8 flex justify-center gap-2.5 sm:gap-3">
            {otp.map((digit, index) => (
              <motion.input
                key={index}
                ref={(el) => {
                  inputRefs.current[index] = el
                }}
                type="text"
                inputMode="numeric"
                maxLength={6}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onFocus={(e) => e.target.select()}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.05,
                  type: "spring" as const,
                  stiffness: 200,
                  damping: 20,
                }}
                className={`h-14 w-12 rounded-xl border-2 bg-white/80 text-center text-xl font-extrabold text-teal-950 shadow-sm transition-all outline-none sm:h-15 sm:w-13 ${
                  digit
                    ? "border-teal-500 ring-4 ring-teal-500/10"
                    : "border-slate-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10"
                }`}
              />
            ))}
          </div>

          <Button
            type="submit"
            className="w-full rounded-full bg-teal-700 py-6 text-base font-bold text-white shadow-lg shadow-teal-700/20 transition-all hover:scale-[1.02] hover:bg-teal-800 active:scale-[0.98]"
          >
            Verify Code
          </Button>
        </form>

        <div className="relative z-10 mt-8 text-center">
          {canResend ? (
            <button
              onClick={handleResend}
              className="text-sm font-bold text-teal-700 transition-colors hover:text-teal-900"
            >
              Resend verification code
            </button>
          ) : (
            <p className="text-sm text-slate-500">
              Resend code in{" "}
              <span className="font-bold text-teal-700 tabular-nums">
                {formatTime(countdown)}
              </span>
            </p>
          )}
        </div>

        <div className="relative z-10 mt-6 text-center">
          <Link
            href="#"
            className="text-sm font-semibold text-slate-500 transition-colors hover:text-teal-700"
          >
            ← Back to Forgot Password
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
