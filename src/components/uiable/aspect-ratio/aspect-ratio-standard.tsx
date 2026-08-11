import { AspectRatio } from "@/components/ui/aspect-ratio"

//  ------------------------------ | ASPECT RATIO - STANDARD | ------------------------------  //

export function AspectRatioStandard() {
  return (
    <AspectRatio ratio={4 / 3} className="w-full max-w-md rounded-lg bg-muted">
      <img
        src="https://cdn.uiable.com/component/card-sample.png"
        alt="Standard photo"
        className="h-full w-full rounded-lg object-cover"
      />
    </AspectRatio>
  )
}
