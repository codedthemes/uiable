// shadcn
import { Separator } from "@/components/ui/separator"

//  ------------------------------ | SEPARATOR - WITH TEXT | ------------------------------  //

export function SeparatorWithText() {
  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <div className="flex items-center gap-4">
        <Separator className="flex-1" />
        <span className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
          Or continue with
        </span>
        <Separator className="flex-1" />
      </div>

      <div className="flex items-center gap-3">
        <span className="text-sm font-semibold text-foreground">
          Section Break
        </span>
        <Separator className="flex-1" />
      </div>

      <div className="relative flex items-center justify-center">
        <Separator className="w-full" />
        <span className="absolute rounded-lg bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
          Updated Today
        </span>
      </div>
    </div>
  )
}
