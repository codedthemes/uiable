// shadcn
import { Progress } from "@/components/ui/progress"

//  ------------------------------ | PROGRESS - SOLID INFO | ------------------------------  //

export default function ProgressSolidInfo() {
  return (
    <div className="w-full">
      <Progress
        value={60}
        className="*:h-4 *:rounded-lg *:bg-muted/20 **:rounded-lg **:bg-cyan-500 dark:*:bg-muted/10"
      />
    </div>
  )
}
