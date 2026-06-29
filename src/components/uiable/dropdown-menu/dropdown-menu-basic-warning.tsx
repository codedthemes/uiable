// shadcn

// assets
import { ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

//  ------------------------------ | DROPDOWN MENU - BASIC WARNING | ------------------------------  //

export function DropdownMenuBasicWarning() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button className="inline-flex h-auto items-center gap-2 border border-transparent bg-yellow-500 px-5 py-2 text-center text-base font-medium text-white transition-all duration-200 ease-in-out hover:bg-yellow-600 hover:shadow-lg">
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
  )
}
