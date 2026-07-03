// shadcn
import { Alert } from "@/components/ui/alert";

// assets
import { CircleCheck } from "lucide-react";

//  ------------------------------ | ALERT - ICON SUCCESS | ------------------------------  //

export default function AlertIconSuccess() {
  return (
    <Alert className="px-5 py-3 mb-3 rounded-lg border flex items-center gap-3 border-green-600/20 bg-green-600/10 text-green-700 dark:text-green-400">
      <CircleCheck className="h-5 w-5" />
      <span>A simple success alert—check it out!</span>
    </Alert>
  );
}
