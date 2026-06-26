// shadcn
import { Badge } from "@/components/ui/badge"

//  ------------------------------ | LIST GROUP - NUMBERED | ------------------------------  //

export default function ListGroupNumbered() {
  return (
    <ol className="divide-border-border list-inside list-decimal divide-y overflow-hidden rounded-lg border border-border bg-card">
      <li className="px-6.25 py-4">
        <div className="ml-2 inline-flex w-[calc(100%-24px)] items-start justify-between">
          <div className="flex flex-col">
            <span className="font-bold">Subheading</span>
            <span className="text-sm text-muted-foreground">
              Cras justo odio
            </span>
          </div>
          <Badge className="bg-primary font-normal text-primary-foreground">
            14
          </Badge>
        </div>
      </li>
      <li className="px-6.25 py-4">
        <div className="ml-2 inline-flex w-[calc(100%-24px)] items-start justify-between">
          <div className="flex flex-col">
            <span className="font-bold">Subheading</span>
            <span className="text-sm text-muted-foreground">
              Dapibus ac facilisis in
            </span>
          </div>
          <Badge className="bg-primary font-normal text-primary-foreground">
            2
          </Badge>
        </div>
      </li>
      <li className="px-6.25 py-4">
        <div className="ml-2 inline-flex w-[calc(100%-24px)] items-start justify-between">
          <div className="flex flex-col">
            <span className="font-bold">Subheading</span>
            <span className="text-sm text-muted-foreground">
              Morbi leo risus
            </span>
          </div>
          <Badge className="bg-primary font-normal text-primary-foreground">
            1
          </Badge>
        </div>
      </li>
    </ol>
  )
}
