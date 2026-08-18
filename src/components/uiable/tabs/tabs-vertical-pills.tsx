// shadcn
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

//  ------------------------------ | TABS - VERTICAL PILLS | ------------------------------  //

export function TabsVerticalPills() {
  return (
    <Tabs
      defaultValue="home"
      orientation="vertical"
      className="flex w-full gap-6"
    >
      <TabsList className="flex h-auto w-26.5 shrink-0 flex-col gap-2 bg-transparent p-0">
        <TabsTrigger
          value="home"
          className="justify-start rounded-lg border px-6 py-2 shadow-none data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
        >
          Home
        </TabsTrigger>
        <TabsTrigger
          value="profile"
          className="justify-start rounded-lg border px-6 py-2 shadow-none data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
        >
          Profile
        </TabsTrigger>
        <TabsTrigger
          value="contact"
          className="justify-start rounded-lg border px-6 py-2 shadow-none data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
        >
          Contact
        </TabsTrigger>
      </TabsList>
      <div className="flex-1 rounded-lg border border-border p-5">
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
  )
}
