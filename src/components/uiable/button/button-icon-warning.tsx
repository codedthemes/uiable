// shadcn
import { Button } from "@/components/ui/button";

// assets
import { AlertTriangle } from "lucide-react";

//  ------------------------------ | BUTTON ICON WARNING | ------------------------------  //

export default function ButtonIconWarning() {
  return (
    <Button className="gap-2 bg-yellow-500 text-white hover:bg-yellow-600">
      <AlertTriangle className="size-5" /> Warning
    </Button>
  );
}
