// shadcn
import { AspectRatio } from "@/components/ui/aspect-ratio"

//  ------------------------------ | ASPECT RATIO - CINEMATIC | ------------------------------  //

export function AspectRatioCinematic() {
  return (
    <AspectRatio
      ratio={21 / 9}
      className="w-full max-w-4xl overflow-hidden rounded-lg bg-muted"
    >
      <img
        src="https://cdn.uiable.com/component/card-sample.png"
        alt="Cinematic photo"
        className="h-full w-full object-cover"
      />
    </AspectRatio>
  )
}
