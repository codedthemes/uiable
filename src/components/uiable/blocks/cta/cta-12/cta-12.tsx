// shadcn
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

// assets
import { ArrowRight, Sparkles, Play } from "lucide-react"

function CurvedTextSVG() {
  return (
    <svg
      className="absolute -top-24 -right-24 z-[1] hidden h-56 w-56 overflow-visible md:-top-20 md:-right-24 md:block md:h-64 md:w-64 lg:-top-19 lg:-right-20 lg:h-72 lg:w-72"
      viewBox="0 0 288 288"
    >
      <defs>
        <path
          id="curvedTextPath"
          d="M 144,144 m 0,-160 a 160,160 0 1,0 0,320 a 160,160 0 1,0 0,-320"
          fill="none"
        />
      </defs>
      <text
        className="fill-violet-300 dark:fill-violet-600"
        fontSize="15"
        fontWeight="600"
        letterSpacing="4"
      >
        <textPath href="#curvedTextPath" startOffset="21.5%">
          — TURN DATA INTO IMPACT —
        </textPath>
      </text>
    </svg>
  )
}

//  ------------------------------ | CTA 12 | ------------------------------  //

export default function Cta12() {
  return (
    <div className="bg-background py-12 sm:py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="relative isolate overflow-hidden rounded-2xl bg-violet-100/60 dark:bg-violet-950/40">
          <div className="relative overflow-hidden rounded-xl bg-white px-6 py-8 shadow-[0_4px_40px_-8px_rgba(139,92,246,0.18)] sm:px-16 sm:py-12 dark:bg-slate-900 dark:shadow-[0_4px_40px_-8px_rgba(139,92,246,0.25)]">
            <div className="absolute -bottom-50 -left-40 z-0 h-72 w-72 md:-bottom-64 md:-left-40 md:h-[380px] md:w-[380px] lg:-bottom-50 lg:-left-40 lg:h-[420px] lg:w-[420px]">
              <div className="h-full w-full rounded-full bg-gradient-to-br from-violet-400/90 via-violet-300/50 to-violet-100/20 dark:from-violet-600/60 dark:via-violet-700/30 dark:to-transparent" />
              <div className="absolute -inset-6 rounded-full border border-violet-300 md:-inset-7 lg:-inset-8 dark:border-violet-700" />
              <div className="absolute top-3 right-8 h-3 w-3 md:top-4 md:right-10 md:h-4 md:w-4 lg:top-4 lg:right-12 lg:h-4 lg:w-4">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75 dark:bg-violet-500"></span>
                <span className="relative inline-flex h-full w-full rounded-full bg-violet-500 dark:bg-violet-400"></span>
              </div>
            </div>

            <div className="absolute -top-24 -right-24 z-0 h-56 w-56 md:-top-20 md:-right-24 md:h-64 md:w-64 lg:-top-20 lg:-right-20 lg:h-72 lg:w-72">
              <div className="h-full w-full rounded-full border-[28px] border-violet-400/70 bg-transparent md:border-[32px] lg:border-[36px] dark:border-violet-600/50" />
            </div>

            <CurvedTextSVG />

            <div className="relative z-10 mx-auto flex max-w-150 flex-col items-center gap-4 text-center sm:gap-5">
              <Badge
                variant="outline"
                className="gap-1.5 rounded-full border-violet-200 bg-violet-50 px-4 py-2 text-sm font-medium text-violet-600 dark:border-violet-700 dark:bg-violet-950/50 dark:text-violet-300"
              >
                <Sparkles className="size-4! text-violet-500" />
                Get Started Now
              </Badge>

              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-slate-50">
                Ready to turn
                <br />
                Insights into{" "}
                <span className="text-violet-600 dark:text-violet-400">
                  Impact?
                </span>
              </h2>

              <p className="max-w-100 text-base text-slate-500 sm:text-lg dark:text-slate-400">
                Start your free trial and experience the power of data-driven
                decisions.
              </p>

              <div className="mt-2 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
                <Button className="w-full rounded-lg bg-violet-600 px-6 font-medium text-white shadow-lg shadow-violet-500/30 transition-all hover:translate-y-0.5 hover:bg-violet-700 hover:shadow-none sm:w-auto dark:bg-violet-500 dark:shadow-violet-500/20 dark:hover:bg-violet-600">
                  Start Free Trial
                  <ArrowRight className="ml-2 size-4" />
                </Button>
                <Button
                  variant="outline"
                  className="w-full rounded-lg border-violet-200 bg-white/50 px-6 font-medium text-violet-700 backdrop-blur-md transition-all hover:bg-violet-50 hover:text-violet-800 sm:w-auto sm:bg-transparent dark:border-violet-800 dark:bg-gray-950/50 dark:text-violet-300 dark:hover:bg-violet-950/50 dark:sm:bg-transparent"
                >
                  <div className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-violet-600 dark:bg-violet-500">
                    <Play className="ml-0.5 size-3 fill-white text-white" />
                  </div>
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
