// shadcn
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

// assets
import { AppWindowIcon, CodeIcon } from "lucide-react";

//  ------------------------------ | TABS - ICONS | ------------------------------  //

export function TabsIcons() {
  return (
    <Tabs defaultValue="preview">
      <TabsList>
        <TabsTrigger value="preview">
          <AppWindowIcon />
          Preview
        </TabsTrigger>
        <TabsTrigger value="code">
          <CodeIcon />
          Code
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
