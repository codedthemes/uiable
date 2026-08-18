// shadcn
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

// assets
import { Home, LogOut, Menu, Settings, Users } from "lucide-react"

//  ------------------------------ | SHEET - MENU | ------------------------------  //

export default function SheetMenu() {
  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button
            variant="outline"
            className="h-10 w-10 p-0 dark:border-border"
          />
        }
      >
        <Menu className="h-5 w-5" />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="flex w-[300px] flex-col gap-6 px-0 py-6 sm:max-w-[300px]"
      >
        <SheetHeader className="px-6 text-left">
          <SheetTitle className="text-xl font-bold">App Navigation</SheetTitle>
        </SheetHeader>

        <div className="flex-1 space-y-1 overflow-y-auto px-4">
          <Button
            variant="ghost"
            className="w-full justify-start text-base font-normal"
          >
            <Home className="mr-3 h-5 w-5" />
            Dashboard
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-base font-normal"
          >
            <Users className="mr-3 h-5 w-5" />
            Team Members
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-base font-normal"
          >
            <Settings className="mr-3 h-5 w-5" />
            Settings
          </Button>
        </div>

        <div className="mt-auto border-t px-6 pt-6">
          <div className="flex items-center gap-3">
            <Avatar className="after:border-none">
              <AvatarImage
                src="https://cdn.uiable.com/user/avatar-2.jpg"
                alt="user"
              />
              <AvatarFallback>PP</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm leading-none font-medium">John Doe</span>
              <span className="mt-1 text-xs text-muted-foreground">
                john@example.com
              </span>
            </div>
            <Button variant="ghost" className="ml-auto h-8 w-8 p-0">
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
