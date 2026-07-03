"use client"

import { SyntheticEvent, useState } from "react"

// third party
import { toast } from "sonner"

// shadcn
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// assets
import { LightFav } from "@/images/brand"
import { ContactLeftGrid, ContactRightGrid } from "@/images/svg/landing"

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
        <div className="pointer-events-none absolute -top-5 -left-5 z-20 select-none sm:-top-7.5 sm:-left-7.5 lg:-top-12.5 lg:-left-12.5">
          <ContactLeftGrid className="h-45 w-45 sm:h-65 sm:w-65 lg:h-93 lg:w-93" />
        </div>

        {/* RIGHT GRID */}
        <div className="pointer-events-none absolute -right-5 -bottom-5 z-20 select-none sm:-right-7.5 sm:-bottom-7.5 lg:-right-12.5 lg:-bottom-12.5">
          <ContactRightGrid className="h-45 w-45 sm:h-65 sm:w-65 lg:h-93 lg:w-93" />
        </div>

        {/* CONTENT */}
        <div className="relative z-30 mx-auto flex max-w-3xl flex-col items-center gap-10 py-16 text-center">
          {/* LOGO */}
          <div className="flex items-center justify-center">
            <LightFav width={84} height={80} />
          </div>

          {/* HEADING */}
          <div className="flex flex-col items-center gap-3.5">
            <h2 className="text-4xl leading-none font-semibold text-white">
              Get product updates and new releases
            </h2>

            {/* SUBTEXT */}
            <p className="max-w-lg text-base leading-5 font-normal text-white">
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
              className="h-12 flex-1 rounded-none border-none bg-transparent px-5 py-3 text-base leading-5 text-white outline-none placeholder:text-white/50 focus:border-none"
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
