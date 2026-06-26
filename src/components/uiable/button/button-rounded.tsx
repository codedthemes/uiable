// shadcn

// assets
import { ArrowUpIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

//  ------------------------------ | BUTTON ROUNDED | ------------------------------  //

export default function ButtonRounded() {
  return (
    <div className="flex items-center gap-2">
      <Button className="rounded-full">Get Started</Button>
      <Button size="icon-lg" className="rounded-full">
        <ArrowUpIcon />
      </Button>
    </div>
  )
}
