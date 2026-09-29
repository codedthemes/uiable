"use client"

import { ReactNode } from "react"

// third-party
import { motion } from "framer-motion"

// project-imports
import DarkFav from "@/images/brand/dark-fav"
import LightFav from "@/images/brand/light-fav"
import BaseUi from "@/images/svg/icons/baseui"
import Shadcn from "@/images/svg/icons/shadcn"
import Tailwind from "@/images/svg/icons/tailwind"
import AnimationBg from "@/images/svg/landing/animation-bg"

// assets
import { IconBrandNextjs, IconBrandReact } from "@tabler/icons-react"

// Duration and ease definitions for orbital movement
const ORBIT_1_DURATION = 25 // Clockwise inner orbit
const ORBIT_2_DURATION = 35 // Counter-clockwise middle orbit
const ORBIT_3_DURATION = 45 // Clockwise outer orbit

type TechNodeProps = {
  icon: ReactNode
  startAngle: number
  orbitDuration: number
  orbitDirection: "clockwise" | "counter-clockwise"
}

function TechNode({
  icon,
  startAngle,
  orbitDuration,
  orbitDirection,
}: TechNodeProps) {
  const isClockwise = orbitDirection === "clockwise"

  // The parent orbit container will rotate by 360 or -360.
  // To keep the child upright, it needs to counter-rotate in the opposite direction.
  const initialRotation = -startAngle
  const animateRotation = isClockwise ? -startAngle - 360 : -startAngle + 360

  return (
    <div
      className="pointer-events-none absolute inset-0"
      style={{ transform: `rotate(${startAngle}deg)` }}
    >
      <div className="pointer-events-auto absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          whileHover={{
            scale: 1.15,
            boxShadow: "0 10px 25px rgba(59,130,246,0.15)",
          }}
          animate={{ rotate: animateRotation }}
          style={{ rotate: initialRotation }}
          transition={{
            rotate: {
              repeat: Infinity,
              duration: orbitDuration,
              ease: "linear",
            },
          }}
          className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-primary/10 text-foreground shadow-md backdrop-blur-[34px] transition-colors sm:h-10 sm:w-10 md:h-11 md:w-11 dark:border-slate-800 [&_svg]:size-4 sm:[&_svg]:size-5"
        >
          {icon}
        </motion.div>
      </div>
    </div>
  )
}

//  ------------------------------ | COMPONENTS TECH ORBITS | ------------------------------  //

export default function TechOrbit() {
  return (
    <div className="relative flex h-full min-h-[280px] w-full items-center justify-center overflow-hidden rounded-3xl py-6 select-none sm:min-h-[320px] md:min-h-[360px]">
      {/* SVG Background */}
      <AnimationBg className="top-auto right-[-10%] bottom-[-5%] left-auto max-h-full max-w-full" />

      {/* Orbit Container — focal point toward the lower-right, logo fully visible */}
      <div className="absolute right-[7%] bottom-[5%] flex items-center justify-center">
        {/* Orbit 3 (Outer - radius ~360px) */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: ORBIT_3_DURATION,
            ease: "linear",
          }}
          className="absolute flex h-[300px] w-[300px] items-center justify-center rounded-full sm:h-[380px] sm:w-[380px] md:h-[440px] md:w-[440px]"
        >
          <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-visible">
            <circle
              cx="50%"
              cy="50%"
              r="50%"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="4 4"
              className="text-muted-foreground"
            />
          </svg>
          <TechNode
            startAngle={90}
            orbitDuration={ORBIT_3_DURATION}
            orbitDirection="clockwise"
            icon={<Shadcn />}
          />

          <TechNode
            startAngle={135}
            orbitDuration={ORBIT_3_DURATION}
            orbitDirection="clockwise"
            icon={<Tailwind />}
          />

          <TechNode
            startAngle={180}
            orbitDuration={ORBIT_3_DURATION}
            orbitDirection="clockwise"
            icon={<IconBrandNextjs />}
          />

          <TechNode
            startAngle={210}
            orbitDuration={ORBIT_3_DURATION}
            orbitDirection="clockwise"
            icon={<Shadcn />}
          />

          <TechNode
            startAngle={270}
            orbitDuration={ORBIT_3_DURATION}
            orbitDirection="clockwise"
            icon={<Tailwind />}
          />

          <TechNode
            startAngle={320}
            orbitDuration={ORBIT_3_DURATION}
            orbitDirection="clockwise"
            icon={<IconBrandNextjs />}
          />
        </motion.div>

        {/* Orbit 2 (Middle - radius ~240px) */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            repeat: Infinity,
            duration: ORBIT_2_DURATION,
            ease: "linear",
          }}
          className="absolute flex h-[210px] w-[210px] items-center justify-center rounded-full sm:h-[260px] sm:w-[260px] md:h-[300px] md:w-[300px]"
        >
          <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-visible">
            <circle
              cx="50%"
              cy="50%"
              r="50%"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="4 4"
              className="text-muted-foreground"
            />
          </svg>
          {/* React */}
          <TechNode
            startAngle={90}
            orbitDuration={ORBIT_2_DURATION}
            orbitDirection="counter-clockwise"
            icon={<IconBrandReact />}
          />

          {/* TypeScript */}
          <TechNode
            startAngle={165}
            orbitDuration={ORBIT_2_DURATION}
            orbitDirection="counter-clockwise"
            icon={<BaseUi />}
          />

          <TechNode
            startAngle={245}
            orbitDuration={ORBIT_2_DURATION}
            orbitDirection="counter-clockwise"
            icon={<IconBrandNextjs />}
          />

          <TechNode
            startAngle={325}
            orbitDuration={ORBIT_2_DURATION}
            orbitDirection="counter-clockwise"
            icon={<Tailwind />}
          />
        </motion.div>

        {/* Orbit 1 (Inner - radius ~140px) */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: ORBIT_1_DURATION,
            ease: "linear",
          }}
          className="absolute flex h-[120px] w-[120px] items-center justify-center rounded-full sm:h-[150px] sm:w-[150px] md:h-[170px] md:w-[170px]"
        >
          <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-visible">
            <circle
              cx="50%"
              cy="50%"
              r="50%"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="4 4"
              className="text-muted-foreground"
            />
          </svg>
          {/* Next.js */}
          <TechNode
            startAngle={0}
            orbitDuration={ORBIT_1_DURATION}
            orbitDirection="clockwise"
            icon={<BaseUi />}
          />

          <TechNode
            startAngle={90}
            orbitDuration={ORBIT_1_DURATION}
            orbitDirection="clockwise"
            icon={<IconBrandNextjs />}
          />

          <TechNode
            startAngle={180}
            orbitDuration={ORBIT_1_DURATION}
            orbitDirection="clockwise"
            icon={<Tailwind />}
          />

          <TechNode
            startAngle={270}
            orbitDuration={ORBIT_1_DURATION}
            orbitDirection="clockwise"
            icon={<IconBrandReact />}
          />
        </motion.div>

        {/* Centre logo */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-20 flex size-12 items-center justify-center overflow-hidden rounded-full sm:size-14 md:size-16"
        >
          <LightFav
            width={64}
            height={64}
            className="block rounded-full text-white dark:hidden"
          />
          <DarkFav
            width={64}
            height={64}
            className="hidden rounded-full text-white dark:block"
          />
        </motion.div>
      </div>
    </div>
  )
}
