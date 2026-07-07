// shadcn
import { Marker, MarkerContent } from "@/components/ui/marker"

//  ------------------------------ | MARKER - SHIMMER | ------------------------------  //

export function MarkerShimmer() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <Marker role="status">
        <MarkerContent className="shimmer">Thinking...</MarkerContent>
      </Marker>
      <Marker variant="separator" role="status">
        <MarkerContent className="shimmer">Reading 4 files</MarkerContent>
      </Marker>
    </div>
  )
}
