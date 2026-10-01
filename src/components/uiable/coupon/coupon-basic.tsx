// shadcn
import { Button } from "@/components/ui/button"

// assets
import { Copy } from "lucide-react"

//  ------------------------------ | COUPON - BASIC | ------------------------------  //

export default function CouponBasic() {
  return (
    <div className="flex w-full max-w-sm flex-col items-stretch rounded-lg border bg-card text-card-foreground sm:flex-row">
      <div className="flex flex-col items-center justify-center border-b border-dashed p-4 sm:border-r sm:border-b-0 sm:p-6">
        <h3 className="text-3xl font-bold text-primary">20%</h3>
        <span className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">
          OFF
        </span>
      </div>
      <div className="flex flex-1 flex-col justify-between p-4 sm:p-6">
        <div>
          <h3 className="leading-none font-semibold tracking-tight">
            Summer Sale
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Valid until Aug 31, 2026
          </p>
        </div>
        <div className="mt-4 flex items-center gap-2 rounded-lg bg-muted p-2">
          <code className="flex-1 text-center font-mono text-sm font-bold">
            SUMMER20
          </code>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-muted-foreground hover:text-foreground"
            title="Copy code"
          >
            <Copy className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
