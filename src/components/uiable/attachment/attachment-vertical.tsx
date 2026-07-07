"use client"

import { useState } from "react"

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
import { Download, Eye, RefreshCw, X } from "lucide-react"

//  ------------------------------ | ATTACHMENT - VERTICAL | ------------------------------  //

export default function AttachmentVertical() {
  const [attachments, setAttachments] = useState([
    {
      id: "1",
      name: "nature-photography.jpg",
      size: "2.4 MB",
      url: "https://cdn.uiable.com/component/card-sample.png",
      state: "done" as const,
    },
    {
      id: "2",
      name: "branding-guidelines.png",
      size: "4.8 MB",
      url: "https://cdn.uiable.com/component/card-sample.png",
      state: "uploading" as const,
    },
    {
      id: "3",
      name: "website-hero-draft.jpg",
      size: "1.2 MB",
      url: "https://cdn.uiable.com/component/card-sample.png",
      state: "error" as const,
    },
  ])

  const removeAttachment = (id: string) => {
    setAttachments((prev) => prev.filter((item) => item.id !== id))
  }

  const retryUpload = (id: string) => {
    setAttachments((prev) =>
      prev.map((item) => (item.id === id ? { ...item, state: "done" } : item))
    )
  }

  return (
    <div className="mx-auto w-full max-w-4xl space-y-6 p-6">
      <div className="flex flex-wrap justify-center gap-4">
        {attachments.map((item) => (
          <Attachment key={item.id} orientation="vertical" state={item.state}>
            <AttachmentMedia variant="image">
              <img
                src={item.url}
                alt={item.name}
                className="aspect-square w-full object-cover"
              />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>{item.name}</AttachmentTitle>
              <AttachmentDescription>
                {item.state === "uploading"
                  ? "Uploading..."
                  : item.state === "error"
                    ? "Failed to upload"
                    : `JPG • ${item.size}`}
              </AttachmentDescription>
            </AttachmentContent>
            <AttachmentActions>
              {item.state === "error" && (
                <AttachmentAction
                  aria-label="Retry upload"
                  onClick={() => retryUpload(item.id)}
                >
                  <RefreshCw className="animate-spin-hover size-4 text-destructive" />
                </AttachmentAction>
              )}
              {item.state === "done" && (
                <>
                  <AttachmentAction aria-label="Preview image">
                    <Eye className="size-4" />
                  </AttachmentAction>
                  <AttachmentAction aria-label="Download image">
                    <Download className="size-4" />
                  </AttachmentAction>
                </>
              )}
              <AttachmentAction
                aria-label={`Remove ${item.name}`}
                onClick={() => removeAttachment(item.id)}
              >
                <X className="size-4" />
              </AttachmentAction>
            </AttachmentActions>
          </Attachment>
        ))}
      </div>
    </div>
  )
}
