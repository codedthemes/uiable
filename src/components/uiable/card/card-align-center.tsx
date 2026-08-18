// shadcn
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

//  ------------------------------ | CARD - ALIGN CENTER | ------------------------------  //

export default function CardAlignCenter() {
  return (
    <Card className="text-center">
      <CardContent>
        <h5>Special title treatment</h5>
        <p className="mt-3 mb-4">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <Button>Go somewhere</Button>
      </CardContent>
    </Card>
  )
}
