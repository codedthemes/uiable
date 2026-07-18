// assets
import { BotIcon, BuildingIcon, SparklesIcon, UserIcon } from "lucide-react"

// shadcn
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

//  ------------------------------ | AVATAR - PLACEHOLDER ICON | ------------------------------  //

export function AvatarPlaceholderIcon() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Avatar className="border-none after:border-none">
        <AvatarFallback className="bg-primary/10 text-primary">
          <UserIcon className="size-4" />
        </AvatarFallback>
      </Avatar>
      <Avatar className="border-none after:border-none">
        <AvatarFallback className="bg-green-500/10 text-green-500">
          <BuildingIcon className="size-4" />
        </AvatarFallback>
      </Avatar>
      <Avatar className="border-none after:border-none">
        <AvatarFallback className="bg-yellow-500/10 text-yellow-500">
          <BotIcon className="size-4" />
        </AvatarFallback>
      </Avatar>
      <Avatar className="border-none after:border-none">
        <AvatarFallback className="bg-red-500/10 text-red-500">
          <SparklesIcon className="size-4" />
        </AvatarFallback>
      </Avatar>
    </div>
  )
}
