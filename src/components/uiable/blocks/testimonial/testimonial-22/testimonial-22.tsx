"use client"

// shadcn
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// third-party
import { motion } from "framer-motion"

// assets
import { Star } from "lucide-react"

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

export default function Testimonials22() {
  const reviews = [
    {
      stars: 5,
      quote:
        "Migrating to Housiq was the best product decision we made this year. We dropped checkout drop-offs by 24% and simplified currency conversion completely.",
      author: "Sarah Jenkins",
      role: "Director of Payments, GlobalTech",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80",
    },
    {
      stars: 5,
      quote:
        "Housiq's automated reconciliation ledger synced directly with our ERP, saving our finance teams hours of tedious double-entry ledger audits.",
      author: "Alisha Patel",
      role: "Head of FP&A, ScaleUp",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80",
    },
    {
      stars: 5,
      quote:
        "Instant payout settlements are exactly what our gig platform needed. Service providers scan the payout code and withdraw funds to local cards in seconds.",
      author: "Marcus Aurelius",
      role: "VP Finance, SettleLab",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80",
    },
    {
      stars: 5,
      quote:
        "Deploying checkout pages in local currencies took us less than a day. The pre-built layouts converted customers with zero checkout friction.",
      author: "Danielle Vance",
      role: "Founder, MerchantCo",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&h=100&q=80",
    },
    {
      stars: 5,
      quote:
        "Their developer APIs are extremely clean. We integrated recurring billing engines, custom dunning schedules, and card rails with 2 days of dev effort.",
      author: "David Kim",
      role: "Lead Engineer, DevStream",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80",
    },
    {
      stars: 5,
      quote:
        "Offloading PCI-DSS and token security compliance to Housiq saved our legal teams and gave our cardholders absolute peace of mind.",
      author: "Peck Gregory",
      role: "CISO, SecureCorp",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&h=100&q=80",
    },
  ]

  return (
    <section className="container mx-auto border-t border-slate-100/50 px-4 py-16 md:px-8 md:py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="grid gap-5 sm:grid-cols-2 md:gap-8 lg:grid-cols-3"
      >
        {reviews.map((testi, idx) => (
          <motion.div
            key={idx}
            variants={fadeInUp}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/60 bg-white/60 p-6 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-teal-200/80 hover:shadow-2xl hover:shadow-teal-900/10 md:p-8"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-teal-50/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative z-10">
              <div className="mb-6 flex gap-1 text-amber-500">
                {Array.from({ length: testi.stars }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-500 transition-transform duration-300 group-hover:scale-110"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-slate-600 italic transition-colors group-hover:text-slate-700">
                “{testi.quote}”
              </p>
            </div>

            <div className="relative z-10 mt-8 flex items-center gap-4 border-t border-slate-100/80 pt-6">
              <Avatar className="h-12 w-12 border-2 border-white shadow-md">
                <AvatarImage src={testi.avatar} alt={testi.author} />
                <AvatarFallback className="bg-teal-50 text-xs font-bold text-teal-700">
                  {testi.author
                    .split(" ")
                    .map((w) => w[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <span className="block text-sm font-bold text-teal-950 transition-colors group-hover:text-teal-700">
                  {testi.author}
                </span>
                <span className="block text-xs font-medium text-slate-400">
                  {testi.role}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
