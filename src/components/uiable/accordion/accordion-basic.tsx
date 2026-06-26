// shadcn
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

//  ------------------------------ | ACCORDION BASIC | ------------------------------  //

export default function AccordionBasic() {
  return (
    <Accordion defaultValue={["item-1"]} className="w-full">
      <AccordionItem value="item-1" className="border-border bg-card">
        <AccordionTrigger className="p-4 text-base font-semibold hover:no-underline">
          Accordion Item #1
        </AccordionTrigger>
        <AccordionContent className="p-4 pt-0">
          <strong>This is the first item's accordion body.</strong> It is hidden
          by default, until the collapse plugin adds the appropriate classes
          that we use to style each element.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="border-border bg-card">
        <AccordionTrigger className="p-4 text-base font-semibold hover:no-underline">
          Accordion Item #2
        </AccordionTrigger>
        <AccordionContent className="p-4 pt-0">
          <strong>This is the second item's accordion body.</strong> It is
          hidden by default, until the collapse plugin adds the appropriate
          classes that we use to style each element.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="border-border bg-card">
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
  )
}
