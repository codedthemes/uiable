// shadcn
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

const tableData = [
  {
    id: 1,
    name: "Liam Johnson",
    email: "liam@example.com",
    role: "Frontend Developer",
  },
  {
    id: 2,
    name: "Emma Smith",
    email: "emma@example.com",
    role: "UI/UX Designer",
  },
  {
    id: 3,
    name: "Noah Williams",
    email: "noah@example.com",
    role: "Product Manager",
  },
  {
    id: 4,
    name: "Olivia Brown",
    email: "olivia@example.com",
    role: "Backend Engineer",
  },
  {
    id: 5,
    name: "William Jones",
    email: "william@example.com",
    role: "Data Analyst",
  },
]

//  ------------------------------ | RESIZABLE - TABLE COLUMN | ------------------------------  //

export default function ResizableTableColumn() {
  return (
    <div className="mx-auto flex w-full max-w-[800px] flex-col overflow-hidden rounded-lg border">
      <ResizablePanelGroup orientation="horizontal" className="min-h-[300px]">
        <ResizablePanel defaultSize={30} minSize={20}>
          <div className="flex h-full flex-col">
            <div className="flex h-10 shrink-0 items-center border-b px-4 text-sm font-medium text-muted-foreground">
              Name
            </div>
            <div className="flex flex-1 flex-col">
              {tableData.map((row) => (
                <div
                  key={row.id}
                  className="flex h-12 items-center truncate border-b px-4 text-sm font-medium last:border-0"
                >
                  {row.name}
                </div>
              ))}
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={45} minSize={20}>
          <div className="flex h-full flex-col">
            <div className="flex h-10 shrink-0 items-center border-b px-4 text-sm font-medium text-muted-foreground">
              Email
            </div>
            <div className="flex flex-1 flex-col">
              {tableData.map((row) => (
                <div
                  key={row.id}
                  className="flex h-12 items-center truncate border-b px-4 text-sm text-muted-foreground last:border-0"
                >
                  {row.email}
                </div>
              ))}
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={25} minSize={15}>
          <div className="flex h-full flex-col">
            <div className="flex h-10 shrink-0 items-center border-b px-4 text-sm font-medium text-muted-foreground">
              Role
            </div>
            <div className="flex flex-1 flex-col">
              {tableData.map((row) => (
                <div
                  key={row.id}
                  className="flex h-12 items-center truncate border-b px-4 text-sm text-muted-foreground last:border-0"
                >
                  {row.role}
                </div>
              ))}
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}
