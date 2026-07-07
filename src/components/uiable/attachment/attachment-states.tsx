"use client"

// shadcn
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
import {
  Check,
  Clock,
  FileText,
  FileWarning,
  LoaderCircle,
  RefreshCw,
  X,
} from "lucide-react"

//  ------------------------------ | ATTACHMENT - STATES | ------------------------------  //

export default function AttachmentStates() {
  const staticItems = [
    {
      id: "state-idle",
      name: "selected-file.pdf",
      state: "idle" as const,
      description: "Ready to upload",
      icon: Clock,
    },
    {
      id: "state-uploading",
      name: "design-system.zip",
      state: "uploading" as const,
      description: "Uploading · 64%",
      icon: LoaderCircle,
    },
    {
      id: "state-processing",
      name: "market-research.pdf",
      state: "processing" as const,
      description: "Processing document",
      icon: FileText,
    },
    {
      id: "state-error",
      name: "financial-model.xlsx",
      state: "error" as const,
      description: "Upload failed. Try again.",
      icon: FileWarning,
    },
    {
      id: "state-done",
      name: "uploaded-report.pdf",
      state: "done" as const,
      description: "Uploaded · 1.8 MB",
      icon: Check,
    },
  ]

  return (
    <div className="mx-auto w-full max-w-sm py-12">
      <div className="flex w-full flex-col gap-2">
        {staticItems.map((item) => {
          const Icon = item.icon
          return (
            <Attachment key={item.id} state={item.state} className="w-full">
              <AttachmentMedia>
                {item.state === "uploading" ? (
                  <Icon className="size-4 animate-spin" />
                ) : (
                  <Icon className="size-4" />
                )}
              </AttachmentMedia>
              <AttachmentContent>
                <AttachmentTitle>{item.name}</AttachmentTitle>
                <AttachmentDescription>
                  {item.description}
                </AttachmentDescription>
              </AttachmentContent>
              <AttachmentActions>
                {item.state === "error" && (
                  <AttachmentAction aria-label="Retry upload">
                    <RefreshCw className="size-3 text-destructive" />
                  </AttachmentAction>
                )}
                <AttachmentAction aria-label="Remove attachment">
                  <X className="size-4" />
                </AttachmentAction>
              </AttachmentActions>
            </Attachment>
          )
        })}
      </div>
    </div>
  )
}
