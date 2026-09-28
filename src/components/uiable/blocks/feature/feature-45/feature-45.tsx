"use client"

import type { ReactNode } from "react"

// third-party
import { motion, useReducedMotion, type Variants } from "framer-motion"

// assets
import {
  CreditCard,
  RefreshCw,
  ShieldCheck,
  Undo2,
  type LucideIcon,
} from "lucide-react"

interface Guarantee {
  icon: LucideIcon
  title: string
  description: string
}

interface StaggerGroupProps {
  children: ReactNode
  className?: string
}

interface StaggerItemProps {
  children: ReactNode
}

const EASE_ENTRANCE = [0.21, 0.47, 0.32, 0.98] as const
const REVEAL_VIEWPORT = { once: true, margin: "0px 0px -12% 0px" } as const
const STAGGER_CHILDREN = 0.12
const DELAY_CHILDREN = 0.05

const guarantees: Guarantee[] = [
  {
    icon: ShieldCheck,
    title: "30-day guarantee",
    description: "Full refund within 30 days if it is not the right fit.",
  },
  {
    icon: RefreshCw,
    title: "Change anytime",
    description: "Move up or down a tier whenever your goals change.",
  },
  {
    icon: Undo2,
    title: "Keep your progress",
    description: "Completed courses and certificates are yours for good.",
  },
  {
    icon: CreditCard,
    title: "No hidden fees",
    description: "One price, taxes included. Cancel in a single click.",
  },
]

const containerVariants = (reduce: boolean): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: reduce ? STAGGER_CHILDREN / 2 : STAGGER_CHILDREN,
      delayChildren: DELAY_CHILDREN,
    },
  },
})

const itemVariants = (reduce: boolean): Variants => ({
  hidden: { opacity: 0, y: reduce ? 0 : 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: reduce ? 0.3 : 0.5, ease: EASE_ENTRANCE },
  },
})

function StaggerGroup({ children, className }: StaggerGroupProps) {
  const reduce = Boolean(useReducedMotion())

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={REVEAL_VIEWPORT}
      variants={containerVariants(reduce)}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function StaggerItem({ children }: StaggerItemProps) {
  const reduce = Boolean(useReducedMotion())

  return <motion.div variants={itemVariants(reduce)}>{children}</motion.div>
}

//  ------------------------------ | FEATURE 45 | ------------------------------  //

export default function Feature45() {
  return (
    <section className="mx-auto w-full max-w-5xl">
      <StaggerGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {guarantees.map((item) => (
          <StaggerItem key={item.title}>
            <div className="flex h-full flex-col gap-3 rounded-xl border border-border bg-card/50 p-5">
              <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <item.icon aria-hidden="true" className="size-5" />
              </span>
              <div>
                <p className="font-semibold text-foreground">{item.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  )
}
