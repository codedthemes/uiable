// shadcn
import { Progress } from "@/components/ui/progress"

//  ------------------------------ | PROGRESS - SOLID SUCCESS | ------------------------------  //

export default function ProgressSolidSuccess() {
  return (
    <div className="w-full">
      <Progress
        value={25}
        className="*:h-4 *:rounded-lg *:bg-muted/20 **:rounded-lg **:bg-green-600 dark:*:bg-muted/10"
      />
    </div>
  )
}
