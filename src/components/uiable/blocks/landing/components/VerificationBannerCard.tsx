// shadcn

// assets
import { BadgeCheck, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"

//  ------------------------------ | BLOCK - VERIFICATION BANNER CARD | ------------------------------  //

export default function VerificationBannerCard() {
  return (
    <Button
      variant="ghost"
      className="flex h-auto w-full cursor-pointer items-center justify-between rounded-xl border border-border bg-card px-4 py-3 transition-colors hover:bg-accent/20"
    >
      <div className="flex items-center gap-2.5">
        <BadgeCheck className="size-5 text-foreground" />
        <span className="text-sm leading-5 font-medium tracking-normal text-foreground">
          Your profile has been verified.
        </span>
      </div>
      <ChevronRight className="size-5 text-foreground" />
    </Button>
  )
}
