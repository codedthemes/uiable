// shadcn
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

//  ------------------------------ | AVATAR - COUNTER INDICATOR | ------------------------------  //

export function AvatarCounterIndicator() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <div className="relative inline-block">
        <Avatar>
          <AvatarImage
            src="https://cdn.uiable.com/user/avatar-1.jpg"
            alt="@shadcn"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Badge className="absolute -top-1 -right-1 z-10 h-4 min-w-4 rounded-full bg-destructive px-1 text-[10px] font-medium text-white ring-2 ring-background">
          3
        </Badge>
      </div>
      <div className="relative inline-block">
        <Avatar>
          <AvatarImage
            src="https://cdn.uiable.com/user/avatar-4.jpg"
            alt="@alex"
          />
          <AvatarFallback>AL</AvatarFallback>
        </Avatar>
        <Badge className="absolute -top-1 -right-2 z-10 h-4 min-w-4 rounded-full bg-primary px-1 text-[10px] font-medium text-white ring-2 ring-background">
          12
        </Badge>
      </div>
      <div className="relative inline-block">
        <Avatar>
          <AvatarImage
            src="https://cdn.uiable.com/user/avatar-6.jpg"
            alt="@sarah"
          />
          <AvatarFallback>SR</AvatarFallback>
        </Avatar>
        <Badge className="absolute -top-1 -right-3 z-10 h-4 min-w-4 rounded-full bg-primary px-1 text-[10px] font-medium text-white ring-2 ring-background">
          99+
        </Badge>
      </div>
    </div>
  )
}
