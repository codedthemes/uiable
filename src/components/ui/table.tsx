"use client";

import { ComponentProps } from "react";

import { cn } from "@/lib/utils";

function Table({ className, ...props }: ComponentProps<"table">) {
  return (
    <div
      data-slot="table-container"
      className="relative w-full overflow-x-auto"
    >
      <table
        data-slot="table"
        className={cn("w-full caption-bottom text-base", className)}
        {...props}
      />
    </div>
  );
}

function TableHeader({ className, ...props }: ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn(
        "[&_tr]:border-b [&_tr]:border-b-border-border bg-background font-bold text-[13px] align-middle uppercase ltr:text-left! rtl:text-right! ",
        className
      )}
      {...props}
    />
  );
}

function TableBody({ className, ...props }: ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
    />
  );
}

function TableFooter({ className, ...props }: ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "bg-background font-semibold border-t border-t-border-border [&>tr]:last:border-b-0",
        className
      )}
      {...props}
    />
  );
}

function TableRow({ className, ...props }: ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "hover:bg-background data-[state=selected]:bg-background border-b border-b-border-border transition-colors",
        className
      )}
      {...props}
    />
  );
}

function TableHead({ className, ...props }: ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "text-foreground p-[.9rem_.75rem] whitespace-nowrap [&:has([role=checkbox])]:pr-0 ltr:first:pl-5 ltr:first:sm:pl-[25px] ltr:last:pr-5 ltr:last:sm:pr-[25px] rtl:first:pr-5 rtl:first:sm:pr-[25px] rtl:last:pl-5 rtl:last:sm:pl-[25px]",
        className
      )}
      {...props}
    />
  );
}

function TableCell({ className, ...props }: ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "p-[.7rem_.75rem] align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 ltr:first:pl-5 ltr:first:sm:pl-[25px] ltr:last:pr-5 ltr:last:sm:pr-[25px] rtl:first:pr-5 rtl:first:sm:pr-[25px] rtl:last:pl-5 rtl:last:sm:pl-[25px]",
        className
      )}
      {...props}
    />
  );
}

function TableCaption({
  className,
  ...props
}: ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn("text-muted-foreground mt-4 text-base", className)}
      {...props}
    />
  );
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption
};
