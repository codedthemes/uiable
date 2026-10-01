"use client"

// project-imports
import { cn } from "@/lib/utils"

// types

interface TestimonialImage {
  src: string

  darkSrc?: string
}

interface TestimonialsMarqueeProps {
  /** One or two screenshots (light/dark pair) — the column is duplicated for a seamless loop. */
  images: (string | TestimonialImage)[]
  alt?: string
  /** Seconds for one full loop. Lower = faster. */
  duration?: number
  className?: string
}

//  ------------------------------ | TESTIMONIALS MARQUEE | ------------------------------  //
export default function TestimonialsMarquee({
  images,
  alt = "",
  duration = 20,
  className,
}: TestimonialsMarqueeProps) {
  const copy = (keyPrefix: string, hidden: boolean) =>
    images.map((image, index) => {
      const { src, darkSrc } =
        typeof image === "string" ? { src: image, darkSrc: undefined } : image

      return (
        <div
          key={`${keyPrefix}-${index}`}
          className="mb-2 h-auto w-full shrink-0 overflow-hidden rounded-lg bg-muted/40"
        >
          <img
            src={src}
            alt={hidden ? "" : alt}
            aria-hidden={hidden}
            loading="lazy"
            className={cn(
              "block h-auto w-full object-contain",
              darkSrc && "dark:hidden"
            )}
          />
          {darkSrc && (
            <img
              src={darkSrc}
              alt={hidden ? "" : alt}
              aria-hidden={hidden}
              loading="lazy"
              className="hidden h-auto w-full object-contain dark:block"
            />
          )}
        </div>
      )
    })

  return (
    <div
      className={cn(
        "group relative h-full min-h-[15rem] w-full overflow-hidden bg-white px-2 pb-2 lg:min-h-[150px] dark:bg-card",
        className
      )}
    >
      <div
        className="absolute inset-x-2 top-0 flex flex-col will-change-transform group-hover:[animation-play-state:paused] motion-reduce:animate-none"
        style={{ animation: `testimonials-up ${duration}s linear infinite` }}
      >
        {copy("a", false)}
        {copy("b", true)}
      </div>

      <style>{`
        @keyframes testimonials-up {
          from { transform: translateY(0); }
          to { transform: translateY(-50%); }
        }
      `}</style>
    </div>
  )
}
