// shadcn
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

//  ------------------------------ | CTA 14 | ------------------------------  //

export default function Cta14() {
  const count = 6

  let nested = null
  for (let i = count; i >= 1; i--) {
    nested = (
      <div className="size-full rounded-full bg-amber-500/15 p-12" key={i}>
        {nested}
      </div>
    )
  }
  return (
    <div className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 z-10 bg-yellow-200 dark:bg-amber-600/50"></div>
      <div className="absolute inset-0 z-20 bg-card/85"></div>
      <div className="relative z-30 container mx-auto px-6 lg:px-8">
        <div className="relative mx-auto max-w-250">
          <div className="relative">
            <div className="relative overflow-hidden rounded-xl bg-card p-5 shadow-[0_0_40px_-8px_#4680ff38] sm:p-14">
              <div className="pointer-events-none absolute inset-0 z-50 rounded-xl border-[4px] border-amber-500/40 max-lg:mask-t-from-10% max-lg:mask-t-to-50% lg:mask-r-from-10% lg:mask-r-to-50% dark:border-amber-500/40"></div>
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 lg:col-span-6">
                  <div className="flex flex-col items-start gap-4 text-left sm:gap-8">
                    <div className="flex flex-col items-start gap-4 text-left sm:gap-5">
                      <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-3 py-1 text-sm font-semibold tracking-wider text-amber-500 uppercase">
                        <span className="size-2 rounded-full bg-amber-500"></span>
                        LET&apos;S BUILD TOGETHER
                      </div>
                      <h2 className="text-4xl font-bold text-slate-900 sm:text-5xl lg:text-6xl dark:text-slate-100">
                        Build Smarter.
                        <br />
                        <span className="text-amber-500">Move Faster.</span>
                      </h2>
                      <p className="max-w-100 text-lg text-slate-700 dark:text-slate-300">
                        From ideas to intelligent solutions, we help you turn
                        possibilities into real results.
                      </p>
                    </div>
                    <div className="flex w-full max-w-sm flex-col gap-3 sm:flex-row sm:items-center sm:gap-2">
                      <Input
                        placeholder="Enter your mail"
                        className="h-11 bg-transparent"
                      />
                      <Button className="h-11 shrink-0 bg-amber-500 text-white hover:bg-amber-600">
                        Get Started
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 max-lg:h-75 lg:col-span-6"></div>
              </div>
              <div className="absolute max-lg:bottom-0 max-lg:left-2/4 max-lg:-translate-x-2/4 max-lg:translate-y-2/4 max-lg:pb-20 lg:top-2/4 lg:right-0 lg:translate-x-2/4 lg:-translate-y-1/2 lg:pr-20">
                <div className="size-150">{nested}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
