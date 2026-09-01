// shadcn
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

// assets
import {
  IconBold,
  IconEraser,
  IconItalic,
  IconStrikethrough,
  IconUnderline,
} from "@tabler/icons-react"

//  ------------------------------ | CONTEXT MENU - FONT & STYLE | ------------------------------  //

export function ContextMenuFontStyle() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex aspect-video w-full max-w-xs items-center justify-center rounded-lg border border-dashed text-base">
        <span className="hidden pointer-fine:inline-block">
          Right click here
        </span>
        <span className="hidden pointer-coarse:inline-block">
          Long press to style
        </span>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuGroup>
          <ContextMenuCheckboxItem checked>
            <IconBold className="mr-2 h-4 w-4" />
            Bold
            <ContextMenuShortcut>⌘B</ContextMenuShortcut>
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem checked={false}>
            <IconItalic className="mr-2 h-4 w-4" />
            Italic
            <ContextMenuShortcut>⌘I</ContextMenuShortcut>
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem checked={false}>
            <IconUnderline className="mr-2 h-4 w-4" />
            Underline
            <ContextMenuShortcut>⌘U</ContextMenuShortcut>
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem checked={false}>
            <IconStrikethrough className="mr-2 h-4 w-4" />
            Strikethrough
            <ContextMenuShortcut>⇧⌘X</ContextMenuShortcut>
          </ContextMenuCheckboxItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuItem className="text-muted-foreground">
            <IconEraser className="mr-2 h-4 w-4" />
            Clear formatting
            <ContextMenuShortcut>⌘\</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}
