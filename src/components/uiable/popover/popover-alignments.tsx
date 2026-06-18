// shadcn
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";

//  ------------------------------ | POPOVER - ALIGNMENTS | ------------------------------  //

export function PopoverAlignments() {
  return (
    <>
      <div className="flex gap-6 flex-wrap">
        <Popover>
          <PopoverTrigger render={<Button size="sm" />}>Start</PopoverTrigger>
          <PopoverContent align="start" className="w-28">
            Aligned to start
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger render={<Button size="sm" />}>Center</PopoverTrigger>
          <PopoverContent align="center" className="w-30">
            Aligned to center
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger render={<Button size="sm" />}>End</PopoverTrigger>
          <PopoverContent align="end" className="w-28">
            Aligned to end
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
}
