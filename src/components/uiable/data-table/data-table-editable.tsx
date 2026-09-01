"use client"

import { useState } from "react"

// shadcn
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

// third-party
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table"

// assets
import { ArrowUpDown, MoreHorizontal, Plus, Trash2 } from "lucide-react"

// types
export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

const initialData: Payment[] = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    email: "ken99@example.com",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    status: "success",
    email: "Abe45@example.com",
  },
  {
    id: "derv1ws0",
    amount: 837,
    status: "processing",
    email: "Monserrat44@example.com",
  },
  {
    id: "5kma53ae",
    amount: 874,
    status: "success",
    email: "Silas22@example.com",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "carmella@example.com",
  },
  {
    id: "6kma53ae",
    amount: 124,
    status: "success",
    email: "alfa@example.com",
  },
  {
    id: "7kma53ae",
    amount: 543,
    status: "processing",
    email: "beta@example.com",
  },
  {
    id: "8kma53ae",
    amount: 921,
    status: "success",
    email: "gamma@example.com",
  },
  {
    id: "9kma53ae",
    amount: 432,
    status: "failed",
    email: "delta@example.com",
  },
  {
    id: "0kma53ae",
    amount: 765,
    status: "success",
    email: "epsilon@example.com",
  },
]

function EditableEmailCell({
  getValue,
  row,
  column,
  table,
}: {
  getValue: () => unknown
  row: { index: number }
  column: { id: string }
  table: any
}) {
  const initialValue = getValue() as string
  const [value, setValue] = useState(initialValue)
  const [prevInitialValue, setPrevInitialValue] = useState(initialValue)

  if (initialValue !== prevInitialValue) {
    setPrevInitialValue(initialValue)
    setValue(initialValue)
  }

  const onBlur = () => {
    ;(table.options.meta as any)?.updateData(row.index, column.id, value)
  }

  return (
    <Input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={onBlur}
      className="h-8 w-full max-w-[240px] text-xs"
    />
  )
}

function EditableAmountCell({
  getValue,
  row,
  column,
  table,
}: {
  getValue: () => unknown
  row: { index: number }
  column: { id: string }
  table: any
}) {
  const initialValue = getValue() as number
  const [value, setValue] = useState<string>(initialValue.toString())
  const [prevInitialValue, setPrevInitialValue] = useState(initialValue)

  if (initialValue !== prevInitialValue) {
    setPrevInitialValue(initialValue)
    setValue(initialValue.toString())
  }

  const onBlur = () => {
    const parsed = parseFloat(value) || 0
    ;(table.options.meta as any)?.updateData(row.index, column.id, parsed)
  }

  return (
    <div className="flex justify-end">
      <Input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={onBlur}
        className="h-8 w-24 text-right text-xs font-medium"
      />
    </div>
  )
}

export const columns: ColumnDef<Payment>[] = [
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
    accessorKey: "status",
    header: "Status",
    cell: ({ row, table }) => {
      const status = row.getValue("status") as string
      return (
        <Select
          value={status}
          onValueChange={(value) => {
            ;(table.options.meta as any)?.updateData(row.index, "status", value)
          }}
        >
          <SelectTrigger className="h-8 w-32 text-xs capitalize">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="p-2">
            <SelectItem value="success">Success</SelectItem>
            <SelectItem value="processing">Processing</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="failed">Failed</SelectItem>
          </SelectContent>
        </Select>
      )
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: (props) => <EditableEmailCell {...props} />,
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount ($)</div>,
    cell: (props) => <EditableAmountCell {...props} />,
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row, table }) => {
      const payment = row.original

      return (
        <div className="flex items-center justify-end gap-1">
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 text-muted-foreground hover:text-destructive"
            onClick={() => {
              ;(table.options.meta as any)?.deleteRow(row.index)
            }}
            title="Delete row"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
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
                  onClick={() => navigator.clipboard.writeText(payment.id)}
                >
                  Copy payment ID
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>View customer</DropdownMenuItem>
                <DropdownMenuItem>View payment details</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )
    },
  },
]

//  ------------------------------ | DATA TABLE - EDITABLE | ------------------------------  //

export default function DataTableEditable() {
  const [data, setData] = useState<Payment[]>(initialData)
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})

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
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
    meta: {
      updateData: (rowIndex: number, columnId: string, value: unknown) => {
        setData((old) =>
          old.map((row, index) => {
            if (index === rowIndex) {
              return {
                ...old[rowIndex]!,
                [columnId]: value,
              }
            }
            return row
          })
        )
      },
      deleteRow: (rowIndex: number) => {
        setData((old) => old.filter((_, index) => index !== rowIndex))
      },
    },
  })

  const handleAddRow = () => {
    const newId = `new_${Math.random().toString(36).substring(2, 8)}`
    const newRow: Payment = {
      id: newId,
      amount: 100,
      status: "pending",
      email: "new.user@example.com",
    }
    setData((old) => [newRow, ...old])
  }

  return (
    <div className="w-full">
      <div className="flex w-full flex-wrap items-center justify-between gap-2 py-4">
        <Input
          placeholder="Filter emails..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-50"
        />
        <div className="ml-auto flex items-center gap-2">
          <Button onClick={handleAddRow} className="gap-1.5">
            <Plus className="h-4 w-4" />
            Add Row
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger render={<Button variant="outline" />}>
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
        <div className="flex-1 font-medium text-muted-foreground">
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
