// shadcn
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

//  ------------------------------ | TABS - PILLS BADGE | ------------------------------  //

export function TabsPillsBadge() {
  return (
    <Tabs defaultValue="home" className="w-full">
      <TabsList className="flex h-auto flex-wrap gap-1 bg-transparent p-0 group-data-horizontal/tabs:h-auto">
        <TabsTrigger
          value="home"
          className="rounded-lg border px-6 py-2 shadow-none data-active:bg-primary data-active:text-primary-foreground"
        >
          Home
        </TabsTrigger>
        <TabsTrigger
          value="profile"
          className="group/tabs-trigger rounded-lg border px-6 py-2 shadow-none data-active:bg-primary data-active:text-primary-foreground"
        >
          Profile
          <Badge className="ml-1 border-transparent bg-primary/10 text-primary group-data-active/tabs-trigger:bg-primary-foreground/20 group-data-active/tabs-trigger:text-primary-foreground">
            New
          </Badge>
        </TabsTrigger>
        <TabsTrigger
          value="contact"
          className="rounded-lg border px-6 py-2 shadow-none data-active:bg-primary data-active:text-primary-foreground"
        >
          Contact
        </TabsTrigger>
      </TabsList>
      <div className="mt-2 rounded-lg border border-border p-5">
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
