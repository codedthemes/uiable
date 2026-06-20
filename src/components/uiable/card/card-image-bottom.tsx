// shadcn
import { Card, CardContent } from "@/components/ui/card";

//  ------------------------------ | CARD - IMAGE BOTTOM | ------------------------------  //

export default function CardImageBottom() {
  return (
    <Card className="overflow-hidden">
      <CardContent>
        <h5>Card title</h5>
        <p className="mt-4 mb-3">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <p className="text-xs text-muted-foreground">Last updated 3 mins ago</p>
      </CardContent>
      <img
        className="w-full h-48 object-cover"
        src="https://cdn.uiable.com/component/card-sample.png"
        alt="Card image cap"
      />
    </Card>
  );
}
