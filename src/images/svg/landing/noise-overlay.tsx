import type { SVGAttributes } from "react"

//  ------------------------------ | SVG - NOISE OVERLAY | ------------------------------  //

export default function NoiseOverlay(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 273 200"
      fill="none"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <g opacity="0.5" filter="url(#filter0_n)">
        <rect width="273" height="200" fill="var(--primary)" />
      </g>

      <defs>
        <filter
          id="filter0_n"
          x="0"
          y="0"
          width="273"
          height="200"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.66666668653488159 0.66666668653488159"
            stitchTiles="stitch"
            numOctaves="3"
            result="noise"
            seed="9555"
          />
          <feColorMatrix
            in="noise"
            type="luminanceToAlpha"
            result="alphaNoise"
          />
          <feComponentTransfer in="alphaNoise" result="coloredNoise1">
            <feFuncA
              type="discrete"
              tableValues="0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0"
            />
          </feComponentTransfer>
          <feComposite
            operator="in"
            in2="shape"
            in="coloredNoise1"
            result="noise1Clipped"
          />
          <feFlood
            floodColor="color-mix(in srgb, var(--primary) 60%, white)"
            result="color1Flood"
          />
          <feComposite
            operator="in"
            in2="noise1Clipped"
            in="color1Flood"
            result="color1"
          />
          <feMerge>
            <feMergeNode in="shape" />
            <feMergeNode in="color1" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  )
}
