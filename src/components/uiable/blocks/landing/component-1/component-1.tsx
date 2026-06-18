import Link from "next/link";

// shadcn
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// project
import BorderGlow from "@/components/animation/BorderGlow";
import categoryCounts from "@/category-counts.json";
import ButtonSvg from "@/images/svg/button";
import ButtonGroupSvg from "@/images/svg/ButtonGroup";
import InputOtpSvg from "@/images/svg/InputOtp";
import ItemSvg from "@/images/svg/item";
import SwitchSvg from "@/images/svg/switch";
import ToggleGroupSvg from "@/images/svg/ToggleGroup";

// assets
import { IconArrowUpRight } from "@tabler/icons-react";

const components_data = [
  {
    title: "Button",
    slug: "button",
    count: `${categoryCounts["button"] || 0} variants`,
    Svg: ButtonSvg
  },
  {
    title: "Button Group",
    slug: "button-group",
    count: `${categoryCounts["button-group"] || 0} variants`,
    Svg: ButtonGroupSvg
  },
  {
    title: "Input OTP",
    slug: "input-otp",
    count: `${categoryCounts["input-otp"] || 0} variants`,
    Svg: InputOtpSvg
  },
  {
    title: "Item",
    slug: "item",
    count: `${categoryCounts["item"] || 0} variants`,
    Svg: ItemSvg
  },
  {
    title: "Switch",
    slug: "switch",
    count: `${categoryCounts["switch"] || 0} variants`,
    Svg: SwitchSvg
  },
  {
    title: "Toggle Group",
    slug: "toggle-group",
    count: `${categoryCounts["toggle-group"] || 0} variants`,
    Svg: ToggleGroupSvg
  }
];

//  ------------------------------ | COMPONENT 1 | ------------------------------  //

export default function Component1() {
  return (
    <section className="w-full mx-auto py-12.5 px-4 sm:px-8 flex flex-col gap-12.5">
      <div className="flex flex-col gap-3.5">
        <h2 className="font-medium text-4xl leading-9 text-foreground">
          Components designed for real applications
        </h2>
        <p className="font-normal text-lg leading-7 text-muted-foreground">
          Carefully crafted components built with accessibility, consistency,
          and developer experience in mind.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {components_data.map(({ title, slug, count, Svg }) => (
          <BorderGlow key={title} className="rounded-lg">
            <Link
              href={`/components/${slug}`}
              className="block group cursor-pointer"
            >
              <Card className="border-0 mb-0 transition-all duration-300 overflow-hidden">
                <CardContent>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex gap-2 items-center">
                      <p className="font-sans text-[16px] font-medium leading-none tracking-normal capitalize text-secondary-foreground">
                        {title}
                      </p>

                      <Separator orientation="vertical" />
                      <p className="text-muted-foreground text-md font-medium">
                        {count}
                      </p>
                    </div>
                    <div className="flex flex-row gap-2 items-center group-hover:text-primary">
                      <IconArrowUpRight className="size-5 text-foreground" />
                    </div>
                  </div>
                  <div className="h-px my-4 flex-1 bg-border/70" />
                  <div className="flex items-center justify-center min-h-40 p-0">
                    <Svg className="h-full w-full max-w-7xl max-h-45" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </BorderGlow>
        ))}
      </div>

      <div className="flex items-center justify-center">
        <Button variant="outline" size="lg"
          nativeButton={false}
          render={<Link href="/components" />}
          className="h-11 px-6 gap-2 border-border text-foreground bg-card hover:bg-accent dark:bg-card dark:border-border dark:hover:bg-accent/10 font-medium rounded-lg"
        >
          View Components
          <IconArrowUpRight className="size-5" />
        </Button>
      </div>
    </section>
  );
}
