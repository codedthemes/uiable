// shadcn
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

//  ------------------------------ | TABS - VERTICAL PILLS | ------------------------------  //

export function TabsVerticalPills() {
  return (
    <Tabs
      defaultValue="home"
      orientation="vertical"
      className="flex gap-6 w-full"
    >
      <TabsList className="flex flex-col bg-transparent h-auto p-0 gap-2 w-26.5 shrink-0">
        <TabsTrigger
          value="home"
          className="justify-start rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6 py-2 shadow-none border"
        >
          Home
        </TabsTrigger>
        <TabsTrigger
          value="profile"
          className="justify-start rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6 py-2 shadow-none border"
        >
          Profile
        </TabsTrigger>
        <TabsTrigger
          value="contact"
          className="justify-start rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6 py-2 shadow-none border"
        >
          Contact
        </TabsTrigger>
      </TabsList>
      <div className="flex-1 border border-border rounded-lg p-5">
        <TabsContent value="home" className="mt-0">
          <p className="text-base text-muted-foreground">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </TabsContent>
        <TabsContent value="profile" className="mt-0">
          <p className="text-base text-muted-foreground">
            It is a long established fact that a reader will be distracted by
            the readable content of a page.
          </p>
        </TabsContent>
        <TabsContent value="contact" className="mt-0">
          <p className="text-base text-muted-foreground">
            There are many variations of passages of Lorem Ipsum available.
          </p>
        </TabsContent>
      </div>
    </Tabs>
  );
}
