// shadcn
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar"

//  ------------------------------ | AVATAR - GROUP COUNT | ------------------------------  //

export function AvatarGroupCountExample() {
  return (
    <AvatarGroup>
      <Avatar>
        <AvatarImage
          src="https://cdn.uiable.com/user/avatar-8.jpg"
          alt="@shadcn"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage
          src="https://cdn.uiable.com/user/avatar-9.jpg"
          alt="@maxleiter"
        />
        <AvatarFallback>LR</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage
          src="https://cdn.uiable.com/user/avatar-10.jpg"
          alt="@evilrabbit"
        />
        <AvatarFallback>ER</AvatarFallback>
      </Avatar>
      <AvatarGroupCount>+3</AvatarGroupCount>
    </AvatarGroup>
  )
}
