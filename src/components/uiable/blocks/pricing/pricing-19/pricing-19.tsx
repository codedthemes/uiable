"use client"

import { Fragment, type ReactNode } from "react"

// third-party
import { cn } from "cn"
import { motion, useReducedMotion } from "framer-motion"

// assets
import { Check, Minus } from "lucide-react"

type Cell = boolean | string

interface ComparisonGroup {
  title: string
  rows: { label: string; values: [Cell, Cell, Cell] }[]
}

interface FadeInProps {
  children: ReactNode
  delay?: number
  className?: string
}

const tiers = ["Starter", "Pro", "Premium"] as const

// Keyed off the same constant used by the plan cards' "Most Popular" badge.
const FEATURED = 1

const EASE_ENTRANCE = [0.21, 0.47, 0.32, 0.98] as const
const REVEAL_MARGIN = "0px 0px -12% 0px" as const

const groups: ComparisonGroup[] = [
  {
    title: "Courses & content",
    rows: [
      {
        label: "Course library",
        values: ["Free selection", "Unlimited", "Unlimited"],
      },
      {
        label: "New releases",
        values: ["After 30 days", "Day one", "Day one"],
      },
      { label: "Interactive projects", values: [false, true, true] },
      { label: "Downloadable resources", values: [false, true, true] },
      { label: "Exclusive masterclasses", values: [false, false, true] },
    ],
  },
  {
    title: "Practice & assessment",
    rows: [
      { label: "Quizzes", values: ["Basic set", "Full bank", "Full bank"] },
      { label: "Graded assignments", values: [false, true, true] },
      { label: "Course certificates", values: [false, true, true] },
      { label: "Portfolio review", values: [false, false, true] },
    ],
  },
  {
    title: "Support & guidance",
    rows: [
      { label: "Community forum", values: [true, true, true] },
      {
        label: "Support response",
        values: ["3–5 days", "Within 24 hours", "Within 4 hours"],
      },
      {
        label: "1-on-1 mentorship",
        values: [false, false, "2 sessions / month"],
      },
      { label: "Job placement help", values: [false, false, true] },
    ],
  },
  {
    title: "Seats & billing",
    rows: [
      { label: "Seats included", values: ["1", "1", "Up to 3"] },
      { label: "Invoice billing", values: [false, false, true] },
      { label: "Cancel anytime", values: [true, true, true] },
    ],
  },
]

// Under prefers-reduced-motion, offset is dropped — only opacity crosses.
function FadeIn({ children, delay = 0, className }: FadeInProps) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      initial={{ opacity: 0, y: reduce ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: REVEAL_MARGIN }}
      transition={{
        duration: reduce ? 0.3 : 0.6,
        delay: reduce ? 0 : delay,
        ease: EASE_ENTRANCE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Icon is decorative; sr-only text announces which row it belongs to.
function CellValue({ value }: { value: Cell }) {
  if (typeof value === "string") {
    return <span className="text-sm text-foreground">{value}</span>
  }

  return (
    <>
      <span className="sr-only">{value ? "Included" : "Not included"}</span>
      {value ? (
        <Check aria-hidden="true" className="mx-auto size-5 text-primary" />
      ) : (
        <Minus
          aria-hidden="true"
          className="mx-auto size-5 text-muted-foreground/40"
        />
      )}
    </>
  )
}

// One stacked card per plan, so mobile only ever needs the page's normal
// vertical scroll instead of also scrolling the table horizontally.
function MobilePlanCard({ tierIndex }: { tierIndex: number }) {
  const featured = tierIndex === FEATURED

  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border bg-card",
        featured ? "border-primary" : "border-border"
      )}
    >
      <div
        className={cn(
          "flex items-center justify-between px-5 py-4",
          featured && "bg-primary/5"
        )}
      >
        <span className="text-base font-bold text-foreground">
          {tiers[tierIndex]}
        </span>
        {featured && (
          <span className="text-[11px] font-semibold tracking-widest text-primary uppercase">
            Most popular
          </span>
        )}
      </div>

      <div className="divide-y divide-border px-5">
        {groups.map((group) => (
          <div key={group.title} className="py-3">
            <p className="mb-2 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
              {group.title}
            </p>
            <div className="space-y-2.5">
              {group.rows.map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between gap-4"
                >
                  <span className="text-sm text-muted-foreground">
                    {row.label}
                  </span>
                  <span className="shrink-0 text-right">
                    <CellValue value={row.values[tierIndex]} />
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

//  ------------------------------ | PRICING 19 | ------------------------------  //

export default function Pricing19() {
  return (
    <section className="mx-auto w-full max-w-5xl">
      <FadeIn className="mb-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Compare every feature
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          The full breakdown, so you can see exactly what changes as you move up
          a tier.
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {tiers.map((tier, index) => (
            <MobilePlanCard key={tier} tierIndex={index} />
          ))}
        </div>

        <div className="hidden overflow-x-auto rounded-2xl border border-border bg-card md:block">
          <table className="w-full min-w-[44rem] border-collapse text-left">
            <caption className="sr-only">
              Feature comparison across the Starter, Pro and Premium plans
            </caption>
            <thead>
              <tr className="border-b border-border">
                <th
                  scope="col"
                  className="px-6 py-5 text-sm font-semibold text-muted-foreground"
                >
                  Features
                </th>
                {tiers.map((tier, index) => (
                  <th
                    key={tier}
                    scope="col"
                    className={cn(
                      "px-6 py-5 text-center text-base font-bold text-foreground",
                      index === FEATURED && "bg-primary/5"
                    )}
                  >
                    {tier}
                    {index === FEATURED && (
                      <span className="mt-1 block text-[11px] font-semibold tracking-widest text-primary uppercase">
                        Most popular
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {groups.map((group) => (
                <Fragment key={group.title}>
                  <tr className="border-b border-border bg-muted/40">
                    <th
                      scope="colgroup"
                      colSpan={tiers.length + 1}
                      className="px-6 py-3 text-xs font-semibold tracking-widest text-muted-foreground uppercase"
                    >
                      {group.title}
                    </th>
                  </tr>
                  {group.rows.map((row) => (
                    <tr
                      key={row.label}
                      className="border-b border-border last:border-0"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 text-sm font-normal text-muted-foreground"
                      >
                        {row.label}
                      </th>
                      {row.values.map((value, index) => (
                        <td
                          key={tiers[index]}
                          className={cn(
                            "px-6 py-4 text-center",
                            index === FEATURED && "bg-primary/5"
                          )}
                        >
                          <CellValue value={value} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </FadeIn>
    </section>
  )
}
