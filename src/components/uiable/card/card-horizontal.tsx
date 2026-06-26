// shadcn
import { Card, CardContent } from "@/components/ui/card"

//  ------------------------------ | CARD - HORIZONTAL | ------------------------------  //

export default function CardHorizontal() {
  return (
    <Card className="overflow-hidden">
      <div className="flex h-full flex-col sm:flex-row">
        <div className="h-48 shrink-0 overflow-hidden sm:h-auto sm:w-[35%]">
          <img
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
            src="https://cdn.uiable.com/component/card-sample.png"
            alt="Horizontal card image"
          />
        </div>
        <CardContent>
          <h5>Card title</h5>
          <p className="mt-3 mb-4">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p className="mt-auto text-xs text-muted-foreground">
            Last updated 3 mins ago
          </p>
        </CardContent>
      </div>
    </Card>
  )
}
