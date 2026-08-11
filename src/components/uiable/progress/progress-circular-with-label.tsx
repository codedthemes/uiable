// shadcn
import { CircularProgress } from "@/components/ui/circular-progress"

//  ------------------------------ | PROGRESS - CIRCULAR WITH LABEL | ------------------------------  //

export default function ProgressCircularWithLabel() {
  const value = 75

  return (
    <div className="flex w-full items-center justify-center py-6">
      <CircularProgress
        value={value}
        size={85}
        strokeWidth={10}
        showValue={true}
      />
    </div>
  )
}