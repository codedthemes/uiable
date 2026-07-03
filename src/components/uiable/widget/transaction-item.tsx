// shadcn
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

// project
import { cn } from "@/lib/utils";

// assets
import { ArrowDownLeft, ArrowUpRight, MoreVertical } from "lucide-react";

interface TransactionItemProps {
  name: string;
  id: string;
  amount: string;
  change: string;
  type: "up" | "down" | "right";
  initial: string;
}

//  ------------------------------ | BLOCK - TRANSACTION ITEM | ------------------------------  //

export default function TransactionItem({
  name,
  id,
  amount,
  change,
  type,
  initial,
}: TransactionItemProps) {
  return (
    <div className="flex items-center p-4 px-6 hover:bg-muted/30 transition-colors">
      <Avatar className="h-10 w-10 rounded-xl border">
        <AvatarFallback className="bg-transparent font-bold text-sm">
          {initial}
        </AvatarFallback>
      </Avatar>
      <div className="ml-4 flex-grow grid grid-cols-2 gap-2">
        <div>
          <h6 className="text-sm font-semibold mb-0 leading-tight">{name}</h6>
          <p className="text-xs text-muted-foreground">{id}</p>
        </div>
        <div className="text-right">
          <h6 className="text-sm font-bold mb-0 leading-tight">{amount}</h6>
          <p
            className={cn(
              "text-xs font-medium flex items-center justify-end gap-1",
              type === "down"
                ? "text-destructive"
                : type === "up"
                  ? "text-green-500"
                  : "text-yellow-500",
            )}
          >
            {type === "down" && <ArrowDownLeft className="h-3 w-3" />}
            {type === "up" && <ArrowUpRight className="h-3 w-3" />}
            {type === "right" && <MoreVertical className="h-3 w-3 rotate-90" />}
            {change}
          </p>
        </div>
      </div>
    </div>
  );
}
