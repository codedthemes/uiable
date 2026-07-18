// shadcn
import { Badge } from "@/components/ui/badge"

//  ------------------------------ | BADGE - GRADIENT VARIANT | ------------------------------  //

export function BadgeGradient() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge className="border-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-xs">
        Spectrum
      </Badge>
      <Badge className="border-0 bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-xs">
        Ocean
      </Badge>
      <Badge className="border-0 bg-gradient-to-r from-amber-500 to-rose-500 text-white shadow-xs">
        Sunset
      </Badge>
      <Badge className="border-0 bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-xs">
        Aurora
      </Badge>
      <Badge className="border border-violet-500/30 bg-gradient-to-r from-violet-500/15 via-fuchsia-500/15 to-pink-500/15 text-violet-700 dark:text-violet-300">
        Subtle Glass
      </Badge>
    </div>
  )
}
