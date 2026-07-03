// shadcn
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

// assets
import { MinusIcon, PlusIcon } from "lucide-react";

//  ------------------------------ | BUTTON GROUP - ORIENTATION | ------------------------------  //

export default function ButtonGroupOrientation() {
  return (
    <ButtonGroup
      orientation="vertical"
      aria-label="Media controls"
      className="h-fit"
    >
      <Button variant="outline" size="icon">
        <PlusIcon />
      </Button>
      <Button variant="outline" size="icon">
        <MinusIcon />
      </Button>
    </ButtonGroup>
  );
}
