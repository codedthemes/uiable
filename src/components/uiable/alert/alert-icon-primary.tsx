// shadcn
import { Alert } from "@/components/ui/alert";

// assets
import { Zap } from "lucide-react";

//  ------------------------------ | ALERT - ICON PRIMARY | ------------------------------  //

export default function AlertIconPrimary() {
  return (
    <Alert className="px-5 py-3 mb-3 rounded-lg border flex items-center gap-3 border-primary/20 bg-primary/10 text-primary">
      <Zap className="h-5 w-5" />
      <span>A simple primary alert—check it out!</span>
    </Alert>
  );
}
