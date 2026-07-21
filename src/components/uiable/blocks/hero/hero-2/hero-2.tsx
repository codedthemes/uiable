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
//  ------------------------------ | HERO2 | ------------------------------  //
export default function Hero2() {
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
      <div className="absolute inset-0 bg-[url('/assets/images/block/img-home2-bg.jpg')] blur-sm"></div>
      <div className="absolute inset-0 z-10 bg-pink-600 opacity-70 dark:bg-pink-800"></div>
      <div className="relative z-30 w-full bg-card/80 px-3 py-4 shadow-[0_0_40px_-8px_#4680ff38] shadow-pink-500/20 backdrop-blur-md max-md:w-full">
        <div className="container mx-auto max-w-300 px-6 lg:px-8">
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
                <span className="text-pink-500">App</span>
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
                        className="rounded-lg px-3 py-1.5 text-slate-600 hover:bg-pink-500/10 hover:text-pink-500 dark:text-slate-300"
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
                  className="rounded-full px-3 py-1.5 hover:bg-pink-500/10 hover:text-pink-500"
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
                className="rounded-full bg-pink-500 shadow-[0_8px_10px_-2px_#8f8f8f6b]"
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
      <div className="relative z-20 container mx-auto flex items-center justify-center px-6 lg:px-8">
        <div className="container mx-auto max-w-300 py-14 sm:py-32">
          <div className="flex flex-col items-center gap-6 lg:flex-row">
            <div className="basis-full xl:basis-6/12">
              <div className="flex max-w-200 flex-col items-center gap-4 max-md:text-center sm:gap-8 md:items-start">
                <div className="-z-10 flex items-center gap-1 rounded-lg bg-white/10 px-4 py-2 text-white backdrop-blur-md">
                  <svg
                    className="size-5 text-white"
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
                <h1 className="max-w-140 text-lg font-normal text-slate-100 sm:text-4xl">
                  The Perfect Choice for your Mobile App Presentation
                </h1>
                <p className="lg:text-md max-w-130 text-base text-slate-100">
                  Transform the way your team works with intelligent automation,
                  seamless collaboration, and real-time project visibility.
                  Eliminate bottlenecks, save time, and focus on the work that
                  drives results.
                </p>
                <div className="flex flex-row flex-wrap gap-4">
                  <a
                    href="#"
                    className="hover:shadow-2xl"
                    aria-label="Download on the App Store"
                  >
                    <div className="flex w-38 items-center justify-center gap-1.5 rounded-lg border border-white/50 bg-slate-950 px-3 py-2 text-white md:w-42 md:px-4">
                      <div className="-ml-2 shrink-0">
                        <svg
                          className="size-8"
                          fill="#fff"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                        </svg>
                      </div>
                      <div className="grow">
                        <div className="flex flex-col items-start gap-0.5">
                          <span className="text-xs">
                            Download on{" "}
                            <span className="max-md:hidden">the</span>
                          </span>
                          <span className="text-md">App Store</span>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="hover:shadow-2xl"
                    aria-label="Get it on Google Play"
                  >
                    <div className="flex w-38 items-center justify-center gap-1.5 rounded-lg border border-white/50 bg-slate-950 px-3 py-2 text-white md:w-42 md:px-4">
                      <div className="-ml-2 shrink-0">
                        <svg
                          className="size-8"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <mask
                            id="mask0_87_8320"
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x="7"
                            y="3"
                            width="24"
                            height="26"
                          >
                            <path
                              d="M30.0484 14.4004C31.3172 15.0986 31.3172 16.9014 30.0484 17.5996L9.75627 28.7659C8.52052 29.4459 7 28.5634 7 27.1663L7 4.83374C7 3.43657 8.52052 2.55415 9.75627 3.23415L30.0484 14.4004Z"
                              fill="#C4C4C4"
                            />
                          </mask>
                          <g mask="url(#mask0_87_8320)">
                            <path
                              d="M7.63473 28.5466L20.2923 15.8179L7.84319 3.29883C7.34653 3.61721 7 4.1669 7 4.8339V27.1664C7 27.7355 7.25223 28.2191 7.63473 28.5466Z"
                              fill="url(#paint0_linear_87_8320)"
                            />
                            <path
                              d="M30.048 14.4003C31.3169 15.0985 31.3169 16.9012 30.048 17.5994L24.9287 20.4165L20.292 15.8175L24.6923 11.4531L30.048 14.4003Z"
                              fill="url(#paint1_linear_87_8320)"
                            />
                            <path
                              d="M24.9292 20.4168L20.2924 15.8179L7.63477 28.5466C8.19139 29.0232 9.02389 29.1691 9.75635 28.766L24.9292 20.4168Z"
                              fill="url(#paint2_linear_87_8320)"
                            />
                            <path
                              d="M7.84277 3.29865L20.2919 15.8177L24.6922 11.4533L9.75583 3.23415C9.11003 2.87878 8.38646 2.95013 7.84277 3.29865Z"
                              fill="url(#paint3_linear_87_8320)"
                            />
                          </g>
                          <defs>
                            <linearGradient
                              id="paint0_linear_87_8320"
                              x1="15.6769"
                              y1="10.874"
                              x2="7.07106"
                              y2="19.5506"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#00C3FF" />
                              <stop offset="1" stopColor="#1BE2FA" />
                            </linearGradient>
                            <linearGradient
                              id="paint1_linear_87_8320"
                              x1="20.292"
                              y1="15.8176"
                              x2="31.7381"
                              y2="15.8176"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#FFCE00" />
                              <stop offset="1" stopColor="#FFEA00" />
                            </linearGradient>
                            <linearGradient
                              id="paint2_linear_87_8320"
                              x1="7.36932"
                              y1="30.1004"
                              x2="22.595"
                              y2="17.8937"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#DE2453" />
                              <stop offset="1" stopColor="#FE3944" />
                            </linearGradient>
                            <linearGradient
                              id="paint3_linear_87_8320"
                              x1="8.10725"
                              y1="1.90137"
                              x2="22.5971"
                              y2="13.7365"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#11D574" />
                              <stop offset="1" stopColor="#01F176" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <div className="grow">
                        <div className="flex flex-col items-start gap-0.5">
                          <span className="text-xs uppercase">Get it on</span>
                          <span className="text-md">Google Play</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="basis-full xl:basis-6/12">
              <div className="relative flex items-center justify-center">
                <div className="absolute top-2/4 left-2/4 flex size-100 -translate-x-2/4 -translate-y-2/4 animate-spin items-center justify-center rounded-full border-2 border-white opacity-70 animation-duration-[40s] md:size-140">
                  <div className="relative flex size-80 animate-spin items-center justify-center rounded-full border-2 border-white animation-duration-[40s] md:size-120">
                    <div className="relative flex size-60 animate-spin items-center justify-center rounded-full border-2 border-white animation-duration-[20s] md:size-100">
                      <div className="absolute top-0 flex -translate-y-1 items-center justify-center">
                        <div className="size-2 rounded-full bg-white"></div>
                        <div className="absolute size-3 animate-ping rounded-full bg-white"></div>
                      </div>
                      <div className="absolute bottom-0 flex translate-y-1 items-center justify-center">
                        <div className="size-2 rounded-full bg-white"></div>
                        <div className="absolute size-3 animate-ping rounded-full bg-white"></div>
                      </div>
                      <div className="absolute left-0 flex -translate-x-1 items-center justify-center">
                        <div className="size-2 rounded-full bg-white"></div>
                        <div className="absolute size-3 animate-ping rounded-full bg-white"></div>
                      </div>
                      <div className="absolute right-0 flex translate-x-1 items-center justify-center">
                        <div className="size-2 rounded-full bg-white"></div>
                        <div className="absolute size-3 animate-ping rounded-full bg-white"></div>
                      </div>
                    </div>
                    <div className="absolute top-0 flex -translate-y-1 items-center justify-center">
                      <div className="size-2 rounded-full bg-white"></div>
                      <div className="absolute size-3 animate-ping rounded-full bg-white"></div>
                    </div>
                    <div className="absolute bottom-0 flex translate-y-1 items-center justify-center">
                      <div className="size-2 rounded-full bg-white"></div>
                      <div className="absolute size-3 animate-ping rounded-full bg-white"></div>
                    </div>
                    <div className="absolute left-0 flex -translate-x-1 items-center justify-center">
                      <div className="size-2 rounded-full bg-white"></div>
                      <div className="absolute size-3 animate-ping rounded-full bg-white"></div>
                    </div>
                    <div className="absolute right-0 flex translate-x-1 items-center justify-center">
                      <div className="size-2 rounded-full bg-white"></div>
                      <div className="absolute size-3 animate-ping rounded-full bg-white"></div>
                    </div>
                  </div>
                  <div className="absolute top-0 flex -translate-y-1 items-center justify-center">
                    <div className="size-2 rounded-full bg-white"></div>
                    <div className="absolute size-3 animate-ping rounded-full bg-white"></div>
                  </div>
                  <div className="absolute bottom-0 flex translate-y-1 items-center justify-center">
                    <div className="size-2 rounded-full bg-white"></div>
                    <div className="absolute size-3 animate-ping rounded-full bg-white"></div>
                  </div>
                  <div className="absolute left-0 flex -translate-x-1 items-center justify-center">
                    <div className="size-2 rounded-full bg-white"></div>
                    <div className="absolute size-3 animate-ping rounded-full bg-white"></div>
                  </div>
                  <div className="absolute right-0 flex translate-x-1 items-center justify-center">
                    <div className="size-2 rounded-full bg-white"></div>
                    <div className="absolute size-3 animate-ping rounded-full bg-white"></div>
                  </div>
                </div>
                <img
                  src="/assets/images/block/home-mob-img.png"
                  alt="Team meeting in a conference room"
                  className="relative z-10 w-110 max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
