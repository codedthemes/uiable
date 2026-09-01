// shadcn
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

// assets
import { Bell, CreditCard, ShieldCheck } from "lucide-react"

//  ------------------------------ | ACCORDION WITH ICONS | ------------------------------  //

export default function AccordionIcons() {
  return (
    <Accordion
      defaultValue={["item-1"]}
      className="w-full rounded-lg border border-border"
    >
      <AccordionItem value="item-1" className="border-border">
        <AccordionTrigger className="items-center p-4 text-base font-semibold hover:no-underline">
          <span className="flex items-center gap-3">
            <Avatar className="rounded-lg after:border-none">
              <AvatarFallback className="rounded-md bg-primary/10 text-primary">
                <Bell className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
            Notifications
          </span>
        </AccordionTrigger>
        <AccordionContent className="p-4 pt-0 text-muted-foreground">
          Manage your notification settings. You can choose to receive alerts
          for various activities, updates, and reminders directly to your inbox
          or mobile device.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="border-border">
        <AccordionTrigger className="items-center p-4 text-base font-semibold hover:no-underline">
          <span className="flex items-center gap-3">
            <Avatar className="rounded-lg after:border-none">
              <AvatarFallback className="rounded-md bg-primary/10 text-primary">
                <ShieldCheck className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
            Security
          </span>
        </AccordionTrigger>
        <AccordionContent className="p-4 pt-0 text-muted-foreground">
          Update your password, set up two-factor authentication, and review
          recent login activity to ensure your account remains secure at all
          times.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="border-border">
        <AccordionTrigger className="items-center p-4 text-base font-semibold hover:no-underline">
          <span className="flex items-center gap-3">
            <Avatar className="rounded-lg after:border-none">
              <AvatarFallback className="rounded-md bg-primary/10 text-primary">
                <CreditCard className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
            Billing
          </span>
        </AccordionTrigger>
        <AccordionContent className="p-4 pt-0 text-muted-foreground">
          Review your current subscription plan, manage payment methods, and
          download invoices for your past transactions and purchases.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
