// types
import type { SVGAttributes } from "react"

//  ------------------------------ | TREE VIEW SVG ICON | ------------------------------  //

export default function TreeViewSvg(props: SVGAttributes<SVGElement>) {
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
          id="tree_bg_glow"
          x1="160"
          y1="0"
          x2="160"
          y2="180"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--primary)" stopOpacity="0.1" />
          <stop offset="1" stopColor="var(--primary)" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="tree_line_grad"
          x1="80"
          y1="34"
          x2="80"
          y2="150"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--primary)" stopOpacity="0.8" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0.15" />
        </linearGradient>
      </defs>

      {/* Background card */}
      <rect width="320" height="180" rx="16" fill="url(#tree_bg_glow)" />

      {/* Guide Lines */}
      {/* Root line */}
      <path
        d="M 68 46 V 146"
        stroke="url(#tree_line_grad)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Branch to Child 1 (Folder) */}
      <path
        d="M 68 82 H 88"
        stroke="var(--primary)"
        strokeOpacity="0.6"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Branch to Child 2 (File) */}
      <path
        d="M 68 116 H 88"
        stroke="currentColor"
        strokeOpacity="0.25"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Branch to Child 3 (File) */}
      <path
        d="M 68 146 H 88"
        stroke="currentColor"
        strokeOpacity="0.2"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Nested line inside Child 1 */}
      <path
        d="M 112 88 V 104 H 124"
        stroke="var(--primary)"
        strokeOpacity="0.4"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Node 1: Root Folder (src) */}
      {/* Chevron */}
      <path
        d="M 52 38 L 56 42 L 52 46"
        stroke="var(--primary)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="rotate(90 54 42)"
      />
      {/* Folder Icon */}
      <rect
        x="62"
        y="34"
        width="16"
        height="14"
        rx="2.5"
        fill="var(--primary)"
        fillOpacity="0.2"
        stroke="var(--primary)"
        strokeWidth="1.2"
      />
      <path
        d="M 62 38 H 70 L 72 40 H 78 V 48 H 62 Z"
        fill="var(--primary)"
        fillOpacity="0.4"
      />
      {/* Label & Active Card */}
      <rect
        x="86"
        y="31"
        width="180"
        height="22"
        rx="5"
        fill="var(--primary)"
        fillOpacity="0.12"
        stroke="var(--primary)"
        strokeOpacity="0.3"
        strokeWidth="1"
      />
      <rect x="94" y="39" width="48" height="6" rx="2" fill="var(--primary)" />
      <rect
        x="236"
        y="36"
        width="22"
        height="12"
        rx="3"
        fill="var(--primary)"
        fillOpacity="0.25"
      />

      {/* Node 2: Subfolder (components) */}
      {/* Chevron */}
      <path
        d="M 74 78 L 78 82 L 74 86"
        stroke="var(--primary)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="rotate(90 76 82)"
      />
      {/* Folder Icon */}
      <rect
        x="90"
        y="74"
        width="14"
        height="12"
        rx="2"
        fill="var(--primary)"
        fillOpacity="0.2"
        stroke="var(--primary)"
        strokeWidth="1.2"
      />
      {/* Label Card */}
      <rect
        x="110"
        y="71"
        width="140"
        height="22"
        rx="5"
        fill="currentColor"
        fillOpacity="0.04"
      />
      <rect
        x="118"
        y="79"
        width="64"
        height="6"
        rx="2"
        fill="currentColor"
        fillOpacity="0.7"
      />

      {/* Node 2.1: Nested File (button.tsx) */}
      <rect
        x="128"
        y="99"
        width="10"
        height="12"
        rx="1.5"
        fill="none"
        stroke="var(--primary)"
        strokeWidth="1.2"
      />
      <line
        x1="131"
        y1="103"
        x2="135"
        y2="103"
        stroke="var(--primary)"
        strokeWidth="1"
      />
      <line
        x1="131"
        y1="106"
        x2="134"
        y2="106"
        stroke="var(--primary)"
        strokeWidth="1"
      />
      <rect
        x="144"
        y="99"
        width="80"
        height="12"
        rx="3"
        fill="var(--primary)"
        fillOpacity="0.15"
      />
      <rect
        x="150"
        y="103"
        width="46"
        height="4"
        rx="1.5"
        fill="var(--primary)"
      />

      {/* Node 3: File (globals.css) */}
      <rect
        x="90"
        y="110"
        width="12"
        height="14"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.4"
        strokeWidth="1.2"
      />
      <rect
        x="108"
        y="112"
        width="60"
        height="6"
        rx="2"
        fill="currentColor"
        fillOpacity="0.5"
      />
      <rect
        x="174"
        y="114"
        width="28"
        height="4"
        rx="1.5"
        fill="currentColor"
        fillOpacity="0.2"
      />

      {/* Node 4: File (package.json) */}
      <rect
        x="90"
        y="140"
        width="12"
        height="14"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.3"
        strokeWidth="1.2"
      />
      <rect
        x="108"
        y="142"
        width="76"
        height="6"
        rx="2"
        fill="currentColor"
        fillOpacity="0.4"
      />
    </svg>
  )
}
