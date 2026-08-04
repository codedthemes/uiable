// shadcn
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

//  ------------------------------ | LIST GROUP - AVATAR | ------------------------------  //

export default function ListGroupAvatar() {
  return (
    <ul className="divide-border-border divide-y overflow-hidden rounded-lg border border-border">
      <li className="flex items-center justify-between gap-4 px-6.25 py-4 transition-colors hover:bg-muted/50">
        <div className="flex items-center gap-4">
          <Avatar size="default">
            <AvatarImage
              src="https://cdn.uiable.com/user/avatar-1.jpg"
              alt="Anjali Sharma"
            />
            <AvatarFallback>AS</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className="text-base leading-snug font-semibold">
              Anjali Sharma
            </p>
            <p className="text-sm text-muted-foreground">Lead UI/UX Designer</p>
          </div>
        </div>
        <Badge variant="default">Active</Badge>
      </li>
      <li className="flex items-center justify-between gap-4 px-6.25 py-4 transition-colors hover:bg-muted/50">
        <div className="flex items-center gap-4">
          <Avatar size="default">
            <AvatarImage
              src="https://cdn.uiable.com/user/avatar-2.jpg"
              alt="Johnathan Doe"
            />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className="text-base leading-snug font-semibold">
              Johnathan Doe
            </p>
            <p className="text-sm text-muted-foreground">
              Senior Frontend Engineer
            </p>
          </div>
        </div>
        <Badge variant="secondary">Offline</Badge>
      </li>
      <li className="flex items-center justify-between gap-4 px-6.25 py-4 transition-colors hover:bg-muted/50">
        <div className="flex items-center gap-4">
          <Avatar size="default">
            <AvatarImage
              src="https://cdn.uiable.com/user/avatar-3.jpg"
              alt="Sophia Lee"
            />
            <AvatarFallback>SL</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className="text-base leading-snug font-semibold">Sophia Lee</p>
            <p className="text-sm text-muted-foreground">Product Specialist</p>
          </div>
        </div>
        <Badge variant="outline">In a meeting</Badge>
      </li>
    </ul>
  )
}
