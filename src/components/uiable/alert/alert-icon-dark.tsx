// shadcn
import { Alert } from "@/components/ui/alert";

// assets
import { Moon } from "lucide-react";

//  ------------------------------ | ALERT - ICON DARK | ------------------------------  //

export default function AlertIconDark() {
  return (
    <Alert className="px-5 py-3 mb-3 rounded-lg border flex items-center gap-3 border-dark-800/20 bg-dark-800/10 text-dark-800 dark:text-dark-300">
      <Moon className="h-5 w-5" />
      <span>A simple dark alert—check it out!</span>
    </Alert>
  );
}
