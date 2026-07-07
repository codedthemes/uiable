"use client"

// shadcn
import { Badge } from "@/components/ui/badge"
import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from "@/components/ui/attachment"

// assets
import { FileText, X } from "lucide-react"

//  ------------------------------ | ATTACHMENT - SIZES | ------------------------------  //

export default function AttachmentSizes() {
  return (
    <div className="mx-auto w-full max-w-sm py-12">
      <div className="flex w-full flex-col gap-6">
        {/* Default / Large Size */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
              Default
            </h4>
            <Badge className="rounded-sm border-transparent bg-green-500/10 px-1.5 py-0.5 font-mono text-[10px] text-green-500">
              size="default"
            </Badge>
          </div>
          <Attachment className="w-full">
            <AttachmentMedia>
              <FileText className="size-4" />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>annual-report-2026.pdf</AttachmentTitle>
              <AttachmentDescription>PDF • 4.2 MB</AttachmentDescription>
            </AttachmentContent>
            <AttachmentActions>
              <AttachmentAction aria-label="Remove annual-report-2026.pdf">
                <X className="size-4" />
              </AttachmentAction>
            </AttachmentActions>
          </Attachment>
        </div>

        {/* Small Size */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
              Small
            </h4>
            <Badge className="rounded-sm border-transparent bg-green-500/10 px-1.5 py-0.5 font-mono text-[10px] text-green-500">
              size="sm"
            </Badge>
          </div>
          <Attachment size="sm" className="w-full">
            <AttachmentMedia>
              <FileText className="size-4" />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>hero-background.jpg</AttachmentTitle>
              <AttachmentDescription>JPG • 1.8 MB</AttachmentDescription>
            </AttachmentContent>
            <AttachmentActions>
              <AttachmentAction aria-label="Remove hero-background.jpg">
                <X className="size-4" />
              </AttachmentAction>
            </AttachmentActions>
          </Attachment>
        </div>

        {/* Extra Small Size */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
              Extra Small
            </h4>
            <Badge className="rounded-sm border-transparent bg-green-500/10 px-1.5 py-0.5 font-mono text-[10px] text-green-500">
              size="xs"
            </Badge>
          </div>
          <Attachment size="xs" className="w-full">
            <AttachmentMedia>
              <FileText className="size-4" />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>signature-spec.png</AttachmentTitle>
              <AttachmentDescription>PNG • 85 KB</AttachmentDescription>
            </AttachmentContent>
            <AttachmentActions>
              <AttachmentAction aria-label="Remove signature-spec.png">
                <X className="size-3.5" />
              </AttachmentAction>
            </AttachmentActions>
          </Attachment>
        </div>
      </div>
    </div>
  )
}
