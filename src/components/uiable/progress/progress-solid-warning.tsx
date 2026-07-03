// shadcn
import { Progress } from "@/components/ui/progress";

//  ------------------------------ | PROGRESS - SOLID WARNING | ------------------------------  //

export default function ProgressSolidWarning() {
  return (
    <div className="w-full">
      <Progress
        value={40}
        className="*:h-4 *:bg-muted/20 dark:*:bg-muted/10 *:rounded-lg **:bg-yellow-500 **:rounded-lg"
      />
    </div>
  );
}
