// shadcn
import { Button } from "@/components/ui/button";

//  ------------------------------ | LIST GROUP - BUTTONS | ------------------------------  //

export default function ListGroupButtons() {
  return (
    <div className="rounded-lg divide-y divide-border-border  border border-border  bg-card overflow-hidden">
      <Button
        variant="ghost"
        className="block w-full text-left py-4 px-6.25 h-auto rounded-none justify-start hover:bg-muted/50 border-none font-normal"
      >
        Cras justo odio
      </Button>
      <Button
        variant="default"
        className="block w-full text-left py-4 px-6.25 h-auto rounded-none justify-start border-none font-normal bg-primary text-primary-foreground"
      >
        Dapibus ac facilisis in
      </Button>
      <Button
        variant="ghost"
        className="block w-full text-left py-4 px-6.25 h-auto rounded-none justify-start hover:bg-muted/50 border-none font-normal"
      >
        Morbi leo risus
      </Button>
      <Button
        variant="ghost"
        className="block w-full text-left py-4 px-6.25 h-auto rounded-none justify-start hover:bg-muted/50 border-none font-normal"
      >
        Porta ac consectetur ac
      </Button>
      <Button
        variant="ghost"
        className="block w-full text-left py-4 px-6.25 h-auto rounded-none justify-start border-none font-normal opacity-50 cursor-not-allowed"
        disabled
      >
        Vestibulum at eros
      </Button>
    </div>
  );
}
