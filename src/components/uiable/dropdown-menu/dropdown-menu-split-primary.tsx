// shadcn
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

// assets
import { ChevronDown } from "lucide-react";

//  ------------------------------ | DROPDOWN MENU - SPLIT PRIMARY | ------------------------------  //

export default function DropdownMenuSplitPrimary() {
  return (
    <div className="flex items-stretch -space-x-px">
      <Button
        variant="default"
        className="rounded-r-none border-r border-black/10"
      >
        Primary
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button variant="default" className="rounded-l-none px-2">
              <ChevronDown className="h-4 w-4" />
            </Button>
          }
        />
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuItem>Action</DropdownMenuItem>
          <DropdownMenuItem>Another action</DropdownMenuItem>
          <DropdownMenuItem>Something else here</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
