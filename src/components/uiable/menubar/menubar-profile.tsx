// shadcn
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar"

// assets
import {
  LogOutIcon,
  MessageSquareIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react"

//  ------------------------------ | MENUBAR - PROFILE | ------------------------------  //

export function MenubarProfile() {
  return (
    <Menubar className="border-none bg-transparent shadow-none">
      <MenubarMenu>
        <MenubarTrigger className="border-none bg-transparent p-0 hover:bg-transparent focus:bg-transparent aria-expanded:bg-transparent aria-expanded:shadow-none data-[state=open]:bg-transparent">
          <Avatar className="h-8 w-8 cursor-pointer">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </MenubarTrigger>
        <MenubarContent align="end" className="w-56">
          <div className="flex items-center justify-start gap-2 p-2">
            <div className="flex flex-col space-y-1 leading-none">
              <p className="font-medium">shadcn</p>
              <p className="w-[200px] truncate text-sm text-muted-foreground">
                shadcn@example.com
              </p>
            </div>
          </div>
          <MenubarSeparator />
          <MenubarItem>
            <UserIcon className="mr-2 h-4 w-4" />
            Profile
          </MenubarItem>
          <MenubarItem>
            <MessageSquareIcon className="mr-2 h-4 w-4" />
            Messages
          </MenubarItem>
          <MenubarItem>
            <SettingsIcon className="mr-2 h-4 w-4" />
            Settings
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem variant="destructive">
            <LogOutIcon className="mr-2 h-4 w-4" />
            Log out
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
