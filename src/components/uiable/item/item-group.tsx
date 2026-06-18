// shadcn
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";

// assets
import { PlusIcon } from "lucide-react";

// constants
const people = [
  {
    username: "shadcn",
    avatar: "https://cdn.uiable.com/user/avatar-8.jpg",
    email: "shadcn@demo.com",
  },
  {
    username: "maxleiter",
    avatar: "https://cdn.uiable.com/user/avatar-9.jpg",
    email: "maxle@demo.com",
  },
  {
    username: "evilrabbit",
    avatar: "https://cdn.uiable.com/user/avatar-10.jpg",
    email: "evil@demo.com",
  },
];

//  ------------------------------ | ITEM - GROUP | ------------------------------  //

export function ItemGroupExample() {
  return (
    <ItemGroup className="max-w-sm">
      {people.map((person) => (
        <Item key={person.username} variant="outline">
          <ItemMedia>
            <Avatar className="size-8">
              <AvatarImage src={person.avatar} />
              <AvatarFallback>{person.username.charAt(0)}</AvatarFallback>
            </Avatar>
          </ItemMedia>
          <ItemContent className="gap-0">
            <ItemTitle>{person.username}</ItemTitle>
            <ItemDescription>{person.email}</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button size="icon">
              <PlusIcon />
            </Button>
          </ItemActions>
        </Item>
      ))}
    </ItemGroup>
  );
}
