// shadcn
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

//  ------------------------------ | AVATAR - BASIC | ------------------------------  //

export default function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage
        src="https://cdn.uiable.com/user/avatar-3.jpg"
        alt="@shadcn"
      />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
