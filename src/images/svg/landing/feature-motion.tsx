// types
import type { SVGAttributes } from "react"

// project-imports
import DarkFav from "@/images/brand/dark-fav"
import LightFav from "@/images/brand/light-fav"

//  ------------------------------ | FEATURE — SMOOTH ANIMATIONS WITH MOTION | ------------------------------  //

const FIGMA_CURVE =
  "C68.4968 143.61 260.141 -19.547 215.92 192.498C196.882 283.789 33.6447 159.574 236.423 159.574C305.742 159.574 326.244 177.533 370.667 203.972"
const MOTION_PATH = `M-58 152L-0.333496 149.098${FIGMA_CURVE}L424 234`
const VISIBLE_PATH = `M-0.333496 149.098${FIGMA_CURVE}`

/** seconds for one full loop — bump up to slow the whole thing down */
const MOTION_DURATION = 7

export default function FeatureMotion(props: SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 371 258"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <text
        className="fill-foreground"
        fontFamily="Inter, sans-serif"
        fontSize="20"
        fontWeight="500"
        letterSpacing="0"
        style={{ whiteSpace: "pre" }}
      >
        <tspan x="185.5" y="45" textAnchor="middle">
          Smooth animations with motion
        </tspan>
      </text>

      <path
        d={VISIBLE_PATH}
        className="text-black/20 dark:text-white/25"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="4 4"
      />

      {/* animated favicon — rides the full loop */}
      <g className="motion-reduce:hidden">
        <animateMotion
          dur={`${MOTION_DURATION}s`}
          repeatCount="indefinite"
          calcMode="linear"
          rotate="0"
          path={MOTION_PATH}
        />
        <Favicon />
      </g>

      {/* reduced-motion: favicon parked on the curve, no animation */}
      <g className="hidden motion-reduce:block" transform="translate(103 88)">
        <Favicon />
      </g>
    </svg>
  )
}

function Favicon() {
  return (
    <foreignObject
      x="-25"
      y="-25"
      width="50"
      height="50"
      style={{ overflow: "visible" }}
    >
      <div className="size-[50px] overflow-hidden rounded-full shadow-[0_10px_24px_rgba(16,24,40,0.28)]">
        <LightFav
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
          className="block size-full dark:hidden"
        />
        <DarkFav
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
          className="hidden size-full dark:block"
        />
      </div>
    </foreignObject>
  )
}
