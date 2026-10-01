"use client"

// third-party
import { motion } from "framer-motion"

// assets
import { ArrowUpRight } from "lucide-react"

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const fadeInUp: any = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
}

export default function Testimonials20() {
  return (
    <section className="container mx-auto border-t border-slate-100/50 bg-slate-50/50 px-4 py-16 md:px-8 md:py-32">
      <div className="mx-auto mb-12 max-w-xl text-center md:mb-20">
        <span className="mb-4 inline-block rounded-full border border-teal-100/50 bg-white px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-teal-700 uppercase shadow-sm">
          Success Stories
        </span>
        <h2 className="text-4xl font-extrabold tracking-tight text-teal-950 sm:text-5xl">
          How We Make a Difference
        </h2>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2 md:gap-8"
      >
        {[
          {
            metric: "90% Settle Squeeze",
            company: "GlobalTech",
            title: "How GlobalTech reduced settlement latency by 90%",
            desc: "By migrating custom batch transfers to Housiq payout rails, GlobalTech automated vendor distributions, routing clearance in real-time.",
          },
          {
            metric: "24-Hour Checkout Deploy",
            company: "MerchantCo",
            title: "Scaling checkouts to 12 countries in 24 hours",
            desc: "Using modular checkout component widgets, MerchantCo rolled out localized pricing grids with multi-gateway card authorizations.",
          },
        ].map((caseStudy, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            whileHover={{ y: -8, scale: 1.01 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/60 bg-white p-6 shadow-sm transition-all duration-300 hover:border-teal-200/80 hover:shadow-2xl hover:shadow-teal-900/5 md:p-10"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-teal-50/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative z-10">
              <span className="mb-6 inline-block rounded-full border border-teal-100 bg-teal-50/80 px-4 py-1.5 text-sm font-bold text-teal-700 shadow-sm">
                {caseStudy.metric}
              </span>
              <h3 className="mb-4 text-2xl leading-snug font-bold text-teal-950 transition-colors group-hover:text-teal-800">
                {caseStudy.title}
              </h3>
              <p className="mb-8 text-base leading-relaxed text-slate-500">
                {caseStudy.desc}
              </p>
            </div>

            <a
              href="#"
              className="group/link relative z-10 mt-auto inline-flex w-fit items-center gap-2 rounded-full border border-slate-100 bg-slate-50/50 px-5 py-2.5 text-sm font-bold text-teal-700 transition-colors hover:border-teal-100 hover:bg-teal-50/50 hover:text-teal-900"
            >
              Read Case Study
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
