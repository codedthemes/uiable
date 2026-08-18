// shadcn
import { Skeleton } from "@/components/ui/skeleton"

//  ------------------------------ | SKELETON - PROFILE | ------------------------------  //

export function SkeletonProfile() {
  return (
    <div className="w-full max-w-md overflow-hidden rounded-lg border">
      <Skeleton className="h-32 w-full rounded-none" />
      <div className="-mt-12 flex flex-col items-center p-4">
        <Skeleton className="h-24 w-24 rounded-full border-4 border-background" />
        <div className="mt-4 flex w-full flex-col items-center space-y-2">
          <Skeleton className="h-6 w-[200px]" />
          <Skeleton className="h-4 w-[150px]" />
        </div>
        <div className="mt-6 flex w-full justify-center gap-4">
          <Skeleton className="h-10 w-[100px] rounded-lg" />
          <Skeleton className="h-10 w-[100px] rounded-lg" />
        </div>
      </div>
    </div>
  )
}
