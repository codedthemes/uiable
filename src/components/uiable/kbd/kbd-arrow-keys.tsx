// shadcn
import { Kbd, KbdGroup } from "@/components/ui/kbd"

//  ------------------------------ | KBD - ARROW KEYS | ------------------------------  //

export default function KbdArrowKeys() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-col items-center gap-1.5">
        <Kbd className="h-6 min-w-6 justify-center">↑</Kbd>
        <div className="flex items-center gap-1.5">
          <Kbd className="h-6 min-w-6 justify-center">←</Kbd>
          <Kbd className="h-6 min-w-6 justify-center">↓</Kbd>
          <Kbd className="h-6 min-w-6 justify-center">→</Kbd>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-1 text-sm text-muted-foreground">
        Use arrow keys or{" "}
        <KbdGroup>
          <Kbd>Alt</Kbd>
          <Kbd>→</Kbd>
        </KbdGroup>{" "}
        to navigate history
      </div>
    </div>
  )
}
