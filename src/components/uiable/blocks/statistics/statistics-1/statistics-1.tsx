"use client"

import { useEffect, useRef, useState } from "react"

// shadcn
import { Button } from "@/components/ui/button"

// third-party
import { animate, motion, useInView } from "framer-motion"

// assets
import { ArrowRight, Briefcase, Globe, Heart, Users } from "lucide-react"

const steps = [
  {
    value: 360,
    suffix: "+",
    description: "Well Trained Staff",
    colorClass: "text-pink-500",
    icon: Users,
  },
  {
    value: 14,
    suffix: "+",
    description: "Offices Worldwide",
    colorClass: "text-cyan-500",
    icon: Globe,
  },
  {
    value: 1440,
    suffix: "+",
    description: "Completed Projects",
    colorClass: "text-lime-500",
    icon: Briefcase,
  },
  {
    value: 56,
    suffix: "+",
    description: "Loyal Clients",
    colorClass: "text-amber-500",
    icon: Heart,
  },
]

function CountUp({ value, suffix }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const controls = animate(0, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(Math.floor(latest)),
    })

    return () => controls.stop()
  }, [isInView, value])

  return (
    <span ref={ref}>
      {display.toLocaleString()}
      {suffix}
    </span>
  )
}

//  ------------------------------ | STATISTICS 1 | ------------------------------  //

export default function Statistics1() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-24 sm:py-32">
      {/* background gradient effects */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="pointer-events-none absolute -top-24 left-1/4 z-0 size-96 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="pointer-events-none absolute right-1/4 -bottom-24 z-0 size-96 translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(2,6,23,0.6)_100%)]" />

      <div className="relative z-30 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-10 sm:gap-14">
          <div className="flex flex-col items-center gap-4 text-center sm:gap-6">
            <div className="flex flex-col items-center gap-1 text-center">
              <motion.span
                className="text-sm font-medium tracking-wider text-slate-500 uppercase"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                Statistics
              </motion.span>
              <motion.h2
                className="text-lg font-medium text-slate-100 sm:text-3xl"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                What Numbers Say
              </motion.h2>
            </div>
            <motion.p
              className="max-w-150 text-slate-300"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Discover how simple it is to integrate, configure, monitor, and
              scale your business operations with our next-generation SaaS
              platform.
            </motion.p>
          </div>
          <div className="relative mx-auto grid w-full max-w-5xl grid-cols-2 gap-y-6 overflow-hidden sm:gap-y-8 lg:grid-cols-4 lg:gap-y-0">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                <div className="group relative rounded-lg p-6 xl:p-8">
                  <div className="flex flex-col items-center gap-4 md:gap-6">
                    <step.icon className="size-6 stroke-2 text-slate-500 transition duration-300 group-hover:scale-125 group-hover:text-slate-300 md:size-8" />
                    <div className="flex flex-col items-center gap-4 xl:gap-6">
                      <h2
                        className={`${step.colorClass} text-lg font-medium sm:text-4xl`}
                      >
                        <CountUp value={step.value} suffix={step.suffix} />
                      </h2>
                      <p className="text-center text-base font-semibold tracking-wider text-slate-100 uppercase">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Primary fill — gradient slides in on hover (see hero-12) */}
          <motion.div
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            className="relative overflow-hidden rounded-full"
          >
            <Button
              size="lg"
              className="relative overflow-hidden rounded-full border-0 border-b-2 border-b-blue-700 bg-blue-500 px-8 text-base text-white hover:bg-blue-500"
            >
              {/* Gradient sliding background */}
              <motion.span
                className="absolute inset-0 z-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
                variants={{
                  rest: { scaleX: 0 },
                  hover: { scaleX: 1 },
                }}
                style={{ originX: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              />

              {/* Button content */}
              <span className="relative z-10 flex items-center justify-center gap-2">
                <motion.span
                  variants={{ rest: { x: 4 }, hover: { x: 0 } }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  Get Started
                </motion.span>
                <motion.span
                  variants={{ rest: { x: 0 }, hover: { x: 8 } }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <ArrowRight className="size-4 shrink-0" />
                </motion.span>
              </span>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
