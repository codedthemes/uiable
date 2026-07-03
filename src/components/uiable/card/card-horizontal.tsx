// shadcn
import { Card, CardContent } from "@/components/ui/card";

//  ------------------------------ | CARD - HORIZONTAL | ------------------------------  //

export default function CardHorizontal() {
  return (
    <Card className="overflow-hidden">
      <div className="flex flex-col sm:flex-row h-full">
        <div className="sm:w-[35%] shrink-0 h-48 sm:h-auto overflow-hidden">
          <img
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            src="https://cdn.uiable.com/component/card-sample.png"
            alt="Horizontal card image"
          />
        </div>
        <CardContent>
          <h5>Card title</h5>
          <p className="mb-4 mt-3">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p className="text-xs text-muted-foreground mt-auto">
            Last updated 3 mins ago
          </p>
        </CardContent>
      </div>
    </Card>
  );
}
