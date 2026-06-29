// shadcn

// project imports
import branding from "@/branding.json"
// assets
import { DocumentText, Global, SecuritySafe, Shield } from "iconsax-reactjs"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import DocsNavigation from "@/components/doc-bottom-nav"
import TableOfContents from "@/components/uiable/layout/table-of-contents"

// constants
const tocItems = [
  { title: "Standard License", url: "#standard" },
  { title: "Extended License", url: "#extended" },
  { title: "Commercial Use", url: "#commercial" },
  { title: "Usage FAQ", url: "#faq" },
]

//  ------------------------------ | PAGE - LICENSE | ------------------------------  //

export default function LicensePage() {
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardContent>
          <div className="flex flex-row gap-6 text-muted-foreground">
            <div className="grow">
              <section id="license" className="mb-8 scroll-mt-24 space-y-8">
                <div className="space-y-4">
                  <h4 className="group relative mb-2 scroll-mt-20">
                    Licensing Terms
                  </h4>
                  <p className="text-muted-foreground">
                    By using {branding.brandName} components and blocks, you
                    agree to the following terms. We offer two simple license
                    types based on how you plan to use our assets.
                  </p>
                </div>

                <Alert className="border-cyan-500 bg-cyan-500/10 text-cyan-800">
                  <Shield className="size-5.5 shrink-0" variant="Bulk" />
                  <AlertTitle>Legal Compliance</AlertTitle>
                  <AlertDescription>
                    These licenses give you the right to use the components but
                    not to resell our collection as your own UI kit or separate
                    asset library.
                  </AlertDescription>
                </Alert>

                <Separator className="mb-6" />

                <div className="space-y-5" id="standard">
                  <div className="mb-2 flex items-center gap-2">
                    <SecuritySafe
                      className="size-5 text-muted-foreground"
                      variant="Bulk"
                    />
                    <h5 className="mb-0 font-semibold tracking-tight decoration-green-500/30 underline-offset-4">
                      Standard License
                    </h5>
                  </div>
                  <p>
                    Recommended for developers building individual projects for
                    themselves or a single client. This is our most common
                    license.
                  </p>
                  <ul className="list-disc space-y-3 ps-8 pt-2">
                    <li>
                      <b className="">Single Usage</b>: Use in 1 single
                      end-product (one website or application).
                    </li>
                    <li>
                      <b className="">Non-Commercial Endpoints</b>: The
                      end-users of your product must not be charged.
                    </li>
                    <li>
                      <b className="">Internal Tools</b>: Perfect for building
                      company dashboards or internal admin panels.
                    </li>
                  </ul>
                </div>

                <Separator className="mb-6" />

                <div className="space-y-5" id="extended">
                  <div className="mb-2 flex items-center gap-2">
                    <Global
                      className="size-5 text-muted-foreground"
                      variant="Bulk"
                    />
                    <h5 className="mb-0 font-semibold tracking-tight decoration-green-500/30 underline-offset-4">
                      Extended License
                    </h5>
                  </div>
                  <p>
                    Required for production environments where you are charging
                    users for access or building a multi-tenant platform.
                  </p>
                  <ul className="list-disc space-y-3 ps-8 pt-2">
                    <li>
                      <b className="">Multi-User SaaS</b>: Required for
                      applications where you charge a subscription fee.
                    </li>
                    <li>
                      <b className="">Marketplace Integration</b>: Use for
                      themes or templates you intend to sell on third-party
                      marketplaces.
                    </li>
                    <li>
                      <b className="">Priority Support</b>: Includes direct
                      access to our core development team for technical
                      assistance.
                    </li>
                  </ul>
                </div>

                <Separator className="mb-6" />

                <div className="space-y-5" id="commercial">
                  <h4 className="group relative mb-2 scroll-mt-20 font-semibold tracking-tight">
                    Commercial Usage Guidelines
                  </h4>
                  <p>
                    A "commercial product" is defined as any application that
                    generates direct revenue from the end-users. If your project
                    is a landing page for a hardware product, that is considered
                    a marketing site (Standard License). If it is a subscription
                    dashboard, it is a commercial product (Extended License).
                  </p>
                </div>

                <Separator className="mb-6" />

                <div className="space-y-5" id="faq">
                  <h4 className="group relative mb-2 scroll-mt-20 font-semibold tracking-tight">
                    Usage FAQ
                  </h4>
                  <div className="space-y-6">
                    <div>
                      <h6 className="mb-1 flex items-center gap-2 font-semibold">
                        <DocumentText
                          className="size-4 text-muted-foreground"
                          variant="Bulk"
                        />
                        Can I use {branding.brandName} for my client projects?
                      </h6>
                      <p className="text-sm">
                        Yes. One Standard License covers one client project. If
                        you have multiple clients, you need a license for each
                        project.
                      </p>
                    </div>
                    <div>
                      <h6 className="mb-1 flex items-center gap-2 font-semibold">
                        <DocumentText
                          className="size-4 text-muted-foreground"
                          variant="Bulk"
                        />
                        Can I build an open source project with{" "}
                        {branding.brandName}?
                      </h6>
                      <p className="text-sm">
                        No. Since {branding.brandName} is a paid library of
                        source code, distributing it in a public repository
                        would violate the license terms as it exposes our
                        proprietary code for free.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <DocsNavigation
                previousItem={{
                  name: "Components",
                  url: "/doc/components",
                }}
                nextItem={null}
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
