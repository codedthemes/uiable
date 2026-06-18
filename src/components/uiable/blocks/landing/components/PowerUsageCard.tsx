// assets
import { ArrowRight } from "lucide-react";

// ------------------------------ | POWER USAGE CARD | ------------------------------ //

export default function PowerUsageCard() {
  return (
    <div className="border border-border rounded-xl p-4 flex flex-col gap-5 bg-card w-full">
      {/* Top Row: Title & Link Arrow */}
      <div className="flex items-center justify-between w-full">
        <span className="text-base font-medium leading-5 tracking-normal text-card-foreground select-none">
          Power Usage
        </span>
        <ArrowRight size={20} className="text-secondary-foreground cursor-pointer hover:translate-x-0.5 transition-transform" />
      </div>

      {/* Bottom Row: Content & Chart */}
      <div className="flex items-end justify-between gap-4 w-full">
        <div className="flex flex-col gap-1 max-w-[130px]">
          <span className="text-xl font-semibold leading-6 tracking-normal text-secondary-foreground">
            4.6 kW
          </span>
          <span className="text-xs font-normal leading-3 tracking-normal text-muted-foreground">
            8% higher than last
            <br />
            month.
          </span>
        </div>

        {/* Tiny vertical bar chart */}
        <div className="flex items-end gap-1.5 h-12 shrink-0">
          <div className="h-[50%] w-2 rounded-full bg-primary/20" />
          <div className="h-[75%] w-2 rounded-full bg-primary/20" />
          <div className="h-[35%] w-2 rounded-full bg-primary/20" />
          <div className="h-[70%] w-2 rounded-full bg-primary" />
          <div className="h-[55%] w-2 rounded-full bg-primary/20" />
          <div className="h-[75%] w-2 rounded-full bg-primary/20" />
          <div className="h-[85%] w-2 rounded-full bg-primary/20" />
        </div>
      </div>
    </div>
  );
}
