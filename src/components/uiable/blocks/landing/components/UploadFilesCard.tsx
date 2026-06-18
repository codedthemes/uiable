"use client";

import { useState } from "react";

// shadcn
import { Button } from "@/components/ui/button";

// assets
import { IconUpload, IconFileDescription, IconPhoto, IconVideo, IconMusic } from "@tabler/icons-react";

const fileTypes = [
  { key: "documents", label: "Documents", icon: IconFileDescription },
  { key: "images", label: "Images", icon: IconPhoto },
  { key: "videos", label: "Videos", icon: IconVideo },
  { key: "audio", label: "Audio", icon: IconMusic }
] as const;

//  ------------------------------ | BLOCK - UPLOAD FILES CARD | ------------------------------  //

export default function UploadFilesCard() {
  const [selected, setSelected] = useState<string>("documents");

  return (
    <div className="border border-border rounded-xl p-4 flex flex-col gap-4 bg-card">
      <p className="text-base font-medium leading-5 tracking-normal text-card-foreground">Upload Files</p>
      <div className="border-2 border-dashed border-border rounded-lg px-5 py-4 flex flex-col items-center justify-center gap-4 bg-muted/10 text-center hover:bg-muted/20 cursor-pointer transition-colors">
        <IconUpload className="size-[34px] text-accent-foreground" />
        <div className="flex flex-col gap-1.5">
          <p className="text-sm font-normal leading-4 tracking-normal text-card-foreground">
            Drop files here or click to browse
          </p>
          <p className="text-xs font-normal leading-3 tracking-normal text-muted-foreground">
            Max file size: 10MB
          </p>
        </div>
      </div>
      <p className="text-sm font-medium leading-4 tracking-normal text-card-foreground mt-1">File Type</p>
      <div className="flex flex-col gap-2.5">
        <div className="flex gap-2.5">
          {fileTypes.slice(0, 2).map(({ key, label, icon: Icon }) => (
            <Button
              key={key}
              size="sm"
              onClick={() => setSelected(key)}
              className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-normal leading-4 tracking-normal text-center flex-1 justify-center h-auto ${selected === key
                ? "border-primary bg-primary/5 text-primary hover:bg-primary/10 hover:text-primary"
                : "border-border bg-card text-secondary-foreground hover:bg-accent"
                }`}
            >
              <Icon className={`size-3.5 ${selected === key ? "text-primary" : "text-card-foreground"}`} />
              {label}
            </Button>
          ))}
        </div>
        <div className="flex gap-2.5">
          {fileTypes.slice(2, 4).map(({ key, label, icon: Icon }) => (
            <Button
              key={key}
              size="sm"
              onClick={() => setSelected(key)}
              className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-normal leading-4 tracking-normal text-center flex-1 justify-center h-auto ${selected === key
                ? "border-primary bg-primary/5 text-primary hover:bg-primary/10 hover:text-primary"
                : "border-border bg-card text-secondary-foreground hover:bg-accent"
                }`}
            >
              <Icon className={`size-3.5 ${selected === key ? "text-primary" : "text-card-foreground"}`} />
              {label}
            </Button>
          ))}
        </div>
      </div>
      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-2.5 rounded-lg text-sm">
        Upload Files
      </Button>
    </div>
  );
}
