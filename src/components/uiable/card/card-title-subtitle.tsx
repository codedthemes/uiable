// shadcn
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle
} from "@/components/ui/card";

//  ------------------------------ | CARD - TITLE SUBTITLE | ------------------------------  //

export default function CardTitleSubtitle() {
  return (
    <Card className="rounded-xl shadow-none border-none ring-1 ring-foreground/10 bg-card">
      <CardContent className="p-5">
        <CardTitle className="mb-1">Card title</CardTitle>
        <CardDescription className="text-secondary-500 mb-2">
          Card subtitle
        </CardDescription>
        <p className="mb-3 text-muted-foreground leading-relaxed">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <div className="flex gap-4 text-primary">
          <a href="#!" className="hover:underline">
            Card link
          </a>
          <a href="#!" className="hover:underline">
            Another link
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
