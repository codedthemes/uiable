// types
import type { SVGAttributes } from "react"

//  ------------------------------ | FEATURE — FIGMA ORBIT RING | ------------------------------  //
// Orbit ring — exact path exported from Figma (Ellipse 71).

export default function FigmaOrbitRing(props: SVGAttributes<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 227 95" fill="none" aria-hidden {...props}>
      <g filter="url(#feature_orbit_glow)">
        <path
          d="M171.969 5.44488C172.094 5.43054 172.218 5.4162 172.342 5.40186C172.333 5.32325 172.322 5.24656 172.31 5.17189L172.111 5.39151C178.197 5.84084 184.258 6.57601 190.228 7.76925C202.07 10.4554 217.331 14.126 220.738 26.8755C222.119 38.9782 210.529 47.5527 201.252 53.9583C176.77 69.4776 148.331 77.6802 119.974 83.1287C99.8842 86.818 79.4141 88.8153 59.0196 88.0241C48.8138 87.5833 38.6036 86.4756 28.7719 83.7849C19.4291 81.0362 8.01211 76.7967 5.64472 66.5348C4.95595 49.2308 23.6123 39.863 37.1813 32.2262C42.6653 29.4064 48.3065 26.9031 54.0575 24.6249C54.0118 24.5086 53.966 24.3922 53.9203 24.2759C48.1493 26.5321 42.4855 29.0158 36.9738 31.8207C23.3599 39.4945 4.46971 48.5039 5.01138 66.6516C7.52809 77.47 19.1773 81.6725 28.5729 84.4982C38.4825 87.2405 48.737 88.3774 58.9847 88.8452C79.4601 89.6884 99.991 87.7231 120.144 84.0518C148.597 78.6211 177.103 70.4436 201.802 54.7933C211.124 48.2869 223.073 39.7509 221.631 26.711C217.774 13.0746 202.255 9.82014 190.343 7.18032C184.328 6.04569 178.241 5.38266 172.136 5.01435L171.897 4.99998L171.937 5.23397C171.95 5.3058 171.961 5.37594 171.969 5.44488Z"
          className="fill-foreground"
        />
      </g>
      <defs>
        <filter
          id="feature_orbit_glow"
          x="0"
          y="0"
          width="226.75"
          height="94.0391"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="2.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.206731 0 0 0 0 0.669471 0 0 0 0 1 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}
