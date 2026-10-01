"use client"

import { useState } from "react"

// shadcn
import { Badge } from "@/components/ui/badge"

// third-party
import { motion, AnimatePresence } from "framer-motion"

// assets
import { CheckCircle2, ChevronRight } from "lucide-react"

const services = [
  {
    number: "01",
    title: "Tech Founder Liquidity & Core Portfolio Management",
    category: "Exit & Public Markets",
    description:
      "I structure post-acquisition liquidity into a multi-asset compound engine across global index equities, private credit, and tactical cash reserves to sustain generational prosperity.",
    highlights: [
      "Post-Exit Liquidity Blueprint",
      "Thematic Equity Models",
      "Quarterly Rebalancing",
    ],
  },
  {
    number: "02",
    title: "Executive Stock Option Hedging & Downside Collars",
    category: "Risk & Hedging",
    description:
      "I design systematic derivative overlays, options collars, and non-correlated asset buffers to protect concentrated equity positions without triggering massive taxable sales.",
    highlights: [
      "Concentrated Stock Hedging",
      "83(b) Optimization",
      "Downside Collars",
    ],
  },
  {
    number: "03",
    title: "Automated Tax-Loss Harvesting & Asset Placement",
    category: "Tax Efficiency",
    description:
      "I execute continuous year-round algorithmic tax harvesting and strategic account placement (taxable vs. tax-deferred vs. trust) to maximize net kept returns.",
    highlights: [
      "Year-Round Harvesting",
      "Entity Structuring",
      "Retained Alpha",
    ],
  },
  {
    number: "04",
    title: "Pre-IPO Allocations & Private Venture Syndicates",
    category: "Alternative Markets",
    description:
      "I grant clients direct co-investment allocations into vetted Series B+ tech leaders, pre-IPO secondaries, and institutional private debt funds alongside top VCs.",
    highlights: ["Pre-IPO Access", "Direct Venture Flow", "Private Debt Yield"],
  },
  {
    number: "05",
    title: "Family Office Governance & Succession Blueprints",
    category: "Estate & Legacy",
    description:
      "I advise families on intergenerational trust architecture, family constitutions, philanthropic foundations, and next-gen financial literacy governance.",
    highlights: [
      "Irrevocable Trusts",
      "Next-Gen Mentorship",
      "Legacy Governance",
    ],
  },
]

export default function Feature27() {
  const [activeIdx, setActiveIdx] = useState<number | null>(0)

  return (
    <section
      id="services"
      className="dark relative overflow-hidden bg-[#070b09] py-10 text-white sm:py-16 lg:py-24"
    >
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            <Badge variant="default" className="mb-4">
              My Advisory Disciplines & Experience
            </Badge>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              How I Structure &{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                Advise Client Capital
              </span>
            </h2>
            <p className="text-base text-zinc-400 sm:text-lg">
              Explore the five core strategic areas I specialize in for
              founders, executives, and family offices.
            </p>
          </div>

          <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-[#0c1410] px-4 py-2 text-xs text-zinc-400 md:flex">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            5 Strategic Pillars
          </div>
        </motion.div>

        {/* Services List Rows with Staggered Scroll Reveal */}
        <div className="space-y-4">
          {services.map((service, index) => {
            const isExpanded = activeIdx === index

            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0.08 * index }}
                onClick={() => setActiveIdx(isExpanded ? null : index)}
                className={`group cursor-pointer rounded-2xl border p-6 transition-all duration-300 sm:p-8 ${
                  isExpanded
                    ? "border-emerald-500/40 bg-[#0c1712]/95 shadow-[0_0_35px_rgba(16,185,129,0.14)]"
                    : "border-white/10 bg-[#0a110d]/70 hover:border-white/20 hover:bg-[#0c1410]"
                }`}
              >
                <div className="flex flex-row justify-between gap-4 md:items-center">
                  {/* Left: Number & Title */}
                  <div className="flex items-start gap-5 sm:gap-8 md:items-center">
                    <span className="font-mono text-xl font-bold text-emerald-400/70 transition-colors group-hover:text-emerald-400 sm:text-2xl">
                      {service.number}
                    </span>

                    <div>
                      <div className="mb-1 flex items-center gap-2">
                        <span className="rounded border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-[11px] font-semibold tracking-wider text-emerald-400 uppercase">
                          {service.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white transition-colors group-hover:text-emerald-300 sm:text-xl">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Right: Icon Indicator */}
                  <div className="flex items-center justify-end">
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 ${
                        isExpanded
                          ? "rotate-90 border-emerald-400 bg-emerald-500/20 text-emerald-300 shadow-[0_0_15px_rgba(0,229,153,0.3)]"
                          : "border-white/10 bg-white/5 text-zinc-400 group-hover:border-emerald-500/30 group-hover:text-white"
                      }`}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>

                {/* Expandable Content with AnimatePresence */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="mt-6 grid grid-cols-1 gap-6 border-t border-white/10 pt-6 md:grid-cols-12">
                        <p className="text-sm leading-relaxed text-zinc-400 sm:text-base md:col-span-8">
                          {service.description}
                        </p>
                        <div className="flex flex-wrap items-center gap-2 md:col-span-4">
                          {service.highlights.map((item, i) => (
                            <span
                              key={i}
                              className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300 shadow-sm"
                            >
                              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
