// shadcn
import { Marker, MarkerContent } from "@/components/ui/marker"

//  ------------------------------ | MARKER - SEPARATOR | ------------------------------  //

export function MarkerSeparator() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <Marker variant="separator">
        <MarkerContent>Today</MarkerContent>
      </Marker>
      <Marker variant="separator">
        <MarkerContent>Worked for 42s</MarkerContent>
      </Marker>
      <Marker variant="separator">
        <MarkerContent>Conversation compacted</MarkerContent>
      </Marker>
    </div>
  )
}
