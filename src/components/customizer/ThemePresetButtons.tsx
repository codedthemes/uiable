"use client";

// shadcn
import { Button } from "@/components/ui/button";

// constants
const PRESET_BUTTONS = [
  { label: "Default", value: "default" },
  { label: "Ghibli Studio", value: "ghibli-studio" },
  { label: "Perplexity", value: "perplexity" },
  { label: "Marvel", value: "marvel" },
  { label: "Material", value: "material" },
  { label: "Vs Code", value: "vscode" },
  { label: "Datta", value: "datta" },
  { label: "Flat", value: "flat" },
  { label: "Guru", value: "guru" },
  { label: "Berry", value: "berry" }
];

type ThemePresetButtonsProps = {
  onSelectPreset: (className: string) => void;
};

//  ------------------------------ | CUSTOMIZER - THEME PRESET BUTTONS | ------------------------------  //

export function ThemePresetButtons({
  onSelectPreset
}: ThemePresetButtonsProps) {
  return (
    <div className="grid grid-cols-2 gap-2">
      {PRESET_BUTTONS.map((preset) => (
        <Button
          key={preset.value}
          variant="outline"
          onClick={() => onSelectPreset(preset.value)}
        >
          {preset.label}
        </Button>
      ))}
    </div>
  );
}
