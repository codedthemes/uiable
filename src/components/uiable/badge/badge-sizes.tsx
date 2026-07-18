// shadcn
import { Badge } from "@/components/ui/badge"

//  ------------------------------ | BADGE - SIZES | ------------------------------  //

export function BadgeSizes() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge className="px-1.5 py-0.5 text-[10px]">Small</Badge>
      <Badge>Default</Badge>
      <Badge className="px-3 py-1 text-xs">Large</Badge>
      <Badge className="px-3.5 py-1.5 text-sm">Extra Large</Badge>
    </div>
  )
}
