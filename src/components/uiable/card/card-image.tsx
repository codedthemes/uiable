// shadcn
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

//  ------------------------------ | CARD - IMAGE | ------------------------------  //

export function CardImage() {
  return (
    <Card className="relative mx-auto w-full max-w-sm overflow-hidden">
      <CardHeader className="p-0">
        <div className="bg-dark-500/20 absolute inset-0 z-30 aspect-video" />
        <img
          src="https://cdn.uiable.com/component/card-sample.png"
          alt="Event cover"
          className="relative z-20 aspect-video w-full object-cover"
        />
      </CardHeader>
      <CardContent>
        <h5>Design systems meetup</h5>
        <p className="mt-3">
          A practical talk on component APIs, accessibility, and shipping
          faster.
        </p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">View Event</Button>
      </CardFooter>
    </Card>
  )
}
