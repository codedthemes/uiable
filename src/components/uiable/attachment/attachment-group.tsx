"use client"

import { useState } from "react"

// shadcn
import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
} from "@/components/ui/attachment"

// assets
import {
  Archive,
  FileSpreadsheet,
  FileText,
  Image as ImageIcon,
  Paperclip,
  X,
} from "lucide-react"

//  ------------------------------ | ATTACHMENT - GROUP | ------------------------------  //

interface AttachmentItem {
  id: string
  name: string
  size: string
  type: "image" | "pdf" | "zip" | "sheet" | "doc"
  state: "idle" | "uploading" | "processing" | "error" | "done"
  url?: string
  progress?: number
}

const INITIAL_ATTACHMENTS: AttachmentItem[] = [
  {
    id: "1",
    name: "project-mockup.png",
    size: "3.2 MB",
    type: "image",
    state: "done",
    url: "https://cdn.uiable.com/component/card-sample.png",
  },
  {
    id: "2",
    name: "design-specifications.pdf",
    size: "2.4 MB",
    type: "pdf",
    state: "done",
  },
  {
    id: "3",
    name: "source-code-v1.zip",
    size: "14.8 MB",
    type: "zip",
    state: "uploading",
    progress: 45,
  },
  {
    id: "4",
    name: "q3-financial-forecast.xlsx",
    size: "950 KB",
    type: "sheet",
    state: "done",
  },
  {
    id: "5",
    name: "feedback-summary.docx",
    size: "1.1 MB",
    type: "doc",
    state: "error",
  },
]

export default function AttachmentGroupDemo() {
  const [attachments, setAttachments] =
    useState<AttachmentItem[]>(INITIAL_ATTACHMENTS)

  const removeAttachment = (id: string) => {
    setAttachments((prev) => prev.filter((item) => item.id !== id))
  }

  const getFileIcon = (type: AttachmentItem["type"]) => {
    switch (type) {
      case "image":
        return ImageIcon
      case "pdf":
        return FileText
      case "zip":
        return Archive
      case "sheet":
        return FileSpreadsheet
      default:
        return Paperclip
    }
  }

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-4 p-6">
      <AttachmentGroup className="w-full">
        {attachments.map((item) => {
          const Icon = getFileIcon(item.type)
          return (
            <Attachment
              key={item.id}
              state={item.state}
              size="sm"
              className="max-w-56 min-w-48 shrink-0 bg-background shadow-sm"
            >
              <AttachmentMedia
                variant={
                  item.type === "image" && item.state === "done"
                    ? "image"
                    : "icon"
                }
              >
                {item.type === "image" && item.state === "done" && item.url ? (
                  <img
                    src={item.url}
                    alt={item.name}
                    className="aspect-square w-full object-cover"
                  />
                ) : (
                  <Icon className="size-4" />
                )}
              </AttachmentMedia>
              <AttachmentContent>
                <AttachmentTitle className="text-xs font-semibold">
                  {item.name}
                </AttachmentTitle>
                <AttachmentDescription className="text-[10px]">
                  {item.state === "uploading"
                    ? `Uploading ${item.progress}%`
                    : item.state === "error"
                      ? "Failed to upload"
                      : item.size}
                </AttachmentDescription>
              </AttachmentContent>
              <AttachmentActions>
                <AttachmentAction
                  aria-label={`Remove ${item.name}`}
                  onClick={() => removeAttachment(item.id)}
                >
                  <X className="size-3.5" />
                </AttachmentAction>
              </AttachmentActions>
            </Attachment>
          )
        })}
      </AttachmentGroup>
    </div>
  )
}
