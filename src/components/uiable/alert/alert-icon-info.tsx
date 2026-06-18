// shadcn
import { Alert } from "@/components/ui/alert";

// assets
import { Info } from "lucide-react";

//  ------------------------------ | ALERT - ICON INFO | ------------------------------  //

export default function AlertIconInfo() {
  return (
    <Alert className="px-5 py-3 mb-3 rounded-lg border flex items-center gap-3 border-cyan-500/20 bg-cyan-500/10 text-cyan-700 dark:text-cyan-400">
      <Info className="h-5 w-5" />
      <span>A simple info alert—check it out!</span>
    </Alert>
  );
}
