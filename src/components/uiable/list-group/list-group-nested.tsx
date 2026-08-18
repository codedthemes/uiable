// shadcn
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

// assets
import {
  ChevronDownIcon,
  FileTextIcon,
  FolderIcon,
  ImageIcon,
  ShieldCheckIcon,
} from "lucide-react"

//  ------------------------------ | LIST GROUP - NESTED | ------------------------------  //

export default function ListGroupNested() {
  return (
    <ul className="divide-border-border w-full max-w-full divide-y overflow-hidden rounded-lg border border-border sm:min-w-96">
      <li className="w-full">
        <Collapsible defaultOpen className="group/collapsible w-full">
          <CollapsibleTrigger className="flex w-full items-center justify-between gap-4 px-6.25 py-4 text-left transition-colors hover:bg-muted/50">
            <div className="flex min-w-0 items-center gap-3">
              <FolderIcon className="size-5 shrink-0 text-primary" />
              <h6 className="truncate text-base font-medium">
                Project Documents
              </h6>
            </div>
            <ChevronDownIcon className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" />
          </CollapsibleTrigger>
          <CollapsibleContent className="w-full overflow-hidden">
            <ul className="divide-border-border/50 w-full divide-y bg-muted/20">
              <li className="w-full">
                <a
                  href="#!"
                  className="flex w-full min-w-0 items-center gap-3 py-3 pr-6.25 pl-12 text-sm font-normal text-muted-foreground transition-colors hover:bg-muted/40 hover:text-foreground"
                >
                  <FileTextIcon className="size-4 shrink-0" />
                  <span className="truncate">
                    Architecture Specification.pdf
                  </span>
                </a>
              </li>
              <li className="w-full">
                <a
                  href="#!"
                  className="flex w-full min-w-0 items-center gap-3 py-3 pr-6.25 pl-12 text-sm font-normal text-muted-foreground transition-colors hover:bg-muted/40 hover:text-foreground"
                >
                  <ImageIcon className="size-4 shrink-0" />
                  <span className="truncate">Dashboard Wireframes.png</span>
                </a>
              </li>
            </ul>
          </CollapsibleContent>
        </Collapsible>
      </li>
      <li className="w-full">
        <Collapsible className="group/collapsible w-full">
          <CollapsibleTrigger className="flex w-full items-center justify-between gap-4 px-6.25 py-4 text-left transition-colors hover:bg-muted/50">
            <div className="flex min-w-0 items-center gap-3">
              <ShieldCheckIcon className="size-5 shrink-0 text-primary" />
              <h6 className="truncate text-base font-medium">
                Security & Permissions
              </h6>
            </div>
            <ChevronDownIcon className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" />
          </CollapsibleTrigger>
          <CollapsibleContent className="w-full overflow-hidden">
            <ul className="divide-border-border/50 w-full divide-y bg-muted/20">
              <li className="w-full">
                <a
                  href="#!"
                  className="block w-full min-w-0 truncate py-3 pr-6.25 pl-12 text-sm font-normal text-muted-foreground transition-colors hover:bg-muted/40 hover:text-foreground"
                >
                  Access Control Lists
                </a>
              </li>
              <li className="w-full">
                <a
                  href="#!"
                  className="block w-full min-w-0 truncate py-3 pr-6.25 pl-12 text-sm font-normal text-muted-foreground transition-colors hover:bg-muted/40 hover:text-foreground"
                >
                  API Token Management
                </a>
              </li>
            </ul>
          </CollapsibleContent>
        </Collapsible>
      </li>
      <li className="w-full">
        <a
          href="#!"
          className="block w-full min-w-0 px-6.25 py-4 transition-colors hover:bg-muted/50"
        >
          <h6 className="truncate text-base font-medium">System Audit Logs</h6>
        </a>
      </li>
    </ul>
  )
}
