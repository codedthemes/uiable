// shadcn
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

//  ------------------------------ | TABS - PILLS | ------------------------------  //

export function TabsPills() {
  return (
    <Tabs defaultValue="home" className="w-full">
      <TabsList className="bg-transparent h-auto p-0 gap-1 max-h-10!">
        <TabsTrigger
          value="home"
          className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6 py-2 shadow-none border"
        >
          Home
        </TabsTrigger>
        <TabsTrigger
          value="profile"
          className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6 py-2 shadow-none border"
        >
          Profile
        </TabsTrigger>
        <TabsTrigger
          value="contact"
          className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6 py-2 shadow-none border"
        >
          Contact
        </TabsTrigger>
      </TabsList>
      <div className="mt-2 border border-border rounded-lg p-5">
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
