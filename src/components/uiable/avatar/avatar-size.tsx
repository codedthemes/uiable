// shadcn
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

//  ------------------------------ | AVATAR - SIZE | ------------------------------  //

export function AvatarSizeExample() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Avatar size="sm">
        <AvatarImage
          src="https://cdn.uiable.com/user/avatar-5.jpg"
          alt="@shadcn"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage
          src="https://cdn.uiable.com/user/avatar-5.jpg"
          alt="@shadcn"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarImage
          src="https://cdn.uiable.com/user/avatar-5.jpg"
          alt="@shadcn"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  )
}
