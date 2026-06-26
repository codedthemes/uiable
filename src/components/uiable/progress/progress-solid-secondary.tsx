// shadcn
import { Progress } from "@/components/ui/progress"

//  ------------------------------ | PROGRESS - SOLID SECONDARY | ------------------------------  //

export default function ProgressSolidSecondary() {
  return (
    <div className="w-full">
      <Progress
        value={50}
        className="*:h-4 *:rounded-lg *:bg-slate-500/20 **:rounded-lg **:bg-secondary dark:*:bg-muted/10"
      />
    </div>
  )
}
