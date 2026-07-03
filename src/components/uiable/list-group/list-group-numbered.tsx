// shadcn
import { Badge } from "@/components/ui/badge";

//  ------------------------------ | LIST GROUP - NUMBERED | ------------------------------  //

export default function ListGroupNumbered() {
  return (
    <ol className="list-decimal list-inside rounded-lg divide-y divide-border-border  border border-border  bg-card overflow-hidden">
      <li className="py-4 px-6.25">
        <div className="inline-flex justify-between items-start w-[calc(100%-24px)] ml-2">
          <div className="flex flex-col">
            <span className="font-bold">Subheading</span>
            <span className="text-sm text-muted-foreground">
              Cras justo odio
            </span>
          </div>
          <Badge className="bg-primary text-primary-foreground font-normal">
            14
          </Badge>
        </div>
      </li>
      <li className="py-4 px-6.25">
        <div className="inline-flex justify-between items-start w-[calc(100%-24px)] ml-2">
          <div className="flex flex-col">
            <span className="font-bold">Subheading</span>
            <span className="text-sm text-muted-foreground">
              Dapibus ac facilisis in
            </span>
          </div>
          <Badge className="bg-primary text-primary-foreground font-normal">
            2
          </Badge>
        </div>
      </li>
      <li className="py-4 px-6.25">
        <div className="inline-flex justify-between items-start w-[calc(100%-24px)] ml-2">
          <div className="flex flex-col">
            <span className="font-bold">Subheading</span>
            <span className="text-sm text-muted-foreground">
              Morbi leo risus
            </span>
          </div>
          <Badge className="bg-primary text-primary-foreground font-normal">
            1
          </Badge>
        </div>
      </li>
    </ol>
  );
}
