// shadcn
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

//  ------------------------------ | ACCORDION ACTIVE WITH BACKGROUND | ------------------------------  //

export default function AccordionActiveBg() {
  return (
    <Accordion defaultValue={["item-1"]} className="w-full space-y-3">
      <AccordionItem
        value="item-1"
        className="rounded-lg border border-border bg-card transition-colors duration-200 data-open:border-primary/20 data-open:bg-primary/5"
      >
        <AccordionTrigger className="items-center px-5 py-4 text-base font-semibold hover:no-underline">
          What is your return policy?
        </AccordionTrigger>
        <AccordionContent className="px-5 pt-0 pb-5 text-muted-foreground">
          You can return any item within 30 days of purchase for a full refund.
          Items must be in original condition with tags attached. Please ensure
          you keep your receipt as proof of purchase.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-2"
        className="rounded-lg border border-border bg-card transition-colors duration-200 data-open:border-primary/20 data-open:bg-primary/5"
      >
        <AccordionTrigger className="items-center px-5 py-4 text-base font-semibold hover:no-underline">
          How long does shipping take?
        </AccordionTrigger>
        <AccordionContent className="px-5 pt-0 pb-5 text-muted-foreground">
          Standard shipping usually takes 3-5 business days. Expedited shipping
          options are available at checkout if you need your items sooner.
          International orders may take up to 2 weeks.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-3"
        className="rounded-lg border border-border bg-card transition-colors duration-200 data-open:border-primary/20 data-open:bg-primary/5"
      >
        <AccordionTrigger className="items-center px-5 py-4 text-base font-semibold hover:no-underline">
          Do you ship internationally?
        </AccordionTrigger>
        <AccordionContent className="px-5 pt-0 pb-5 text-muted-foreground">
          Yes, we ship to over 100 countries worldwide. Shipping costs will
          apply, and will be added at checkout. We run discounts and promotions
          all year, so stay tuned for exclusive deals.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
