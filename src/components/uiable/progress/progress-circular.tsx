// shadcn
import { CircularProgress } from "@/components/ui/circular-progress"

//  ------------------------------ | PROGRESS - CIRCULAR | ------------------------------  //

export default function ProgressCircular() {
  const value = 75

  return (
    <div className="flex w-full items-center justify-center py-6">
      <CircularProgress
        value={value}
        size={80}
        strokeWidth={8}
        showValue={false}
      />
    </div>
  )
}
