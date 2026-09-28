"use client"

import { useCallback, useState, useSyncExternalStore } from "react"

// shadcn
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

// third-party
import { cn } from "cn"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"

// assets
import { CheckCircle2 } from "lucide-react"

interface Plan {
  name: string
  tagline: string
  monthly: number | null
  yearly: number | null
  cta: string
  featuresHeading: string
  features: string[]
  featured?: boolean
}

const EASE_ENTRANCE = [0.21, 0.47, 0.32, 0.98] as const
const REVEAL_VIEWPORT = { once: true, margin: "0px 0px -12% 0px" } as const

const surfaceFeatured = cn(
  "bg-[#101828]",
  "dark:bg-[linear-gradient(160deg,color-mix(in_oklab,var(--primary)_28%,var(--card))_0%,color-mix(in_oklab,var(--primary)_14%,var(--card))_100%)]"
)

const plans: Plan[] = [
  {
    name: "Starter",
    tagline: "Build your foundation",
    monthly: 0,
    yearly: 0,
    cta: "Get Started",
    featuresHeading: "Core Features",
    features: [
      "Access to selected free courses",
      "Basic quizzes",
      "Community support",
    ],
  },
  {
    name: "Pro",
    tagline: "Unlock your potential",
    monthly: 18,
    yearly: 14,
    cta: "Upgrade to Pro",
    featuresHeading: "Everything in Starter, plus:",
    features: [
      "Unlimited course access",
      "Interactive projects",
      "Course certificates",
      "Priority support",
    ],
    featured: true,
  },
  {
    name: "Premium",
    tagline: "Master your craft",
    monthly: 49,
    yearly: 39,
    cta: "Go Premium",
    featuresHeading: "Everything in Pro, plus:",
    features: [
      "Exclusive masterclasses",
      "1-on-1 mentorship",
      "Job placement assistance",
    ],
  },
]

// True below the `md` breakpoint — cards reveal on their own viewport entry
// instead of a shared grid-level stagger.
function useIsCompact() {
  const subscribe = useCallback((onStoreChange: () => void) => {
    const list = window.matchMedia("(max-width: 767px)")
    list.addEventListener("change", onStoreChange)
    return () => list.removeEventListener("change", onStoreChange)
  }, [])

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia("(max-width: 767px)").matches,
    () => false
  )
}

//  ------------------------------ | PRICING 18 | ------------------------------  //

export default function Pricing18() {
  const [yearly, setYearly] = useState(true)
  const reduce = useReducedMotion()
  const cardsSelfReveal = useIsCompact()

  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Flexible plans for every learner
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Choose the perfect plan to accelerate your learning journey.
            Upgrade, downgrade, or cancel anytime.
          </p>
        </div>

        <div className="mb-14 flex justify-center">
          <div className="inline-flex items-center gap-1 rounded-full border border-border bg-muted/60 p-1.5">
            {(["monthly", "yearly"] as const).map((option) => {
              const isActive = (option === "yearly") === yearly
              return (
                <button
                  key={option}
                  onClick={() => setYearly(option === "yearly")}
                  className={cn(
                    "relative flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition-colors",
                    isActive
                      ? "text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="billing-toggle-pill"
                      className="absolute inset-0 rounded-full bg-primary"
                      transition={{
                        type: "spring",
                        duration: 0.5,
                        bounce: 0.2,
                      }}
                    />
                  )}
                  <span className="relative z-10 capitalize">{option}</span>
                  {option === "yearly" && (
                    <Badge
                      variant="secondary"
                      className={cn(
                        "relative z-10 bg-accent text-[11px] text-primary",
                        isActive && "bg-white/20 text-primary-foreground"
                      )}
                    >
                      Save 20%
                    </Badge>
                  )}
                </button>
              )
            })}
          </div>
        </div>

        <motion.div
          initial={cardsSelfReveal ? undefined : "hidden"}
          whileInView={cardsSelfReveal ? undefined : "show"}
          viewport={cardsSelfReveal ? undefined : REVEAL_VIEWPORT}
          variants={
            cardsSelfReveal
              ? undefined
              : {
                  hidden: {},
                  show: { transition: { staggerChildren: 0.12 } },
                }
          }
          className="grid grid-cols-1 items-end gap-6 md:grid-cols-3"
        >
          {plans.map((plan) => {
            const price = yearly ? plan.yearly : plan.monthly
            const isFree = price === 0

            return (
              <motion.div
                key={plan.name}
                initial={cardsSelfReveal ? "hidden" : undefined}
                whileInView={cardsSelfReveal ? "show" : undefined}
                viewport={cardsSelfReveal ? REVEAL_VIEWPORT : undefined}
                variants={{
                  hidden: { opacity: 0, y: reduce ? 0 : 28 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: EASE_ENTRANCE }}
                className={cn(
                  "relative flex h-full flex-col rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1",
                  plan.featured
                    ? cn(
                        "border border-primary/40 text-white shadow-xl shadow-primary/20 md:scale-105 md:hover:scale-[1.07]",
                        surfaceFeatured
                      )
                    : "border border-border bg-card hover:shadow-xl"
                )}
              >
                {plan.featured && (
                  <motion.span
                    animate={reduce ? undefined : { scale: [1, 1.05, 1] }}
                    transition={{
                      duration: 3.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary px-4 py-1.5 text-xs font-bold tracking-wider text-white uppercase shadow-sm"
                  >
                    Most Popular
                  </motion.span>
                )}

                <div className={cn("mb-6", plan.featured && "mt-3")}>
                  <h3
                    className={cn(
                      "mb-1 text-xl font-semibold",
                      plan.featured ? "text-white" : "text-foreground"
                    )}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={cn(
                      "text-sm",
                      plan.featured ? "text-white/60" : "text-muted-foreground"
                    )}
                  >
                    {plan.tagline}
                  </p>
                </div>

                <div className="mb-8 flex items-baseline gap-1">
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.span
                      key={`${plan.name}-${price}`}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                      className="text-4xl font-bold tracking-tight"
                    >
                      ${price}
                    </motion.span>
                  </AnimatePresence>
                  {!isFree && (
                    <span
                      className={cn(
                        "text-sm",
                        plan.featured
                          ? "text-white/60"
                          : "text-muted-foreground"
                      )}
                    >
                      /mo
                    </span>
                  )}
                  {isFree && (
                    <span
                      className={cn(
                        "text-sm",
                        plan.featured
                          ? "text-white/60"
                          : "text-muted-foreground"
                      )}
                    >
                      forever
                    </span>
                  )}
                  {!isFree && yearly && (
                    <span
                      className={cn(
                        "text-sm line-through",
                        plan.featured
                          ? "text-white/40"
                          : "text-muted-foreground/60"
                      )}
                    >
                      ${plan.monthly}
                    </span>
                  )}
                </div>

                <Button
                  onClick={() => {}}
                  variant={plan.featured ? "default" : "outline"}
                  size="lg"
                  className={cn(
                    "mb-8 w-full rounded-lg",
                    plan.featured
                      ? "border-transparent bg-primary text-white hover:bg-primary/90"
                      : "dark:border-white/20 dark:bg-white/5 dark:hover:bg-white/10"
                  )}
                >
                  {plan.cta}
                </Button>

                <div className="flex-1">
                  <p
                    className={cn(
                      "mb-4 text-xs font-semibold tracking-widest uppercase",
                      plan.featured ? "text-white/50" : "text-muted-foreground"
                    )}
                  >
                    {plan.featuresHeading}
                  </p>
                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                        <span
                          className={cn(
                            "text-sm",
                            plan.featured ? "text-white/90" : "text-foreground"
                          )}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
