// shadcn
import { Button } from "@/components/ui/button";

//  ------------------------------ | BUTTON LIGHT DARK | ------------------------------  //

export default function ButtonLightDark() {
  return (
    <Button className="bg-mist-800/10 text-mist-800 hover:bg-mist-800 hover:text-white dark:bg-mist-300/10 dark:text-mist-300">
      Dark
    </Button>
  );
}
