// shadcn
import { Button } from "@/components/ui/button";

// assets
import { ShieldAlert } from "lucide-react";

//  ------------------------------ | BUTTON ICON DANGER | ------------------------------  //

export default function ButtonIconDanger() {
  return (
    <Button className="gap-2 bg-red-500 text-white hover:bg-red-600">
      <ShieldAlert className="size-5" /> Danger
    </Button>
  );
}
