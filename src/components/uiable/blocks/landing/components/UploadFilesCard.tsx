"use client"

import { useRef, useState } from "react"

// shadcn
import { Button } from "@/components/ui/button"

// third-party
import { cn } from "cn"

// assets
import {
  IconFileDescription,
  IconMusic,
  IconPhoto,
  IconUpload,
  IconVideo,
  type Icon as TablerIcon,
} from "@tabler/icons-react"

// types
interface FileType {
  key: string
  label: string
  icon: TablerIcon
}

interface FileTypeButtonProps {
  fileType: FileType
  isSelected: boolean
  onSelect: (key: string) => void
}

const fileTypes: FileType[] = [
  { key: "documents", label: "Documents", icon: IconFileDescription },
  { key: "images", label: "Images", icon: IconPhoto },
  { key: "videos", label: "Videos", icon: IconVideo },
  { key: "audio", label: "Audio", icon: IconMusic },
]

function FileTypeButton({
  fileType,
  isSelected,
  onSelect,
}: FileTypeButtonProps) {
  const Icon = fileType.icon
  return (
    <Button
      size="sm"
      onClick={() => onSelect(fileType.key)}
      className={cn(
        "flex h-auto items-center justify-center gap-2 rounded-lg px-3 py-2 text-center text-sm leading-4 font-normal tracking-normal",
        isSelected
          ? "border-primary bg-primary/5 text-primary hover:bg-primary/10 hover:text-primary"
          : "border-border bg-card text-secondary-foreground hover:bg-accent"
      )}
    >
      <Icon
        aria-hidden="true"
        className={cn(
          "size-3.5",
          isSelected ? "text-primary" : "text-card-foreground"
        )}
      />
      {fileType.label}
    </Button>
  )
}

//  ------------------------------ | BLOCK - UPLOAD FILES CARD | ------------------------------  //

export default function UploadFilesCard() {
  const [selected, setSelected] = useState<string>("documents")
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleUploadClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className="flex flex-col gap-4 rounded-xl border border-border bg-card p-4">
      <p className="text-base leading-5 font-medium tracking-normal text-card-foreground">
        Upload Files
      </p>
      <button
        type="button"
        onClick={handleUploadClick}
        className="flex cursor-pointer flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed border-border bg-muted/10 px-5 py-4 text-center transition-colors hover:bg-muted/20"
      >
        <IconUpload
          aria-hidden="true"
          className="size-8.5 text-accent-foreground"
        />
        <div className="flex flex-col gap-1.5">
          <p className="text-sm leading-4 font-normal tracking-normal text-card-foreground">
            Drop files here or click to browse
          </p>
          <p className="text-xs leading-3 font-normal tracking-normal text-muted-foreground">
            Max file size: 10MB
          </p>
        </div>
      </button>
      <p className="text-sm leading-4 font-medium tracking-normal text-card-foreground">
        File Type
      </p>
      <div className="grid grid-cols-2 gap-2.5">
        {fileTypes.map((fileType) => (
          <FileTypeButton
            key={fileType.key}
            fileType={fileType}
            isSelected={selected === fileType.key}
            onSelect={setSelected}
          />
        ))}
      </div>
      <input type="file" className="hidden" ref={fileInputRef} />
      <Button
        onClick={handleUploadClick}
        className="w-full rounded-lg bg-primary py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
      >
        Upload Files
      </Button>
    </div>
  )
}
