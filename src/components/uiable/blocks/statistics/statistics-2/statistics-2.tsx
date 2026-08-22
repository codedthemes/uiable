"use client"

import { Fragment, useEffect, useRef } from "react"

// third-party
import {
  motion,
  MotionValue,
  useInView,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion"

// assets
import {
  Cloud,
  Feather,
  Palette,
  ShieldCheck,
  ShoppingBag,
  Star,
  TrendingUp,
  type LucideIcon,
} from "lucide-react"

//  ------------------------------ | SLIDING NUMBER | ------------------------------  //

// A single 0-9 lane that slides vertically to reveal the active digit.
function DigitLane({
  mv,
  number,
}: {
  mv: MotionValue<number>
  number: number
}) {
  const y = useTransform(mv, (latest) => {
    const placeValue = latest % 10
    const offset = (10 + number - placeValue) % 10
    let memo = offset
    if (offset > 5) memo -= 10
    return `${memo}em`
  })

  return (
    <motion.span
      style={{ y }}
      className="absolute inset-0 flex items-center justify-center"
    >
      {number}
    </motion.span>
  )
}

// A single digit column that springs to its target place value.
function Digit({ place, value }: { place: number; value: number }) {
  const valueRoundedToPlace = Math.floor(value / place)
  const animatedValue = useSpring(valueRoundedToPlace, {
    stiffness: 80,
    damping: 20,
  })

  useEffect(() => {
    animatedValue.set(valueRoundedToPlace)
  }, [animatedValue, valueRoundedToPlace])

  return (
    <span
      className="relative inline-block h-[1em] w-[1ch] overflow-hidden tabular-nums"
      style={{ fontVariantNumeric: "tabular-nums" }}
    >
      {Array.from({ length: 10 }, (_, i) => (
        <DigitLane key={i} mv={animatedValue} number={i} />
      ))}
    </span>
  )
}

function SlidingNumber({
  value,
  decimals = 0,
  prefix,
  suffix,
}: {
  value: number
  decimals?: number
  prefix?: string
  suffix?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const target = isInView ? value : 0

  const factor = 10 ** decimals
  const scaled = Math.round(target * factor)
  // Keep column count stable (based on the final value) to avoid layout shift.
  const finalScaled = Math.round(value * factor)
  const digitsCount = String(finalScaled).length

  const places: number[] = []
  for (let i = digitsCount - 1; i >= 0; i--) places.push(10 ** i)

  return (
    <span ref={ref} className="inline-flex items-center leading-none">
      {prefix}
      {places.map((place, idx) => {
        const isDecimalPoint = decimals > 0 && idx === digitsCount - decimals
        return (
          <Fragment key={place}>
            {isDecimalPoint && <span>.</span>}
            <Digit place={place} value={scaled} />
          </Fragment>
        )
      })}
      {suffix}
    </span>
  )
}

//  ------------------------------ | IMAGE ZOOM | ------------------------------  //

// Cursor-tracking zoom: the image scales up on hover while its transform-origin
// follows the pointer, so you inspect exactly the area you point at.
function ImageZoom({
  src,
  alt,
  zoom = 1.9,
}: {
  src: string
  alt: string
  zoom?: number
}) {
  const containerRef = useRef<HTMLDivElement>(null)

  // Spring the origin so the zoomed view glides toward the cursor.
  const originX = useSpring(useMotionValue(50), { stiffness: 220, damping: 28 })
  const originY = useSpring(useMotionValue(50), { stiffness: 220, damping: 28 })
  const transformOrigin = useMotionTemplate`${originX}% ${originY}%`

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    originX.set(Math.min(100, Math.max(0, x)))
    originY.set(Math.min(100, Math.max(0, y)))
  }

  const handleMouseLeave = () => {
    // Ease back to center as the pointer leaves.
    originX.set(50)
    originY.set(50)
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative cursor-zoom-in overflow-hidden rounded-xl"
    >
      <motion.img
        src={src}
        alt={alt}
        style={{ transformOrigin }}
        variants={{ rest: { scale: 1 }, hover: { scale: zoom } }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="h-auto w-full rounded-xl will-change-transform"
      />

      {/* Trending badge */}
      <motion.div
        initial={{ opacity: 0, y: -8, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
        variants={{ rest: { opacity: 1 }, hover: { opacity: 0 } }}
        className="absolute top-4 left-4 z-10 flex items-center gap-1.5 rounded-full border border-white/20 bg-rose-500/90 px-3 py-1.5 text-xs font-semibold text-white shadow-lg backdrop-blur-md"
      >
        <TrendingUp className="size-3.5" />
        Trending
      </motion.div>
    </div>
  )
}

type StatCard = {
  id: number
  value: number
  decimals?: number
  suffix?: string
  title: string
  Icon: LucideIcon
}

// Glass card — layered highlights with a smooth zoom on hover.
function Glass3DCard({ card }: { card: StatCard }) {
  const Icon = card.Icon

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative overflow-hidden rounded-xl border border-white/30 bg-white/10 px-2 py-6 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.35)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
    >
      {/* glass layers */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
      <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-white/25 via-white/5 to-transparent" />
      <div className="pointer-events-none absolute inset-0 rounded-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.45),inset_0_-1px_1px_rgba(255,255,255,0.1)]" />

      <div className="relative flex flex-col items-center gap-4 text-center">
        <Icon className="size-6 text-rose-500/80 drop-shadow-sm transition-transform duration-300 group-hover:scale-110 md:size-8" />
        <div className="flex flex-col items-center gap-1 text-center">
          <div className="text-2xl font-normal text-slate-900 dark:text-slate-100">
            <SlidingNumber
              value={card.value}
              decimals={card.decimals}
              suffix={card.suffix}
            />
          </div>
          <div className="text-sm font-semibold text-slate-500">
            {card.title}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

//  ------------------------------ | STATISTICS 2 | ------------------------------  //

export default function Statistics2() {
  const statCards: StatCard[] = [
    {
      id: 1,
      value: 4.9,
      decimals: 1,
      suffix: " ★",
      title: "Comfort Rating",
      Icon: Star,
    },
    { id: 2, value: 120, suffix: "k+", title: "Pairs Sold", Icon: ShoppingBag },
    { id: 3, value: 340, suffix: "g", title: "Average Weight", Icon: Feather },
    { id: 4, value: 100, suffix: "%", title: "Air Cushioning", Icon: Cloud },
    {
      id: 5,
      value: 10,
      suffix: "+ Yrs",
      title: "Durability",
      Icon: ShieldCheck,
    },
    { id: 6, value: 24, suffix: "+", title: "Unique Styles", Icon: Palette },
  ]

  return (
    <section className="overflow-hidden py-16 sm:py-24">
      <div className="relative isolate px-6 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-65 bg-linear-to-tr from-rose-500 from-10% via-red-500 via-30% to-orange-500 to-90% opacity-15 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            <div className="basis-full lg:basis-4/12">
              {/* Highlight product image — cursor-tracking zoom on hover */}
              <motion.div
                initial="rest"
                animate="rest"
                whileHover="hover"
                className="relative mx-auto max-w-sm rounded-3xl bg-card p-3 shadow-[0_0_40px_-8px_#4680ff38] lg:max-w-md"
              >
                <ImageZoom
                  src="/assets/images/block/ims-statistics.png"
                  alt="Air Jordan 1 Retro"
                />
              </motion.div>
            </div>
            <div className="basis-full lg:basis-7/12">
              <div className="flex flex-col gap-5 sm:gap-8">
                <div className="flex flex-col gap-1 sm:gap-2">
                  <motion.span
                    className="text-sm font-medium tracking-wider text-slate-500 uppercase"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                  >
                    SNEAKERS • ICONIC COMFORT & STYLE
                  </motion.span>
                  <motion.h2
                    className="text-lg font-medium text-slate-800 sm:text-4xl dark:text-slate-100"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    Air Jordan 1 Retro
                  </motion.h2>
                </div>
                <motion.p
                  className="max-w-150 text-base text-slate-600 dark:text-slate-100"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  A classic sneaker designed for maximum comfort and style.
                  Featuring a premium leather upper, signature Air-Sole
                  cushioning, and durable rubber traction, this shoe is built to
                  last and keep you looking fresh.
                </motion.p>
                <div className="grid grid-cols-12 gap-3">
                  {statCards.map((card, idx) => (
                    <motion.div
                      key={card.id}
                      className="col-span-6 sm:col-span-6 md:col-span-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: idx * 0.08 }}
                    >
                      <Glass3DCard card={card} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-2xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-rose-500 from-10% via-pink-500 via-30% to-orange-500 to-90% opacity-15 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>
      </div>
    </section>
  )
}
