import { cn } from "@/lib/utils";

function Kbd({ className, ...props }: React.ComponentProps<"kbd">) {
  return (
    <kbd
      data-slot="kbd"
      className={cn(
        "bg-background text-foreground pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded-lg border border-border px-1.5 font-mono text-[10px] font-medium opacity-100 leading-0",
        className
      )}
      {...props}
    />
  );
}

function KbdGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <kbd
      data-slot="kbd-group"
      className={cn("flex items-center gap-1", className)}
      {...props}
    />
  );
}

export { Kbd, KbdGroup };
