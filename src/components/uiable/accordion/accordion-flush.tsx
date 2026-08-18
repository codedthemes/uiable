// shadcn
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

//  ------------------------------ | ACCORDION FLUSH | ------------------------------  //

export default function AccordionFlush() {
  return (
    <Accordion className="w-full gap-1">
      <AccordionItem value="item-1" className="not-last:border-b-0">
        <AccordionTrigger className="border-b border-border p-4 text-base font-semibold hover:no-underline">
          Accordion Item #1
        </AccordionTrigger>
        <AccordionContent className="p-4">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
          skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="not-last:border-b-0">
        <AccordionTrigger className="border-b border-border p-4 text-base font-semibold hover:no-underline">
          Accordion Item #2
        </AccordionTrigger>
        <AccordionContent className="p-4">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
          skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="not-last:border-b-0">
        <AccordionTrigger className="border-b border-border p-4 text-base font-semibold hover:no-underline">
          Accordion Item #3
        </AccordionTrigger>
        <AccordionContent className="p-4">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
          skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
