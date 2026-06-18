// shadcn
import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle
} from "@/components/ui/item";

// assets
import { ShieldSecurity } from "iconsax-reactjs";

//  ------------------------------ | ITEM - ICON | ------------------------------  //

export function ItemIcon() {
  return (
    <div className="flex w-full max-w-lg flex-col gap-6">
      <Item variant="outline">
        <ItemMedia variant="icon">
          <ShieldSecurity className="size-8 text-yellow-500" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Security Alert</ItemTitle>
          <ItemDescription>
            New login detected from unknown device.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm">Review</Button>
        </ItemActions>
      </Item>
    </div>
  );
}
