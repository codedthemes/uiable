// shadcn
import { Kbd, KbdGroup } from "@/components/ui/kbd"

//  ------------------------------ | KBD - FUNCTION KEYS | ------------------------------  //

export default function KbdFunctionKeys() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-wrap items-center justify-center gap-1.5">
        <Kbd>F1</Kbd>
        <Kbd>F2</Kbd>
        <Kbd>F3</Kbd>
        <Kbd>F4</Kbd>
        <Kbd>F5</Kbd>
        <Kbd>F6</Kbd>
        <Kbd>F7</Kbd>
        <Kbd>F8</Kbd>
        <Kbd>F9</Kbd>
        <Kbd>F10</Kbd>
        <Kbd>F11</Kbd>
        <Kbd>F12</Kbd>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-1 text-sm text-muted-foreground">
        Press{" "}
        <KbdGroup>
          <Kbd>Fn</Kbd>
          <Kbd>F11</Kbd>
        </KbdGroup>{" "}
        to toggle fullscreen
      </div>
    </div>
  )
}
