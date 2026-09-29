// types
import type { SVGAttributes } from "react"

//  ------------------------------ | SVG - FEATURE LINES | ------------------------------  //

//  ------------------------------ | FEATURELINES | ------------------------------  //

export default function FeatureLines(props: SVGAttributes<SVGElement>) {
  return (
    <svg viewBox="0 0 600 400" fill="none" aria-hidden="true" {...props}>
      <path
        d="M180 170 C 250 140, 320 140, 390 210"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="M110 140 C 150 120, 170 110, 210 90"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="6 6"
        strokeLinecap="round"
      />
    </svg>
  )
}
