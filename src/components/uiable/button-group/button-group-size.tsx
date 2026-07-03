// shadcn
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

// assets
import { PlusIcon } from "lucide-react";

//  ------------------------------ | BUTTON GROUP - SIZE | ------------------------------  //

export default function ButtonGroupSize() {
  return (
    <div className="flex flex-col items-start gap-8">
      <ButtonGroup>
        <Button size="sm">Small</Button>
        <Button size="sm">Button</Button>
        <Button size="sm">Group</Button>
        <Button size="icon-sm" className="h-auto">
          <PlusIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button>Default</Button>
        <Button>Button</Button>
        <Button>Group</Button>
        <Button size="icon" className="h-auto">
          <PlusIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button size="lg">Large</Button>
        <Button size="lg">Button</Button>
        <Button size="lg">Group</Button>
        <Button size="icon-lg" className="h-auto">
          <PlusIcon />
        </Button>
      </ButtonGroup>
    </div>
  );
}
