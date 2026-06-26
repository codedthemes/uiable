// shadcn

// assets
import { ChevronDownIcon } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

// constants
const people = [
  {
    username: "shadcn",
    avatar: "https://cdn.uiable.com/user/avatar-5.jpg",
    email: "shadcn@demo.com",
  },
  {
    username: "maxleiter",
    avatar: "https://cdn.uiable.com/user/avatar-6.jpg",
    email: "maxle@demo.com",
  },
  {
    username: "evilrabbit",
    avatar: "https://cdn.uiable.com/user/avatar-7.jpg",
    email: "evil@demo.com",
  },
]

//  ------------------------------ | ITEM - DROPDOWN | ------------------------------  //

export function ItemDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button />}>
        Select <ChevronDownIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-60" align="end">
        <DropdownMenuGroup>
          {people.map((person) => (
            <DropdownMenuItem key={person.username}>
              <Item className="flex w-full flex-nowrap gap-2.5 border-0 px-2.5 py-2">
                <ItemMedia>
                  <Avatar className="size-8">
                    <AvatarImage src={person.avatar} />
                    <AvatarFallback>{person.username.charAt(0)}</AvatarFallback>
                  </Avatar>
                </ItemMedia>
                <ItemContent className="gap-0">
                  <ItemTitle>{person.username}</ItemTitle>
                  <ItemDescription className="leading-none">
                    {person.email}
                  </ItemDescription>
                </ItemContent>
              </Item>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
