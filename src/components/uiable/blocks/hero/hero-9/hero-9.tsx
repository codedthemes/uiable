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
const Gallery = [
  { images: "https://cdn.uiable.com/block/dribbble.png" },
  { images: "https://cdn.uiable.com/block/facebook.png" },
  { images: "https://cdn.uiable.com/block/google.png" },
  { images: "https://cdn.uiable.com/block/webflow.png" },
  { images: "https://cdn.uiable.com/block/youtube.png" },
]
//  ------------------------------ | HERO 9 | ------------------------------  //
export default function Hero9() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(false)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="relative overflow-hidden">
      <div className="relative z-30 w-full bg-card/80 px-3 py-4 shadow-[0_0_40px_-8px_#4680ff38] shadow-violet-500/20 backdrop-blur-md max-md:w-full">
        <div className="container mx-auto max-w-300 px-6 lg:px-8">
          <div className="flex flex-row items-center justify-between gap-10">
            <div className="flex flex-row items-center gap-3">
              <svg
                className="size-8 stroke-violet-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 8V4H8" />
                <rect width="16" height="12" x="4" y="8" rx="2" />
                <path d="M2 14h2" />
                <path d="M20 14h2" />
                <path d="M15 13v2" />
                <path d="M9 13v2" />
              </svg>
              <span className="text-lg font-medium sm:text-xl">
                <span className="text-slate-900 dark:text-slate-100">
                  DreamFlux
                </span>
                <span className="text-violet-500">.AI</span>
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
                        className="rounded-lg px-3 py-1.5 text-slate-600 hover:bg-violet-500/10 hover:text-violet-500 dark:text-slate-300"
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
                  className="rounded-full px-3 py-1.5 hover:bg-violet-500/10 hover:text-violet-500"
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
                className="rounded-full bg-violet-500 shadow-[0_8px_10px_-2px_#8f8f8f6b]"
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
      <div className="relative z-20 overflow-hidden py-6 sm:py-16">
        <div className="absolute inset-0 z-10 bg-linear-to-t from-violet-200 via-card/50 to-violet-200 opacity-60 dark:from-violet-800 dark:to-violet-800"></div>
        <div className="absolute inset-0 z-20 flex animate-spin items-end justify-end opacity-50 blur-xl animation-duration-[20s]">
          <div className="absolute h-[100vw] w-screen rounded-full border-100 border-violet-100 dark:border-violet-900"></div>
          <div className="absolute h-[80vw] w-[80vw] rounded-full border-80 border-violet-200 dark:border-violet-800"></div>
          <div className="absolute h-[60vw] w-[60vw] rounded-full border-60 border-violet-300 dark:border-violet-700"></div>
        </div>
        <div className="relative z-30 container mx-auto px-6 lg:px-8">
          <div className="mx-auto flex max-w-200 flex-col items-center gap-4 text-center sm:gap-8">
            <div className="-z-10 flex items-center gap-1 rounded-full bg-violet-500/10 px-3 py-2 text-violet-500 backdrop-blur-md">
              <svg
                className="size-5 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M17.91 10.72h-3.09v-7.2c0-1.68-.91-2.02-2.02-.76l-.8.91-6.77 7.7c-.93 1.05-.54 1.91.86 1.91h3.09v7.2c0 1.68.91 2.02 2.02.76l.8-.91 6.77-7.7c.93-1.05.54-1.91-.86-1.91Z"
                  fill="currentColor"
                ></path>
              </svg>
              <span className="text-md font-semibold">New Release</span>
            </div>
            <h1 className="max-w-150 text-lg font-normal text-slate-900 sm:text-5xl dark:text-slate-100">
              Turn Your Ideas into Stunning Visuals with AI
            </h1>
            <p className="max-w-180 text-base text-slate-600 lg:text-lg dark:text-slate-100">
              Every great creation starts with an idea. Simply describe your
              vision, and our AI will generate breathtaking, high-resolution
              images tailored to your imagination. Whether you're designing,
              storytelling, or exploring new concepts, creativity is just a
              prompt away.
            </p>
            <div className="flex flex-row flex-wrap gap-4">
              <Button className="rounded-full border-0 border-b-2 border-b-violet-700 bg-violet-500 shadow-[0_8px_10px_-2px_#8f8f8f6b] hover:translate-y-1 hover:opacity-90 lg:flex">
                Start Creating
              </Button>
              <Button className="rounded-full bg-card text-card-foreground hover:translate-y-1 hover:opacity-90">
                Explore Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-30 w-full bg-card/80 px-5 py-10 shadow-[0_0_40px_-8px_#4680ff38] shadow-violet-500/20 backdrop-blur-md max-md:w-full">
        <div className="container mx-auto max-w-300 px-6 lg:px-8">
          <div className="flex flex-row flex-wrap items-center justify-center gap-10">
            {Gallery.map((item, index) => (
              <div
                className="opacity-50 grayscale-100 transition-all duration-300 ease-in-out hover:opacity-100 hover:grayscale-0"
                key={index}
              >
                <img src={item.images} alt="image" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
