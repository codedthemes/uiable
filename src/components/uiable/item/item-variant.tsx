// shadcn

// assets
import { Cup, FingerScan, MicrophoneSlash1 } from "iconsax-reactjs"

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

//  ------------------------------ | ITEM - VARIANT | ------------------------------  //

export function ItemVariant() {
  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <Item>
        <ItemMedia variant="icon">
          <Cup className="size-8 text-primary" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Default Variant</ItemTitle>
          <ItemDescription>
            Transparent background with no border.
          </ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="outline">
        <ItemMedia variant="icon">
          <FingerScan className="size-8 text-primary" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Outline Variant</ItemTitle>
          <ItemDescription>
            Outlined style with a visible border.
          </ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="muted">
        <ItemMedia variant="icon">
          <MicrophoneSlash1 className="size-8 text-primary" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Muted Variant</ItemTitle>
          <ItemDescription>
            Muted background for secondary content.
          </ItemDescription>
        </ItemContent>
      </Item>
    </div>
  )
}
