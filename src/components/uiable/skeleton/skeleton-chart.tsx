// shadcn
import { Skeleton } from "@/components/ui/skeleton"

//  ------------------------------ | SKELETON - CHART | ------------------------------  //

export function SkeletonChart() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4 rounded-lg border p-4">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-3 w-[100px]" />
        </div>
        <Skeleton className="h-6 w-12 rounded-full" />
      </div>
      <div className="flex h-40 items-end gap-2 pt-4">
        <Skeleton className="h-[40%] w-full" />
        <Skeleton className="h-[70%] w-full" />
        <Skeleton className="h-[100%] w-full" />
        <Skeleton className="h-[60%] w-full" />
        <Skeleton className="h-[80%] w-full" />
        <Skeleton className="h-[50%] w-full" />
      </div>
    </div>
  )
}
