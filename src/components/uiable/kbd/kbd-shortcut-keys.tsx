// shadcn
import { Kbd, KbdGroup } from "@/components/ui/kbd"

//  ------------------------------ | KBD - SHORTCUT KEYS | ------------------------------  //

export default function KbdShortcutKeys() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-2 text-sm">
        <span className="text-muted-foreground">Copy</span>
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>C</Kbd>
        </KbdGroup>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <span className="text-muted-foreground">Paste</span>
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>V</Kbd>
        </KbdGroup>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <span className="text-muted-foreground">Search</span>
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>Shift</Kbd>
          <Kbd>F</Kbd>
        </KbdGroup>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-1 text-sm text-muted-foreground">
        Press{" "}
        <KbdGroup>
          <Kbd>Ctrl</Kbd>
          <Kbd>Alt</Kbd>
          <Kbd>Del</Kbd>
        </KbdGroup>{" "}
        to open task manager
      </div>
    </div>
  )
}
