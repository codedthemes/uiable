"use client"
import React, { useEffect, useRef } from "react"

// shadcn
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// third-party
import { motion, type Variants } from "framer-motion"
import { Renderer, Program, Mesh, Triangle } from "ogl"

// project-imports
import SpotlightCard from "@/components/animation/SpotlightCard"

const testimonials = [
  {
    name: "Sarah Connor",
    avatar: "https://cdn.uiable.com/block/profile-1.png",
    position: "Lead DevOps Engineer",
    description:
      "Deployment has never been this effortless. Our team now ships updates faster with a smooth, reliable workflow every single time.",
    rating: 5,
  },
  {
    name: "Sophia Martinez",
    avatar: "https://cdn.uiable.com/block/profile-5.png",
    position: "Director of Security",
    description:
      "Security features exceeded our expectations. Advanced protection and continuous monitoring give our organization complete confidence.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    avatar: "https://cdn.uiable.com/block/profile-2.png",
    position: "Product Manager at TechFlow",
    description:
      "Automation eliminated repetitive work across our team, allowing us to focus on meaningful tasks while improving productivity every week.",
    rating: 4,
  },
  {
    name: "Marcus Aurelius",
    avatar: "https://cdn.uiable.com/block/profile-3.png",
    position: "Chief Operations Officer",
    description:
      "The reporting dashboard provides clear project visibility with actionable insights, making strategic planning faster more effective.",
    rating: 5,
  },
  {
    name: "Aria Montgomery",
    avatar: "https://cdn.uiable.com/block/profile-4.png",
    position: "Senior UX Designer",
    description:
      "Design collaboration is finally seamless with shared workspaces, organized feedback, and version history that keeps everyone aligned.",
    rating: 5,
  },
  {
    name: "James Wilson",
    avatar: "https://cdn.uiable.com/block/profile-6.png",
    position: "Integration Architect",
    description:
      "Connecting our existing software stack was quick and painless. Excellent documentation made every integration simple and dependable.",
    rating: 4,
  },
]

// shadcn
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
}

// lightfall props
export interface LightfallProps {
  className?: string
  dpr?: number
  paused?: boolean
  colors?: string[]
  backgroundColor?: string
  speed?: number
  streakCount?: number
  streakWidth?: number
  streakLength?: number
  glow?: number
  density?: number
  twinkle?: number
  zoom?: number
  backgroundGlow?: number
  opacity?: number
  mouseInteraction?: boolean
  mouseStrength?: number
  mouseRadius?: number
  mouseDampening?: number
  mixBlendMode?: string
}

type RGB = [number, number, number]

const MAX_COLORS = 8

const hexToRGB = (hex: string): RGB => {
  const c = hex.replace("#", "").padEnd(6, "0")
  const r = parseInt(c.slice(0, 2), 16) / 255
  const g = parseInt(c.slice(2, 4), 16) / 255
  const b = parseInt(c.slice(4, 6), 16) / 255
  return [r, g, b]
}

const prepColors = (input?: string[]) => {
  const base = (
    input && input.length ? input : ["#A6C8FF", "#5227FF", "#FF9FFC"]
  ).slice(0, MAX_COLORS)
  const count = base.length
  const arr: RGB[] = []
  for (let i = 0; i < MAX_COLORS; i++)
    arr.push(hexToRGB(base[Math.min(i, base.length - 1)]))
  const avg: RGB = [0, 0, 0]
  for (let i = 0; i < count; i++) {
    avg[0] += arr[i][0]
    avg[1] += arr[i][1]
    avg[2] += arr[i][2]
  }
  avg[0] /= count
  avg[1] /= count
  avg[2] /= count
  return { arr, count, avg }
}

const vertex = `
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`

const fragment = `
precision highp float;

uniform vec3  iResolution;
uniform vec2  iMouse;
uniform float iTime;

uniform vec3  uColor0;
uniform vec3  uColor1;
uniform vec3  uColor2;
uniform vec3  uColor3;
uniform vec3  uColor4;
uniform vec3  uColor5;
uniform vec3  uColor6;
uniform vec3  uColor7;
uniform int   uColorCount;

uniform vec3  uBgColor;
uniform vec3  uMouseColor;
uniform float uSpeed;
uniform int   uStreakCount;
uniform float uStreakWidth;
uniform float uStreakLength;
uniform float uGlow;
uniform float uDensity;
uniform float uTwinkle;
uniform float uZoom;
uniform float uBgGlow;
uniform float uOpacity;
uniform float uMouseEnabled;
uniform float uMouseStrength;
uniform float uMouseRadius;

varying vec2 vUv;

vec3 palette(float h) {
  int count = uColorCount;
  if (count < 1) count = 1;
  int idx = int(floor(clamp(h, 0.0, 0.999999) * float(count)));
  if (idx <= 0) return uColor0;
  if (idx == 1) return uColor1;
  if (idx == 2) return uColor2;
  if (idx == 3) return uColor3;
  if (idx == 4) return uColor4;
  if (idx == 5) return uColor5;
  if (idx == 6) return uColor6;
  return uColor7;
}

vec3 tanhv(vec3 x) {
  vec3 e = exp(-2.0 * x);
  return (1.0 - e) / (1.0 + e);
}

vec2 sceneC(vec2 frag, vec2 r) {
  vec2 P = (frag + frag - r) / r.x;
  float z = 0.0;
  float d = 1e3;
  vec4 O = vec4(0.0);
  for (int k = 0; k < 39; k++) {
    if (d <= 1e-4) break;
    O = z * normalize(vec4(P, uZoom, 0.0)) - vec4(0.0, 4.0, 1.0, 0.0) / 4.5;
    d = 1.0 - sqrt(length(O * O));
    z += d;
  }
  return vec2(O.x, atan(O.z, O.y));
}

void mainImage(out vec4 o, vec2 C) {
  vec2 r = iResolution.xy;
  vec2 uv0 = (C + C - r) / r.x;
  float T = 0.1 * iTime * uSpeed + 9.0;
  float angRings = max(1.0, floor(6.28318530718 * max(uDensity, 0.05) + 0.5));
  vec2 Y = vec2(5e-3, 6.28318530718 / angRings);

  vec2 c0 = sceneC(C, r);
  vec2 cdx = sceneC(C + vec2(1.0, 0.0), r);
  vec2 cdy = sceneC(C + vec2(0.0, 1.0), r);
  vec2 dCx = cdx - c0;
  vec2 dCy = cdy - c0;
  dCx.y -= 6.28318530718 * floor(dCx.y / 6.28318530718 + 0.5);
  dCy.y -= 6.28318530718 * floor(dCy.y / 6.28318530718 + 0.5);
  vec2 fw = abs(dCx) + abs(dCy);
  C = c0;

  vec2 P = vec2(2.0, 1.0) * uv0 - (r / r.x) * vec2(0.0, 1.0);
  vec4 O = vec4(uBgColor * 90.0 * uBgGlow / (1e3 * dot(P, P) + 6.0), 0.0);

  float mGlow = 0.0;
  if (uMouseEnabled > 0.5) {
    vec2 mN = (iMouse + iMouse - r) / r.x;
    float md = length(uv0 - mN);
    mGlow = exp(-md * md / max(uMouseRadius * uMouseRadius, 1e-4)) * uMouseStrength;
    O.rgb += uMouseColor * mGlow * 0.25;
  }

  float zr = 5e-4 * uStreakWidth;
  vec2 rr = vec2(max(length(fw), 1e-5));
  float tail = 19.0 / max(uStreakLength, 0.05);

  for (int m = 0; m < 16; m++) {
    if (m >= uStreakCount) break;
    float jf = float(m) + 1.0;
    float ic = fract(sin(dot(vec2(jf, floor(C.x / Y.x + 0.5)), vec2(7.0, 11.0)) * 73.0));
    vec2 Pp = C - (T + T * ic) * vec2(0.0, 1.0);
    Pp -= floor(Pp / Y + 0.5) * Y;
    float h = fract(8663.0 * ic);
    vec3 col = palette(h);
    float weight = mix(1.5, 1.0 + sin(T + 7.0 * h + 4.0), uTwinkle);
    weight *= (1.0 + mGlow * 2.0);
    vec2 inner = vec2(length(max(Pp, vec2(-1.0, 0.0))), length(Pp) - zr) - zr;
    vec2 sm = vec2(1.0) - smoothstep(-rr, rr, inner);
    O.rgb += dot(sm, vec2(exp(tail * Pp.y), 3.0)) * col * weight;
    C.x += Y.x / 8.0;
  }

  vec3 colr = sqrt(tanhv(max(O.rgb * uGlow - vec3(0.04, 0.08, 0.02), 0.0)));
  o = vec4(colr, uOpacity);
}

void main() {
  vec4 color;
  mainImage(color, vUv * iResolution.xy);
  gl_FragColor = color;
}
`

const Lightfall: React.FC<LightfallProps> = ({
  className,
  dpr,
  paused = false,
  colors = ["#A6C8FF", "#5227FF", "#FF9FFC"],
  backgroundColor = "#0A29FF",
  speed = 0.5,
  streakCount = 2,
  streakWidth = 1,
  streakLength = 1,
  glow = 1,
  density = 0.6,
  twinkle = 1,
  zoom = 3,
  backgroundGlow = 0.5,
  opacity = 1,
  mouseInteraction = true,
  mouseStrength = 0.5,
  mouseRadius = 1,
  mouseDampening = 0.15,
  mixBlendMode,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const programRef = useRef<Program | null>(null)
  const meshRef = useRef<Mesh | null>(null)
  const geometryRef = useRef<Triangle | null>(null)
  const rendererRef = useRef<Renderer | null>(null)
  const mouseTargetRef = useRef<[number, number]>([0, 0])
  const lastTimeRef = useRef(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const renderer = new Renderer({
      dpr:
        dpr ??
        (typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1),
      alpha: true,
      antialias: true,
    })
    rendererRef.current = renderer
    const gl = renderer.gl
    const canvas = gl.canvas as HTMLCanvasElement

    canvas.style.width = "100%"
    canvas.style.height = "100%"
    canvas.style.display = "block"
    container.appendChild(canvas)

    const { arr, count, avg } = prepColors(colors)

    const uniforms = {
      iResolution: {
        value: [gl.drawingBufferWidth, gl.drawingBufferHeight, 1],
      },
      iMouse: { value: [0, 0] },
      iTime: { value: 0 },
      uColor0: { value: arr[0] },
      uColor1: { value: arr[1] },
      uColor2: { value: arr[2] },
      uColor3: { value: arr[3] },
      uColor4: { value: arr[4] },
      uColor5: { value: arr[5] },
      uColor6: { value: arr[6] },
      uColor7: { value: arr[7] },
      uColorCount: { value: count },
      uBgColor: { value: hexToRGB(backgroundColor) },
      uMouseColor: { value: avg },
      uSpeed: { value: speed },
      uStreakCount: {
        value: Math.max(1, Math.min(16, Math.round(streakCount))),
      },
      uStreakWidth: { value: streakWidth },
      uStreakLength: { value: streakLength },
      uGlow: { value: glow },
      uDensity: { value: density },
      uTwinkle: { value: twinkle },
      uZoom: { value: zoom },
      uBgGlow: { value: backgroundGlow },
      uOpacity: { value: opacity },
      uMouseEnabled: { value: mouseInteraction ? 1 : 0 },
      uMouseStrength: { value: mouseStrength },
      uMouseRadius: { value: mouseRadius },
    }

    const program = new Program(gl, { vertex, fragment, uniforms })
    programRef.current = program

    const geometry = new Triangle(gl)
    geometryRef.current = geometry
    const mesh = new Mesh(gl, { geometry, program })
    meshRef.current = mesh

    const resize = () => {
      const rect = container.getBoundingClientRect()
      renderer.setSize(rect.width, rect.height)
      uniforms.iResolution.value = [
        gl.drawingBufferWidth,
        gl.drawingBufferHeight,
        1,
      ]
    }

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(container)

    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      const scale = renderer.dpr || 1
      const x = (e.clientX - rect.left) * scale
      const y = (rect.height - (e.clientY - rect.top)) * scale
      mouseTargetRef.current = [x, y]
      if (mouseDampening <= 0) {
        uniforms.iMouse.value = [x, y]
      }
    }
    if (mouseInteraction) {
      canvas.addEventListener("pointermove", onPointerMove)
    }

    const loop = (t: number) => {
      rafRef.current = requestAnimationFrame(loop)
      uniforms.iTime.value = t * 0.001
      if (mouseDampening > 0) {
        if (!lastTimeRef.current) lastTimeRef.current = t
        const dt = (t - lastTimeRef.current) / 1000
        lastTimeRef.current = t
        const tau = Math.max(1e-4, mouseDampening)
        let factor = 1 - Math.exp(-dt / tau)
        if (factor > 1) factor = 1
        const target = mouseTargetRef.current
        const cur = uniforms.iMouse.value as number[]
        cur[0] += (target[0] - cur[0]) * factor
        cur[1] += (target[1] - cur[1]) * factor
      } else {
        lastTimeRef.current = t
      }
      if (!paused && programRef.current && meshRef.current) {
        try {
          renderer.render({ scene: meshRef.current })
        } catch (e) {
          console.error(e)
        }
      }
    }
    rafRef.current = requestAnimationFrame(loop)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      if (mouseInteraction)
        canvas.removeEventListener("pointermove", onPointerMove)
      ro.disconnect()
      if (canvas.parentElement === container) {
        container.removeChild(canvas)
      }
      const callIfFn = (obj: unknown, key: string) => {
        const fn = obj && (obj as Record<string, unknown>)[key]
        if (typeof fn === "function") {
          ;(fn as () => void).call(obj)
        }
      }
      callIfFn(programRef.current, "remove")
      callIfFn(geometryRef.current, "remove")
      callIfFn(meshRef.current, "remove")
      callIfFn(rendererRef.current, "destroy")
      programRef.current = null
      geometryRef.current = null
      meshRef.current = null
      rendererRef.current = null
    }
  }, [
    dpr,
    paused,
    colors,
    backgroundColor,
    speed,
    streakCount,
    streakWidth,
    streakLength,
    glow,
    density,
    twinkle,
    zoom,
    backgroundGlow,
    opacity,
    mouseInteraction,
    mouseStrength,
    mouseRadius,
    mouseDampening,
  ])

  return (
    <div
      ref={containerRef}
      className={`relative h-full w-full overflow-hidden ${className ?? ""}`}
      style={{
        ...(mixBlendMode && {
          mixBlendMode: mixBlendMode as React.CSSProperties["mixBlendMode"],
        }),
      }}
    />
  )
}
//  ------------------------------ | TESTIMONIAL17 | ------------------------------  //

export default function Testimonial17() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 z-1">
        <Lightfall
          colors={["#A6C8FF", "#5227FF", "#FF9FFC"]}
          backgroundColor="#0A29FF"
          speed={0.2}
          streakCount={5}
          streakWidth={0.2}
          streakLength={0.3}
          density={0.8}
          twinkle={0}
          glow={0.7}
          backgroundGlow={0.7}
          zoom={1.7}
          opacity={1}
          mouseInteraction
          mouseStrength={0.4}
          mouseRadius={0.4}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col items-center gap-5 sm:gap-12"
        >
          <div className="flex flex-col items-center gap-8 text-center">
            <div className="flex cursor-default items-center gap-2 rounded-full bg-blue-200/20 px-5 py-2 text-blue-50 backdrop-blur-lg">
              <span className="size-2 rounded-full bg-blue-200" />
              <span className="text-md font-semibold">Testimonial</span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <h2 className="text-xl font-medium text-blue-50 sm:text-3xl">
                Hear from our satisfied users
              </h2>
              <p className="max-w-140 text-blue-100">
                Discover why users love our platform and how it's making a
                positive impact on their work and businesses.
              </p>
            </div>
          </div>
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-12 gap-4 text-left"
          >
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                className="col-span-12 md:col-span-6 lg:col-span-4"
                variants={itemVariants}
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.3 }}
              >
                <SpotlightCard
                  className="border-0! bg-transparent p-0!"
                  spotlightColor="rgba(255, 255, 255, 0.10)"
                >
                  <div className="relative h-full w-full overflow-hidden rounded-xl border border-white/10 bg-linear-to-br from-white/10 to-transparent to-40% p-5 backdrop-blur-sm md:p-6">
                    <div className="flex flex-col gap-3">
                      <div className="flex flex-row justify-start gap-1.5">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <svg
                            key={i}
                            className={`size-4 text-cyan-500 ${
                              i <= testimonial.rating
                                ? "fill-cyan-500"
                                : "fill-transparent"
                            }`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="m13.73 3.51 1.76 3.52c.24.49.88.96 1.42 1.05l3.19.53c2.04.34 2.52 1.82 1.05 3.28l-2.48 2.48c-.42.42-.65 1.23-.52 1.81l.71 3.07c.56 2.43-.73 3.37-2.88 2.1l-2.99-1.77c-.54-.32-1.43-.32-1.98 0l-2.99 1.77c-2.14 1.27-3.44.32-2.88-2.1l.71-3.07c.13-.58-.1-1.39-.52-1.81l-2.48-2.48c-1.46-1.46-.99-2.94 1.05-3.28l3.19-.53c.53-.09 1.17-.56 1.41-1.05l1.76-3.52c.96-1.91 2.52-1.91 3.47 0Z"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        ))}
                      </div>
                      <p className="text-slate-200">
                        {testimonial.description}
                      </p>
                      <div className="flex flex-row items-center gap-4">
                        <Avatar className="size-12! shrink-0 after:border-slate-100/30">
                          <AvatarImage
                            src={testimonial.avatar}
                            alt={testimonial.name}
                          />
                          <AvatarFallback>
                            {testimonial.name.split(" ")[0].charAt(0) +
                              testimonial.name.split(" ")[1].charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="grow">
                          <div className="flex flex-col gap-1.5">
                            <div className="text-base leading-none font-medium text-slate-100">
                              {testimonial.name}
                            </div>
                            <p className="text-sm leading-none font-normal text-slate-300">
                              {testimonial.position}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
