// shadcn
import { Button } from "@/components/ui/button";

// assets
import { Info } from "lucide-react";

//  ------------------------------ | BUTTON ICON INFO | ------------------------------  //

export default function ButtonIconInfo() {
  return (
    <Button className="gap-2 bg-cyan-500 text-white hover:bg-cyan-600">
      <Info className="size-5" /> Info
    </Button>
  );
}
