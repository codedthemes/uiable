// shadcn
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

//  ------------------------------ | CARD - SOLID INFO | ------------------------------  //

export default function CardSolidInfo() {
  return (
    <Card className="rounded-xl shadow-none border-none ring-1 ring-cyan-500/20 bg-cyan-500 text-white overflow-hidden">
      <CardHeader className="p-4 border-b border-white/10">
        <CardTitle className="text-base font-bold text-white">Header</CardTitle>
      </CardHeader>
      <CardContent className="p-5">
        <CardTitle className="text-lg font-bold mb-2 text-white">
          Info card title
        </CardTitle>
        <p className="text-sm opacity-90 leading-relaxed text-white">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </CardContent>
    </Card>
  );
}
