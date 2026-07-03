// shadcn
import { Button } from "@/components/ui/button";
import { Kbd } from "@/components/ui/kbd";

//  ------------------------------ | KBD - BUTTON | ------------------------------  //

export default function KbdButton() {
  return (
    <Button>
      Accept{" "}
      <Kbd data-icon="inline-end" className="ml-1">
        ⏎
      </Kbd>
    </Button>
  );
}
