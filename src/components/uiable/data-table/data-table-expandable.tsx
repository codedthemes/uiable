"use client"

import { useState } from "react"
// third party
import {
  ColumnDef,
  ColumnFiltersState,
  ExpandedState,
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table"
// assets
import {
  ArrowUpDown,
  ChevronDown,
  ChevronRight,
  MoreHorizontal,
} from "lucide-react"

// shadcn
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

// types
export type UserRecord = {
  id: string
  name: string
  email: string
  age: number
  status: "Single" | "Relationship" | "Complicated"
  progress: number
  subRows?: UserRecord[]
}

const data: UserRecord[] = [
  {
    id: "usr-1",
    name: "Mattie Calamai",
    email: "mattie.calamai@example.com",
    age: 42,
    status: "Relationship",
    progress: 84,
    subRows: [
      {
        id: "usr-1-a",
        name: "Oscar Shimizu",
        email: "oscar.shimizu@example.com",
        age: 28,
        status: "Single",
        progress: 62,
      },
      {
        id: "usr-1-b",
        name: "Hunter Giachi",
        email: "hunter.giachi@example.com",
        age: 34,
        status: "Complicated",
        progress: 45,
      },
      {
        id: "usr-1-c",
        name: "Lola Johnson",
        email: "lola.j@example.com",
        age: 29,
        status: "Relationship",
        progress: 91,
      },
      {
        id: "usr-1-d",
        name: "Rose Mengoni",
        email: "rose.m@example.com",
        age: 31,
        status: "Single",
        progress: 78,
      },
    ],
  },
  {
    id: "usr-2",
    name: "Minerva Munoz",
    email: "ejealjo@gmail.com",
    age: 53,
    status: "Relationship",
    progress: 51,
  },
  {
    id: "usr-3",
    name: "Edward Baroncini",
    email: "edward.b@example.com",
    age: 38,
    status: "Single",
    progress: 73,
    subRows: [
      {
        id: "usr-3-a",
        name: "Elena Rostova",
        email: "elena.r@example.com",
        age: 26,
        status: "Relationship",
        progress: 88,
      },
      {
        id: "usr-3-b",
        name: "Marcus Vance",
        email: "marcus.v@example.com",
        age: 41,
        status: "Single",
        progress: 67,
      },
    ],
  },
  {
    id: "usr-4",
    name: "Sophia Martinez",
    email: "sophia.m@example.com",
    age: 29,
    status: "Complicated",
    progress: 39,
  },
  {
    id: "usr-5",
    name: "Alexander Wright",
    email: "a.wright@example.com",
    age: 45,
    status: "Relationship",
    progress: 95,
  },
]

function renderStatusBadge(status: UserRecord["status"]) {
  switch (status) {
    case "Relationship":
      return (
        <Badge className="border-transparent bg-green-500/10 text-green-500">
          Relationship
        </Badge>
      )
    case "Single":
      return (
        <Badge className="border-transparent bg-primary/10 text-primary">
          Single
        </Badge>
      )
    case "Complicated":
      return (
        <Badge className="border-transparent bg-yellow-500/10 text-yellow-500">
          Complicated
        </Badge>
      )
    default:
      return <Badge variant="outline">{status}</Badge>
  }
}

export const columns: ColumnDef<UserRecord>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() || table.getIsSomePageRowsSelected()
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="-ml-3"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Name
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const canExpand = Boolean(row.original.subRows?.length)

      return (
        <div
          className="flex items-center gap-2"
          style={{ paddingLeft: `${row.depth * 1.5}rem` }}
        >
          {canExpand ? (
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 shrink-0 p-0 text-muted-foreground hover:bg-muted hover:text-foreground"
              onClick={row.getToggleExpandedHandler()}
              title={row.getIsExpanded() ? "Collapse row" : "Expand row"}
            >
              {row.getIsExpanded() ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </Button>
          ) : (
            <span className="w-6 shrink-0" />
          )}
          <Avatar className="h-7 w-7 after:border-none">
            <AvatarFallback className="bg-primary/10 text-xs font-semibold text-primary">
              {row
                .getValue<string>("name")
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <span className="font-medium text-foreground">
            {row.getValue("name")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => (
      <div className="text-muted-foreground lowercase">
        {row.getValue("email")}
      </div>
    ),
  },
  {
    accessorKey: "age",
    header: () => <div className="text-center">Age</div>,
    cell: ({ row }) => (
      <div className="text-center font-mono">{row.getValue("age")}</div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => renderStatusBadge(row.getValue("status")),
  },
  {
    accessorKey: "progress",
    header: "Profile Progress",
    cell: ({ row }) => {
      const progress = row.getValue<number>("progress")
      return (
        <div className="flex min-w-[130px] items-center gap-3">
          <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="w-8 text-right text-xs font-medium text-muted-foreground">
            {progress}%
          </span>
        </div>
      )
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => (
      <DropdownMenu>
        <DropdownMenuTrigger
          render={<Button variant="ghost" className="h-8 w-8 p-0" />}
        >
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="min-w-50">
          <DropdownMenuGroup>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(row.original.email)}
            >
              Copy email address
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View full profile</DropdownMenuItem>
            <DropdownMenuItem>Edit user status</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
]

//  ------------------------------ | DATA TABLE - EXPANDABLE | ------------------------------  //

export default function DataTableExpandable() {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})
  const [expanded, setExpanded] = useState<ExpandedState>({
    "0": true, // pre-expand first row (Mattie Calamai) to show sub-rows immediately
  })

  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onExpandedChange: setExpanded,
    getSubRows: (row) => row.subRows,
    getRowCanExpand: (row) => Boolean(row.original.subRows?.length),
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      expanded,
    },
  })

  return (
    <div className="w-full">
      <div className="flex w-full flex-wrap items-center justify-between gap-2 py-4">
        <Input
          placeholder="Filter names..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-50"
        />
        <div className="ml-auto flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.toggleAllRowsExpanded()}
          >
            {table.getIsAllRowsExpanded() ? "Collapse All" : "Expand All"}
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger
              render={<Button variant="outline" size="sm" />}
            >
              Columns
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuGroup>
                <DropdownMenuLabel>View Columns</DropdownMenuLabel>
                {table
                  .getAllColumns()
                  .filter((column) => column.getCanHide())
                  .map((column) => {
                    return (
                      <DropdownMenuCheckboxItem
                        key={column.id}
                        className="capitalize"
                        checked={column.getIsVisible()}
                        onCheckedChange={(value) =>
                          column.toggleVisibility(!!value)
                        }
                      >
                        {column.id}
                      </DropdownMenuCheckboxItem>
                    )
                  })}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="overflow-hidden rounded-md border border-border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className={row.depth > 0 ? "bg-muted/30" : undefined}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex flex-wrap items-center justify-end gap-2 space-x-2 py-4">
        <div className="flex-1 text-sm font-medium text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
