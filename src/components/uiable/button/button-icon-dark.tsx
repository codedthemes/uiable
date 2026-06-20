// shadcn
import { Button } from "@/components/ui/button";

// assets
import { Moon } from "lucide-react";

//  ------------------------------ | BUTTON ICON DARK | ------------------------------  //

export default function ButtonIconDark() {
  return (
    <Button className="gap-2 bg-mist-800 text-white hover:bg-mist-900">
      <Moon className="size-5" /> Dark
    </Button>
  );
}
