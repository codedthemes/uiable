"use client"

import { useEffect, useRef, useState } from "react"

// shadcn
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

// third-party
import { cx } from "class-variance-authority"
import { motion, type Variants } from "framer-motion"

// project-imports
import SpotlightCard from "@/components/animation/SpotlightCard"

const testimonials = [
  {
    name: "Sarah Connor",
    avatar: "https://cdn.uiable.com/block/profile-1.png",
    position: "Lead DevOps Engineer",
    description: "Deployment has never been this effortless.",
    rating: 5,
  },
  {
    name: "Sophia Martinez",
    avatar: "https://cdn.uiable.com/block/profile-5.png",
    position: "Director of Security",
    description: "Security features exceeded our expectations.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    avatar: "https://cdn.uiable.com/block/profile-2.png",
    position: "Product Manager at TechFlow",
    description:
      "Automation replaced countless repetitive tasks across our team. What used to require multiple meetings now happens automatically, saving us valuable time every week.",
    rating: 4,
  },
  {
    name: "Marcus Aurelius",
    avatar: "https://cdn.uiable.com/block/profile-3.png",
    position: "Chief Operations Officer",
    description:
      "The reporting dashboard gives us clear visibility into every project, making strategic planning much easier.",
    rating: 5,
  },
  {
    name: "Aria Montgomery",
    avatar: "https://cdn.uiable.com/block/profile-4.png",
    position: "Senior UX Designer",
    description:
      "Design reviews are finally organized. Shared workspaces, comments, and version history have made collaboration between design and development completely seamless.",
    rating: 5,
  },
  {
    name: "James Wilson",
    avatar: "https://cdn.uiable.com/block/profile-6.png",
    position: "Integration Architect",
    description:
      "Integrating our existing software stack took less than an afternoon. The documentation was excellent, and every integration worked without disrupting our current workflows.",
    rating: 4,
  },
  {
    name: "Olivia Bennett",
    avatar: "https://cdn.uiable.com/block/profile-7.png",
    position: "Marketing Director",
    description:
      "Our campaigns launch faster and the team can focus on creativity instead of manual coordination.",
    rating: 4,
  },
  {
    name: "Daniel Carter",
    avatar: "https://cdn.uiable.com/block/profile-8.png",
    position: "Software Engineering Manager",
    description:
      "The performance improvements were noticeable from day one. Stable releases, excellent support, and frequent updates have made this platform an important part of our engineering workflow.",
    rating: 5,
  },
  {
    name: "Ethan Brooks",
    avatar: "https://cdn.uiable.com/block/profile-1.png",
    position: "Cloud Solutions Architect",
    description: "Scaling our cloud infrastructure became incredibly simple.",
    rating: 3,
  },
  {
    name: "Isabella Reed",
    avatar: "https://cdn.uiable.com/block/profile-2.png",
    position: "Customer Success Manager",
    description:
      "Customer satisfaction improved almost immediately after implementation. Faster response times, better collaboration, and real-time updates have helped us build stronger relationships with our clients.",
    rating: 5,
  },
  {
    name: "Noah Parker",
    avatar: "https://cdn.uiable.com/block/profile-3.png",
    position: "Engineering Team Lead",
    description:
      "The onboarding experience was smooth and our developers became productive much sooner than expected.",
    rating: 4,
  },
  {
    name: "Charlotte Hayes",
    avatar: "https://cdn.uiable.com/block/profile-4.png",
    position: "Business Operations Manager",
    description:
      "This solution has transformed how our departments collaborate. Better visibility, fewer bottlenecks, and streamlined workflows have made daily operations significantly more efficient across the organization.",
    rating: 5,
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

//  ------------------------------ | LIGHT RAYS | ------------------------------  //
//  Ported from reactbits.dev/backgrounds/light-rays â€” self-contained TypeScript
//  version using raw WebGL (no `ogl` dependency).

type RaysOrigin =
  | "top-center"
  | "top-left"
  | "top-right"
  | "left"
  | "right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right"

type LightRaysProps = {
  raysOrigin?: RaysOrigin
  raysColor?: string
  raysSpeed?: number
  lightSpread?: number
  rayLength?: number
  pulsating?: boolean
  fadeDistance?: number
  saturation?: number
  followMouse?: boolean
  mouseInfluence?: number
  noiseAmount?: number
  distortion?: number
  className?: string
}

const hexToRgb = (hex: string): [number, number, number] => {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return m
    ? [
        parseInt(m[1], 16) / 255,
        parseInt(m[2], 16) / 255,
        parseInt(m[3], 16) / 255,
      ]
    : [1, 1, 1]
}

const getAnchorAndDir = (origin: RaysOrigin, w: number, h: number) => {
  const outside = 0.2
  switch (origin) {
    case "top-left":
      return { anchor: [0, -outside * h], dir: [0, 1] }
    case "top-right":
      return { anchor: [w, -outside * h], dir: [0, 1] }
    case "left":
      return { anchor: [-outside * w, 0.5 * h], dir: [1, 0] }
    case "right":
      return { anchor: [(1 + outside) * w, 0.5 * h], dir: [-1, 0] }
    case "bottom-left":
      return { anchor: [0, (1 + outside) * h], dir: [0, -1] }
    case "bottom-center":
      return { anchor: [0.5 * w, (1 + outside) * h], dir: [0, -1] }
    case "bottom-right":
      return { anchor: [w, (1 + outside) * h], dir: [0, -1] }
    default:
      return { anchor: [0.5 * w, -outside * h], dir: [0, 1] }
  }
}

const VERT_SHADER = `attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = position * 0.5 + 0.5;
  gl_Position = vec4(position, 0.0, 1.0);
}`

const FRAG_SHADER = `precision highp float;

uniform float iTime;
uniform vec2  iResolution;

uniform vec2  rayPos;
uniform vec2  rayDir;
uniform vec3  raysColor;
uniform float raysSpeed;
uniform float lightSpread;
uniform float rayLength;
uniform float pulsating;
uniform float fadeDistance;
uniform float saturation;
uniform vec2  mousePos;
uniform float mouseInfluence;
uniform float noiseAmount;
uniform float distortion;

varying vec2 vUv;

float noise(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

float rayStrength(vec2 raySource, vec2 rayRefDirection, vec2 coord,
                  float seedA, float seedB, float speed) {
  vec2 sourceToCoord = coord - raySource;
  vec2 dirNorm = normalize(sourceToCoord);
  float cosAngle = dot(dirNorm, rayRefDirection);

  float distortedAngle = cosAngle + distortion * sin(iTime * 2.0 + length(sourceToCoord) * 0.01) * 0.2;

  float spreadFactor = pow(max(distortedAngle, 0.0), 1.0 / max(lightSpread, 0.001));

  float distance = length(sourceToCoord);
  float maxDistance = iResolution.x * rayLength;
  float lengthFalloff = clamp((maxDistance - distance) / maxDistance, 0.0, 1.0);

  float fadeFalloff = clamp((iResolution.x * fadeDistance - distance) / (iResolution.x * fadeDistance), 0.5, 1.0);
  float pulse = pulsating > 0.5 ? (0.8 + 0.2 * sin(iTime * speed * 3.0)) : 1.0;

  float baseStrength = clamp(
    (0.45 + 0.15 * sin(distortedAngle * seedA + iTime * speed)) +
    (0.3 + 0.2 * cos(-distortedAngle * seedB + iTime * speed)),
    0.0, 1.0
  );

  return baseStrength * lengthFalloff * fadeFalloff * spreadFactor * pulse;
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 coord = vec2(fragCoord.x, iResolution.y - fragCoord.y);

  vec2 finalRayDir = rayDir;
  if (mouseInfluence > 0.0) {
    vec2 mouseScreenPos = mousePos * iResolution.xy;
    vec2 mouseDirection = normalize(mouseScreenPos - rayPos);
    finalRayDir = normalize(mix(rayDir, mouseDirection, mouseInfluence));
  }

  vec4 rays1 = vec4(1.0) *
               rayStrength(rayPos, finalRayDir, coord, 36.2214, 21.11349,
                           1.5 * raysSpeed);
  vec4 rays2 = vec4(1.0) *
               rayStrength(rayPos, finalRayDir, coord, 22.3991, 18.0234,
                           1.1 * raysSpeed);

  fragColor = rays1 * 0.5 + rays2 * 0.4;

  if (noiseAmount > 0.0) {
    float n = noise(coord * 0.01 + iTime * 0.1);
    fragColor.rgb *= (1.0 - noiseAmount + noiseAmount * n);
  }

  float brightness = 1.0 - (coord.y / iResolution.y);
  fragColor.x *= 0.1 + brightness * 0.8;
  fragColor.y *= 0.3 + brightness * 0.6;
  fragColor.z *= 0.5 + brightness * 0.5;

  if (saturation != 1.0) {
    float gray = dot(fragColor.rgb, vec3(0.299, 0.587, 0.114));
    fragColor.rgb = mix(vec3(gray), fragColor.rgb, saturation);
  }

  fragColor.rgb *= raysColor;
}

void main() {
  vec4 color;
  mainImage(color, gl_FragCoord.xy);
  gl_FragColor = color;
}`

const compileShader = (
  gl: WebGLRenderingContext,
  type: number,
  source: string
) => {
  const shader = gl.createShader(type)!
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.warn("LightRays shader error:", gl.getShaderInfoLog(shader))
  }
  return shader
}

function LightRays({
  raysOrigin = "top-center",
  raysColor = "#ffffff",
  raysSpeed = 1,
  lightSpread = 1,
  rayLength = 2,
  pulsating = false,
  fadeDistance = 1.0,
  saturation = 1.0,
  followMouse = true,
  mouseInfluence = 0.1,
  noiseAmount = 0.0,
  distortion = 0.0,
  className = "",
}: LightRaysProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const mouseRef = useRef({ x: 0.5, y: 0.5 })
  const smoothMouseRef = useRef({ x: 0.5, y: 0.5 })

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => setIsVisible(entries[0].isIntersecting),
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!isVisible || !container) return

    let animationId = 0
    let disposed = false
    let gl: WebGLRenderingContext | null = null
    let resizeHandler: (() => void) | null = null

    const init = async () => {
      await new Promise((r) => setTimeout(r, 10))
      if (disposed || !containerRef.current) return

      const canvas = document.createElement("canvas")
      canvas.style.width = "100%"
      canvas.style.height = "100%"
      canvas.style.display = "block"
      gl = canvas.getContext("webgl", {
        alpha: true,
        premultipliedAlpha: false,
        antialias: true,
      }) as WebGLRenderingContext | null
      if (!gl) return

      while (container.firstChild) container.removeChild(container.firstChild)
      container.appendChild(canvas)

      const vs = compileShader(gl, gl.VERTEX_SHADER, VERT_SHADER)
      const fs = compileShader(gl, gl.FRAGMENT_SHADER, FRAG_SHADER)
      const program = gl.createProgram()!
      gl.attachShader(program, vs)
      gl.attachShader(program, fs)
      gl.linkProgram(program)
      gl.useProgram(program)

      const posLoc = gl.getAttribLocation(program, "position")
      const buffer = gl.createBuffer()
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
      gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array([-1, -1, 3, -1, -1, 3]),
        gl.STATIC_DRAW
      )
      gl.enableVertexAttribArray(posLoc)
      gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0)

      const loc = (name: string) => gl!.getUniformLocation(program, name)
      const u = {
        iTime: loc("iTime"),
        iResolution: loc("iResolution"),
        rayPos: loc("rayPos"),
        rayDir: loc("rayDir"),
        raysColor: loc("raysColor"),
        raysSpeed: loc("raysSpeed"),
        lightSpread: loc("lightSpread"),
        rayLength: loc("rayLength"),
        pulsating: loc("pulsating"),
        fadeDistance: loc("fadeDistance"),
        saturation: loc("saturation"),
        mousePos: loc("mousePos"),
        mouseInfluence: loc("mouseInfluence"),
        noiseAmount: loc("noiseAmount"),
        distortion: loc("distortion"),
      }

      let dpr = Math.min(window.devicePixelRatio || 1, 2)
      let w = 1
      let h = 1
      const setPlacement = () => {
        dpr = Math.min(window.devicePixelRatio || 1, 2)
        w = Math.max(1, Math.floor(container.clientWidth * dpr))
        h = Math.max(1, Math.floor(container.clientHeight * dpr))
        canvas.width = w
        canvas.height = h
        gl!.viewport(0, 0, w, h)
      }
      resizeHandler = setPlacement
      window.addEventListener("resize", resizeHandler)
      setPlacement()

      const rgb = hexToRgb(raysColor)

      const loop = (t: number) => {
        if (disposed || !gl) return

        if (
          Math.floor(container.clientWidth * dpr) !== w ||
          Math.floor(container.clientHeight * dpr) !== h
        ) {
          setPlacement()
        }

        const { anchor, dir } = getAnchorAndDir(raysOrigin, w, h)

        if (followMouse && mouseInfluence > 0.0) {
          const s = 0.92
          smoothMouseRef.current.x =
            smoothMouseRef.current.x * s + mouseRef.current.x * (1 - s)
          smoothMouseRef.current.y =
            smoothMouseRef.current.y * s + mouseRef.current.y * (1 - s)
        }

        gl.uniform1f(u.iTime, t * 0.001)
        gl.uniform2f(u.iResolution, w, h)
        gl.uniform2f(u.rayPos, anchor[0], anchor[1])
        gl.uniform2f(u.rayDir, dir[0], dir[1])
        gl.uniform3f(u.raysColor, rgb[0], rgb[1], rgb[2])
        gl.uniform1f(u.raysSpeed, raysSpeed)
        gl.uniform1f(u.lightSpread, lightSpread)
        gl.uniform1f(u.rayLength, rayLength)
        gl.uniform1f(u.pulsating, pulsating ? 1.0 : 0.0)
        gl.uniform1f(u.fadeDistance, fadeDistance)
        gl.uniform1f(u.saturation, saturation)
        gl.uniform2f(
          u.mousePos,
          smoothMouseRef.current.x,
          smoothMouseRef.current.y
        )
        gl.uniform1f(u.mouseInfluence, mouseInfluence)
        gl.uniform1f(u.noiseAmount, noiseAmount)
        gl.uniform1f(u.distortion, distortion)

        gl.clearColor(0, 0, 0, 0)
        gl.clear(gl.COLOR_BUFFER_BIT)
        gl.drawArrays(gl.TRIANGLES, 0, 3)
        animationId = requestAnimationFrame(loop)
      }
      animationId = requestAnimationFrame(loop)
    }

    init()

    return () => {
      disposed = true
      if (animationId) cancelAnimationFrame(animationId)
      if (resizeHandler) window.removeEventListener("resize", resizeHandler)
      if (gl) {
        gl.getExtension("WEBGL_lose_context")?.loseContext()
        const canvas = gl.canvas as HTMLCanvasElement
        if (canvas.parentNode) canvas.parentNode.removeChild(canvas)
      }
    }
  }, [
    isVisible,
    raysOrigin,
    raysColor,
    raysSpeed,
    lightSpread,
    rayLength,
    pulsating,
    fadeDistance,
    saturation,
    followMouse,
    mouseInfluence,
    noiseAmount,
    distortion,
  ])

  useEffect(() => {
    if (!followMouse) return
    const handleMouseMove = (e: MouseEvent) => {
      const el = containerRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      }
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [followMouse])

  return (
    <div
      ref={containerRef}
      className={cx("pointer-events-none overflow-hidden", className)}
    />
  )
}

//  ------------------------------ | TESTIMONIAL17 | ------------------------------  //

export default function Testimonial17() {
  return (
    <div className="relative overflow-hidden bg-[#060608] py-20 sm:py-24">
      {/* Light rays background */}
      <LightRays
        raysOrigin="top-center"
        raysColor="#8ab4ff"
        raysSpeed={1.2}
        lightSpread={0.9}
        rayLength={2.2}
        followMouse
        mouseInfluence={0.1}
        className="absolute inset-0 z-0"
      />
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.12),_transparent_45%),radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.12),_transparent_40%)]" />

      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col items-center gap-5 sm:gap-12"
        >
          <div className="flex flex-col items-center gap-8 text-center">
            <div className="flex cursor-default items-center gap-2 rounded-full bg-blue-200/20 px-5 py-2 text-blue-50">
              <span className="size-2 rounded-full bg-blue-200" />
              <span className="text-md font-semibold">Testimonial</span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-col items-center gap-2">
                <h2 className="text-xl font-medium text-blue-50 sm:text-3xl">
                  Hear from our satisfied users
                </h2>
                <p className="max-w-200 text-lg font-semibold text-blue-200">
                  Tailored to your needs
                </p>
              </div>
              <p className="max-w-140 text-blue-100">
                Discover why users love our platform and how it's making a
                positive impact on their work and businesses.
              </p>
            </div>
          </div>
          <motion.div
            variants={itemVariants}
            className="w-frounded-lg columns-1 gap-4 space-y-4 border border-purple-300/10 mask-t-from-5% mask-t-to-15% mask-exclude mask-match p-2 text-left backdrop-blur-sm md:columns-2 lg:columns-3 lg:rounded-2xl lg:p-4"
          >
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                className="mb-4 w-full break-inside-avoid"
                variants={itemVariants}
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.3 }}
              >
                <SpotlightCard
                  className="border-0! bg-transparent p-0!"
                  spotlightColor="rgba(255, 255, 255, 0.10)"
                >
                  <div className="group relative h-full w-full overflow-hidden rounded-xl border border-purple-300/10 bg-linear-to-br from-white/10 to-transparent to-40% p-5 backdrop-blur-lg md:p-6">
                    <div className="flex flex-col gap-6">
                      <p className="text-slate-100">
                        <svg
                          className="-mt-3 inline size-5 fill-blue-100/30"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 17.5 10z" />
                        </svg>
                        {testimonial.description}
                      </p>
                      <div className="flex flex-row gap-1.5">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <svg
                            key={i}
                            className={`size-4 text-blue-500 ${
                              i <= testimonial.rating
                                ? "fill-blue-500"
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
                      <div className="flex flex-row items-center gap-4">
                        <Avatar className="size-12! shrink-0 after:border-slate-100/10">
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
                            <p className="text-sm leading-none font-normal text-slate-400">
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
          <motion.div variants={itemVariants}>
            <Button className="rounded-full border-0 border-b-2 border-b-blue-700 bg-blue-500 hover:translate-y-1 hover:opacity-90 lg:flex">
              View More
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
