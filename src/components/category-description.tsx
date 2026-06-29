// shadcn

// project
import branding from "@/branding.json"
import { categoryInfoMap as componentCategoryInfoMap } from "@/data/components"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"

const categoryInfoMap = {
  ...componentCategoryInfoMap,
}

interface CategoryDescriptionProps {
  category: string
}

//  ------------------------------ | COMPONENT - CATEGORY DESCRIPTION | ------------------------------  //

export default function CategoryDescription({
  category,
}: Readonly<CategoryDescriptionProps>) {
  const displayCategory = category.replace("-", " ")
  const data = categoryInfoMap[category]

  if (!data) {
    return (
      <div className="my-10 flex flex-col gap-7 text-base">
        <div className="flex flex-col gap-4">
          <h3 className="capitalize">
            {branding.brandName} {displayCategory}: Create Stylish and
            Functional {displayCategory}s for Your UI
          </h3>
          <p>
            {branding.brandName} {displayCategory} is a ready-to-use component
            made for React and Next.js apps. It helps you build clean,
            responsive, and interactive interfaces without overthinking styles
            or behavior.
          </p>
        </div>
      </div>
    )
  }
  return (
    <Card className="bg-card/60">
      <CardContent>
        <div className="flex flex-col gap-7 text-base">
          <div className="flex flex-col gap-4">
            <h3 className="hidden capitalize">{data.whatIsHeading}</h3>
            <div className="flex flex-col gap-3">
              {data.whatIsDescription.map((p: string, i: number) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="capitalize">{data.variantsHeading ?? ""}</h3>
            <ul className="flex list-disc flex-col gap-3 pl-6">
              {(data.variants ?? []).map((f: string, i: number) => {
                const [bold, ...rest] = f.split(". ")
                return (
                  <li key={i}>
                    <b>{bold}:</b> {rest.join(". ")}
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="capitalize">{data.whyUseHeading}</h3>
            <div className="flex flex-col gap-3">
              {data.whyUseDescription.map((p: string, i: number) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="capitalize">{data.featuresHeading}</h3>
            <ul className="flex list-disc flex-col gap-3 pl-6">
              {data.features.map((f: string, i: number) => {
                const [bold, ...rest] = f.split(". ")
                return (
                  <li key={i}>
                    <b>{bold}.</b> {rest.join(". ")}
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="capitalize">{data.integrationHeading}</h3>
            <div className="flex flex-col gap-3">
              {data.integrationDescription.map((p: string, i: number) => (
                <p
                  key={i}
                  dangerouslySetInnerHTML={{
                    __html: p.replace(/<b>(.*?)<\/b>/g, "<b>$1</b>"),
                  }}
                />
              ))}
            </div>
            <ul className="flex list-disc flex-col gap-3 pl-6">
              {(data.integrationList ?? []).map((p: string, i: number) => {
                return <li key={i}>{p}</li>
              })}
            </ul>
            <p>{data.integrationNote ?? ""}</p>
          </div>
          {data.faqs && data.faqs.length > 0 && (
            <div className="flex flex-col gap-4">
              <h3 className="capitalize">Frequently Asked Questions</h3>
              <Accordion className="w-full">
                {data.faqs.map(
                  (faq: { question: string; answer: string }, i: number) => (
                    <AccordionItem
                      key={i}
                      value={`item-${i + 1}`}
                      className="border-border"
                    >
                      <AccordionTrigger className="relative py-5 pr-0 pl-9 text-[16px] font-semibold hover:no-underline **:data-[slot=accordion-trigger-icon]:absolute **:data-[slot=accordion-trigger-icon]:top-5.5 **:data-[slot=accordion-trigger-icon]:left-0 **:data-[slot=accordion-trigger-icon]:mr-auto **:data-[slot=accordion-trigger-icon]:ml-0 **:data-[slot=accordion-trigger-icon]:size-6">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="pr-0 pb-5 pl-9 text-base">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  )
                )}
              </Accordion>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
