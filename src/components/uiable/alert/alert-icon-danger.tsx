// shadcn
import { Alert } from "@/components/ui/alert";

// assets
import { ShieldAlert } from "lucide-react";

//  ------------------------------ | ALERT - ICON DANGER | ------------------------------  //

export default function AlertIconDanger() {
  return (
    <Alert className="px-5 py-3 mb-3 rounded-lg border flex items-center gap-3 border-red-500/20 bg-red-500/10 text-red-500 font-medium">
      <ShieldAlert className="h-5 w-5" />
      <span>A simple danger alert—check it out!</span>
    </Alert>
  );
}
