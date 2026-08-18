// shadcn
import { Button } from "@/components/ui/button"

//  ------------------------------ | SPINNER - BUTTON | ------------------------------  //

export default function SpinnerButtonPrimary() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button className="bg-primary text-white" disabled>
        <div
          className="flex size-4 animate-spin rounded-full border-[2px] border-white/50 border-l-transparent"
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </Button>
      <Button
        className="inline-flex items-center gap-3 bg-primary text-white"
        disabled
      >
        <div
          className="flex size-4 animate-spin rounded-full border-[2px] border-white/50 border-l-transparent"
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
        Loading...
      </Button>
    </div>
  )
}
