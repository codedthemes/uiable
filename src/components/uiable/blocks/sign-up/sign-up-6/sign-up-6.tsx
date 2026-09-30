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

//  ------------------------------ | SIGN UP 6 | ------------------------------  //

export default function SignUp6() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  })

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
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!")
      return
    }
    alert(`Account created for: ${formData.email}`)
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

        <div className="relative z-10 mb-8 text-center">
          <Link href="#" className="group mb-6 inline-flex items-center gap-2">
            <Logo />
          </Link>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-teal-950">
            Create your account
          </h1>
          <p className="mt-2 text-sm font-medium text-slate-500">
            Start managing your finances in minutes
          </p>
        </div>

        <form onSubmit={handleSubmit} className="relative z-10 space-y-4">
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold tracking-wider text-slate-500 uppercase">
              Full Name
            </label>
            <input
              type="text"
              required
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              placeholder="Sarah Mitchell"
              className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 shadow-sm transition-all outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-bold tracking-wider text-slate-500 uppercase">
              Email Address
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="sarah@globaltech.com"
              className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 shadow-sm transition-all outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-bold tracking-wider text-slate-500 uppercase">
              Password
            </label>
            <input
              type="password"
              required
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              placeholder="••••••••"
              className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 shadow-sm transition-all outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-bold tracking-wider text-slate-500 uppercase">
              Confirm Password
            </label>
            <input
              type="password"
              required
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
              placeholder="••••••••"
              className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 shadow-sm transition-all outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10"
            />
          </div>

          <div className="flex items-start gap-2.5 pt-2 pb-3">
            <div className="relative mt-0.5 flex items-center justify-center">
              <input
                type="checkbox"
                required
                checked={formData.agreeTerms}
                onChange={(e) =>
                  setFormData({ ...formData, agreeTerms: e.target.checked })
                }
                className="peer h-4 w-4 cursor-pointer appearance-none rounded-[4px] border border-slate-300 bg-white transition-colors outline-none checked:border-teal-600 checked:bg-teal-600"
              />
              <svg
                className="pointer-events-none absolute h-2.5 w-2.5 text-white opacity-0 peer-checked:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <label className="cursor-pointer text-xs leading-relaxed font-semibold text-slate-600 select-none">
              I agree to the{" "}
              <span className="cursor-pointer text-teal-700 transition-colors hover:text-teal-900">
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="cursor-pointer text-teal-700 transition-colors hover:text-teal-900">
                Privacy Policy
              </span>
            </label>
          </div>

          <Button
            type="submit"
            className="w-full rounded-full bg-teal-700 py-6 text-base font-bold text-white shadow-lg shadow-teal-700/20 transition-all hover:scale-[1.02] hover:bg-teal-800 active:scale-[0.98]"
          >
            Create Account
          </Button>
        </form>

        <div className="relative z-10 my-7 flex items-center justify-center">
          <div className="absolute inset-0 w-full border-t border-slate-200" />
          <span className="relative bg-white/50 px-4 text-[10px] font-bold text-slate-400 uppercase backdrop-blur-md">
            Or continue with
          </span>
        </div>

        <div className="relative z-10 grid grid-cols-2 gap-4">
          <button
            onClick={() => alert("SSO Google sign-up initiated")}
            className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white py-3 text-xs font-bold text-slate-700 shadow-sm transition-all hover:border-slate-300 hover:bg-slate-50 hover:shadow"
          >
            <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            Google
          </button>
          <button
            onClick={() => alert("SSO GitHub sign-up initiated")}
            className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white py-3 text-xs font-bold text-slate-700 shadow-sm transition-all hover:border-slate-300 hover:bg-slate-50 hover:shadow"
          >
            <svg
              className="h-4 w-4 shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"
              />
            </svg>
            GitHub
          </button>
        </div>

        <div className="relative z-10 mt-8 text-center">
          <p className="text-sm text-slate-500">
            Already have an account?{" "}
            <Link
              href="#"
              className="font-bold text-teal-700 transition-colors hover:text-teal-900"
            >
              Sign in
            </Link>
          </p>
        </div>

        <div className="relative z-10 mt-4 text-center">
          <Link
            href="#"
            className="text-sm font-semibold text-slate-500 transition-colors hover:text-teal-700"
          >
            ← Back to Home
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
