"use client"

// third party
import { motion } from "framer-motion"

// project imports
import { AnimationLogo, AnimationBg } from "@/images/svg/landing"

// ------------------------------ | MOTION VISUAL | ------------------------------ //

export default function MotionVisual() {
  const pathString =
    "M0 17.2207C7.82264 12.1804 16.564 8.57792 25.5551 6.04752C106.333 -15.0859 180.464 43.3414 226.918 104.937C229.638 108.479 232.371 111.88 235.117 115.146C285.46 184.808 392.423 206.118 460.93 152.12C468.597 146.733 475.878 140.769 482.5 134.221C475.694 140.576 468.272 146.324 460.501 151.493C390.622 203.134 288.015 180.915 238.179 112.572C235.471 109.352 232.772 105.997 230.082 102.504C183.36 40.3955 106.317 -18.2241 25.3407 5.3184C16.3571 8.09598 7.67585 11.9568 0 17.2207Z"

  return (
    <div className="relative flex h-full min-h-[380px] w-full items-center justify-center overflow-hidden rounded-3xl border border-border/40 py-10 select-none sm:min-h-[440px] md:min-h-[500px]">
      {/* SVG Background */}
      <AnimationBg className="top-1/2 left-1/2 max-h-full max-w-full -translate-x-1/2 -translate-y-1/2 p-4 sm:p-8 md:p-12" />

      <svg
        viewBox="-20 -60 520 320"
        className="pointer-events-none absolute inset-0 h-full w-full overflow-visible px-4 md:px-12"
      >
        <svg
          x="0"
          y="-55"
          width="124"
          height="74"
          viewBox="0 0 124 74"
          fill="none"
        >
          <path
            d="M123.508 2.14475L115.63 4.76837e-07L113.485 7.87824L121.363 10.023L123.508 2.14475ZM0.496521 72.5115L0.993056 73.3795L118.993 5.87951L118.497 5.0115L118 4.14348L-1.39773e-05 71.6435L0.496521 72.5115Z"
            fill="var(--border)"
          />
        </svg>

        <svg
          x="380.5"
          y="134.2"
          width="103"
          height="93"
          viewBox="0 0 103 93"
          fill="none"
        >
          <path
            d="M-3.05176e-05 92.0912L8.15189 92.5526L8.61331 84.4007L0.461395 83.9393L-3.05176e-05 92.0912ZM102.307 0.745941L101.641 0L3.64062 87.5L4.30664 88.2459L4.97266 88.9919L102.973 1.49188L102.307 0.745941Z"
            fill="var(--border)"
          />
        </svg>

        <path d={pathString} fill="var(--foreground)" />
        <svg
          x="-10"
          y="7"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <circle
            cx="10"
            cy="10"
            r="9"
            fill="var(--card)"
            stroke="var(--border)"
            strokeWidth="2"
          />
        </svg>

        <svg
          x="472.5"
          y="124.2"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <circle
            cx="10"
            cy="10"
            r="9"
            transform="rotate(180 10 10)"
            fill="var(--card)"
            stroke="var(--border)"
            strokeWidth="2"
          />
        </svg>

        {/* Animated UI Badge */}
        <motion.g
          animate={{
            offsetDistance: ["0%", "100%"],
            scale: [1, 1.4, 0.8, 1.2, 0.9, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          style={
            {
              offsetPath: `path('${pathString}')`,
              offsetRotate: "0deg",
            } as React.CSSProperties
          }
        >
          <g transform="translate(-24, -24)" className="pointer-events-auto">
            <AnimationLogo />
          </g>
        </motion.g>
      </svg>
    </div>
  )
}
