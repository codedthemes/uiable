// shadcn
import { Card, CardContent, CardHeader } from "@/components/ui/card"

//  ------------------------------ | PAGE - SAMPLE | ------------------------------  //

export default function Page() {
  return (
    <div className="flex flex-col gap-x-8">
      <div className="grid grid-cols-12 gap-x-6">
        <div className="col-span-12">
          <Card>
            <CardHeader>
              <h5>Hello card</h5>
            </CardHeader>
            <CardContent />
          </Card>
        </div>
      </div>
    </div>
  )
}
