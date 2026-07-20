"use client"

import { useState } from "react"
// assets
import {
  EyeIcon,
  EyeOffIcon,
  LockIcon,
  MicIcon,
  MicOffIcon,
  PauseIcon,
  PlayIcon,
  UnlockIcon,
  Volume2Icon,
  VolumeXIcon,
} from "lucide-react"

// shadcn
import { Toggle } from "@/components/ui/toggle"

//  ------------------------------ | TOGGLE - ICON | ------------------------------  //

export function ToggleIcon() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isMicMuted, setIsMicMuted] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [isLocked, setIsLocked] = useState(false)

  return (
    <div className="flex flex-wrap items-center gap-2">
      {/* Play / Pause Toggle */}
      <Toggle
        variant="outline"
        aria-label="Toggle playback"
        pressed={isPlaying}
        onPressedChange={setIsPlaying}
      >
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </Toggle>

      {/* Volume / Mute Toggle */}
      <Toggle
        variant="outline"
        aria-label="Toggle audio mute"
        pressed={isMuted}
        onPressedChange={setIsMuted}
      >
        {isMuted ? <VolumeXIcon /> : <Volume2Icon />}
      </Toggle>

      {/* Mic / Mic Off Toggle */}
      <Toggle
        variant="outline"
        aria-label="Toggle microphone"
        pressed={isMicMuted}
        onPressedChange={setIsMicMuted}
      >
        {isMicMuted ? <MicOffIcon /> : <MicIcon />}
      </Toggle>

      {/* Eye / Eye Off Toggle */}
      <Toggle
        aria-label="Toggle visibility"
        pressed={isHidden}
        onPressedChange={setIsHidden}
      >
        {isHidden ? <EyeOffIcon /> : <EyeIcon />}
      </Toggle>

      {/* Lock / Unlock Toggle */}
      <Toggle
        aria-label="Toggle lock"
        pressed={isLocked}
        onPressedChange={setIsLocked}
      >
        {isLocked ? <UnlockIcon /> : <LockIcon />}
      </Toggle>
    </div>
  )
}
