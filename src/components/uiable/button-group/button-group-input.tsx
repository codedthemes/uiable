// shadcn
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Input } from "@/components/ui/input";

// assets
import { SearchIcon } from "lucide-react";

//  ------------------------------ | BUTTON GROUP - INPUT | ------------------------------  //

export default function ButtonGroupInput() {
  return (
    <ButtonGroup className="items-stretch">
      <Input placeholder="Search..." className="z-10" />
      <Button variant="outline" aria-label="Search">
        <SearchIcon />
      </Button>
    </ButtonGroup>
  );
}
