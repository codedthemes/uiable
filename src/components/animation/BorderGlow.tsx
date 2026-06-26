"use client"

import { ReactNode, useCallback, useEffect, useRef, useState } from "react"

interface BorderGlowProps {
  children?: ReactNode
  className?: string
  edgeSensitivity?: number
  glowColor?: string
  backgroundColor?: string
  glowRadius?: number
  glowIntensity?: number
  coneSpread?: number
  animated?: boolean
  colors?: string[]
  fillOpacity?: number
}

function parseHSL(hslStr: string): { h: number; s: number; l: number } {
  const match = hslStr.match(/([\d.]+)\s*([\d.]+)%?\s*([\d.]+)%?/)
  if (!match) return { h: 221, s: 100, l: 64 }
  return {
    h: parseFloat(match[1]),
    s: parseFloat(match[2]),
    l: parseFloat(match[3]),
  }
}

function rgbToHsl(
  r: number,
  g: number,
  b: number
): { h: number; s: number; l: number } {
  r /= 255
  g /= 255
  b /= 255
  const max = Math.max(r, g, b),
    min = Math.min(r, g, b)
  const l = (max + min) / 2
  if (max === min) return { h: 0, s: 0, l: Math.round(l * 100) }
  const d = max - min
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
  let h = 0
  if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6
  else if (max === g) h = ((b - r) / d + 2) / 6
  else h = ((r - g) / d + 4) / 6
  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  }
}

function readPrimaryAsHSL(): string | null {
  if (typeof window === "undefined") return null
  const style = getComputedStyle(document.body)
  const primary = style.getPropertyValue("--primary").trim()
  if (!primary) return null

  const rgbMatch = primary.match(
    /rgb\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)\s*\)/
  )
  if (rgbMatch) {
    const { h, s, l } = rgbToHsl(+rgbMatch[1], +rgbMatch[2], +rgbMatch[3])
    return `${h} ${s} ${l}`
  }

  const hexMatch = primary.match(/^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i)
  if (hexMatch) {
    const { h, s, l } = rgbToHsl(
      parseInt(hexMatch[1], 16),
      parseInt(hexMatch[2], 16),
      parseInt(hexMatch[3], 16)
    )
    return `${h} ${s} ${l}`
  }

  return null
}

function buildBoxShadow(glowColor: string, intensity: number): string {
  const { h, s, l } = parseHSL(glowColor)
  const base = `${h}deg ${s}% ${l}%`
  const layers: [number, number, number, number, number, boolean][] = [
    [0, 0, 0, 1, 100, true],
    [0, 0, 1, 0, 60, true],
    [0, 0, 3, 0, 50, true],
    [0, 0, 6, 0, 40, true],
    [0, 0, 15, 0, 30, true],
    [0, 0, 25, 2, 20, true],
    [0, 0, 50, 2, 10, true],
    [0, 0, 1, 0, 60, false],
    [0, 0, 3, 0, 50, false],
    [0, 0, 6, 0, 40, false],
    [0, 0, 15, 0, 30, false],
    [0, 0, 25, 2, 20, false],
    [0, 0, 50, 2, 10, false],
  ]
  return layers
    .map(([x, y, blur, spread, alpha, inset]) => {
      const a = Math.min(alpha * intensity, 100)
      return `${inset ? "inset " : ""}${x}px ${y}px ${blur}px ${spread}px hsl(${base} / ${a}%)`
    })
    .join(", ")
}

function easeOutCubic(x: number) {
  return 1 - Math.pow(1 - x, 3)
}
function easeInCubic(x: number) {
  return x * x * x
}

interface AnimateOpts {
  start?: number
  end?: number
  duration?: number
  delay?: number
  ease?: (t: number) => number
  onUpdate: (v: number) => void
  onEnd?: () => void
}

function animateValue({
  start = 0,
  end = 100,
  duration = 1000,
  delay = 0,
  ease = easeOutCubic,
  onUpdate,
  onEnd,
}: AnimateOpts) {
  const t0 = performance.now() + delay
  function tick() {
    const elapsed = performance.now() - t0
    const t = Math.min(elapsed / duration, 1)
    onUpdate(start + (end - start) * ease(t))
    if (t < 1) requestAnimationFrame(tick)
    else if (onEnd) onEnd()
  }
  setTimeout(() => requestAnimationFrame(tick), delay)
}

const GRADIENT_POSITIONS = [
  "80% 55%",
  "69% 34%",
  "8% 6%",
  "41% 38%",
  "86% 85%",
  "82% 18%",
  "51% 4%",
]
const COLOR_MAP = [0, 1, 2, 0, 1, 2, 1]

function buildMeshGradients(colors: string[]): string[] {
  const gradients: string[] = []
  for (let i = 0; i < 7; i++) {
    const c = colors[Math.min(COLOR_MAP[i], colors.length - 1)]
    gradients.push(
      `radial-gradient(at ${GRADIENT_POSITIONS[i]}, ${c} 0px, transparent 50%)`
    )
  }
  gradients.push(`linear-gradient(${colors[0]} 0 100%)`)
  return gradients
}

export default function BorderGlow({
  children,
  className = "",
  edgeSensitivity = 30,
  glowColor,
  backgroundColor = "var(--primary)",
  glowRadius = 40,
  glowIntensity = 1.0,
  coneSpread = 25,
  animated = false,
  colors = ["var(--primary)", "var(--primary)", "var(--primary)"],
  fillOpacity = 0.35,
}: BorderGlowProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [cursorAngle, setCursorAngle] = useState(45)
  const [edgeProximity, setEdgeProximity] = useState(0)
  const [sweepActive, setSweepActive] = useState(false)
  const [internalGlowColor, setInternalGlowColor] = useState("221 100 64")
  const resolvedGlowColor = glowColor || internalGlowColor

  useEffect(() => {
    if (glowColor) return

    const update = () => {
      requestAnimationFrame(() => {
        const hsl = readPrimaryAsHSL()
        if (hsl) setInternalGlowColor(hsl)
      })
    }

    update()

    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (
          m.type === "attributes" &&
          (m.attributeName === "class" || m.attributeName === "style")
        ) {
          update()
        }
      }
      for (const m of mutations) {
        if (m.type === "childList") {
          update()
        }
      }
    })

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    })
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "style"],
    })
    observer.observe(document.head, { childList: true, subtree: true })

    return () => observer.disconnect()
  }, [glowColor])

  const getCenterOfElement = useCallback((el: HTMLElement) => {
    const { width, height } = el.getBoundingClientRect()
    return [width / 2, height / 2]
  }, [])

  const getEdgeProximity = useCallback(
    (el: HTMLElement, x: number, y: number) => {
      const [cx, cy] = getCenterOfElement(el)
      const dx = x - cx
      const dy = y - cy
      let kx = Infinity
      let ky = Infinity
      if (dx !== 0) kx = cx / Math.abs(dx)
      if (dy !== 0) ky = cy / Math.abs(dy)
      return Math.min(Math.max(1 / Math.min(kx, ky), 0), 1)
    },
    [getCenterOfElement]
  )

  const getCursorAngle = useCallback(
    (el: HTMLElement, x: number, y: number) => {
      const [cx, cy] = getCenterOfElement(el)
      const dx = x - cx
      const dy = y - cy
      if (dx === 0 && dy === 0) return 0
      const radians = Math.atan2(dy, dx)
      let degrees = radians * (180 / Math.PI) + 90
      if (degrees < 0) degrees += 360
      return degrees
    },
    [getCenterOfElement]
  )

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      const card = cardRef.current
      if (!card) return
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      setEdgeProximity(getEdgeProximity(card, x, y))
      setCursorAngle(getCursorAngle(card, x, y))
    },
    [getEdgeProximity, getCursorAngle]
  )

  useEffect(() => {
    if (!animated) return
    const angleStart = 110
    const angleEnd = 465
    setTimeout(() => setSweepActive(true), 0)
    setTimeout(() => setCursorAngle(angleStart), 0)

    animateValue({ duration: 500, onUpdate: (v) => setEdgeProximity(v / 100) })
    animateValue({
      ease: easeInCubic,
      duration: 1500,
      end: 50,
      onUpdate: (v) => {
        setCursorAngle((angleEnd - angleStart) * (v / 100) + angleStart)
      },
    })
    animateValue({
      ease: easeOutCubic,
      delay: 1500,
      duration: 2250,
      start: 50,
      end: 100,
      onUpdate: (v) => {
        setCursorAngle((angleEnd - angleStart) * (v / 100) + angleStart)
      },
    })
    animateValue({
      ease: easeInCubic,
      delay: 2500,
      duration: 1500,
      start: 100,
      end: 0,
      onUpdate: (v) => setEdgeProximity(v / 100),
      onEnd: () => setSweepActive(false),
    })
  }, [animated])

  const colorSensitivity = edgeSensitivity + 20
  const isVisible = isHovered || sweepActive
  const borderOpacity = Math.max(
    isVisible
      ? Math.max(
          0,
          (edgeProximity * 100 - colorSensitivity) / (100 - colorSensitivity)
        )
      : 0.12,
    0.12
  )
  const glowOpacity = isVisible
    ? Math.max(
        0,
        (edgeProximity * 100 - edgeSensitivity) / (100 - edgeSensitivity)
      )
    : 0.07

  const meshGradients = buildMeshGradients(colors)
  const borderBg = meshGradients.map((g) => `${g} border-box`)
  const fillBg = meshGradients.map((g) => `${g} padding-box`)
  const angleDeg = `${cursorAngle.toFixed(3)}deg`

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
      className={`rounded-[inherit]] relative isolate grid ${className}`}
      style={{
        background: backgroundColor,
        transform: "translate3d(0, 0, 0.01px)",
      }}
    >
      <div
        className="absolute inset-0 z-[-1] rounded-[inherit]"
        style={{
          background: [
            `linear-gradient(${backgroundColor} 0 100%) padding-box`,
            "linear-gradient(rgb(255 255 255 / 0%) 0% 100%) border-box",
            ...borderBg,
          ].join(", "),
          opacity: borderOpacity,
          maskImage: `conic-gradient(from ${angleDeg} at center, black ${coneSpread}%, transparent ${coneSpread + 15}%, transparent ${100 - coneSpread - 15}%, black ${100 - coneSpread}%)`,
          WebkitMaskImage: `conic-gradient(from ${angleDeg} at center, black ${coneSpread}%, transparent ${coneSpread + 15}%, transparent ${100 - coneSpread - 15}%, black ${100 - coneSpread}%)`,
          transition: isVisible
            ? "opacity 0.25s ease-out"
            : "opacity 0.75s ease-in-out",
        }}
      />

      <div
        className="absolute inset-0 z-[-1] rounded-[inherit]"
        style={
          {
            border: "1px solid transparent",
            background: fillBg.join(", "),
            maskImage: [
              "linear-gradient(to bottom, black, black)",
              "radial-gradient(ellipse at 50% 50%, black 40%, transparent 65%)",
              "radial-gradient(ellipse at 66% 66%, black 5%, transparent 40%)",
              "radial-gradient(ellipse at 33% 33%, black 5%, transparent 40%)",
              "radial-gradient(ellipse at 66% 33%, black 5%, transparent 40%)",
              "radial-gradient(ellipse at 33% 66%, black 5%, transparent 40%)",
              `conic-gradient(from ${angleDeg} at center, transparent 5%, black 15%, black 85%, transparent 95%)`,
            ].join(", "),
            WebkitMaskImage: [
              "linear-gradient(to bottom, black, black)",
              "radial-gradient(ellipse at 50% 50%, black 40%, transparent 65%)",
              "radial-gradient(ellipse at 66% 66%, black 5%, transparent 40%)",
              "radial-gradient(ellipse at 33% 33%, black 5%, transparent 40%)",
              "radial-gradient(ellipse at 66% 33%, black 5%, transparent 40%)",
              "radial-gradient(ellipse at 33% 66%, black 5%, transparent 40%)",
              `conic-gradient(from ${angleDeg} at center, transparent 5%, black 15%, black 85%, transparent 95%)`,
            ].join(", "),
            maskComposite: "subtract, add, add, add, add, add",
            WebkitMaskComposite:
              "source-out, source-over, source-over, source-over, source-over, source-over",
            opacity: borderOpacity * fillOpacity,
            mixBlendMode: "soft-light",
            transition: isVisible
              ? "opacity 0.25s ease-out"
              : "opacity 0.75s ease-in-out",
          } as React.CSSProperties
        }
      />

      <span
        className="pointer-events-none absolute z-1 rounded-[inherit]"
        style={
          {
            inset: `${-glowRadius}px`,
            maskImage: `conic-gradient(from ${angleDeg} at center, black 2.5%, transparent 10%, transparent 90%, black 97.5%)`,
            WebkitMaskImage: `conic-gradient(from ${angleDeg} at center, black 2.5%, transparent 10%, transparent 90%, black 97.5%)`,
            opacity: glowOpacity,
            mixBlendMode: "plus-lighter",
            transition: isVisible
              ? "opacity 0.25s ease-out"
              : "opacity 0.75s ease-in-out",
          } as React.CSSProperties
        }
      >
        <span
          className="absolute rounded-[inherit]"
          style={{
            inset: `${glowRadius}px`,
            boxShadow: buildBoxShadow(resolvedGlowColor, glowIntensity),
          }}
        />
      </span>

      <div className="relative z-1 flex flex-col overflow-auto p-0">
        {children}
      </div>
    </div>
  )
}
