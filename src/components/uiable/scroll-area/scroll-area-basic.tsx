import { Fragment } from "react";

// shadcn
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const tags = Array.from({ length: 20 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`,
);

//  ------------------------------ | SCROLL AREA - BASIC | ------------------------------  //

export default function ScrollAreaBasic() {
  return (
    <ScrollArea className="h-72 w-50 rounded-md border border-border ">
      <div className="p-5">
        <h5 className="mb-4 font-medium leading-none text-primary">Tags</h5>
        {tags.map((tag) => (
          <Fragment key={tag}>
            <Separator className="my-1 opacity-50" />
            <div className="py-2">{tag}</div>
          </Fragment>
        ))}
      </div>
    </ScrollArea>
  );
}
