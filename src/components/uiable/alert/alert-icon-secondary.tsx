// shadcn
import { Alert } from "@/components/ui/alert";

// assets
import { Info } from "lucide-react";

//  ------------------------------ | ALERT - ICON SECONDARY | ------------------------------  //

export default function AlertIconSecondary() {
  return (
    <Alert className="px-5 py-3 mb-3 rounded-lg border flex items-center gap-3 border-secondary/20 bg-secondary/10 text-secondary">
      <Info className="h-5 w-5" />
      <span>A simple secondary alert—check it out!</span>
    </Alert>
  );
}
