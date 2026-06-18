// shadcn
import { Progress } from "@/components/ui/progress";

//  ------------------------------ | PROGRESS - SOLID SECONDARY | ------------------------------  //

export default function ProgressSolidSecondary() {
  return (
    <div className="w-full">
      <Progress
        value={50}
        className="*:h-4 *:bg-slate-500/20 dark:*:bg-muted/10 *:rounded-lg **:bg-secondary **:rounded-lg"
      />
    </div>
  );
}
