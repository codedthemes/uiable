// shadcn
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar"

// assets
import { MoreHorizontalIcon, PenIcon, ShareIcon, TrashIcon } from "lucide-react"

//  ------------------------------ | MENUBAR - COMPACT | ------------------------------  //

export function MenubarCompact() {
  return (
    <Menubar className="h-9 w-fit p-1">
      <MenubarMenu>
        <MenubarTrigger className="h-full px-2 py-1 hover:bg-muted focus:bg-muted data-[state=open]:bg-muted">
          <MoreHorizontalIcon className="h-4 w-4 text-muted-foreground" />
        </MenubarTrigger>
        <MenubarContent align="start">
          <MenubarItem>
            <PenIcon className="mr-2 h-4 w-4" />
            Edit
          </MenubarItem>
          <MenubarItem>
            <ShareIcon className="mr-2 h-4 w-4" />
            Share
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem variant="destructive">
            <TrashIcon className="mr-2 h-4 w-4" />
            Delete
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
