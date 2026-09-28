"use client"

// shadcn
import { Badge } from "@/components/ui/badge"

// third-party
import { motion } from "framer-motion"

// project-imports
import { SpotlightCard } from "@/components/uiable/blocks/landing/components/PortfolioSpotlightCard"

// assets
import { Star, CheckCircle2 } from "lucide-react"

const reviews = [
  {
    name: "Sarah Chen",
    role: "Founder & CEO, Synthetix AI",
    aum: "$8.5M Portfolio",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
    quote:
      "Austin restructured our post-acquisition liquidity into a multi-asset architecture that generated +22% alpha while drastically cutting our annual tax burden through automated loss-harvesting.",
  },
  {
    name: "Marcus Vance",
    role: "Real Estate & Venture Investor",
    aum: "$16M AUM",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
    quote:
      "Finding an advisor who understands private equity syndicates as deeply as public markets is extraordinarily rare. The direct Slack access and macro insights give our family total clarity.",
  },
  {
    name: "David Miller",
    role: "General Partner, Apex Digital",
    aum: "$12M AUM",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80",
    quote:
      "Most wealth managers are terrified of digital assets. Austin built an institutional hedging strategy that captured upside in crypto while keeping cold storage and staking fully segregated.",
  },
  {
    name: "Elena Rostova",
    role: "VP of Product, Stripe Alum",
    aum: "$4.5M Portfolio",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80",
    quote:
      "The tail-risk hedging overlay saved us from severe drawdowns during recent volatility. Working with Austin is like having an elite hedge fund risk officer dedicated entirely to your family.",
  },
  {
    name: "James Wilson",
    role: "Co-Founder, CloudScale",
    aum: "$7.2M AUM",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&auto=format&fit=crop&q=80",
    quote:
      "Transparent retainers, zero commission conflicts, and institutional execution. Our portfolio has never been more resilient, diversified, and aligned with our long-term timeline.",
  },
  {
    name: "Rachel Adams",
    role: "E-Commerce Founder",
    aum: "$3.8M Portfolio",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&auto=format&fit=crop&q=80",
    quote:
      "The peace of mind alone is worth 10x the retainer. The onboarding was seamless, the reports are crystal clear, and the quarterly strategy calibrations keep us consistently ahead of market shifts.",
  },
]

const pressLogos = [
  "Bloomberg",
  "Forbes",
  "TechCrunch",
  "Financial Times",
  "Y Combinator",
  "Yahoo Finance",
]

export function Testimonials21() {
  return (
    <section
      id="testimonials"
      className="dark relative overflow-hidden bg-[#070b09] py-10 text-white sm:py-16 lg:py-24"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/3 h-[550px] w-[550px] rounded-full bg-emerald-500/10 blur-[150px]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <Badge
            variant="default"
            className="mb-4 border-emerald-500/30 bg-emerald-500/10 text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.15)]"
          >
            Client Wall of Love
          </Badge>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Trusted by Founders &{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              Investors Worldwide
            </span>
          </h2>
          <p className="mb-6 text-base leading-relaxed text-zinc-400 sm:text-lg">
            Read direct feedback from founders, executives, and family offices
            who partner with me for wealth management.
          </p>

          <div className="inline-flex items-center gap-6 rounded-full border border-white/10 bg-[#0a120e] px-5 py-2.5 text-xs shadow-lg">
            <div className="flex items-center gap-1.5 font-bold text-emerald-400">
              <Star className="h-4 w-4 fill-emerald-400" />
              <span>4.9 / 5.0 Rating</span>
            </div>
            <div className="h-4 w-px bg-white/10" />
            <div className="font-medium text-zinc-300">
              Over 250+ Verified Client Reviews
            </div>
          </div>
        </motion.div>

        {/* Testimonials 3x2 Grid */}
        <div className="mb-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <SpotlightCard
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              className="group flex flex-col justify-between bg-[#0b130f]/90 p-6 sm:p-7"
            >
              <div className="relative z-10">
                {/* 5 Stars */}
                <div className="mb-4 flex items-center gap-1 text-emerald-400">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-emerald-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="mb-6 text-sm leading-relaxed text-zinc-300">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>

              {/* Author Row */}
              <div className="relative z-10 flex items-center gap-3 border-t border-white/10 pt-4">
                {}
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="h-11 w-11 rounded-full border border-emerald-500/30 object-cover ring-2 ring-emerald-500/10 transition-transform group-hover:scale-105"
                />
                <div>
                  <div className="flex items-center gap-1 text-sm font-bold text-white transition-colors group-hover:text-emerald-300">
                    {review.name}
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  </div>
                  <div className="text-xs text-zinc-400">{review.role}</div>
                  <div className="font-mono text-[10px] font-medium text-emerald-400">
                    {review.aum}
                  </div>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* Featured Press / Media Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="mb-6 text-xs font-semibold tracking-widest text-zinc-500 uppercase">
            Featured In & Referenced By Leading Financial Publications
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60 transition-opacity hover:opacity-100 sm:gap-12">
            {pressLogos.map((logo, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.1, color: "#00e599" }}
                className="cursor-pointer text-base font-bold tracking-tight text-zinc-400 transition-colors sm:text-lg"
              >
                {logo}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
