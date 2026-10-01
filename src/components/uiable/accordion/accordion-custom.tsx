// shadcn
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

// assets
import { Minus, Plus } from "lucide-react"

//  ------------------------------ | ACCORDION CUSTOM | ------------------------------  //

export default function AccordionCustom() {
  return (
    <Accordion defaultValue={["item-1"]} className="w-full space-y-4">
      <AccordionItem
        value="item-1"
        className="overflow-hidden rounded-lg border-l-4 border-l-transparent bg-card px-2 shadow-sm transition-all duration-300 hover:shadow-md data-open:border-l-4 data-open:border-l-primary data-open:shadow-md"
      >
        <AccordionTrigger className="items-center px-4 py-4 text-base font-semibold hover:no-underline [&_[data-slot=accordion-trigger-icon]]:hidden">
          <div className="mr-2 flex flex-col items-start gap-1">
            <span>Payment Methods</span>
            <span className="text-xs font-normal text-muted-foreground">
              Manage your saved cards and billing options
            </span>
          </div>
          <div className="ml-auto flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-all duration-300 group-hover/accordion-trigger:bg-muted group-aria-expanded/accordion-trigger:border-primary group-aria-expanded/accordion-trigger:bg-primary group-aria-expanded/accordion-trigger:text-white">
            <Plus className="h-4 w-4 group-aria-expanded/accordion-trigger:hidden" />
            <Minus className="hidden h-4 w-4 group-aria-expanded/accordion-trigger:block" />
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-4 pt-1 pb-5 text-muted-foreground">
          You can add up to 5 credit cards or link your PayPal account. We
          support Visa, MasterCard, American Express, and Discover. Your payment
          information is securely encrypted.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-2"
        className="overflow-hidden rounded-lg border-l-4 border-l-transparent bg-card px-2 shadow-sm transition-all duration-300 hover:shadow-md data-open:border-l-4 data-open:border-l-primary data-open:shadow-md"
      >
        <AccordionTrigger className="items-center px-4 py-4 text-base font-semibold hover:no-underline [&_[data-slot=accordion-trigger-icon]]:hidden">
          <div className="mr-2 flex flex-col items-start gap-1">
            <span>Subscription Plans</span>
            <span className="text-xs font-normal text-muted-foreground">
              Upgrade or downgrade your current plan
            </span>
          </div>
          <div className="ml-auto flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-all duration-300 group-hover/accordion-trigger:bg-muted group-aria-expanded/accordion-trigger:border-primary group-aria-expanded/accordion-trigger:bg-primary group-aria-expanded/accordion-trigger:text-white">
            <Plus className="h-4 w-4 group-aria-expanded/accordion-trigger:hidden" />
            <Minus className="hidden h-4 w-4 group-aria-expanded/accordion-trigger:block" />
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-4 pt-1 pb-5 text-muted-foreground">
          Choose between our Basic, Pro, and Enterprise plans. Changes to your
          subscription will be applied immediately, and you will be prorated for
          any differences in billing.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-3"
        className="overflow-hidden rounded-lg border-l-4 border-l-transparent bg-card px-2 shadow-sm transition-all duration-300 hover:shadow-md data-open:border-l-4 data-open:border-l-primary data-open:shadow-md"
      >
        <AccordionTrigger className="items-center px-4 py-4 text-base font-semibold hover:no-underline [&_[data-slot=accordion-trigger-icon]]:hidden">
          <div className="mr-2 flex flex-col items-start gap-1">
            <span>Invoices & Receipts</span>
            <span className="text-xs font-normal text-muted-foreground">
              Download your past billing history
            </span>
          </div>
          <div className="ml-auto flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-all duration-300 group-hover/accordion-trigger:bg-muted group-aria-expanded/accordion-trigger:border-primary group-aria-expanded/accordion-trigger:bg-primary group-aria-expanded/accordion-trigger:text-white">
            <Plus className="h-4 w-4 group-aria-expanded/accordion-trigger:hidden" />
            <Minus className="hidden h-4 w-4 group-aria-expanded/accordion-trigger:block" />
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-4 pt-1 pb-5 text-muted-foreground">
          Access all your past invoices and receipts in PDF format. You can also
          set up automated emails to receive receipts directly to your
          registered email address after each successful payment.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
