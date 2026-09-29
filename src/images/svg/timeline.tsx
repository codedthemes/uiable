// types
import type { SVGAttributes } from "react"

//  ------------------------------ | TIMELINE SVG ICON | ------------------------------  //

export default function TimelineSvg(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      width="320"
      height="180"
      viewBox="0 0 320 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient
          id="timeline_bg_glow"
          x1="160"
          y1="0"
          x2="160"
          y2="180"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--primary)" stopOpacity="0.12" />
          <stop offset="1" stopColor="var(--primary)" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="timeline_line_gradient"
          x1="90"
          y1="30"
          x2="90"
          y2="150"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--primary)" />
          <stop offset="0.6" stopColor="var(--primary)" stopOpacity="0.8" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      {/* Subtle background glow */}
      <rect width="320" height="180" rx="16" fill="url(#timeline_bg_glow)" />

      {/* Connecting Vertical Track */}
      <line
        x1="90"
        y1="38"
        x2="90"
        y2="142"
        stroke="url(#timeline_line_gradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Node 1: Completed */}
      <circle cx="90" cy="42" r="10" fill="var(--primary)" />
      <circle cx="90" cy="42" r="6" fill="#FFFFFF" />
      <path
        d="M87.5 42L89.2 43.8L92.8 40.2"
        stroke="var(--primary)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Card 1 */}
      <rect
        x="114"
        y="30"
        width="136"
        height="24"
        rx="6"
        fill="var(--primary)"
        fillOpacity="0.15"
        stroke="var(--primary)"
        strokeOpacity="0.3"
      />
      <rect x="124" y="38" width="56" height="4" rx="2" fill="var(--primary)" />
      <rect
        x="124"
        y="45"
        width="80"
        height="3"
        rx="1.5"
        fill="currentColor"
        fillOpacity="0.4"
      />
      <circle cx="238" cy="42" r="3" fill="var(--primary)" />

      {/* Node 2: In-Progress (Pulsing ring) */}
      <circle cx="90" cy="90" r="14" fill="var(--primary)" fillOpacity="0.2" />
      <circle cx="90" cy="90" r="10" fill="var(--primary)" />
      <circle cx="90" cy="90" r="4.5" fill="#FFFFFF" />

      {/* Card 2 */}
      <rect
        x="114"
        y="76"
        width="156"
        height="28"
        rx="6"
        fill="var(--primary)"
      />
      <rect x="124" y="85" width="70" height="4" rx="2" fill="#FFFFFF" />
      <rect
        x="124"
        y="93"
        width="100"
        height="3"
        rx="1.5"
        fill="#FFFFFF"
        fillOpacity="0.75"
      />
      <rect
        x="238"
        y="83"
        width="22"
        height="14"
        rx="4"
        fill="#FFFFFF"
        fillOpacity="0.2"
      />

      {/* Node 3: Pending */}
      <circle
        cx="90"
        cy="138"
        r="9"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.3"
        strokeWidth="2"
      />
      <circle cx="90" cy="138" r="4" fill="currentColor" fillOpacity="0.3" />

      {/* Card 3 */}
      <rect
        x="114"
        y="126"
        width="120"
        height="24"
        rx="6"
        fill="currentColor"
        fillOpacity="0.05"
        stroke="currentColor"
        strokeOpacity="0.15"
      />
      <rect
        x="124"
        y="134"
        width="48"
        height="4"
        rx="2"
        fill="currentColor"
        fillOpacity="0.3"
      />
      <rect
        x="124"
        y="141"
        width="72"
        height="3"
        rx="1.5"
        fill="currentColor"
        fillOpacity="0.2"
      />
    </svg>
  )
}
