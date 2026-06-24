"use client"

import { SyntheticEvent, useState } from "react"
import Link from "next/link"

// shadcn
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// third party
import { toast } from "sonner"

// assets
import {
  ContactLeftGrid,
  ContactRightGrid,
  DarkLogo,
  LightLogo,
} from "@/images/svg/landing"

//  ------------------------------ | CONTACT | ------------------------------  //

export default function Contact({
  group_name = "uiable_landing",
}: {
  group_name?: string
}) {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!email) return

    setLoading(true)
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, group_name }),
      })

      const data = await response.json()

      if (response.ok) {
        toast.success(data.message || "Subscribed successfully!")
        setEmail("")
      } else {
        toast.error(data.error || "Failed to subscribe")
      }
    } catch {
      toast.error("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="mx-auto w-full px-4 py-24 sm:px-8">
      <div className="relative overflow-hidden rounded-lg border border-border bg-slate-950">
        {/* BLUE GLOW */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(95.43deg, var(--primary) 0.51%, transparent 84.32%)",
          }}
        />

        {/* LEFT GRID */}
        <div className="pointer-events-none absolute top-[-20px] left-[-20px] z-20 select-none sm:top-[-30px] sm:left-[-30px] lg:top-[-50px] lg:left-[-50px]">
          <ContactLeftGrid className="h-[180px] w-[180px] sm:h-[260px] sm:w-[260px] lg:h-[372px] lg:w-[372px]" />
        </div>

        {/* RIGHT GRID */}
        <div className="pointer-events-none absolute right-[-20px] bottom-[-20px] z-20 select-none sm:right-[-30px] sm:bottom-[-30px] lg:right-[-50px] lg:bottom-[-50px]">
          <ContactRightGrid className="h-[180px] w-[180px] sm:h-[260px] sm:w-[260px] lg:h-[372px] lg:w-[372px]" />
        </div>

        {/* CONTENT */}
        <div className="relative z-30 mx-auto flex max-w-3xl flex-col items-center gap-10 py-16 text-center">
          {/* LOGO */}
          <div className="flex items-center justify-center">
            <Link href="/">
              <LightLogo
                width={84}
                height={80}
                className="text-white dark:hidden"
              />
              <DarkLogo
                width={84}
                height={80}
                className="hidden text-white dark:block"
              />
            </Link>
          </div>

          {/* HEADING */}
          <div className="flex flex-col items-center gap-3.5">
            <h2 className="text-4xl leading-[100%] font-semibold tracking-[0.1px] text-white">
              Get product updates and new releases
            </h2>

            {/* SUBTEXT */}
            <p className="text-md max-w-lg leading-5 font-normal tracking-[0.1px] text-white">
              Be the first to know about new components, application blocks,
              templates, and upcoming releases.
            </p>
          </div>

          {/* INPUT */}
          <form
            onSubmit={handleSubmit}
            className="flex w-full max-w-xl flex-col gap-3 border border-white/10 bg-white/5 p-2 backdrop-blur sm:flex-row sm:items-center sm:rounded-full sm:p-1.5"
          >
            <Input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="h-12 flex-1 rounded-none border-none bg-transparent px-5 py-3 text-base leading-5 tracking-[0.1px] text-white outline-none placeholder:text-white/50 focus:border-none"
            />

            <Button
              type="submit"
              className="rounded-full"
              size="lg"
              disabled={loading}
            >
              {loading ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
