// shadcn
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

//  ------------------------------ | CARD - HEADER FOOTER | ------------------------------  //

export default function CardHeaderFooter() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Featured</CardTitle>
      </CardHeader>
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
