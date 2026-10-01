// shadcn
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

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

//  ------------------------------ | FAQ - 8 | ------------------------------  //

export default function Faq8() {
  return (
    <div className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 z-10 bg-linear-to-tr from-sky-500 to-purple-500"></div>
      <div className="absolute inset-0 z-20 bg-card/85"></div>
      <div className="relative z-30 container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-12 items-start gap-6 md:gap-12">
          <div className="col-span-12 lg:col-span-5">
            <div className="flex max-w-100 flex-col items-start gap-2 sm:gap-4">
              <h2 className="text-lg font-medium text-slate-800 sm:text-3xl dark:text-slate-50">
                Got Questions? We've Got Answers
              </h2>
              <p className="max-w-200 text-slate-600 dark:text-slate-100">
                Browse our frequently asked questions to find quick, clear
                answers and helpful information.
              </p>
              <Button
                size="lg"
                className="rounded-full border-0 border-b-2 border-b-sky-700 bg-sky-500 shadow-[0_8px_10px_-2px_#8f8f8f6b] hover:translate-y-1 hover:opacity-90 hover:shadow-none"
              >
                Still not get answers?
              </Button>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <div className="mx-auto w-330 max-w-full">
              <Accordion
                defaultValue={["item-1"]}
                className="gap-2 overflow-hidden border-0"
              >
                {items.map((item) => (
                  <AccordionItem
                    key={item.value}
                    value={item.value}
                    className="gap-2 transition-all duration-300 not-last:border-b-0"
                  >
                    <AccordionTrigger className="p-0 text-lg [&>svg]:hidden!">
                      <div className="flex w-full flex-row items-center gap-4 rounded-sm border-l-3 border-l-sky-500 bg-card p-3 group-aria-expanded/accordion-trigger:bg-card group-aria-expanded/accordion-trigger:shadow-[0_0_20px_-6px_#4680ff38] sm:p-4">
                        <div className="shrink-0">
                          <svg
                            className="size-6 text-sky-500 transition-all duration-300 group-aria-expanded/accordion-trigger:rotate-90 md:size-8"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              fill="currentColor"
                              d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2z"
                              className="opacity-0 group-aria-expanded/accordion-trigger:opacity-15"
                            ></path>
                            <path
                              fill="currentColor"
                              d="M10.74 16.28c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l3-3-3-3a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l3.53 3.53c.29.29.29.77 0 1.06l-3.53 3.53c-.15.15-.34.22-.53.22z"
                            ></path>
                          </svg>
                        </div>
                        <div className="flex grow flex-col gap-0.5">
                          <p className="text-base text-slate-800 transition-all group-hover:text-white md:text-lg dark:text-slate-100">
                            {item.trigger}
                          </p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="p-0 text-slate-600 dark:text-slate-300">
                      <div className="mt-2 w-full rounded-sm border-l-3 border-l-sky-500 bg-card p-4 shadow-[0_0_20px_-6px_#4680ff38] sm:p-6">
                        {item.content}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
