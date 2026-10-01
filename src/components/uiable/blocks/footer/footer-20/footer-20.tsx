"use client"

import React from "react"

// next
import Link from "next/link"

// third-party
import { motion, Variants } from "framer-motion"

// assets
import { ArrowRight } from "lucide-react"

export default function Footer20() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <footer className="dark relative z-10 overflow-hidden border-t border-white/5 bg-[#030208] pt-24 pb-8 text-white">
      {/* Background Enhancements */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_10%,transparent_100%)] bg-[size:4rem_4rem]"></div>
      <div className="absolute top-0 left-1/2 -z-10 h-[2px] w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-purple-500/70 to-transparent"></div>
      <div className="pointer-events-none absolute top-0 left-1/2 -z-10 h-[300px] w-[800px] -translate-x-1/2 rounded-[100%] bg-purple-600/15 blur-[120px]"></div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-20 grid grid-cols-2 gap-12 md:grid-cols-5 lg:gap-16 xl:gap-24"
        >
          {/* Brand & Mission */}
          <motion.div
            variants={itemVariants}
            className="col-span-2 flex flex-col justify-between"
          >
            <div>
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-gradient-to-br from-purple-600 via-indigo-600 to-fuchsia-600 shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                  <span className="text-2xl font-black text-white">W</span>
                </div>
                <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-4xl font-black tracking-tighter text-transparent">
                  Wope.
                </span>
              </div>
              <p className="mb-10 max-w-sm text-lg leading-relaxed font-light text-slate-400">
                The absolute smartest way to manage your SEO. Outrank
                competitors with AI-driven insights and automated workflows.
              </p>
            </div>

            <div className="mt-auto flex items-center gap-5">
              {[
                <svg
                  key="facebook"
                  className="relative z-10 h-5 w-5 transition-transform group-hover:scale-110"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>,
                <svg
                  key="instagram"
                  className="relative z-10 h-5 w-5 transition-transform group-hover:scale-110"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>,
                <svg
                  key="x"
                  className="relative z-10 h-5 w-5 transition-transform group-hover:scale-110"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>,
                <svg
                  key="dribbble"
                  className="relative z-10 h-5 w-5 transition-transform group-hover:scale-110"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
                  <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
                  <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
                </svg>,
              ].map((svgNode, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/[0.03] text-slate-400 shadow-xl transition-all hover:border-purple-500/50 hover:text-white"
                >
                  <span className="absolute inset-0 translate-y-full bg-gradient-to-t from-purple-600/40 to-transparent transition-transform duration-300 group-hover:translate-y-0"></span>
                  {svgNode}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Columns */}
          <motion.div variants={itemVariants}>
            <h4 className="mb-8 bg-gradient-to-r from-white to-slate-500 bg-clip-text text-lg font-bold tracking-wide text-transparent uppercase">
              Product
            </h4>
            <ul className="space-y-5 text-base font-medium text-slate-400">
              {[
                "Features",
                "Pricing",
                "API Access",
                "Download App",
                "Integrations",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="group flex items-center transition-colors hover:text-purple-400"
                  >
                    {item}{" "}
                    <ArrowRight className="ml-2 h-4 w-4 -translate-x-3 text-purple-400 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="mb-8 bg-gradient-to-r from-white to-slate-500 bg-clip-text text-lg font-bold tracking-wide text-transparent uppercase">
              Company
            </h4>
            <ul className="space-y-5 text-base font-medium text-slate-400">
              <li>
                <Link
                  href="#"
                  className="group flex items-center transition-colors hover:text-purple-400"
                >
                  About Us{" "}
                  <ArrowRight className="ml-2 h-4 w-4 -translate-x-3 text-purple-400 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="group flex items-center transition-colors hover:text-purple-400"
                >
                  Careers{" "}
                  <span className="ml-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-3 py-1 text-[10px] font-bold text-white shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                    HIRING
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="group flex items-center transition-colors hover:text-purple-400"
                >
                  Blog{" "}
                  <ArrowRight className="ml-2 h-4 w-4 -translate-x-3 text-purple-400 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="group flex items-center transition-colors hover:text-purple-400"
                >
                  Press Kit{" "}
                  <ArrowRight className="ml-2 h-4 w-4 -translate-x-3 text-purple-400 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="mb-8 bg-gradient-to-r from-white to-slate-500 bg-clip-text text-lg font-bold tracking-wide text-transparent uppercase">
              Legal
            </h4>
            <ul className="space-y-5 text-base font-medium text-slate-400">
              {[
                "Terms of Service",
                "Privacy Policy",
                "Help Center",
                "Contact Us",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="group flex items-center transition-colors hover:text-purple-400"
                  >
                    {item}{" "}
                    <ArrowRight className="ml-2 h-4 w-4 -translate-x-3 text-purple-400 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Massive Background Brand Text */}
        <div className="relative mt-16 mb-8 flex justify-center overflow-hidden md:mt-24 md:mb-12">
          <span className="pointer-events-none bg-gradient-to-b from-white/[0.08] to-transparent bg-clip-text text-[28vw] leading-none font-black tracking-tighter text-transparent select-none md:text-[20vw] lg:text-[15vw]">
            WOPE
          </span>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-8 text-center md:flex-row md:gap-0 md:text-left"
        >
          <p className="text-sm font-medium text-slate-500">
            &copy; {new Date().getFullYear()} Wope Inc. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-slate-500 md:gap-8">
            <Link
              href="#"
              className="underline-offset-4 transition-all hover:text-white hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="underline-offset-4 transition-all hover:text-white hover:underline"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="underline-offset-4 transition-all hover:text-white hover:underline"
            >
              Cookie Settings
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
