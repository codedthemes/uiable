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

//  ------------------------------ | DROPDOWN MENU - BASIC INFO | ------------------------------  //

export function DropdownMenuBasicInfo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button className="inline-flex items-center gap-2 py-2 px-5 text-center border border-transparent bg-cyan-500 text-white hover:bg-cyan-600 hover:shadow-lg h-auto text-base font-medium transition-all duration-200 ease-in-out">
            Warning <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        }
      />
      <DropdownMenuContent align="start">
        <DropdownMenuItem>Action</DropdownMenuItem>
        <DropdownMenuItem>Another action</DropdownMenuItem>
        <DropdownMenuItem>Something else here</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
