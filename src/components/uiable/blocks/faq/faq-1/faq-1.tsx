// shadcn
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

// constants
const items = [
  {
    value: "item-1",
    trigger: "How do I get started?",
    content:
      "Getting started is simple and only takes a few minutes. Browse our available services and select the option that best matches your needs. Follow the step-by-step instructions provided on the platform to complete your request. If you need guidance during the process, our support resources are available to help. Once completed, you'll receive confirmation and updates regarding your request.",
  },
  {
    value: "item-2",
    trigger: "Do you offer customer support?",
    content:
      "Yes, we provide dedicated customer support to assist you whenever you need help. Our team can answer questions, resolve technical issues, and guide you through our services. You can contact us through email, live chat, or our contact form. We aim to respond as quickly as possible to ensure a smooth experience. Customer satisfaction is one of our top priorities.",
  },
  {
    value: "item-3",
    trigger: "Can I update or cancel my order?",
    content:
      "In most situations, orders can be modified or canceled before they enter the processing stage. We recommend contacting our support team immediately if you need to make changes. Once an order has been processed or shipped, modification options may be limited. Our team will review your request and provide the best available solution. We strive to make the process as convenient as possible.",
  },
  {
    value: "item-4",
    trigger: "Is my personal information secure?",
    content:
      "Absolutely. Protecting your personal information is a top priority for us. We use modern encryption technologies and industry-standard security practices to safeguard your data. Access to sensitive information is restricted and carefully monitored. We also regularly review our systems to maintain a secure environment. Your information is handled responsibly and in accordance with applicable privacy regulations.",
  },
  {
    value: "item-5",
    trigger: "What payment methods do you accept?",
    content:
      "We support a variety of secure payment methods for your convenience. Depending on your location, you may be able to pay using credit cards, debit cards, digital wallets, or online banking options. All transactions are processed through trusted payment providers. Your payment details are encrypted and protected during checkout. Available payment options will be displayed before you complete your purchase.",
  },
]

//  ------------------------------ | FAQ - 1 | ------------------------------  //

export default function faq1() {
  return (
    <div className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 z-10 bg-linear-to-r from-cyan-500 to-blue-500"></div>
      <div className="absolute inset-0 z-20 bg-card/85"></div>
      <div className="relative z-30 container mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          <div className="mx-auto flex max-w-300 flex-col items-center gap-2 text-center sm:gap-4">
            <h2 className="text-lg font-medium text-slate-800 sm:text-3xl dark:text-slate-50">
              Got Questions? We've Got Answers
            </h2>
            <p className="max-w-200 text-slate-600 dark:text-slate-100">
              Browse our frequently asked questions to find quick, clear answers
              and helpful information.
            </p>
          </div>
          <div className="mx-auto w-330 max-w-full rounded-lg bg-card shadow-[0_0_40px_-8px_#4680ff38]">
            <Accordion
              defaultValue={["item-1"]}
              className="overflow-hidden border-0"
            >
              {items.map((item, index) => (
                <AccordionItem
                  key={item.value}
                  value={item.value}
                  className="p-5 not-last:border-b sm:p-8"
                >
                  <AccordionTrigger className="p-0 text-lg [&>svg]:hidden!">
                    <div className="flex flex-row items-center gap-4">
                      <div className="mx-auto inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-sky-500/20 text-sky-500 group-aria-expanded/accordion-trigger:bg-sky-500 group-aria-expanded/accordion-trigger:text-white">
                        {index + 1}
                      </div>
                      <div className="flex grow flex-col gap-0.5">
                        <p className="text-lg text-slate-800 transition-all group-hover:text-white sm:text-xl dark:text-slate-100">
                          {item.trigger}
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-6 pr-6 pl-15 text-slate-600 dark:text-slate-300">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}
