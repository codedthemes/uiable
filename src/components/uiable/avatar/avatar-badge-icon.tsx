// shadcn

// assets
import { PlusIcon } from "lucide-react"

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

//  ------------------------------ | AVATAR - BADGE ICON | ------------------------------  //

export function AvatarBadgeIconExample() {
  return (
    <Avatar>
      <AvatarImage
        src="https://cdn.uiable.com/user/avatar-2.jpg"
        alt="@pranathip"
      />
      <AvatarFallback>PP</AvatarFallback>
      <AvatarBadge>
        <PlusIcon />
      </AvatarBadge>
    </Avatar>
  )
}
