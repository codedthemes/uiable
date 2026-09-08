"use client"

// third-party
import { motion, type Variants } from "framer-motion"

interface StatItem {
  value: string
  label: string
}

const stats: StatItem[] = [
  {
    value: "500+",
    label: "Global Routes",
  },
  {
    value: "12,000+",
    label: "Flights Monthly",
  },
  {
    value: "99.4%",
    label: "On-Time Arrivals",
  },
  {
    value: "2.5M+",
    label: "Happy Travelers",
  },
]

//  ------------------------------ | ANIMATION VARIANTS | ------------------------------  //

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

//  ------------------------------ | SMALL HERO 5 | ------------------------------  //

export default function SmallHero5() {
  return (
    <section className="relative flex min-h-120 w-full flex-col justify-center overflow-hidden bg-[#a6c3e1] sm:min-h-130 lg:min-h-140">
      <div className="pointer-events-none absolute inset-0">
        <img
          src="https://cdn.uiable.com/block/small-hero-bg.png"
          alt="Airplanes background"
          className="size-full object-cover object-right"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex max-w-5xl flex-col gap-16 lg:gap-20"
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl font-black tracking-tight text-slate-950 uppercase sm:text-6xl md:text-7xl lg:text-[5.4rem] lg:leading-[0.96]">
              Discover The World,
              <br />
              Fly With Confidence
            </h1>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="border-slate-200/90 pt-8 sm:border-t sm:pt-10"
          >
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8 lg:gap-12">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-start gap-1"
                >
                  <span className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
                    {stat.value}
                  </span>
                  <span className="text-xs font-semibold text-slate-700 sm:text-sm">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
