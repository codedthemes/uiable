"use client"

// shadcn
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

// project imports
import { SectionHeader } from "@/components/uiable/blocks/landing/components"

// constants
const faqItems = [
  {
    number: "1.",
    question: "What is UIAble and how does it help?",
    answer:
      "UIAble is a premium Tailwind CSS component library designed to speed up your frontend development. It offers production-ready, highly customizable blocks and widgets that integrate seamlessly into modern React and Next.js applications.",
  },
  {
    number: "2.",
    question: "Is UIAble compatible with Next.js App Router?",
    answer:
      "Absolutely. All UIAble components are built with React and tailwind-compatible structures, fully supporting Next.js App Router (using 'use client' where interactive components are required) as well as the Pages Router.",
  },
  {
    number: "3.",
    question: "Can I easily customize the theme and colors?",
    answer:
      "Yes, UIAble is built on standard Tailwind utility classes and CSS variables. You can easily adjust the global color palette, fonts, border radii, and other design tokens directly in your globals.css file.",
  },
  {
    number: "4.",
    question: "Do you offer customer support for integration issues?",
    answer:
      "Yes, we provide dedicated support to assist you with integrations. If you face any issues, you can raise a ticket on our support hub or reach out to our team via the social links provided.",
  },
  {
    number: "5.",
    question: "Will there be more components added to UIAble in the future?",
    answer:
      "Yes! We regularly release new updates, components, and interactive blocks. Once you purchase a license, all future additions are completely free.",
  },
]

//  ------------------------------ | FAQ | ------------------------------  //

export default function FAQ() {
  return (
    <section className="mx-auto flex w-full flex-col gap-10 px-4 py-12.5 sm:px-8">
      <SectionHeader
        title="Got Questions? We've Got Answers"
        subtitle="Browse our frequently asked questions to find quick, clear answers and helpful information."
      />

      {/* Accordion Component with item gaps */}
      <Accordion
        defaultValue={["item-0"]}
        className="flex w-full flex-col gap-4"
      >
        {faqItems.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="flex flex-col gap-1.5 rounded-xl border-b-0! bg-card p-5 transition-all"
          >
            <AccordionTrigger className="w-full p-0 text-left hover:no-underline **:data-[slot=accordion-trigger-icon]:size-6 **:data-[slot=accordion-trigger-icon]:text-muted-foreground!">
              <span className="flex items-start gap-2.5 text-base leading-normal font-medium tracking-normal text-foreground sm:text-lg sm:leading-6 md:text-xl">
                <span>{item.number}</span>
                <span>{item.question}</span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="pb-4 pl-6.5 text-sm leading-normal font-normal tracking-normal text-muted-foreground sm:pl-7 sm:text-base sm:leading-6 md:text-lg">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
