// shadcn
import { AspectRatio } from "@/components/ui/aspect-ratio"

//  ------------------------------ | ASPECT RATIO - WIDESCREEN | ------------------------------  //

export function AspectRatioWidescreen() {
  return (
    <AspectRatio
      ratio={16 / 9}
      className="w-full max-w-3xl rounded-lg bg-muted"
    >
      <img
        src="https://cdn.uiable.com/component/card-sample.png"
        alt="Landscape photo"
        className="h-full w-full rounded-lg object-cover"
      />
    </AspectRatio>
  )
}
