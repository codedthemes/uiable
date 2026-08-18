// shadcn
import { Skeleton } from "@/components/ui/skeleton"

//  ------------------------------ | SKELETON - LIST | ------------------------------  //

export function SkeletonList() {
  return (
    <div className="w-full max-w-md space-y-4">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-lg" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-[80%]" />
            <Skeleton className="h-3 w-[60%]" />
          </div>
        </div>
      ))}
    </div>
  )
}
