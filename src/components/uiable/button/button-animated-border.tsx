// shadcn
import { Button } from "@/components/ui/button"

//  ------------------------------ | BUTTON ANIMATED BORDER | ------------------------------  //

export default function ButtonAnimatedBorder() {
  return (
    <div className="absolute top-1/2 left-1/2 flex size-full -translate-x-1/2 -translate-y-1/2 items-center justify-center">
      <div className="absolute h-[60px] w-[180px]">
        <Button
          variant="ghost"
          className="group relative h-full w-full overflow-hidden rounded-lg border border-border bg-transparent transition-all duration-1000 ease-in-out outline-none group-hover:transition-all"
        >
          {/* SVG BORDER */}
          <svg
            width="180px"
            height="60px"
            viewBox="0 0 180 60"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 size-full fill-none stroke-mist-800 transition-all duration-1000 ease-in-out [stroke-dasharray:150_480] [stroke-dashoffset:150] group-hover:[stroke-dashoffset:-480] dark:stroke-mist-400"
          >
            <rect
              x="1"
              y="1"
              width="178"
              height="58"
              rx="8"
              style={{ rx: "var(--radius)", ry: "var(--radius)" }}
            />
          </svg>

          {/* TEXT */}
          <span className="relative z-10">Hover me</span>
        </Button>
      </div>
    </div>
  )
}
