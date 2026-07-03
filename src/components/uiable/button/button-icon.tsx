// shadcn
import { Button } from "@/components/ui/button";

// assets
import { CircleFadingArrowUpIcon } from "lucide-react";

//  ------------------------------ | BUTTON ICON | ------------------------------  //

export default function ButtonIcon() {
  return (
    <Button variant="outline" size="icon">
      <CircleFadingArrowUpIcon />
    </Button>
  );
}
