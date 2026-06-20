// shadcn
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

//  ------------------------------ | CAROUSEL - ORIENTATION | ------------------------------  //

export default function CarouselOrientation() {
  return (
    <div className="relative py-10 w-full flex items-center justify-center">
      <Carousel
        opts={{
          align: "center"
        }}
        orientation="vertical"
        className="w-full max-w-xs"
      >
        <CarouselContent className="mt-1 h-[270px]">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="basis-1/2 pt-1">
              <div className="p-1">
                <Card className="bg-primary/10 border-primary mb-0">
                  <CardContent className="flex items-center justify-center p-6">
                    <span className="text-3xl font-semibold text-primary">
                      {index + 1}
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
