// shadcn
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const users = [
  {
    name: "Sophia Taylor",
    src: "https://cdn.uiable.com/user/avatar-1.jpg",
    fallback: "ST",
  },
  {
    name: "Liam Johnson",
    src: "https://cdn.uiable.com/user/avatar-2.jpg",
    fallback: "LJ",
  },
  {
    name: "Emma Williams",
    src: "https://cdn.uiable.com/user/avatar-3.jpg",
    fallback: "EW",
  },
  {
    name: "Noah Brown",
    src: "https://cdn.uiable.com/user/avatar-4.jpg",
    fallback: "NB",
  },
]

//  ------------------------------ | AVATAR - GROUP TOOLTIP | ------------------------------  //

export function AvatarGroupTooltip() {
  return (
    <AvatarGroup>
      {users.map((user) => (
        <Tooltip key={user.name}>
          <TooltipTrigger
            render={
              <Avatar className="cursor-pointer transition-transform hover:z-10 hover:scale-105">
                <AvatarImage src={user.src} alt={user.name} />
                <AvatarFallback>{user.fallback}</AvatarFallback>
              </Avatar>
            }
          />
          <TooltipContent>{user.name}</TooltipContent>
        </Tooltip>
      ))}
      <AvatarGroupCount>+3</AvatarGroupCount>
    </AvatarGroup>
  )
}
