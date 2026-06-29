// shadcn
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

//  ------------------------------ | AVATAR - BADGE | ------------------------------  //

export function AvatarWithBadge() {
  return (
    <Avatar>
      <AvatarImage
        src="https://cdn.uiable.com/user/avatar-1.jpg"
        alt="@shadcn"
      />
      <AvatarFallback>CN</AvatarFallback>
      <AvatarBadge className="bg-green-600 dark:bg-green-800" />
    </Avatar>
  )
}
