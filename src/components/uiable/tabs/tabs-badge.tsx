// shadcn
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

//  ------------------------------ | TABS - BADGE | ------------------------------  //

export function TabsBadge() {
  return (
    <Tabs defaultValue="home" className="w-full">
      <TabsList className="border-b-border-border flex h-auto w-full flex-wrap justify-start gap-1 rounded-b-none border-b bg-transparent p-0 group-data-horizontal/tabs:h-auto">
        <TabsTrigger
          value="home"
          className="rounded-b-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
        >
          Home
        </TabsTrigger>
        <TabsTrigger
          value="profile"
          className="rounded-b-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
        >
          Profile
          <Badge
            variant="default"
            className="ml-1 h-5 rounded-full px-1.5 py-0 text-[10px]"
          >
            New
          </Badge>
        </TabsTrigger>
        <TabsTrigger
          value="contact"
          className="rounded-b-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
        >
          Contact
        </TabsTrigger>
      </TabsList>
      <div className="mt-4">
        <TabsContent value="home">
          <p className="text-base text-muted-foreground">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </TabsContent>
        <TabsContent value="profile">
          <p className="text-base text-muted-foreground">
            It is a long established fact that a reader will be distracted by
            the readable content of a page.
          </p>
        </TabsContent>
        <TabsContent value="contact">
          <p className="text-base text-muted-foreground">
            There are many variations of passages of Lorem Ipsum available.
          </p>
        </TabsContent>
      </div>
    </Tabs>
  )
}
