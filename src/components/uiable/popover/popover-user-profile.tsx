// shadcn
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"

// assets
import { CreditCard, LogOut, Settings, User } from "lucide-react"

//  ------------------------------ | POPOVER - USER PROFILE | ------------------------------  //

export function PopoverUserProfile() {
  return (
    <Popover>
      <PopoverTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-full p-0"
          />
        }
      >
        <Avatar className="h-8 w-8">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="w-64 gap-0 p-3" align="start">
        <div className="flex items-center gap-3 p-2">
          <Avatar className="h-10 w-10">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <h6 className="text-sm font-medium">Shadcn</h6>
            <span className="text-xs text-muted-foreground">m@example.com</span>
          </div>
        </div>
        <Separator className="my-1" />
        <div className="flex flex-col gap-1 p-1">
          <Button variant="ghost" className="h-8 w-full justify-start text-sm">
            <User className="mr-2 h-4 w-4" />
            Profile
          </Button>
          <Button variant="ghost" className="h-8 w-full justify-start text-sm">
            <CreditCard className="mr-2 h-4 w-4" />
            Billing
          </Button>
          <Button variant="ghost" className="h-8 w-full justify-start text-sm">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
        </div>
        <Separator className="my-1" />
        <div className="p-1">
          <Button
            variant="ghost"
            className="h-8 w-full justify-start text-sm text-destructive hover:bg-destructive/10 hover:text-destructive"
          >
            <LogOut className="mr-2 h-4 w-4" />
            Log out
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
