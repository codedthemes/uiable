// shadcn
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

// constants
const users = [
  {
    id: "1",
    name: "Evil Rabbit",
    value: "evil-rabbit",
    role: "Lead Designer",
    avatar: "/assets/images/user/avatar-1.jpg",
  },
  {
    id: "2",
    name: "Shadcn",
    value: "shadcn",
    role: "Founder",
    avatar: "/assets/images/user/avatar-2.jpg",
  },
  {
    id: "3",
    name: "Max Leiter",
    value: "max-leiter",
    role: "Software Engineer",
    avatar: "/assets/images/user/avatar-3.jpg",
  },
  {
    id: "4",
    name: "Guillermo Rauch",
    value: "guillermo-rauch",
    role: "CEO",
    avatar: "/assets/images/user/avatar-5.jpg",
  },
  {
    id: "5",
    name: "Dan Abramov",
    value: "dan-abramov",
    role: "React Core Team",
    avatar: "/assets/images/user/avatar-8.jpg",
  },
  {
    id: "6",
    name: "Sophie Alpert",
    value: "sophie-alpert",
    role: "React Core Alum",
    avatar: "/assets/images/user/avatar-9.jpg",
  },
  {
    id: "7",
    name: "Rich Harris",
    value: "rich-harris",
    role: "Creator of Svelte",
    avatar: "/assets/images/user/avatar-10.jpg",
  },
]

//  ------------------------------ | COMBOBOX - USER | ------------------------------  //

export function ComboboxUser() {
  return (
    <Combobox
      items={users}
      itemToStringValue={(user: (typeof users)[number]) => user.name}
      itemToStringLabel={(user: (typeof users)[number]) => user.name}
      defaultValue={users[0]}
    >
      <ComboboxInput placeholder="Search users..." />
      <ComboboxContent>
        <ComboboxEmpty>No users found.</ComboboxEmpty>
        <ComboboxList>
          {(user) => (
            <ComboboxItem key={user.id} value={user}>
              <Item size="xs" className="border-none p-0">
                <ItemMedia>
                  <Avatar className="size-8 rounded-sm after:rounded-sm after:border-none">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="text-[10px] font-semibold">
                      {user.name
                        .split(" ")
                        .map((n: string) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                </ItemMedia>
                <ItemContent>
                  <ItemTitle className="whitespace-nowrap">
                    {user.name}
                  </ItemTitle>
                  <ItemDescription>{user.role}</ItemDescription>
                </ItemContent>
              </Item>
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}
