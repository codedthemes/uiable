// shadcn
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

//  ------------------------------ | CARD - SOLID SECONDARY | ------------------------------  //

export default function CardSolidSecondary() {
  return (
    <Card className="rounded-xl shadow-none border-none ring-1 ring-secondary-500/20 bg-secondary text-white overflow-hidden">
      <CardHeader className="p-4 border-b border-white/10">
        <CardTitle className="text-base font-bold text-secondary-foreground">
          Header
        </CardTitle>
      </CardHeader>
      <CardContent className="p-5">
        <CardTitle className="text-lg font-bold mb-2 text-secondary-foreground">
          Secondary card title
        </CardTitle>
        <p className="text-sm opacity-90 leading-relaxed text-secondary-foreground">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </CardContent>
    </Card>
  );
}
