// shadcn
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

//  ------------------------------ | CONTEXT MENU - SPELL CHECK | ------------------------------  //

export function ContextMenuSpellCheck() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex aspect-video w-full max-w-xs items-center justify-center rounded-lg border border-dashed text-base">
        <span className="hidden pointer-fine:inline-block">mispelled</span>
        <span className="hidden pointer-coarse:inline-block">mispelled</span>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-56">
        <ContextMenuGroup>
          <ContextMenuItem className="font-bold">misspelled</ContextMenuItem>
          <ContextMenuItem className="font-bold">spelled</ContextMenuItem>
          <ContextMenuItem className="font-bold">misspells</ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuItem>Add to Dictionary</ContextMenuItem>
          <ContextMenuItem>Ignore Spelling</ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuItem>Search Google for "mispelled"</ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}
