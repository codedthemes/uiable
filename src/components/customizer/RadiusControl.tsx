"use client";

// shadcn
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";

type RadiusControlProps = {
  radius: number;
  onRadiusChange: (value: number) => void;
};

//  ------------------------------ | CUSTOMIZER - RADIUS CONTROL | ------------------------------  //

export function RadiusControl({ radius, onRadiusChange }: RadiusControlProps) {
  return (
    <>
      <div className="flex flex-col gap-1">
        <h6>Theme Radius</h6>
        <p className="text-foreground">Choose radius for theme</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="grow">
          <Slider
            value={[radius]}
            onValueChange={(val) =>
              onRadiusChange(Array.isArray(val) ? val[0] : val)
            }
            min={0}
            max={1.25}
            step={0.05}
          />
        </div>
        <div className="shrink-0">
          <p className="flex gap-x-2">
            <Input
              type="number"
              value={radius}
              onChange={(e) => {
                const value = parseFloat(e.target.value);
                onRadiusChange(isNaN(value) ? 0 : value);
              }}
              min={0}
              max={1.25}
              step={0.05}
              className="h-8 w-15 px-2 text-xs"
            />
            rem
          </p>
        </div>
      </div>
    </>
  );
}
