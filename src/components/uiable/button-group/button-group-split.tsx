// shadcn
import { Button } from "@/components/ui/button";
import {
  ButtonGroup,
  ButtonGroupSeparator
} from "@/components/ui/button-group";

// assets
import { IconPlus } from "@tabler/icons-react";

//  ------------------------------ | BUTTON GROUP - SPLIT | ------------------------------  //

export default function ButtonGroupSplit() {
  return (
    <ButtonGroup>
      <Button variant="secondary">Button</Button>
      <ButtonGroupSeparator />
      <Button size="icon" variant="secondary" className="h-auto">
        <IconPlus />
      </Button>
    </ButtonGroup>
  );
}
