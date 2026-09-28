// shadcn
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

// assets
import {
  ArrowRight,
  Check,
  Lightbulb,
  MessageSquare,
  Settings,
  Sparkles,
  TrendingUp,
} from "lucide-react"

function BurstIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M 11 15 L 7 6"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M 14 15 L 24 8"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M 15 21 L 26 24"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function FloatingProcessCard() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute -top-5 -right-5 z-20 text-sky-500 sm:-top-6 sm:-right-6 dark:text-sky-400">
        <BurstIcon className="h-9 w-9 sm:h-11 sm:w-11" />
      </div>
      <Card className="relative z-10 mb-0 max-w-sm rotate-1 rounded-3xl border border-slate-200/90 bg-white/95 p-5 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.08)] backdrop-blur-xs transition-transform duration-300 hover:rotate-0 sm:p-6 lg:max-w-md dark:border-slate-800 dark:bg-slate-900/95 dark:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)]">
        <div className="flex flex-col gap-4 sm:gap-5">
          <div className="flex items-center gap-3.5 sm:gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-sky-100 text-sky-600 sm:h-13 sm:w-13 dark:bg-sky-950/80 dark:text-sky-400">
              <Lightbulb className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 sm:text-base dark:text-white">
                Share Your Idea
              </h4>
              <p className="text-xs text-slate-500 sm:text-sm dark:text-slate-400">
                Tell us what you need
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 sm:gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-purple-100 text-purple-600 sm:h-13 sm:w-13 dark:bg-purple-950/80 dark:text-purple-400">
              <Settings className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 sm:text-base dark:text-white">
                We Make It Happen
              </h4>
              <p className="text-xs text-slate-500 sm:text-sm dark:text-slate-400">
                Our team gets to work
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 sm:gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 sm:h-13 sm:w-13 dark:bg-emerald-950/80 dark:text-emerald-400">
              <TrendingUp
                className="h-5 w-5 sm:h-6 sm:w-6"
                aria-hidden="true"
              />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 sm:text-base dark:text-white">
                See Real Results
              </h4>
              <p className="text-xs text-slate-500 sm:text-sm dark:text-slate-400">
                Grow without limits
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

function FluidBorderCardBg() {
  return (
    <svg
      viewBox="0 0 1000 500"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="h-full w-full"
    >
      <path
        d="M 70 20 C 250 20, 380 65, 500 65 C 620 65, 750 20, 930 20 Q 980 20, 980 70 L 980 430 Q 980 480, 930 480 L 70 480 Q 20 480, 20 430 L 20 70 Q 20 20, 70 20 Z"
        className="fill-white dark:fill-slate-900"
      />
    </svg>
  )
}

//  ------------------------------ | CTA 2 | ------------------------------  //

export default function Cta2() {
  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="relative isolate px-6 pt-32 pb-14 sm:px-12 sm:pt-24 sm:pb-16 lg:px-16 lg:pt-16 lg:pb-16">
            <div className="pointer-events-none absolute inset-0 z-0 h-full w-full">
              <FluidBorderCardBg />
            </div>

            <div className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
              <div className="flex flex-col items-start gap-6 lg:col-span-7">
                <Badge className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-100/90 px-4 py-1.5 text-xs font-semibold text-sky-700 shadow-none hover:bg-sky-100 sm:text-sm dark:border-sky-800/80 dark:bg-sky-950/80 dark:text-sky-300 dark:hover:bg-sky-950">
                  <Sparkles
                    className="h-4 w-4 fill-sky-500 text-sky-500 dark:fill-sky-400 dark:text-sky-400"
                    aria-hidden="true"
                  />
                  <span>Let&apos;s Build Something Great</span>
                </Badge>

                <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
                  Ready to{" "}
                  <span className="bg-gradient-to-r from-sky-500 via-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-sky-400 dark:via-blue-400 dark:to-purple-400">
                    Get Started?
                  </span>
                </h2>

                <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
                  Turn your ideas into real results. Join us today and be part
                  of something bigger.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <Button
                    size="lg"
                    className="h-auto cursor-pointer gap-2.5 rounded-full border-0 bg-gradient-to-r from-sky-400 via-blue-600 to-purple-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:opacity-95 hover:shadow-xl hover:shadow-blue-500/35"
                  >
                    <span>Start for Free</span>
                    <ArrowRight
                      className="h-4 w-4 stroke-[2.5]"
                      aria-hidden="true"
                    />
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="h-auto cursor-pointer gap-2.5 rounded-full border-2 border-sky-200 bg-white/90 px-6 py-3.5 text-base font-semibold text-slate-800 transition-all hover:bg-sky-50 dark:border-sky-800 dark:bg-slate-900/90 dark:text-slate-100 dark:hover:bg-slate-800"
                  >
                    <MessageSquare
                      className="h-4 w-4 text-sky-500 dark:text-sky-400"
                      aria-hidden="true"
                    />
                    <span>Talk to Our Team</span>
                  </Button>
                </div>

                <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-semibold text-slate-600 sm:text-sm dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600 dark:bg-sky-950 dark:text-sky-400">
                      <Check
                        className="h-3.5 w-3.5 stroke-[3]"
                        aria-hidden="true"
                      />
                    </span>
                    <span>No credit card required</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600 dark:bg-sky-950 dark:text-sky-400">
                      <Check
                        className="h-3.5 w-3.5 stroke-[3]"
                        aria-hidden="true"
                      />
                    </span>
                    <span>Quick setup</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600 dark:bg-sky-950 dark:text-sky-400">
                      <Check
                        className="h-3.5 w-3.5 stroke-[3]"
                        aria-hidden="true"
                      />
                    </span>
                    <span>Cancel anytime</span>
                  </div>
                </div>
              </div>

              <div className="relative flex flex-col items-center justify-center lg:col-span-5">
                <div className="pt-6 sm:pt-10 lg:pt-0">
                  <FloatingProcessCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
