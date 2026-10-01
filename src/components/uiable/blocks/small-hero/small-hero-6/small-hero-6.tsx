"use client"

import { useState } from "react"

// third-party
import { motion } from "framer-motion"

//  ------------------------------ | PORTFOLIO AGENCY CLIENTS DATA | ------------------------------  //

interface BrandItem {
  id: string
  name: string
  logo: React.ReactNode
}

const portfolioAgencyBrands: BrandItem[] = [
  {
    id: "lumina",
    name: "Lumina Labs",
    logo: (
      <div className="flex items-center gap-2 font-sans text-lg font-bold tracking-tight text-foreground/80 transition-colors group-hover:text-foreground">
        <svg
          className="size-5 fill-none stroke-current stroke-2 text-primary transition-transform duration-300 group-hover:scale-110"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3v18M3 12h18" />
        </svg>
        <span className="font-extrabold tracking-tight">
          lumina<span className="text-primary">.</span>
        </span>
      </div>
    ),
  },
  {
    id: "avant",
    name: "AVANT Studio",
    logo: (
      <div className="flex items-center font-serif text-2xl font-light tracking-[0.18em] text-foreground/85 uppercase transition-colors group-hover:text-foreground">
        <span>AVANT</span>
        <span className="ml-1.5 font-sans text-[9px] font-bold tracking-widest text-muted-foreground">
          ATELIER
        </span>
      </div>
    ),
  },
  {
    id: "nexus",
    name: "Nexus Motion",
    logo: (
      <div className="flex items-center gap-1.5 font-sans text-lg font-black tracking-tight text-foreground/85 uppercase transition-colors group-hover:text-foreground">
        <div className="flex size-5.5 items-center justify-center rounded bg-foreground/10 text-xs font-black text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
          N
        </div>
        <span className="tracking-wider">NEXUS</span>
      </div>
    ),
  },
  {
    id: "kinetic",
    name: "Kinetic DTC",
    logo: (
      <div className="flex items-center gap-1.5 font-sans text-lg font-black tracking-wider text-foreground/85 uppercase italic transition-colors group-hover:text-foreground">
        <svg
          className="size-5 fill-current text-rose-500 transition-transform duration-300 group-hover:translate-x-0.5"
          viewBox="0 0 24 24"
        >
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
        <span>KINETIC</span>
      </div>
    ),
  },
  {
    id: "eclipse",
    name: "Eclipse Digital",
    logo: (
      <div className="flex items-center gap-2 font-mono text-sm font-bold tracking-[0.25em] text-foreground/85 uppercase transition-colors group-hover:text-foreground">
        <span className="relative flex size-4 items-center justify-center">
          <span className="size-3.5 rounded-full border-2 border-foreground/60" />
          <span className="absolute -right-0.5 size-2.5 rounded-full bg-cyan-500/80" />
        </span>
        <span>ECLIPSE</span>
      </div>
    ),
  },
  {
    id: "hyperion",
    name: "Hyperion Media",
    logo: (
      <div className="flex items-center font-sans text-xl font-black tracking-tight text-foreground/85 uppercase transition-colors group-hover:text-foreground">
        <span className="mr-1 font-black text-primary">✦</span>
        <span>HYPERION</span>
      </div>
    ),
  },
  {
    id: "solaris",
    name: "Solaris Lab",
    logo: (
      <div className="flex items-center gap-1.5 font-serif text-xl font-medium tracking-tight text-foreground/85 transition-colors group-hover:text-foreground">
        <svg
          className="size-4.5 fill-none stroke-current stroke-2 text-yellow-500"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
        <span>Solaris</span>
        <span className="ml-0.5 font-sans text-[10px] font-extrabold tracking-widest text-muted-foreground uppercase">
          LAB
        </span>
      </div>
    ),
  },
  {
    id: "monolith",
    name: "Monolith Craft",
    logo: (
      <div className="flex items-center gap-1.5 font-sans text-base font-extrabold tracking-[0.3em] text-foreground/85 uppercase transition-colors group-hover:text-foreground">
        <div className="size-3.5 rounded-[2px] bg-foreground/75 transition-colors group-hover:bg-primary" />
        <span>MONOLITH</span>
      </div>
    ),
  },
]

//  ------------------------------ | SMALL HERO 6 | ------------------------------  //

export default function SmallHero6() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative overflow-hidden bg-background py-16 text-foreground sm:py-20 lg:py-24">
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Portfolio Agency Brand Logo Section */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.4, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-6 text-center"
        >
          {/* Portfolio Agency Eyebrow Caption */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-xl font-extrabold tracking-tight text-foreground sm:text-2xl"
          >
            Making brands impossible to ignore
          </motion.h2>

          {/* Continuous Ticker Marquee with Edge Gradient Fade Masks */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="w-full max-w-5xl overflow-hidden py-3"
          >
            <motion.div
              animate={{ x: isHovered ? undefined : ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 35,
                ease: "linear",
              }}
              className="flex w-max items-center gap-12 sm:gap-16 lg:gap-20"
            >
              {[...portfolioAgencyBrands, ...portfolioAgencyBrands].map(
                (brand, idx) => (
                  <div
                    key={`${brand.id}-${idx}`}
                    className="group flex shrink-0 cursor-pointer items-center justify-center opacity-60 transition-all duration-300 select-none hover:scale-108 hover:opacity-100"
                  >
                    {brand.logo}
                  </div>
                )
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
