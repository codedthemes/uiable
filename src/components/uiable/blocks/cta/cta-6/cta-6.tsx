// shadcn
import { Button } from "@/components/ui/button"

//  ------------------------------ | CTA 6 | ------------------------------  //

export default function Cta6() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-20 sm:py-25">
      <span className="absolute right-2/4 -bottom-80 block h-100 w-150 translate-x-2/4 rounded-full bg-linear-to-r from-cyan-500 to-blue-500"></span>
      <div className="absolute inset-0 z-20 bg-slate-900/10 backdrop-blur-[150px]"></div>
      <div className="relative z-30 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 sm:gap-8">
          <div className="flex flex-col items-center gap-2 text-center sm:gap-5">
            <div className="flex rounded-full border border-sky-500/50 bg-sky-500/10 px-6 py-2">
              <span className="text-sm font-bold text-sky-500">
                Exclusive Sale
              </span>
            </div>
            <h2 className="text-lg font-medium text-slate-100 sm:text-3xl">
              Premium Deals Await You
            </h2>
            <p className="max-w-100 text-slate-400">
              Carefully selected offers at unbeatable prices, available for a
              limited time only. Shop before they’re gone!
            </p>
          </div>
          <Button
            size="lg"
            className="border-2 border-pink-500 bg-pink-500 text-white hover:bg-pink-500/20 hover:text-pink-500"
          >
            Explore Now
          </Button>
        </div>
      </div>
    </section>
  )
}
