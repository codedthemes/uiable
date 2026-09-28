"use client"

// third-party
import { motion, Variants } from "framer-motion"

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
}

const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
}

export default function Feature24() {
  return (
    <section className="container mx-auto border-y border-slate-100 bg-slate-50/50 px-4 py-16 md:px-8 md:py-32">
      <div className="mx-auto mb-12 max-w-xl text-center md:mb-20">
        <span className="mb-4 inline-block rounded-full border border-teal-100/50 bg-teal-50/80 px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-teal-700 uppercase shadow-sm">
          Our Story
        </span>
        <h2 className="text-4xl font-extrabold tracking-tight text-teal-950 sm:text-5xl">
          Milestones of Progress
        </h2>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="relative mx-auto max-w-3xl"
      >
        <div className="absolute top-0 bottom-0 left-[15px] w-0.5 bg-teal-100 sm:left-1/2" />

        {[
          {
            year: "2023",
            title: "Housiq Founded",
            desc: "Started with a core team of three engineers aiming to rebuild payment reconciliation ledgers.",
          },
          {
            year: "2024",
            title: "APIs & Checkout Launch",
            desc: "Launched optimized checkout components supporting 50+ localized payment methods.",
          },
          {
            year: "2025",
            title: "Going Global",
            desc: "Expanded cross-border rails to support auto-conversions across 135+ major currencies.",
          },
          {
            year: "2026",
            title: "$500M+ Monthly Scale",
            desc: "Successfully scaled infrastructure to handle half a billion monthly secure transactions.",
          },
        ].map((mil, idx) => (
          <motion.div
            key={idx}
            variants={popIn}
            className="group relative mb-10 flex flex-col items-start justify-between last:mb-0 sm:flex-row sm:items-center md:mb-16"
          >
            {/* Dot */}
            <div className="absolute left-[10px] z-10 h-3.5 w-3.5 -translate-x-[6px] rounded-full border-4 border-white bg-teal-600 shadow transition-transform duration-300 group-hover:scale-150 sm:left-1/2" />

            {/* Left Content (or Mobile Content) */}
            <div
              className={`w-full pl-8 text-left sm:w-[45%] sm:pl-0 sm:text-right ${idx % 2 !== 0 ? "pointer-events-none hidden sm:block sm:opacity-0" : ""}`}
            >
              <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition-all duration-300 group-hover:border-teal-100 group-hover:shadow-md md:p-6">
                <span className="mb-2 block text-sm font-bold text-teal-600">
                  {mil.year}
                </span>
                <h4 className="text-xl font-bold text-teal-950">{mil.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {mil.desc}
                </p>
              </div>
            </div>

            {/* Right Content */}
            <div
              className={`w-full pl-8 text-left sm:w-[45%] sm:pl-0 ${idx % 2 === 0 ? "pointer-events-none hidden sm:block sm:opacity-0" : ""}`}
            >
              <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition-all duration-300 group-hover:border-teal-100 group-hover:shadow-md md:p-6">
                <span className="mb-2 block text-sm font-bold text-teal-600">
                  {mil.year}
                </span>
                <h4 className="text-xl font-bold text-teal-950">{mil.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {mil.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
