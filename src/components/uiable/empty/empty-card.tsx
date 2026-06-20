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
import { FolderOpen, Link1 } from "iconsax-reactjs";

//  ------------------------------ | EMPTY - CARD | ------------------------------  //

export function EmptyInCard() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <FolderOpen />
        </EmptyMedia>
        <EmptyTitle>No projects yet</EmptyTitle>
        <EmptyDescription>
          You haven't created any projects yet. Get started by creating your
          first project.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <div className="flex gap-2 mb-2">
          <Button render={<a href="#" />} nativeButton={false}>
            Create project
          </Button>
          <Button variant="outline">Import project</Button>
        </div>
        <Button
          variant="link"
          render={<a href="#" />}
          nativeButton={false}
          className=" gap-2 hover:text-primary"
        >
          Learn more <Link1 />
        </Button>
      </EmptyContent>
    </Empty>
  );
}
