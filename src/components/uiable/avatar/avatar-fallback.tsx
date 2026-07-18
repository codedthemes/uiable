// shadcn
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

//  ------------------------------ | AVATAR - FALLBACK | ------------------------------  //

export function AvatarFallbackDemo() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Avatar className="border-none after:border-none">
        <AvatarFallback className="bg-primary/10 font-medium text-primary">
          AB
        </AvatarFallback>
      </Avatar>
      <Avatar className="border-none after:border-none">
        <AvatarFallback className="bg-green-500/10 font-medium text-green-500">
          JD
        </AvatarFallback>
      </Avatar>
      <Avatar className="border-none after:border-none">
        <AvatarFallback className="bg-yellow-500/10 font-medium text-yellow-500">
          MK
        </AvatarFallback>
      </Avatar>
      <Avatar className="border-none after:border-none">
        <AvatarFallback className="bg-red-500/10 font-medium text-red-500">
          ST
        </AvatarFallback>
      </Avatar>
    </div>
  )
}
