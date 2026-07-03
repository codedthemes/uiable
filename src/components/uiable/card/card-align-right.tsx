// shadcn
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

//  ------------------------------ | CARD - ALIGN RIGHT | ------------------------------  //

export default function CardAlignRight() {
  return (
    <Card className="text-right">
      <CardContent>
        <h5>Special title treatment</h5>
        <p className="mb-4 mt-3">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <Button>Go somewhere</Button>
      </CardContent>
    </Card>
  );
}
