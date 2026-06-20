// shadcn
import { Alert } from "@/components/ui/alert";

// assets
import { AlertTriangle } from "lucide-react";

//  ------------------------------ | ALERT - ICON WARNING | ------------------------------  //

export default function AlertIconWarning() {
  return (
    <Alert className="px-5 py-3 mb-3 rounded-lg border flex items-center gap-3 border-yellow-500/20 bg-yellow-500/10 text-yellow-700 dark:text-yellow-400">
      <AlertTriangle className="h-5 w-5" />
      <span>A simple warning alert—check it out!</span>
    </Alert>
  );
}
