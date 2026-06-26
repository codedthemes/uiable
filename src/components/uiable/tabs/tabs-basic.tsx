// shadcn
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

//  ------------------------------ | TABS - BASIC | ------------------------------  //

export function TabsBasic() {
  return (
    <Tabs defaultValue="home" className="w-full">
      <TabsList className="border-b-border-border h-auto max-h-10! w-full justify-start gap-1 rounded-b-none border-b bg-transparent p-0 *:flex-none">
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
