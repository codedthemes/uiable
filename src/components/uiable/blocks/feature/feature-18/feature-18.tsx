"use client"

import { useState, useCallback } from "react"

// shadcn
import { Button } from "@/components/ui/button"

// third-party
import { cn } from "cn"
import { motion } from "framer-motion"

// assets
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"

//  ------------------------------ | TYPES & DATA | ------------------------------  //

interface DealCard {
  city: string
  duration: string
  stops: string
  startDate: string
  endDate: string
  price: string
  image: string
}

const dealCards: DealCard[] = [
  {
    city: "El Nido",
    duration: "4h 30m",
    stops: "1 stop",
    startDate: "Mon 20/10",
    endDate: "Mon 10/11",
    price: "€643",
    image: "https://cdn.uiable.com/block/img-content11-destination-1.png",
  },
  {
    city: "Bali",
    duration: "11h 10m",
    stops: "1 stop",
    startDate: "Sat 15/11",
    endDate: "Sat 29/11",
    price: "€487",
    image: "https://cdn.uiable.com/block/img-content11-destination-3.png",
  },
  {
    city: "Tokyo",
    duration: "11h 50m",
    stops: "direct",
    startDate: "Fri 01/12",
    endDate: "Mon 18/12",
    price: "€580",
    image: "https://cdn.uiable.com/block/img-content11-destination-4.png",
  },
  {
    city: "London",
    duration: "1h 30m",
    stops: "direct",
    startDate: "Tue 05/11",
    endDate: "Fri 08/11",
    price: "€129",
    image: "https://cdn.uiable.com/block/img-content11-destination-5.png",
  },
  {
    city: "Paris",
    duration: "1h 15m",
    stops: "direct",
    startDate: "Wed 12/11",
    endDate: "Sun 16/11",
    price: "€98",
    image: "https://cdn.uiable.com/block/img-content11-destination-6.png",
  },
]

//  ------------------------------ | FEATURE 18 | ------------------------------  //

export default function Feature18() {
  const [scrollIndex, setScrollIndex] = useState(0)

  // Assumes 4 cards are fully visible at a time
  const maxIndex = Math.max(0, dealCards.length - 4)

  const scrollLeft = useCallback(() => {
    setScrollIndex((prev) => Math.max(0, prev - 1))
  }, [])

  const scrollRight = useCallback(() => {
    setScrollIndex((prev) => Math.min(maxIndex, prev + 1))
  }, [maxIndex])

  return (
    <section className="relative bg-[#f9fafb] dark:bg-slate-950">
      {/* ──────── 1. Trust / Value Prop Strip ──────── */}
      <div>
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl dark:text-white">
              Save when you compare
            </h2>
            <p className="mt-2 text-base text-slate-500 dark:text-slate-400">
              More deals. More sites. One search.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ──────── 2. Travel Deals Section ──────── */}
      <div className="mx-auto max-w-7xl px-6 pb-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between"
        >
          <h3 className="text-xl font-black tracking-tight text-slate-900 sm:text-2xl dark:text-white">
            Travel deals under €500
          </h3>
          <a
            href="#"
            className="flex items-center gap-1 text-sm font-semibold text-cyan-600 transition-colors hover:text-cyan-700 dark:text-cyan-400"
          >
            Explore more
            <ChevronRight className="h-4 w-4" />
          </a>
        </motion.div>

        {/* Deal Cards Carousel */}
        <div className="relative mt-6">
          <div className="-m-1 overflow-hidden p-1">
            <motion.div
              className="flex gap-5"
              animate={{ x: -scrollIndex * 290 }} // 270px width + 20px gap (gap-5)
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {dealCards.map((deal, index) => (
                <motion.div
                  key={deal.city}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="group relative flex h-[340px] w-[270px] shrink-0 cursor-pointer flex-col overflow-hidden rounded-3xl shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20"
                >
                  {/* Full Cover Image */}
                  <img
                    src={deal.image}
                    alt={deal.city}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent transition-all duration-500 group-hover:from-black/90 group-hover:via-black/50" />

                  {/* Top Right: Price Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className="flex items-center gap-1 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-white shadow-md backdrop-blur-md">
                      <span className="text-[10px] font-semibold tracking-wider text-slate-300 uppercase">
                        from
                      </span>
                      <span className="text-sm font-black text-white">
                        {deal.price}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Content Overlay (Revealed on hover) */}
                  <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col justify-end p-5">
                    {/* Always Visible: City Name */}
                    <h4 className="text-2xl font-black tracking-tight text-white drop-shadow-md">
                      {deal.city}
                    </h4>

                    {/* Details Container - Revealed on hover */}
                    <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 ease-in-out group-hover:mt-2.5 group-hover:grid-rows-[1fr] group-hover:opacity-100">
                      <div className="space-y-3 overflow-hidden pt-0.5">
                        {/* Flight Duration & Stops */}
                        <p className="text-xs font-medium text-slate-200">
                          {deal.duration} flight • {deal.stops}
                        </p>

                        {/* Explore Action Button */}
                        <Button
                          variant="default"
                          className="flex w-full items-center justify-between rounded-xl bg-cyan-500 px-3.5 py-2 text-xs font-bold text-slate-950 shadow-md transition-all duration-300 hover:bg-cyan-400"
                        >
                          <span>Explore Deal</span>
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Carousel controls */}
          <div className="mt-4 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={scrollLeft}
              disabled={scrollIndex === 0}
              className={cn(
                "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border transition-all duration-200",
                scrollIndex === 0
                  ? "cursor-not-allowed border-slate-200 text-slate-300 dark:border-slate-700 dark:text-slate-600"
                  : "border-slate-300 text-slate-600 hover:border-slate-400 hover:text-slate-900 dark:border-slate-600 dark:text-slate-400 dark:hover:text-white"
              )}
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={scrollRight}
              disabled={scrollIndex >= maxIndex}
              className={cn(
                "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border transition-all duration-200",
                scrollIndex >= maxIndex
                  ? "cursor-not-allowed border-slate-200 text-slate-300 dark:border-slate-700 dark:text-slate-600"
                  : "border-slate-300 text-slate-600 hover:border-slate-400 hover:text-slate-900 dark:border-slate-600 dark:text-slate-400 dark:hover:text-white"
              )}
              aria-label="Scroll right"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
