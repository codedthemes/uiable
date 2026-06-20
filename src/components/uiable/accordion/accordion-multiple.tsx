// shadcn
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

//  ------------------------------ | ACCORDION MULTIPLE | ------------------------------  //

export default function AccordionMultiple() {
  return (
    <Accordion multiple defaultValue={["item-1"]} className="w-full">
      <AccordionItem value="item-1" className="bg-card border-border">
        <AccordionTrigger className="p-4 text-base font-semibold hover:no-underline">
          Accordion Item #1
        </AccordionTrigger>
        <AccordionContent className="p-4 pt-0">
          <strong>This is the first item's accordion body.</strong> It is hidden
          by default, until the collapse plugin adds the appropriate classes
          that we use to style each element.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="bg-card border-border">
        <AccordionTrigger className="p-4 text-base font-semibold hover:no-underline">
          Accordion Item #2
        </AccordionTrigger>
        <AccordionContent className="p-4 pt-0">
          <strong>This is the second item's accordion body.</strong> It is
          hidden by default, until the collapse plugin adds the appropriate
          classes that we use to style each element.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="bg-card border-border">
        <AccordionTrigger className="p-4 text-base font-semibold hover:no-underline">
          Accordion Item #3
        </AccordionTrigger>
        <AccordionContent className="p-4 pt-0">
          <strong>This is the third item's accordion body.</strong> It is hidden
          by default, until the collapse plugin adds the appropriate classes
          that we use to style each element.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
