import Image from "next/image";

// shadcn
import { AspectRatio } from "@/components/ui/aspect-ratio";

//  ------------------------------ | ASPECT RATIO - SQUARE | ------------------------------  //

export function AspectRatioSquare() {
  return (
    <AspectRatio
      ratio={1 / 1}
      className="bg-muted w-full max-w-[12rem] rounded-lg"
    >
      <Image
        src="https://avatar.vercel.sh/shadcn1"
        alt="Photo"
        fill
        className="rounded-lg object-cover"
      />
    </AspectRatio>
  );
}
