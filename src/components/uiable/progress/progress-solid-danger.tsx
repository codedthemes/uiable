// shadcn
import { Progress } from "@/components/ui/progress";

//  ------------------------------ | PROGRESS - SOLID DANGER | ------------------------------  //

export default function ProgressSolidDanger() {
  return (
    <div className="w-full">
      <Progress
        value={100}
        className="*:h-4 *:bg-muted/20 dark:*:bg-muted/10 *:rounded-lg **:bg-destructive **:rounded-lg"
      />
    </div>
  );
}
