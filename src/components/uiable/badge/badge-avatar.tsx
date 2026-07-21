// shadcn
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

//  ------------------------------ | BADGE - WITH AVATAR | ------------------------------  //

export function BadgeWithAvatar() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge variant="secondary" className="gap-1.5 py-0.5 pr-2.5 pl-1">
        <Avatar className="size-4">
          <AvatarImage
            src="https://cdn.uiable.com/user/avatar-3.jpg"
            alt="Olivia Martin"
          />
          <AvatarFallback className="text-[9px]">OM</AvatarFallback>
        </Avatar>
        Olivia Martin
      </Badge>
      <Badge variant="outline" className="gap-1.5 py-0.5 pr-2.5 pl-1">
        <Avatar className="size-4">
          <AvatarImage
            src="https://cdn.uiable.com/user/avatar-5.jpg"
            alt="Alex Rivera"
          />
          <AvatarFallback className="text-[9px]">AR</AvatarFallback>
        </Avatar>
        Alex Rivera
      </Badge>
      <Badge variant="default" className="gap-1.5 py-0.5 pr-2.5 pl-1">
        <Avatar className="size-4">
          <AvatarFallback className="bg-primary-foreground/20 text-[9px] text-white">
            JD
          </AvatarFallback>
        </Avatar>
        John Doe
      </Badge>
    </div>
  )
}
