// shadcn
import { Button } from "@/components/ui/button"

// assets
import { Bell } from "lucide-react"

//  ------------------------------ | BUTTON WITH BADGE | ------------------------------  //

export default function ButtonWithBadge() {
  return (
    <Button
      variant="outline"
      size="icon"
      className="relative dark:border-border"
    >
      <Bell />
      <span className="absolute -top-1 -right-0.5 size-2 animate-ping rounded-full bg-red-400 opacity-75"></span>
      <span className="absolute -top-1 -right-0.5 size-2 rounded-full bg-red-500"></span>
    </Button>
  )
}
