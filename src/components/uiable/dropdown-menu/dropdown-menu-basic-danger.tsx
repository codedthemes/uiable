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

//  ------------------------------ | DROPDOWN MENU - BASIC DANGER | ------------------------------  //

export default function DropdownMenuBasicDanger() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button variant="destructive">
            Danger <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        }
      />
      <DropdownMenuContent align="start" className="w-48">
        <DropdownMenuItem>Action</DropdownMenuItem>
        <DropdownMenuItem>Another action</DropdownMenuItem>
        <DropdownMenuItem>Something else here</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
