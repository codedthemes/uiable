// shadcn
import { Badge } from "@/components/ui/badge"
import { Spinner } from "@/components/ui/spinner"

//  ------------------------------ | BADGE - SPINNER | ------------------------------  //

export function BadgeWithSpinner() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge variant="destructive">
        <Spinner data-icon="inline-start" />
        Deleting
      </Badge>
      <Badge variant="default">
        Generating
        <Spinner data-icon="inline-end" />
      </Badge>
    </div>
  )
}
