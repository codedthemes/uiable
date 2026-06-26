// shadcn

// assets
import { Gps } from "iconsax-reactjs"

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

//  ------------------------------ | ITEM - OUTLINE GROUP | ------------------------------  //

export function OutlineItemGroup() {
  return (
    <ItemGroup>
      <Item variant="outline">
        <ItemMedia variant="icon">
          <Gps className="size-6 text-green-500" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Item 1</ItemTitle>
          <ItemDescription>First item with icon.</ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="outline">
        <ItemMedia variant="icon">
          <Gps className="size-6 text-green-500" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Item 2</ItemTitle>
          <ItemDescription>Second item with icon.</ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="outline">
        <ItemMedia variant="icon">
          <Gps className="size-6 text-green-500" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Item 3</ItemTitle>
          <ItemDescription>Third item with icon.</ItemDescription>
        </ItemContent>
      </Item>
    </ItemGroup>
  )
}
