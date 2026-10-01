"use client"

// shadcn
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

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

const fadeInUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 15 },
  },
}

export default function Testimonial25() {
  return (
    <section
      id="testimonial"
      className="relative container mx-auto overflow-hidden px-4 py-16 md:px-8 md:py-32"
    >
      <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-50/50 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto mb-12 max-w-2xl text-center md:mb-20"
      >
        <span className="mb-6 inline-block rounded-full border border-teal-100/50 bg-teal-50/80 px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-teal-700 uppercase shadow-sm">
          Customer Success
        </span>
        <h2 className="text-4xl leading-tight font-extrabold tracking-tight text-teal-950 sm:text-5xl">
          The trusted choice for modern payments
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-slate-600">
          Find out why scaling finance teams choose Housiq to coordinate
          international revenue collection and internal ledgers.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="grid gap-5 sm:grid-cols-2 md:gap-8 lg:grid-cols-3"
      >
        {[
          {
            stars: 5,
            text: "The integration was incredibly smooth, and our payment failure rate dropped by 85% within the very first week of migration.",
            author: "Sarah Jenkins",
            role: "Director of Payments, GlobalTech",
            avatar:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80",
          },
          {
            stars: 5,
            text: "Highly recommended. Settle and transfer tools make withdrawing funds instant, and local routing keeps fees at a absolute minimum.",
            author: "Marcus Aurelius",
            role: "VP Finance, SettleLab",
            avatar:
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80",
          },
          {
            stars: 4,
            text: "Housiq's automated ledgers save our FP&A team over 24 hours of manual audit tracking every single month. Invaluable platform.",
            author: "Alisha Patel",
            role: "Head of FP&A, ScaleUp",
            avatar:
              "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80",
          },
          {
            stars: 3,
            text: "We deployed checkout page templates across 12 countries in less than 24 hours. The conversion optimization metrics are outstanding.",
            author: "Danielle Vance",
            role: "Founder, MerchantCo",
            avatar:
              "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&h=100&q=80",
          },
          {
            stars: 5,
            text: "Security is vital for our scale. Having bank-grade compliance shield out-of-the-box let us scale safely with full confidence.",
            author: "Peck Gregory",
            role: "CISO, SecureCorp",
            avatar:
              "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&h=100&q=80",
          },
          {
            stars: 5,
            text: "The API documentation is best-in-class. Our engineering team had a full integration running in production within just two days of onboarding.",
            author: "James Whitfield",
            role: "CTO, NovaPay",
            avatar:
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80",
          },
        ].map((testi, idx) => (
          <motion.div
            key={idx}
            variants={fadeInUp}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group flex flex-col justify-between rounded-3xl border border-slate-200/60 bg-white/60 p-6 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-teal-200/80 hover:shadow-2xl hover:shadow-teal-900/10 md:p-8"
          >
            <div>
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
                “{testi.text}”
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4 border-t border-slate-100/80 pt-6">
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-16 text-center"
      >
        <Button
          variant="outline"
          className="h-12 rounded-full border-teal-200/80 bg-white/50 px-10 text-sm font-bold text-teal-700 shadow-sm backdrop-blur-sm transition-all hover:scale-105 hover:bg-teal-50 active:scale-95"
        >
          See All Reviews
        </Button>
      </motion.div>
    </section>
  )
}
