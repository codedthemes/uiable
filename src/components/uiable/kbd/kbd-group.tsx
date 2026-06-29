// shadcn
import { Kbd, KbdGroup } from "@/components/ui/kbd"

//  ------------------------------ | KBD - GROUP | ------------------------------  //

export default function KbdGroupExample() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-wrap items-center gap-1">
        Use{" "}
        <KbdGroup>
          <Kbd>Ctrl + B</Kbd>
          <Kbd>Ctrl + K</Kbd>
        </KbdGroup>{" "}
        to open the command palette
      </div>
    </div>
  )
}
