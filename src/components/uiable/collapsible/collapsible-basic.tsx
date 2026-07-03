// shadcn
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/components/ui/collapsible";

// assets
import { ChevronDownIcon } from "lucide-react";

//  ------------------------------ | COLLAPSIBLE - BASIC | ------------------------------  //

export function CollapsibleBasic() {
  return (
    <Card className="mx-auto w-full max-w-sm">
      <CardContent>
        <Collapsible className="data-open:bg-background rounded-lg">
          <CollapsibleTrigger
            render={
              <Button
                variant="ghost"
                className="w-full hover:bg-background aria-expanded:bg-background"
              />
            }
          >
            Product details
            <ChevronDownIcon className="ml-auto group-data-panel-open/button:rotate-180" />
          </CollapsibleTrigger>
          <CollapsibleContent className="flex flex-col items-start gap-2 p-4 pt-0 text-base">
            <div>
              This panel can be expanded or collapsed to reveal additional
              content.
            </div>
            <Button size="sm">Learn More</Button>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  );
}
