"use client"

// project-imports
import { cn } from "@/lib/utils"

// types
interface MarqueeImage {
  src: string
  darkSrc?: string
}

interface MarqueeImagesProps {
  images: (string | MarqueeImage)[]
  alt?: string
  duration?: number
  className?: string
}

//  ------------------------------ | MARQUEE IMAGES | ------------------------------  //

export default function MarqueeImages({
  images,
  alt = "",
  duration = 22,
  className,
}: MarqueeImagesProps) {
  const strip = [...images, ...images]

  // Tiles are sized by height + `aspect-video`, so a 16:9 screenshot fills the
  // tile exactly (no crop) and both rows always fit inside the card.
  // The spacing is `mr-3` rather than a flex `gap` so the strip measures exactly
  // 2 x (tile + gap) per pair — `translateX(-50%)` then lands on a seamless
  // boundary instead of half a gap short.
  const tileClass =
    "mr-3 h-24 aspect-video shrink-0 overflow-hidden rounded-md border border-border bg-muted/40 sm:h-28 lg:h-32"

  const row = (direction: "left" | "right") => (
    <div
      className="flex w-max items-center will-change-transform motion-reduce:animate-none"
      style={{ animation: `marquee-${direction} ${duration}s linear infinite` }}
    >
      {strip.map((image, index) => {
        const { src, darkSrc } =
          typeof image === "string" ? { src: image, darkSrc: undefined } : image
        const hidden = index >= images.length

        return (
          <div key={`${direction}-${src}-${index}`} className={tileClass}>
            <img
              src={src}
              alt={hidden ? "" : alt}
              aria-hidden={hidden}
              loading="lazy"
              className={cn(
                "size-full object-contain",
                darkSrc && "dark:hidden"
              )}
            />
            {darkSrc && (
              <img
                src={darkSrc}
                alt={hidden ? "" : alt}
                aria-hidden={hidden}
                loading="lazy"
                className="hidden size-full object-contain dark:block"
              />
            )}
          </div>
        )
      })}
    </div>
  )

  return (
    <div
      className={cn(
        "relative flex h-full min-h-[14rem] w-full items-center overflow-hidden bg-white lg:min-h-[18rem] dark:bg-card",
        className
      )}
    >
      <div className="flex flex-col gap-3">
        {row("left")}
        {row("right")}
      </div>

      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  )
}
