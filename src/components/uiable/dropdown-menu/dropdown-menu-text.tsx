// shadcn

// assets
import { ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

//  ------------------------------ | DROPDOWN MENU - TEXT | ------------------------------  //

export default function DropdownMenuText() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button variant="destructive">
            Text <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        }
      />
      <DropdownMenuContent align="start" className="w-64 p-5 text-base">
        <h5 className="mb-1">Some title example</h5>
        <p className="mb-3 text-xs text-muted-foreground">And this is more</p>
        <p className="leading-relaxed text-muted-foreground">
          Some example text that's free-flowing within the dropdown menu.
        </p>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
