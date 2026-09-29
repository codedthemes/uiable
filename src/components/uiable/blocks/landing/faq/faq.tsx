"use client"

// next
import Link from "next/link"

// shadcn
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

// project-imports
import branding from "@/branding.json"
import SectionHeader from "@/components/uiable/blocks/landing/components/SectionHeader"

const faqItems = [
  {
    number: "1.",
    question: "Is everything free, or is there a paid version?",
    answer:
      "Everything here is completely free and MIT-licensed — no account required.",
  },
  {
    number: "2.",
    question: `How are ${branding.brandName} components different from shadcn/ui?`,
    answer: `Shadcn/ui provides the core components like Buttons, Dialogs, Alerts, and Badges. ${branding.brandName} builds on top of them with production-ready, fully styled components like animated buttons, searchable comboboxes, date pickers, advanced sidebars, and more. You get the flexibility of shadcn/ui with ready-to-use components that are easier to copy, customize, and ship.`,
  },
  {
    number: "3.",
    question: "Which frameworks and setups are supported?",
    answer: `${branding.brandName} is built for Next.js 16+ with React 19 and Tailwind CSS v4. Every component is built on Tailwind CSS and Base UI and ships as fully-typed TypeScript.`,
  },
  {
    number: "4.",
    question: "How do I add a component to my project?",
    answer: (
      <>
        Copy the code straight from any{" "}
        <Link
          href="/components"
          className="text-primary no-underline! hover:underline"
        >
          component
        </Link>{" "}
        page, or install it with the shadcn CLI. Pro components install the same
        way using your personal registry token.
      </>
    ),
  },
  {
    number: "5.",
    question: "Are the components accessible?",
    answer: `Yes. They're built on Base UI primitives with keyboard navigation, correct ARIA roles, and focus management, and are tested against WCAG and ARIA guidelines.`,
  },
  {
    number: "6.",
    question: `Is ${branding.brandName} actively maintained?`,
    answer: `Yes — components and blocks get regular updates and new additions. Pro purchases include one year of updates, which you can extend anytime from your account.`,
  },
  {
    number: "7.",
    question: "How do I get help or report a bug?",
    answer: (
      <>
        Community support is on{" "}
        <Link
          href={branding.company.socialLink.discord}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary no-underline! hover:underline"
        >
          Discord
        </Link>{" "}
        and{" "}
        <Link
          href={branding.company.socialLink.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary no-underline! hover:underline"
        >
          GitHub
        </Link>
        . Pro customers also get priority support.
      </>
    ),
  },
]

//  ------------------------------ | FAQ | ------------------------------  //

export default function FAQ() {
  return (
    <section className="mx-auto flex w-full flex-col gap-10 px-4 py-12.5 sm:px-8">
      <SectionHeader
        title="Got Questions? We've Got Answers"
        titleClassName="tracking-tight"
        subtitle="Browse our frequently asked questions to find quick, clear answers and helpful information."
      />

      <Accordion
        defaultValue={["item-0"]}
        className="flex w-full flex-col gap-4"
      >
        {faqItems.map((item, index) => (
          <AccordionItem
            key={item.number}
            value={`item-${index}`}
            className="flex flex-col gap-2.5 rounded-xl border-b-0! bg-card p-5 transition-all"
          >
            <AccordionTrigger className="w-full p-0 text-left hover:no-underline **:data-[slot=accordion-trigger-icon]:size-6 **:data-[slot=accordion-trigger-icon]:text-muted-foreground!">
              <span className="flex items-start gap-2.5 text-base leading-normal font-medium tracking-normal text-foreground sm:text-lg sm:leading-6 md:text-xl">
                <span>{item.number}</span>
                <span>{item.question}</span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="pb-4 pl-6.5 text-sm leading-normal font-normal tracking-normal text-muted-foreground sm:pl-7 sm:text-base sm:leading-6">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
