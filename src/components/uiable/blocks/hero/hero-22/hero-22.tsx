"use client"

// next
import Link from "next/link"

// third-party
import { motion } from "framer-motion"

// assets
import { ChevronRight, Home } from "lucide-react"

interface PageHeaderProps {
  title: string
  breadcrumbTitle: string
}

const data: PageHeaderProps[] = [
  {
    breadcrumbTitle: "Home",
    title: "Big Things Are Coming",
  },
]

export default function Hero22() {
  return (
    <div className="relative overflow-hidden border-b border-slate-200 bg-slate-50 pt-24 pb-16 text-slate-900 transition-colors sm:pt-32 sm:pb-24 dark:border-white/10 dark:bg-[#0A0F1C] dark:text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('https://cdn.uiable.com/block/grid-pattern.svg')] bg-center opacity-[0.05]" />
      <div className="pointer-events-none absolute top-0 left-1/2 h-[500px] w-full -translate-x-1/2 bg-gradient-to-b from-blue-500/20 to-transparent opacity-30 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-6"
        >
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm font-medium text-slate-500 dark:text-slate-400">
            <Link
              href="/"
              className="flex items-center transition-colors hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Home className="mr-1 h-4 w-4" />
              Home
            </Link>
            <ChevronRight className="h-4 w-4 text-slate-400 dark:text-slate-500" />
            <span className="text-blue-600 dark:text-blue-400">
              {data.map((item) => item.breadcrumbTitle)}
            </span>
          </nav>

          {/* Title */}
          <h1 className="text-4xl leading-[1.1] font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:bg-gradient-to-br dark:from-white dark:to-slate-400 dark:bg-clip-text dark:text-transparent">
            {data.map((item) => item.title)}
          </h1>
        </motion.div>
      </div>
    </div>
  )
}
