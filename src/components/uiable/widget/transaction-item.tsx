// shadcn

// assets
import { ArrowDownLeft, ArrowUpRight, MoreVertical } from "lucide-react"

// project
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

interface TransactionItemProps {
  name: string
  id: string
  amount: string
  change: string
  type: "up" | "down" | "right"
  initial: string
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
    <div className="flex items-center p-4 px-6 transition-colors hover:bg-muted/30">
      <Avatar className="h-10 w-10 rounded-xl border">
        <AvatarFallback className="bg-transparent text-sm font-bold">
          {initial}
        </AvatarFallback>
      </Avatar>
      <div className="ml-4 grid flex-grow grid-cols-2 gap-2">
        <div>
          <h6 className="mb-0 text-sm leading-tight font-semibold">{name}</h6>
          <p className="text-xs text-muted-foreground">{id}</p>
        </div>
        <div className="text-right">
          <h6 className="mb-0 text-sm leading-tight font-bold">{amount}</h6>
          <p
            className={cn(
              "flex items-center justify-end gap-1 text-xs font-medium",
              type === "down"
                ? "text-destructive"
                : type === "up"
                  ? "text-green-500"
                  : "text-yellow-500"
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
  )
}
