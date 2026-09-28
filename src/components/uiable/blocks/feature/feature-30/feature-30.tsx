"use client"

import { MouseEvent as ReactMouseEvent } from "react"

// shadcn
import { Card } from "@/components/ui/card"

// third-party
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"

// assets
import { CreditCard, Bot, ArrowUpRight } from "lucide-react"

function SpotlightCard({
  children,
  hoverBorderClass,
  glowColor,
  borderGlowColor,
}: {
  children: React.ReactNode
  hoverBorderClass: string
  glowColor: string
  borderGlowColor: string
}) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: ReactMouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <Card
      className={`group relative flex h-full flex-col overflow-hidden border-white/10 bg-[#0B0F19] p-8 transition-colors ${hoverBorderClass}`}
      onMouseMove={handleMouseMove}
    >
      {/* Subtle Inner Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px z-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              ${glowColor},
              transparent 80%
            )
          `,
        }}
      />

      {/* Shine Border Glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={
          {
            background: useMotionTemplate`
            radial-gradient(
              250px circle at ${mouseX}px ${mouseY}px,
              ${borderGlowColor},
              transparent 100%
            )
          `,
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            padding: "2px",
          } as any
        }
      />
      {children}
    </Card>
  )
}

export default function Feature30() {
  return (
    <section className="dark relative bg-slate-950 py-24 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Developer tools that matter
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Card 1: Intuitive Payment Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SpotlightCard
              hoverBorderClass="hover:border-red-500/50"
              glowColor="rgba(239, 68, 68, 0.2)"
              borderGlowColor="rgba(239, 68, 68, 1)"
            >
              <div className="relative z-10 mb-8">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/10">
                  <CreditCard className="h-5 w-5 text-red-400" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">
                  MCP Support
                </h3>
                <p className="text-sm text-gray-400">
                  Connect to any MCP server and extend your AI assistant with
                  your data and tools.
                </p>
              </div>

              {/* MCP Terminal Mockup */}
              <div className="relative z-10 mt-auto rounded-xl border border-white/5 bg-black/50 p-4 font-mono text-xs text-gray-400">
                <div>
                  $ <span className="text-purple-400">npm</span>{" "}
                  <span className="text-blue-300">mcp connect database</span>
                </div>
                <div className="mt-2 text-green-400">
                  ✓ Connected to PostgreSQL
                </div>
                <div className="mt-1 text-green-400">
                  ✓ Tools available (12)
                </div>
                <div className="mt-2 flex items-center gap-2 text-green-400">
                  <span className="h-2 w-2 rounded-full bg-green-500"></span>{" "}
                  Connected
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Card 2: MCP Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <SpotlightCard
              hoverBorderClass="hover:border-cyan-500/50"
              glowColor="rgba(6, 182, 212, 0.2)"
              borderGlowColor="rgba(6, 182, 212, 1)"
            >
              <div className="relative z-10 mb-8">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10">
                  <Bot className="h-5 w-5 text-cyan-400" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">
                  Git Integration
                </h3>
                <p className="text-sm text-gray-400">
                  Push with your repos directly. Commit, review, and push with
                  confidence.
                </p>
              </div>

              {/* Commit Mockup */}
              <div className="relative z-10 mt-auto rounded-xl border border-white/5 bg-black/50 p-4">
                <div className="mb-3 flex items-center gap-3">
                  <div className="text-sm font-medium text-white">Changes</div>
                </div>
                <div className="mb-3 text-xs text-gray-400">
                  2 files changed
                </div>
                <div className="mb-1 flex justify-between font-mono text-xs text-gray-300">
                  <span>src/utils/api.ts</span>
                  <span className="text-green-400">modified</span>
                </div>
                <div className="mb-3 flex justify-between font-mono text-xs text-gray-300">
                  <span>src/components/Card.tsx</span>
                  <span className="text-green-400">added</span>
                </div>
                <button className="w-full rounded-md bg-purple-600 py-2 text-sm font-medium text-white transition-colors hover:bg-purple-700">
                  Commit & Push
                </button>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Card 3: Push your code */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <SpotlightCard
              hoverBorderClass="hover:border-green-500/50"
              glowColor="rgba(34, 197, 94, 0.2)"
              borderGlowColor="rgba(34, 197, 94, 1)"
            >
              <div className="relative z-10 mb-8">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl border border-green-500/20 bg-green-500/10">
                  <ArrowUpRight className="h-5 w-5 text-green-400" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">
                  Secure by Design
                </h3>
                <p className="text-sm text-gray-400">
                  Enterprise-grade security to keep your code and data
                  protected.
                </p>
              </div>

              {/* Security Mockup */}
              <div className="relative z-10 mt-auto flex flex-col gap-2 rounded-xl border border-white/5 bg-black/50 p-4">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <span className="text-green-400">✓</span> SOC 2 Type II
                  Compliant
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <span className="text-green-400">✓</span> End-to-end
                  encryption
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <span className="text-green-400">✓</span> Role-based access
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <span className="text-green-400">✓</span> SSO & 2FA
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
