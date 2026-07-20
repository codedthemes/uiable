// shadcn
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

//  ------------------------------ | AVATAR - BORDER RADIUS | ------------------------------  //

export function AvatarBorderRadius() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Avatar className="rounded-none border-none after:rounded-none">
        <AvatarImage
          src="https://cdn.uiable.com/user/avatar-4.jpg"
          alt="@pranathip"
          className="rounded-none"
        />
        <AvatarFallback className="rounded-none">PP</AvatarFallback>
      </Avatar>
      <Avatar className="rounded-md border-none after:rounded-md">
        <AvatarImage
          src="https://cdn.uiable.com/user/avatar-3.jpg"
          alt="@evilrabbit"
          className="rounded-md"
        />
        <AvatarFallback className="rounded-md">ER</AvatarFallback>
      </Avatar>
      <Avatar className="rounded-lg border-none after:rounded-lg">
        <AvatarImage
          src="https://cdn.uiable.com/user/avatar-2.jpg"
          alt="@maxleiter"
          className="rounded-lg"
        />
        <AvatarFallback className="rounded-lg">ML</AvatarFallback>
      </Avatar>
      <Avatar className="border-none">
        <AvatarImage
          src="https://cdn.uiable.com/user/avatar-1.jpg"
          alt="@shadcn"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  )
}
