// shadcn
import { Button } from "@/components/ui/button";

// assets
import { BadgeCheck, ChevronRight } from "lucide-react";

//  ------------------------------ | BLOCK - VERIFICATION BANNER CARD | ------------------------------  //

export default function VerificationBannerCard() {
  return (
    <Button
      variant="ghost"
      className="border border-border rounded-xl px-4 py-3 flex items-center justify-between bg-card hover:bg-accent/20 cursor-pointer transition-colors w-full h-auto"
    >
      <div className="flex items-center gap-2.5">
        <BadgeCheck className="size-5 text-foreground" />
        <span className="text-sm font-medium leading-5 tracking-normal text-foreground">
          Your profile has been verified.
        </span>
      </div>
      <ChevronRight className="size-5 text-foreground" />
    </Button>
  );
}
