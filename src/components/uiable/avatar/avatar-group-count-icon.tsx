// shadcn

// assets
import { PlusIcon } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar"

//  ------------------------------ | AVATAR - GROUP COUNT ICON | ------------------------------  //

export function AvatarGroupCountIconExample() {
  return (
    <AvatarGroup>
      <Avatar>
        <AvatarImage
          src="https://cdn.uiable.com/user/avatar-1.jpg"
          alt="@shadcn"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage
          src="https://cdn.uiable.com/user/avatar-2.jpg"
          alt="@maxleiter"
        />
        <AvatarFallback>LR</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage
          src="https://cdn.uiable.com/user/avatar-3.jpg"
          alt="@evilrabbit"
        />
        <AvatarFallback>ER</AvatarFallback>
      </Avatar>
      <AvatarGroupCount>
        <PlusIcon />
      </AvatarGroupCount>
    </AvatarGroup>
  )
}
