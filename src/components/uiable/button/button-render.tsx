// shadcn
import { Button } from "@/components/ui/button";

//  ------------------------------ | BUTTON RENDER | ------------------------------  //

export default function ButtonRender() {
  return (
    <Button nativeButton={false} render={<a href="#" />}>
      Login
    </Button>
  );
}
