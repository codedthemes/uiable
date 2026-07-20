"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Feature", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "About", href: "#" },
  { name: "Contact", href: "#" },
]
//  ------------------------------ | HERO1 | ------------------------------  //

export default function Hero1() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(false)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden pt-6 sm:pt-16">
      <div className="absolute inset-0 z-10 bg-linear-to-t from-card/50 to-sky-200 opacity-60 dark:to-sky-800"></div>
      <div className="absolute inset-0 z-20 flex animate-spin items-end justify-end opacity-50 blur-xl animation-duration-[20s]">
        <div className="absolute h-[100vw] w-screen rounded-full border-100 border-sky-100 dark:border-sky-900"></div>
        <div className="absolute h-[80vw] w-[80vw] rounded-full border-80 border-sky-200 dark:border-sky-800"></div>
        <div className="absolute h-[60vw] w-[60vw] rounded-full border-60 border-sky-300 dark:border-sky-700"></div>
      </div>
      <div className="relative z-30 container mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center gap-10">
          <div className="relative rounded-full bg-card/50 p-3 pl-6 shadow-[0_0_40px_-8px_#4680ff38] backdrop-blur-md max-md:w-full">
            <div className="flex flex-row items-center justify-between gap-10">
              <div className="flex flex-row items-center gap-3">
                <svg
                  className="size-8 fill-sky-500"
                  viewBox="0 0 256 256"
                  id="Flat"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.1">
                    <path d="M73.87573,111.39355l-.009-.03369L42.51636,148.98047a7.99958,7.99958,0,0,0-1.66358,6.85693l12.3628,55.63281a8,8,0,0,0,12.80713,4.51172L96,192C78.36523,161.44922,72.74268,134.47656,73.87573,111.39355Z" />
                  </g>
                  <g opacity="0.1">
                    <path d="M181.52239,110.6714l.009-.03369,31.35034,37.6206a7.99958,7.99958,0,0,1,1.66358,6.85693l-12.3628,55.63282a8,8,0,0,1-12.80712,4.51172l-29.9773-23.98194C177.03289,160.72706,182.65544,133.75441,181.52239,110.6714Z" />
                  </g>
                  <g>
                    <path d="M144,216H112a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Z" />
                    <circle cx="128" cy="96" r="12" />
                    <path d="M219.62891,143.85889l-30.23658-36.28418a124.52267,124.52267,0,0,0-7.98022-34.8833c-11.61719-30.21192-32.15625-49.999-43.36523-59.10547a16.07708,16.07708,0,0,0-20.07813-.0669C106.61328,22.61621,85.81055,42.38867,74.07617,72.605A122.76188,122.76188,0,0,0,65.979,108.32861L36.37109,143.85889A16.10066,16.10066,0,0,0,33.043,157.57275l12.36328,55.63282a15.98523,15.98523,0,0,0,25.61328,9.023L98.80566,200h58.38868l27.78515,22.22852a15.91184,15.91184,0,0,0,9.96485,3.51709,16.0905,16.0905,0,0,0,5.34668-.91944,15.90581,15.90581,0,0,0,10.30273-11.62012L222.957,157.57373A16.102,16.102,0,0,0,219.62891,143.85889ZM127.9668,26.01074C198.25391,83.126,169.43359,157.01074,155.25,184H100.67871C52.6709,96.27734,109.22559,41.02637,127.9668,26.01074ZM61.02539,209.73486l-12.36328-55.6333,17.92651-21.5122q3.40906,28.0371,19.14038,57.38281Zm133.94922,0-24.74976-19.7998q15.53064-29.55175,18.74341-57.87695l18.36963,22.04345Z" />
                  </g>
                </svg>
                <span className="text-lg font-medium text-slate-900 sm:text-xl dark:text-slate-100">
                  SaaSify
                </span>
              </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-0 z-20 w-full"
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
              <Button className="hidden rounded-full border-0 border-b-2 border-b-slate-900 bg-slate-800 shadow-[0_8px_10px_-2px_#8f8f8f6b] md:flex">
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
          <div className="mx-auto flex max-w-200 flex-col items-center gap-4 text-center sm:gap-8">
            <div className="-z-10 flex items-center gap-1 rounded-full bg-sky-500/10 px-3 py-2 text-sky-500 backdrop-blur-md">
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
              Work Better With Powerful Automation
            </h1>
            <p className="max-w-180 text-base text-slate-600 lg:text-lg dark:text-slate-100">
              Transform the way your team works with intelligent automation,
              seamless collaboration, and real-time project visibility.
              Eliminate bottlenecks, save time, and focus on the work that
              drives results.
            </p>
            <div className="flex flex-row flex-wrap gap-4">
              <Button className="rounded-full border-0 border-b-2 border-b-sky-700 bg-sky-500 shadow-[0_8px_10px_-2px_#8f8f8f6b] lg:flex">
                Explore Now
              </Button>
              <Button className="rounded-full bg-card text-card-foreground">
                Help Center
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src="/assets/images/block/img-hero-1.png"
              alt="Team meeting in a conference room"
              className="w-220 max-w-full rounded-t-md md:rounded-t-xl"
            />
            <img
              src="/assets/images/block/img-hero-rocket.png"
              alt="images"
              className="absolute -top-10 -right-10 max-w-25 rotate-12 animate-bounce animation-duration-[3s] md:max-w-40 lg:max-w-65"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
