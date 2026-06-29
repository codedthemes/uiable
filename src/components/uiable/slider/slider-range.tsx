// shadcn
import { Slider } from "@/components/ui/slider"

//  ------------------------------ | SLIDER - RANGE | ------------------------------  //

export function SliderRange() {
  return (
    <Slider
      defaultValue={[25, 50]}
      max={100}
      step={5}
      className="mx-auto w-full max-w-xs"
    />
  )
}
