"use client"

import React, { useEffect, useState } from "react"

// shadcn
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

// third-party
import Autoplay from "embla-carousel-autoplay"
import { AnimatePresence, motion } from "framer-motion"

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Feature", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "About", href: "#" },
  { name: "Contact", href: "#" },
]

const Gallery = [
  { images: "https://cdn.uiable.com/block/img-prod-1.png" },
  { images: "https://cdn.uiable.com/block/img-prod-2.png" },
  { images: "https://cdn.uiable.com/block/img-prod-3.png" },
  { images: "https://cdn.uiable.com/block/img-prod-4.png" },
  { images: "https://cdn.uiable.com/block/img-prod-5.png" },
  { images: "https://cdn.uiable.com/block/img-prod-6.png" },
  { images: "https://cdn.uiable.com/block/img-prod-7.png" },
  { images: "https://cdn.uiable.com/block/img-prod-8.png" },
  { images: "https://cdn.uiable.com/block/img-prod-9.png" },
]
//  ------------------------------ | HERO4 | ------------------------------  //

export default function Hero5() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(false)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])
  const plugin = React.useMemo(() => Autoplay({ delay: 2000 }), [])
  return (
    <div className="relative min-h-screen overflow-hidden pt-6 sm:pt-12">
      <div className="absolute inset-0 z-10 bg-linear-to-t from-card/50 to-sky-200 opacity-60 dark:to-sky-800"></div>
      <div className="absolute inset-0 z-20 flex items-end justify-end opacity-50 blur-md animation-duration-[20s]">
        <div className="absolute top-30 left-120 size-80 animate-spin border-100 border-purple-200 animation-duration-[3s] dark:border-purple-800"></div>
        <div className="absolute bottom-40 left-20 size-60 rotate-45 animate-bounce rounded-full border-80 border-sky-200 animation-duration-[4s] dark:border-sky-800"></div>
        <div className="absolute right-50 bottom-50 size-50 animate-bounce rounded-full border-60 border-sky-300 animation-duration-[3s] dark:border-sky-700"></div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 z-10 transform-gpu overflow-hidden blur-3xl sm:-top-50"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-indigo-500 from-10% via-sky-500 via-30% to-purple-500 to-90% opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-40rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-indigo-500 from-10% via-blue-500 via-30% to-emerald-500 to-90% opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
        />
      </div>
      <div className="relative z-30 container mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center gap-10">
          <div className="relative rounded-full bg-card/50 p-3 pl-6 shadow-[0_0_40px_-8px_#4680ff38] backdrop-blur-md max-md:w-full">
            <div className="flex flex-row items-center justify-between gap-10">
              <div className="flex flex-row items-center gap-3">
                <svg
                  className="size-8 text-pink-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16 16.752c-.29 0-.56-.17-.69-.45L12 8.852l-3.31 7.46a.75.75 0 0 1-.99.38c-.38-.17-.55-.61-.38-.99l4-9c.24-.54 1.13-.54 1.37 0l4 9c.17.38 0 .82-.38.99-.1.04-.21.06-.31.06Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M12 12.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="text-lg font-medium sm:text-xl">
                  <span className="text-pink-500">Aero</span>
                  <span className="text-slate-900 dark:text-slate-100">
                    Step
                  </span>
                </span>
              </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-0 z-40 w-full"
                  >
                    <div className="mt-2 flex flex-col gap-2 rounded-2xl bg-card p-4 shadow-[0_0_40px_-8px_#4680ff38] backdrop-blur-md">
                      {navLinks.map((item) => (
                        <a
                          key={item.name}
                          className="rounded-lg px-3 py-1.5 text-slate-600 hover:bg-sky-500/10 hover:text-sky-500 dark:text-slate-300"
                          href={item.href}
                        >
                          {item.name}
                        </a>
                      ))}
                      <Button className="rounded-full border-0 border-b-2 border-b-slate-900 bg-slate-800 shadow-[0_8px_10px_-2px_#8f8f8f6b] lg:flex">
                        Buy Now
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="hidden flex-row gap-2 text-slate-600 md:flex dark:text-slate-300">
                {navLinks.map((item) => (
                  <a
                    key={item.name}
                    className="rounded-full px-3 py-1.5 hover:bg-sky-500/10 hover:text-sky-500"
                    href={item.href}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <Button className="hidden rounded-full border-0 border-b-2 border-b-slate-900 bg-slate-800 shadow-[0_8px_10px_-2px_#8f8f8f6b] hover:translate-y-1 hover:opacity-90 md:flex">
                Buy Now
              </Button>
              <div className="flex md:hidden">
                <Button
                  size="icon-lg"
                  className="rounded-full bg-sky-500 shadow-[0_8px_10px_-2px_#8f8f8f6b]"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {isOpen ? (
                    <svg
                      className="size-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10ZM9.17 14.83l5.66-5.66M14.83 14.83 9.17 9.17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      className="size-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M3 7h18M3 12h18M3 17h18"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                  )}
                </Button>
              </div>
            </div>
          </div>
          <div className="mx-auto flex flex-col items-center gap-4 text-center md:gap-8 lg:gap-10">
            <div className="flex max-w-150 flex-col items-center gap-2">
              <h1 className="text-lg font-normal text-slate-900 sm:text-5xl dark:text-slate-100">
                Step Into Comfort.
              </h1>
              <h1 className="text-lg font-normal text-slate-900 sm:text-5xl dark:text-slate-100">
                Move With Confidence.
              </h1>
            </div>
            <p className="max-w-180 text-base text-slate-600 lg:text-lg dark:text-slate-100">
              Discover premium footwear designed for all-day comfort, modern
              style, and exceptional performance. Whether you're on the move or
              making a statement, AeroStep helps you go further with every step.
            </p>
            <div className="flex flex-row flex-wrap gap-4">
              <Button
                size="lg"
                className="rounded-full border-0 border-b-2 border-b-pink-700 bg-pink-500 shadow-[0_8px_10px_-2px_#8f8f8f6b] hover:translate-y-1 hover:opacity-90 lg:flex"
              >
                Shop Collection
              </Button>
              <Button
                size="lg"
                className="rounded-full bg-card text-card-foreground hover:translate-y-1 hover:opacity-90"
              >
                Explore New Arrivals
              </Button>
            </div>
            <div className="relative w-full overflow-hidden">
              <Carousel
                opts={{ align: "center", loop: true }}
                className="w-full mask-r-from-90% mask-r-to-100% mask-l-from-90% mask-l-to-100%"
                plugins={[plugin]}
                onMouseEnter={() => plugin.stop()}
                onMouseLeave={() => plugin.reset()}
              >
                <CarouselContent>
                  {Gallery.map((gallery, idx) => (
                    <CarouselItem
                      key={idx}
                      className="basis-3/4 pl-4 sm:basis-1/2 lg:basis-1/4"
                    >
                      <div className="group">
                        <div className="h-full w-full rounded-2xl bg-card shadow-[0_0_40px_-8px_#4680ff38]">
                          <div className="relative h-full w-full overflow-hidden rounded-xl">
                            <img
                              src={gallery.images}
                              alt="images"
                              className="h-full w-full"
                            />
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
