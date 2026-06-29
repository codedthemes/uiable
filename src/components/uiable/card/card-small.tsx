// shadcn

// assets
import { ChevronRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

//  ------------------------------ | CARD - SMALL | ------------------------------  //

export function CardSmall() {
  const featureName = "Scheduled reports"

  return (
    <Card size="sm">
      <CardHeader>
        <CardTitle>{featureName}</CardTitle>
        <CardDescription>
          Weekly snapshots. No more manual exports.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="grid gap-2">
          <li className="flex gap-2">
            <ChevronRightIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
            <span>Choose a schedule (daily, or weekly).</span>
          </li>
          <li className="flex gap-2">
            <ChevronRightIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
            <span>Send to channels or specific teammates.</span>
          </li>
          <li className="flex gap-2">
            <ChevronRightIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
            <span>Include charts, tables, and key metrics.</span>
          </li>
        </ul>
      </CardContent>
      <CardFooter className="grid gap-2">
        <Button size="sm">Set up scheduled reports</Button>
        <Button variant="outline" size="sm">
          See what's new
        </Button>
      </CardFooter>
    </Card>
  )
}
