// shadcn
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle
} from "@/components/ui/empty";

// assets
import { Cloud } from "iconsax-reactjs";

//  ------------------------------ | EMPTY - OUTLINE | ------------------------------  //

export default function EmptyOutline() {
  return (
    <Empty className="border border-dashed border-border rounded-lg">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Cloud />
        </EmptyMedia>
        <EmptyTitle>Cloud Storage Empty</EmptyTitle>
        <EmptyDescription>
          Upload files to your cloud storage to access them anywhere.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>Upload Files</Button>
      </EmptyContent>
    </Empty>
  );
}
