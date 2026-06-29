// shadcn

// assets
import { ArrowUpRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

//  ------------------------------ | BUTTON SIZE | ------------------------------  //

export default function ButtonSize() {
  return (
    <div className="flex flex-row flex-wrap items-start gap-4">
      <div className="flex items-center gap-2">
        <Button size="xs">Extra Small</Button>
        <Button size="icon-xs" aria-label="Submit">
          <ArrowUpRightIcon />
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Button size="sm">Small</Button>
        <Button size="icon-sm" aria-label="Submit">
          <ArrowUpRightIcon />
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Button>Default</Button>
        <Button size="icon" aria-label="Submit">
          <ArrowUpRightIcon />
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Button size="lg">Large</Button>
        <Button size="icon-lg" aria-label="Submit">
          <ArrowUpRightIcon />
        </Button>
      </div>
    </div>
  )
}
