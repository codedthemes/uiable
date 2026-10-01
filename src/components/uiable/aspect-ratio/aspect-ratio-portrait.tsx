// shadcn
import { AspectRatio } from "@/components/ui/aspect-ratio"

//  ------------------------------ | ASPECT RATIO - PORTRAIT | ------------------------------  //

export function AspectRatioPortrait() {
  return (
    <AspectRatio
      ratio={9 / 16}
      className="w-full max-w-[10rem] rounded-lg bg-muted"
    >
      <img
        src="https://avatar.vercel.sh/shadcn1"
        alt="Photo"
        className="absolute inset-0 h-full w-full rounded-lg object-cover"
      />
    </AspectRatio>
  )
}
