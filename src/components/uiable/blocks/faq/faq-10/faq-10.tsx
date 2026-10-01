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
    question: "What Features Does Your Platform Offer?",
    answer:
      "Our platform provides project management, team collaboration, workflow automation, analytics, and integrations with popular tools to help your team work more efficiently.",
    colorClass: "bg-pink-500 text-pink-500",
  },
  {
    question: "Is My Data Secure?",
    answer:
      "Yes. We use industry-standard security practices, encrypted connections, and secure cloud infrastructure to keep your data protected at all times.",
    colorClass: "bg-purple-500 text-purple-500",
  },
  {
    question: "Can I Upgrade or Downgrade My Plan Later?",
    answer:
      "Absolutely. You can change your subscription plan at any time. Your billing will be adjusted automatically based on the new plan you choose.",
    colorClass: "bg-blue-500 text-blue-500",
  },
  {
    question: "Does Your Platform Support Team Collaboration?",
    answer:
      "Yes. Invite team members, assign roles, share projects, leave comments, and collaborate in real time from a single workspace.",
    colorClass: "bg-cyan-500 text-cyan-500",
  },
  {
    question: "Do You Offer a Free Trial?",
    answer:
      "Yes. You can explore all core features with our free trial before deciding on a paid subscription. No long-term commitment is required.",
    colorClass: "bg-lime-500 text-lime-500",
  },
  {
    question: "How Can I Contact Customer Support?",
    answer:
      "Our support team is available through live chat, email, and our help center. We're here to assist you with any questions or technical issues.",
    colorClass: "bg-amber-500 text-amber-500",
  },
]

//  ------------------------------ | FAQ - 10 | ------------------------------  //

export default function Faq10() {
  return (
    <div className="relative overflow-hidden bg-slate-900 py-24 sm:py-32">
      <div className="absolute top-2/4 right-0 z-10 size-45 -translate-y-2/4 rounded-full bg-blue-500 blur-[150px]"></div>
      <div className="relative z-30 container mx-auto px-6 lg:px-8">
        <div className="mx-auto flex max-w-200 flex-col items-center gap-6 md:gap-12">
          <div className="flex max-w-160 flex-col items-center gap-4 text-center sm:gap-8">
            <h2 className="text-lg font-medium text-slate-100 sm:text-3xl">
              Everything You Need to Know Before Getting Started
            </h2>
            <p className="max-w-200 text-slate-300">
              Find answers to common questions and learn everything you need to
              get started with confidence. We're here to make the process
              simple, clear, and hassle-free.
            </p>
            <div className="flex flex-row gap-3">
              <Button
                size="lg"
                className="rounded-full border-0 border-b-2 border-b-blue-700 bg-blue-500 hover:translate-y-1 hover:opacity-90"
              >
                Still not get answers?
              </Button>
              <Button
                size="lg"
                className="rounded-full border border-slate-500 bg-transparent text-slate-100 hover:translate-y-1 hover:opacity-90"
              >
                Explore Help Center
              </Button>
            </div>
          </div>

          <div className="mx-auto w-330 max-w-full">
            <Accordion
              defaultValue={["item-1"]}
              className="gap-3 overflow-hidden border-0"
            >
              {items.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index + 1}`}
                  className="relative gap-2 overflow-hidden rounded-lg bg-slate-800 p-4 transition-all duration-300 not-last:border-b-0 sm:p-6"
                >
                  <div
                    className={`absolute inset-x-0 top-0 z-20 h-0.75 ${item.colorClass}`}
                  ></div>
                  <div
                    className={`absolute inset-0 z-10 mask-b-from-10% mask-b-to-75% opacity-20 ${item.colorClass}`}
                  ></div>
                  <AccordionTrigger className="relative z-30 p-0 text-lg [&>svg]:hidden!">
                    <div className="flex w-full flex-row items-center gap-4">
                      <div className="flex grow flex-col gap-0.5">
                        <p className="text-base text-white transition-all group-hover:text-white md:text-lg">
                          {item.question}
                        </p>
                      </div>
                      <div className="shrink-0">
                        <svg
                          className={`size-6 ${item.colorClass} bg-transparent! transition-all duration-300 group-aria-expanded/accordion-trigger:rotate-90 md:size-8`}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            fill="currentColor"
                            d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2z"
                            className="opacity-10"
                          ></path>
                          <path
                            fill="currentColor"
                            d="M10.74 16.28c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l3-3-3-3a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l3.53 3.53c.29.29.29.77 0 1.06l-3.53 3.53c-.15.15-.34.22-.53.22z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="relative z-30 p-0 text-white">
                    <div className="mt-4 w-full">{item.answer}</div>
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
