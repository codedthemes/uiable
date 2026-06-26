// shadcn
import { Badge } from "@/components/ui/badge"
import { Spinner } from "@/components/ui/spinner"

//  ------------------------------ | SPINNER - BADGE | ------------------------------  //

export function SpinnerBadge() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 [--radius:1.2rem]">
      <Badge>
        <Spinner data-icon="inline-start" />
        Syncing
      </Badge>
      <Badge variant="secondary">
        <Spinner data-icon="inline-start" />
        Updating
      </Badge>
      <Badge variant="outline">
        <Spinner data-icon="inline-start" />
        Processing
      </Badge>
    </div>
  )
}
