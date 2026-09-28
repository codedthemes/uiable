// shadcn
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

// assets
import { ArrowRight, Sparkles } from "lucide-react"

function WaveBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute right-0 bottom-0 z-0 w-full max-w-138 select-none sm:max-w-175"
    >
      <svg
        viewBox="0 0 700 450"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full"
      >
        <defs>
          <linearGradient id="dark-wave-1" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop
              offset="0%"
              stopColor="var(--color-blue-500)"
              stopOpacity="0.75"
            />
            <stop
              offset="50%"
              stopColor="var(--color-indigo-500)"
              stopOpacity="0.8"
            />
            <stop
              offset="100%"
              stopColor="var(--color-purple-500)"
              stopOpacity="0.7"
            />
          </linearGradient>
          <linearGradient id="dark-wave-2" x1="90%" y1="10%" x2="10%" y2="90%">
            <stop
              offset="0%"
              stopColor="var(--color-blue-600)"
              stopOpacity="0.5"
            />
            <stop
              offset="50%"
              stopColor="var(--color-indigo-600)"
              stopOpacity="0.5"
            />
            <stop
              offset="100%"
              stopColor="var(--color-purple-600)"
              stopOpacity="0.45"
            />
          </linearGradient>
          <linearGradient id="dark-wave-3" x1="100%" y1="30%" x2="0%" y2="100%">
            <stop
              offset="0%"
              stopColor="var(--color-blue-900)"
              stopOpacity="0.4"
            />
            <stop
              offset="50%"
              stopColor="var(--color-indigo-900)"
              stopOpacity="0.35"
            />
            <stop
              offset="100%"
              stopColor="var(--color-purple-900)"
              stopOpacity="0.25"
            />
          </linearGradient>

          <linearGradient id="light-wave-1" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop
              offset="0%"
              stopColor="var(--color-indigo-400)"
              stopOpacity="0.5"
            />
            <stop
              offset="50%"
              stopColor="var(--color-purple-400)"
              stopOpacity="0.45"
            />
            <stop
              offset="100%"
              stopColor="var(--color-indigo-200)"
              stopOpacity="0.3"
            />
          </linearGradient>
          <linearGradient id="light-wave-2" x1="90%" y1="10%" x2="10%" y2="90%">
            <stop
              offset="0%"
              stopColor="var(--color-indigo-300)"
              stopOpacity="0.45"
            />
            <stop
              offset="100%"
              stopColor="var(--color-indigo-100)"
              stopOpacity="0.3"
            />
          </linearGradient>
          <linearGradient
            id="light-wave-3"
            x1="100%"
            y1="20%"
            x2="20%"
            y2="100%"
          >
            <stop
              offset="0%"
              stopColor="var(--color-blue-300)"
              stopOpacity="0.35"
            />
            <stop
              offset="100%"
              stopColor="var(--color-purple-200)"
              stopOpacity="0.2"
            />
          </linearGradient>
        </defs>

        <g className="hidden dark:block">
          <path
            d="M 0 450 C 200 370 340 220 700 80 L 700 450 Z"
            fill="url(#dark-wave-3)"
          />
          <path
            d="M 120 450 C 280 340 400 200 700 130 L 700 450 Z"
            fill="url(#dark-wave-2)"
          />
          <path
            d="M 220 450 C 340 380 440 240 700 180 L 700 450 Z"
            fill="url(#dark-wave-1)"
          />
        </g>

        <g className="block dark:hidden">
          <path
            d="M 0 450 C 200 370 340 220 700 80 L 700 450 Z"
            fill="url(#light-wave-3)"
          />
          <path
            d="M 120 450 C 280 340 400 200 700 130 L 700 450 Z"
            fill="url(#light-wave-2)"
          />
          <path
            d="M 220 450 C 340 380 440 240 700 180 L 700 450 Z"
            fill="url(#light-wave-1)"
          />
        </g>
      </svg>
    </div>
  )
}

//  ------------------------------ | CTA 1 | ------------------------------  //

export default function Cta1() {
  return (
    <section className="bg-background py-12 sm:py-20 lg:px-8">
      <Card className="relative mx-auto mb-0 max-w-5xl overflow-hidden rounded-2xl border border-indigo-100/80 bg-indigo-50/60 p-7 shadow-sm transition-colors sm:p-12 lg:p-14 dark:border-blue-900/30 dark:bg-slate-900 dark:shadow-2xl dark:shadow-blue-950/40">
        <WaveBackground />

        <div className="relative z-10 flex max-w-xl flex-col gap-6 sm:gap-8">
          <div className="flex flex-col gap-3 sm:gap-4">
            <div>
              <Badge className="inline-flex items-center gap-2 rounded-full border-0 bg-indigo-100 px-3.5 py-1.5 text-xs text-indigo-600 shadow-none hover:bg-indigo-100 sm:text-sm dark:bg-indigo-950/70 dark:text-indigo-300 dark:hover:bg-indigo-950/70">
                <Sparkles
                  aria-hidden="true"
                  className="h-3.5 w-3.5 fill-purple-600 text-purple-600 dark:fill-purple-400 dark:text-purple-400"
                />
                <span>Ready to Get Started</span>
              </Badge>
            </div>

            <h2 className="text-3xl leading-tight font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
              Build Faster{" "}
              <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent dark:from-purple-400 dark:via-indigo-400 dark:to-blue-400">
                Now
              </span>
            </h2>

            <p className="max-w-md text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-400">
              Unlock premium features, powerful UI components, and boost your
              workflow today.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3.5">
            <Button
              size="lg"
              className="h-auto cursor-pointer gap-2 rounded-full border-0 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-500 px-6 py-3 text-sm text-white shadow-md hover:from-purple-500 hover:to-blue-400 hover:shadow-lg sm:py-3.5 sm:text-base"
            >
              <span>Get Started</span>
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-auto cursor-pointer rounded-full border-slate-300 bg-white/80 px-6 py-3 text-sm text-slate-800 hover:bg-slate-100 sm:py-3.5 sm:text-base dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              <span>Schedule a Demo</span>
            </Button>
          </div>
        </div>
      </Card>
    </section>
  )
}
