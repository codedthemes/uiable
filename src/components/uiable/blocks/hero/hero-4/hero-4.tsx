"use client"

import { useEffect, useState } from "react"

// shadcn
import { Button } from "@/components/ui/button"

// third-party
import { AnimatePresence, motion } from "framer-motion"

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Feature", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "About", href: "#" },
  { name: "Contact", href: "#" },
]
// Curve Icons

function CurveIcon() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M50 0C22.3858 0 0 22.3858 0 50V0H50Z" fill="currentColor" />
    </svg>
  )
}
//  ------------------------------ | HERO4 | ------------------------------  //

export default function Hero4() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(false)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="relative z-30 w-full bg-card/80 px-3 py-4 max-md:w-full">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-row items-center justify-between gap-10">
            <div className="flex flex-row items-center gap-3">
              <svg
                className="size-8 text-lime-500"
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
                <span className="text-lime-500">App</span>
                <span className="text-slate-900 dark:text-slate-100">lee</span>
              </span>
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-full left-1/12 z-30 w-10/12"
                >
                  <div className="mt-2 flex flex-col gap-2 rounded-2xl bg-card p-4 shadow-[0_0_40px_-8px_#4680ff38] backdrop-blur-md">
                    {navLinks.map((item) => (
                      <a
                        key={item.name}
                        className="rounded-lg px-3 py-1.5 text-slate-600 hover:bg-lime-500/10 hover:text-lime-500 dark:text-slate-300"
                        href={item.href}
                      >
                        {item.name}
                      </a>
                    ))}
                    <Button className="rounded-full border-0 border-b-2 border-b-lime-700 bg-lime-500 shadow-[0_8px_10px_-2px_#8f8f8f6b] lg:flex">
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
                  className="rounded-full px-3 py-1.5 hover:bg-lime-500/10 hover:text-lime-500"
                  href={item.href}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <Button className="hidden rounded-full border-0 border-b-2 border-b-lime-700 bg-lime-500 shadow-[0_8px_10px_-2px_#8f8f8f6b] hover:translate-y-1 hover:opacity-90 md:flex">
              Buy Now
            </Button>
            <div className="flex md:hidden">
              <Button
                size="icon-lg"
                className="rounded-full bg-lime-500 shadow-[0_8px_10px_-2px_#8f8f8f6b]"
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
      </div>
      <div className="px-4 pb-3 sm:px-6 lg:px-10">
        <div className="relative min-h-150 overflow-hidden rounded-lg md:rounded-xl lg:h-[calc(100vh-90px)] lg:rounded-3xl">
          <div className="inset-0 min-h-140 bg-[url('https://cdn.uiable.com/block/img-home-4.png')] bg-cover max-lg:rounded-xl lg:absolute"></div>
          <div className="absolute inset-x-0 top-0 p-4 sm:p-6 lg:p-10">
            <div className="container mx-auto">
              <div className="flex max-w-150 flex-col items-start gap-2 rounded-lg bg-card/10 p-6 backdrop-blur-2xl sm:gap-4 md:rounded-xl lg:rounded-3xl lg:p-8">
                <h1 className="text-lg font-normal text-slate-900 sm:text-5xl dark:text-slate-100">
                  Premium Wooden Furniture
                </h1>
                <p className="text-base text-slate-600 lg:text-lg dark:text-slate-100">
                  Upgrade your interiors with high-quality wooden furniture
                  designed for durability and sophistication. Perfect for living
                  rooms, bedrooms, and modern office spaces.
                </p>
                <div className="flex flex-row flex-wrap gap-4">
                  <Button
                    size="lg"
                    className="rounded-full border-0 border-b-2 border-b-lime-700 bg-lime-500 shadow-[0_8px_10px_-2px_#8f8f8f6b] hover:translate-y-1 hover:opacity-90 lg:flex"
                  >
                    Explore Now
                  </Button>
                  <Button
                    size="lg"
                    className="rounded-full bg-card text-card-foreground hover:translate-y-1 hover:opacity-90"
                  >
                    Help Center
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="right-0 bottom-0 z-10 max-lg:w-full lg:absolute">
            <div className="absolute bottom-0 left-0 size-4 -translate-x-full rotate-180 text-card max-lg:hidden">
              <CurveIcon />
            </div>
            <div className="absolute top-0 right-0 size-4 -translate-y-full rotate-180 text-card max-lg:hidden">
              <CurveIcon />
            </div>
            <div className="rounded-tl-lg bg-card pt-4 md:rounded-tl-2xl lg:rounded-tl-3xl lg:pl-4">
              <div className="rounded-lg bg-lime-500 p-4 md:rounded-xl lg:rounded-3xl lg:px-20 lg:py-10">
                <div className="flex flex-col gap-4 text-white md:flex-row lg:gap-10">
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-semibold md:text-3xl">
                      975+
                    </span>
                    <span className="text-sm md:max-w-35">
                      Furniture & Home Décor Products
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-semibold md:text-3xl">
                      320+
                    </span>
                    <span className="text-sm md:max-w-35">
                      Interior Design Themes
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-semibold md:text-3xl">
                      462+
                    </span>
                    <span className="text-sm md:max-w-35">
                      Happy Clients Worldwide
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
