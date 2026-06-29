// shadcn
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

//  ------------------------------ | CARD - SOLID DARK | ------------------------------  //

export default function CardSolidDark() {
  return (
    <Card className="ring-dark-500/50 bg-dark-500 overflow-hidden rounded-xl border-none text-white shadow-none ring-1">
      <CardHeader className="border-b border-white/10 p-4">
        <CardTitle className="text-base font-bold text-white">Header</CardTitle>
      </CardHeader>
      <CardContent className="p-5">
        <CardTitle className="mb-2 text-lg font-bold text-white">
          Dark card title
        </CardTitle>
        <p className="text-sm leading-relaxed text-white opacity-90">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </CardContent>
    </Card>
  )
}
