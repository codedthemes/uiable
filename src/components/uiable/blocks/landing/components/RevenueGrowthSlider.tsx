// shadcn
import { Slider } from "@/components/ui/slider"

// project-imports
import Logo1 from "@/images/svg/landing/logo1"
import NoiseOverlay from "@/images/svg/landing/noise-overlay"

// assets
import { IconArrowUpRight } from "@tabler/icons-react"

//  ------------------------------ | BLOCK - REVENUE GROWTH SLIDER | ------------------------------  //

export default function RevenueGrowthSlider() {
  return (
    <div className="relative overflow-hidden rounded-xl bg-primary p-6 text-white shadow-[0_4px_20px_color-mix(in_srgb,var(--primary)_25%,transparent)]">
      <NoiseOverlay aria-hidden="true" />

      <div className="relative z-10 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div
            aria-hidden="true"
            className="relative flex size-12 items-center justify-center"
          >
            <div className="absolute inset-0 rounded-full border border-white/25 bg-[linear-gradient(180deg,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0.04)_100%),var(--primary)] shadow-[inset_0_1px_2px_rgba(255,255,255,0.45),inset_0_-3px_8px_rgba(0,0,0,0.12),0_2px_12px_rgba(255,255,255,0.12)]" />

            <div className="absolute top-[8%] left-[12%] h-[34%] w-[76%] rounded-full bg-white/35 blur-lg" />

            <div className="absolute inset-px rounded-full border-t border-white/20" />

            <div className="relative z-10 scale-110 text-white">
              <Logo1 />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <span className="flex items-center gap-1 text-xs font-medium opacity-75">
            <IconArrowUpRight aria-hidden="true" className="size-3.5" />
            Revenue
          </span>

          <span className="text-lg leading-snug font-semibold">
            85% Growth Compared to Yesterday
          </span>
        </div>

        <Slider
          defaultValue={[70]}
          max={100}
          step={1}
          className="w-full text-white [&_[data-slot=slider-range]]:bg-white [&_[data-slot=slider-thumb]]:border-white [&_[data-slot=slider-track]]:bg-white/30"
        />
      </div>
    </div>
  )
}
