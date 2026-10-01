// shadcn
import { Button } from "@/components/ui/button"

// third-party
import { motion } from "framer-motion"

// assets
import { ArrowRight } from "lucide-react"

function TopoPattern({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 800 800"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeOpacity="0.6"
      >
        {Array.from({ length: 45 }).map((_, i) => {
          const r = 20 + i * 18
          const cx = 400 + Math.sin(i * 0.15) * 80
          const cy = 400 + Math.cos(i * 0.2) * 80
          return <circle key={`wave-${i}`} cx={cx} cy={cy} r={r} />
        })}
      </g>
    </svg>
  )
}

//  ------------------------------ | CTA 3 | ------------------------------  //

export default function Cta3() {
  return (
    <section className="bg-background py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden rounded-[2rem] border border-transparent bg-sky-50 px-6 py-20 shadow-xl shadow-sky-900/10 sm:px-12 sm:py-24 lg:px-20 dark:border-sky-800/30 dark:bg-sky-950/40 dark:shadow-none">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <TopoPattern className="absolute -top-[300px] -left-[300px] h-[800px] w-[800px] text-sky-200 mix-blend-multiply dark:text-sky-400/10 dark:mix-blend-screen" />

            <TopoPattern className="absolute -right-[300px] -bottom-[300px] h-[800px] w-[800px] text-sky-200 mix-blend-multiply dark:text-sky-400/10 dark:mix-blend-screen" />

            <div className="absolute top-1/2 left-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/60 blur-3xl dark:bg-sky-900/20" />
          </div>

          <div className="relative z-10 mx-auto flex max-w-3xl flex-col gap-10 text-center">
            <h2 className="text-3xl font-medium tracking-tight text-slate-800 sm:text-4xl lg:text-[42px] lg:leading-[1.2] dark:text-slate-100">
              Transform urban mobility with our intelligent transportation
              solutions
            </h2>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button className="h-14 rounded-full bg-sky-700 px-8 text-base font-medium text-white shadow-sm hover:bg-sky-800 dark:bg-sky-600 dark:text-white dark:hover:bg-sky-500">
                Start Your Journey
              </Button>
              <motion.div
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                className="relative overflow-hidden rounded-full"
              >
                <Button
                  variant="outline"
                  className="relative h-14 overflow-hidden rounded-full border-sky-200 bg-transparent px-8 text-base font-medium text-slate-800 shadow-sm transition-all duration-300 hover:border-transparent hover:text-white dark:border-sky-800 dark:text-slate-100"
                >
                  <motion.span
                    className="absolute inset-0 z-0 rounded-full bg-gradient-to-r from-sky-800 via-sky-600 to-sky-500 dark:from-sky-800 dark:via-sky-600 dark:to-sky-500"
                    variants={{
                      rest: { scaleX: 0 },
                      hover: { scaleX: 1 },
                    }}
                    style={{ originX: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  />

                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <motion.span
                      variants={{
                        rest: { x: 4 },
                        hover: { x: 0 },
                      }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      Watch demo
                    </motion.span>

                    <motion.span
                      variants={{
                        rest: { x: 0 },
                        hover: { x: 8 },
                      }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      <ArrowRight className="size-4 shrink-0" />
                    </motion.span>
                  </span>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
