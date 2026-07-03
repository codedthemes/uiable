// shadcn
import { Button } from "@/components/ui/button";

//  ------------------------------ | SPINNER - BUTTON | ------------------------------  //

export default function SpinnerButtonPrimary() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button className="bg-primary text-white" disabled>
        <div
          className="flex border-[2px] border-white/50 rounded-full size-4 animate-spin border-l-transparent"
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </Button>
      <Button
        className="bg-primary text-white inline-flex items-center gap-3"
        disabled
      >
        <div
          className="flex border-[2px] border-white/50 rounded-full size-4 animate-spin border-l-transparent"
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
        Loading...
      </Button>
    </div>
  );
}
