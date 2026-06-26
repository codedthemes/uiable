// shadcn
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

//  ------------------------------ | CARD - SOLID SECONDARY | ------------------------------  //

export default function CardSolidSecondary() {
  return (
    <Card className="ring-secondary-500/20 overflow-hidden rounded-xl border-none bg-secondary text-white shadow-none ring-1">
      <CardHeader className="border-b border-white/10 p-4">
        <CardTitle className="text-base font-bold text-secondary-foreground">
          Header
        </CardTitle>
      </CardHeader>
      <CardContent className="p-5">
        <CardTitle className="mb-2 text-lg font-bold text-secondary-foreground">
          Secondary card title
        </CardTitle>
        <p className="text-sm leading-relaxed text-secondary-foreground opacity-90">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </CardContent>
    </Card>
  )
}
