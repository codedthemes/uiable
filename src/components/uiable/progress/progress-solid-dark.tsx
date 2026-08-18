// shadcn
import { Progress } from "@/components/ui/progress"

//  ------------------------------ | PROGRESS - SOLID DARK | ------------------------------  //

export default function ProgressSolidDark() {
  return (
    <div className="w-full">
      <Progress
        value={85}
        className="*:h-4 *:rounded-lg *:bg-muted/20 **:rounded-lg **:bg-slate-800 dark:*:bg-muted/10 dark:**:bg-slate-100"
      />
    </div>
  )
}
