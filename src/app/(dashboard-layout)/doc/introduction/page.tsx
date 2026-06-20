// shadcn
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

// project imports
import branding from "@/branding.json"
import DocsNavigation from "@/components/doc-bottom-nav"
import TableOfContents from "@/components/uiable/layout/table-of-contents"

// constants
const tocItems = [
  { title: "Overview", url: "#introduction" },
  { title: `What is ${branding.brandName}?`, url: "#what-is-uiable" },
  { title: `Why ${branding.brandName}?`, url: "#why-uiable" },
  { title: "Key Features", url: "#key-features" },
]

//  ------------------------------ | PAGE - INTRODUCTION | ------------------------------  //

export default function IntroductionPage() {
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardContent>
          <div className="flex flex-row gap-6 text-muted-foreground">
            <div className="grow">
              <section
                id="introduction"
                className="mb-8 scroll-mt-24 space-y-8"
              >
                <h4 className="group relative mb-2 scroll-mt-20">Overview</h4>
                <p className="text-muted-foreground">
                  {branding.brandName} is a professional-grade collection of
                  copy-and-paste components, blocks, and templates built on top
                  of Shadcn UI. It's designed to help developers craft stunning
                  interfaces and ship production-ready applications faster than
                  ever.
                </p>
                <Separator className="mb-6" />
                <div className="space-y-5" id="what-is-uiable">
                  <h4 className="group relative mb-2 scroll-mt-20">
                    What is {branding.brandName}?
                  </h4>
                  <p>
                    <b className="">
                      {branding.brandName} is more than just a component
                      library; it's a sophisticated distribution of UI patterns
                    </b>
                    . We provide highly customizable variants of components,
                    advanced blocks, and full-page templates that you can
                    preview and drop directly into your project.
                  </p>
                  <p>
                    By building on the solid foundation of Shadcn and Base UI,
                    we've added luxury design aesthetics and complex functional
                    blocks to give you a definitive head start. Our goal is to
                    provide you with the tools to build interfaces that feel
                    premium and unique.
                  </p>
                </div>
                <div className="space-y-5">
                  <h4 className="group relative mb-2 scroll-mt-20">
                    Efficiency Without Abstraction
                  </h4>
                  <p>
                    In the spirit of Shadcn, {branding.brandName} follows the
                    "open code" philosophy. There are no heavy NPM packages to
                    keep updated. Instead, you take full ownership of the code,
                    allowing you to modify styles, adjust logic, and integrate
                    it perfectly with your existing tech stack—completely free
                    from the constraints of traditional libraries.
                  </p>
                </div>
                <Separator className="mb-6" />
                <div className="space-y-5" id="why-uiable">
                  <h4 className="group relative mb-2 scroll-mt-20">
                    Why choose {branding.brandName}?
                  </h4>
                  <p>
                    {branding.brandName} aims to solve the "blank canvas"
                    problem by providing not just atomic components, but rich,
                    contextual examples of how they work together in real-world
                    applications.
                  </p>
                  <p>
                    While standard libraries provide the building blocks,{" "}
                    {branding.brandName}
                    provides the architecture. We offer diverse component
                    variants, pre-built functional sections (blocks), and themed
                    templates that follow industry-leading UX practices, saving
                    you hundreds of hours of design and development time.
                  </p>
                </div>
                <Separator className="mb-6" />
                <div className="space-y-5" id="key-features">
                  <h4 className="group relative mb-2 scroll-mt-20">
                    Where {branding.brandName} shines ✨
                  </h4>
                  <p>
                    {branding.brandName} provides a robust toolkit for building
                    stunning, interactive user interfaces with ease. Here is
                    what makes it unique:
                  </p>
                  <ul className="list-disc space-y-4 ps-8 text-muted-foreground">
                    <li>
                      <b className="">Ownership and Control</b>
                      <p>
                        Everything is copy-paste ready. You own the code the
                        second it hits your project. No dependency lock-in, just
                        pure developer freedom.
                      </p>
                    </li>
                    <li className="hidden">
                      <b className="">Premium Block Variants</b>
                      <p>
                        Go beyond simple buttons and inputs. Access complex
                        ready-made block compositions for hero sections,
                        features, testimonials, and more.
                      </p>
                    </li>
                    <li>
                      <b className="">Base UI Foundation</b>
                      <p>
                        Our components are built on industry-standard primitives
                        ensuring world-class accessibility and performance
                        across all browsers.
                      </p>
                    </li>
                    <li>
                      <b className="">Next-Gen Theming</b>
                      <p>
                        Leverage our integrated theming system to customize
                        colors, radius, and shadows globally, ensuring your UI
                        perfectly matches your brand identity.
                      </p>
                    </li>
                    <li>
                      <b className="">Production-Ready Templates</b>
                      <p>
                        Jumpstart your project with expertly designed templates
                        for SaaS landing pages and administrative dashboards.
                      </p>
                    </li>
                  </ul>
                </div>
              </section>
              <DocsNavigation
                previousItem={null}
                nextItem={{
                  name: "Installation",
                  url: "/doc/installation",
                }}
              />
            </div>
            <Separator orientation="vertical" className="max-xl:hidden" />
            <div className="hidden w-sidebar-width shrink-0 xl:block">
              <div className="sticky top-20">
                <Card className="border-0 bg-transparent">
                  <CardHeader className="px-0 py-3">
                    <h5>On this page</h5>
                  </CardHeader>
                  <CardContent className="px-0 py-3">
                    <TableOfContents items={tocItems} />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
