// shadcn
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar";

//  ------------------------------ | AVATAR - GROUP | ------------------------------  //

export function AvatarGroupExample() {
  return (
    <AvatarGroup>
      <Avatar>
        <AvatarImage
          src="https://cdn.uiable.com/user/avatar-5.jpg"
          alt="@shadcn"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage
          src="https://cdn.uiable.com/user/avatar-6.jpg"
          alt="@maxleiter"
        />
        <AvatarFallback>LR</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage
          src="https://cdn.uiable.com/user/avatar-7.jpg"
          alt="@evilrabbit"
        />
        <AvatarFallback>ER</AvatarFallback>
      </Avatar>
    </AvatarGroup>
  );
}
