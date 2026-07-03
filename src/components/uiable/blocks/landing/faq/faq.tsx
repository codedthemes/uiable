"use client"

// shadcn
import Link from "next/link"

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
    question: "What is UIAble",
    answer: (
      <>
        UIAble is a free, open-source component library built with{" "}
        <a
          href="https://tailwindcss.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary no-underline! hover:underline"
        >
          Tailwind CSS
        </a>
        ,{" "}
        <a
          href="https://ui.shadcn.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary no-underline! hover:underline"
        >
          shadcn-style architecture
        </a>
        , and{" "}
        <a
          href="https://base-ui.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary no-underline! hover:underline"
        >
          Base UI principles
        </a>
        .
      </>
    ),
  },
  {
    number: "2.",
    question: "Are UIAble components free and open source?",
    answer: (
      <>
        Yes. Every UIAble component is free, open source, and{" "}
        <Link
          href="https://github.com/codedthemes/uiable?tab=MIT-1-ov-file"
          className="text-primary no-underline! hover:underline"
        >
          MIT-licensed
        </Link>
        . Copy the code, customize it, and use it in personal, commercial, or
        enterprise projects with complete ownership.
      </>
    ),
  },
  {
    number: "3.",
    question: "Can I use UIAble components Next.js projects?",
    answer: (
      <>
        Yes, every{" "}
        <Link
          href="/components"
          className="text-primary no-underline! hover:underline"
        >
          component
        </Link>{" "}
        is designed for modern Next.js applications with accessibility,
        customization, and developer experience in mind.
      </>
    ),
  },
  {
    number: "4.",
    question: "Can I easily customize the theme and colors?",
    answer:
      "Yes, UIAble is built on standard Tailwind utility classes and CSS variables. You can easily adjust the global color palette, fonts, border radii, and other design tokens directly in your globals.css file.",
  },
  {
    number: "5.",
    question: "How are UIAble components different from shadcn/ui?",
    answer:
      "Shadcn/ui provides the core components like Buttons, Dialogs, Alerts, and Badges. UIAble builds on top of them with production-ready, fully styled components like animated buttons, searchable comboboxes, date pickers, advanced sidebars, and more. You get the flexibility of shadcn/ui with ready-to-use components that are easier to copy, customize, and ship.",
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
            className="flex flex-col gap-2.5 rounded-xl border-b-0! bg-card p-5 transition-all"
          >
            <AccordionTrigger className="w-full p-0 text-left hover:no-underline **:data-[slot=accordion-trigger-icon]:size-6 **:data-[slot=accordion-trigger-icon]:text-muted-foreground!">
              <span className="flex items-start gap-2.5 text-base leading-normal font-medium tracking-normal text-foreground sm:text-lg sm:leading-6 md:text-xl">
                <span>{item.number}</span>
                <span>{item.question}</span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="pb-4 pl-6.5 text-sm leading-normal font-normal tracking-normal text-muted-foreground sm:pl-7 sm:text-base sm:leading-6 md:text-[16px]">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
