import Image from "next/image";

// shadcn
import { AspectRatio } from "@/components/ui/aspect-ratio";

//  ------------------------------ | ASPECT RATIO - PORTRAIT | ------------------------------  //

export function AspectRatioPortrait() {
  return (
    <AspectRatio
      ratio={9 / 16}
      className="bg-muted w-full max-w-[10rem] rounded-lg"
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
