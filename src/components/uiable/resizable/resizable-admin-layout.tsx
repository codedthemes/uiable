// shadcn
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

//  ------------------------------ | RESIZABLE - ADMIN LAYOUT | ------------------------------  //

export default function ResizableAdminLayout() {
  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="min-h-[400px] max-w-[800px] rounded-lg border md:min-w-[450px]"
    >
      <ResizablePanel defaultSize="25%">
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Sidebar</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="75%">
        <ResizablePanelGroup orientation="vertical">
          <ResizablePanel defaultSize="10%">
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Header</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={85}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Content</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
