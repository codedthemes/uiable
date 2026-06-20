// project
import { cn } from "@/lib/utils";

// assets
import { ArrowUpRight } from "lucide-react";

interface IncomeItemProps {
  label: string;
  amount: string;
  change: string;
  color: string;
}

//  ------------------------------ | BLOCK - INCOME ITEM | ------------------------------  //

export default function IncomeItem({
  label,
  amount,
  change,
  color
}: IncomeItemProps) {
  return (
    <div className="p-4 rounded-xl bg-muted/30 border border-transparent hover:border-border transition-colors">
      <div className="flex items-center gap-2 mb-1">
        <span className={cn("w-2 h-2 rounded-full", color)}></span>
        <span className="text-xs font-medium text-muted-foreground">
          {label}
        </span>
      </div>
      <h6 className="text-sm font-bold flex items-center gap-2">
        {amount}
        <span className="text-[10px] font-normal text-muted-foreground flex items-center">
          <ArrowUpRight className="h-2 w-2 mr-1 text-green-500" /> {change}
        </span>
      </h6>
    </div>
  );
}
