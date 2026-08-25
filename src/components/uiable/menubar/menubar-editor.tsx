// shadcn
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"

// assets
import {
  AlignCenterIcon,
  AlignJustifyIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BoldIcon,
  ItalicIcon,
  StrikethroughIcon,
  UnderlineIcon,
} from "lucide-react"

//  ------------------------------ | MENUBAR - EDITOR | ------------------------------  //

export function MenubarEditor() {
  return (
    <Menubar className="w-fit border shadow-sm">
      <MenubarMenu>
        <MenubarTrigger className="font-semibold">Format</MenubarTrigger>
        <MenubarContent className="w-auto">
          <MenubarItem>
            <BoldIcon className="mr-2 h-4 w-4" />
            Bold <MenubarShortcut>⌘B</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            <ItalicIcon className="mr-2 h-4 w-4" />
            Italic <MenubarShortcut>⌘I</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            <UnderlineIcon className="mr-2 h-4 w-4" />
            Underline <MenubarShortcut>⌘U</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            <StrikethroughIcon className="mr-2 h-4 w-4" />
            Strikethrough <MenubarShortcut>⌘⇧X</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="font-semibold">Align</MenubarTrigger>
        <MenubarContent className="w-auto">
          <MenubarItem>
            <AlignLeftIcon className="mr-2 h-4 w-4" />
            Left <MenubarShortcut>⌘⇧L</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            <AlignCenterIcon className="mr-2 h-4 w-4" />
            Center <MenubarShortcut>⌘⇧E</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            <AlignRightIcon className="mr-2 h-4 w-4" />
            Right <MenubarShortcut>⌘⇧R</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <AlignJustifyIcon className="mr-2 h-4 w-4" />
            Justify <MenubarShortcut>⌘⇧J</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
