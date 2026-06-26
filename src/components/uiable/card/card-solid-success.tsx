// shadcn
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

//  ------------------------------ | CARD - SOLID SUCCESS | ------------------------------  //

export default function CardSolidSuccess() {
  return (
    <Card className="overflow-hidden rounded-xl border-none bg-green-500 text-white shadow-none ring-1 ring-green-500/20">
      <CardHeader className="border-b border-white/10 p-4">
        <CardTitle className="text-base font-bold text-white">Header</CardTitle>
      </CardHeader>
      <CardContent className="p-5">
        <CardTitle className="mb-2 text-lg font-bold text-white">
          Success card title
        </CardTitle>
        <p className="text-sm leading-relaxed text-white opacity-90">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </CardContent>
    </Card>
  )
}
