// shadcn

// assets
import { CircleCheck } from "lucide-react"

import { Button } from "@/components/ui/button"

//  ------------------------------ | BUTTON ICON SUCCESS | ------------------------------  //

export default function ButtonIconSuccess() {
  return (
    <Button className="gap-2 bg-green-500 text-white hover:bg-green-600">
      <CircleCheck className="size-5" /> Success
    </Button>
  )
}
