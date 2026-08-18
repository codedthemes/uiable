// shadcn
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

// assets
import { MoreHorizontalIcon, ShieldCheckIcon, UserIcon } from "lucide-react"

const users = [
  {
    id: "USR-001",
    name: "Elena Rostova",
    email: "elena.r@uiable.com",
    avatar: "https://cdn.uiable.com/user/avatar-1.jpg",
    role: "Admin",
    roleVariant: "default" as const,
    status: "Active",
    lastActive: "Just now",
  },
  {
    id: "USR-002",
    name: "Marcus Sterling",
    email: "m.sterling@uiable.com",
    avatar: "https://cdn.uiable.com/user/avatar-2.jpg",
    role: "Developer",
    roleVariant: "secondary" as const,
    status: "Active",
    lastActive: "12 mins ago",
  },
  {
    id: "USR-003",
    name: "Aisha Patel",
    email: "aisha.p@uiable.com",
    avatar: "https://cdn.uiable.com/user/avatar-3.jpg",
    role: "Designer",
    roleVariant: "secondary" as const,
    status: "Away",
    lastActive: "2 hours ago",
  },
  {
    id: "USR-004",
    name: "Thomas Wright",
    email: "t.wright@uiable.com",
    avatar: "https://cdn.uiable.com/user/avatar-4.jpg",
    role: "Viewer",
    roleVariant: "outline" as const,
    status: "Offline",
    lastActive: "Yesterday",
  },
  {
    id: "USR-005",
    name: "Sophia Chen",
    email: "sophia.c@uiable.com",
    avatar: "https://cdn.uiable.com/user/avatar-5.jpg",
    role: "Developer",
    roleVariant: "secondary" as const,
    status: "Active",
    lastActive: "3 mins ago",
  },
]

//  ------------------------------ | TABLE - USERS | ------------------------------  //

export function TableUsers() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>User</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Last Active</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>
              <div className="flex items-center gap-3">
                <Avatar size="default">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>
                    {user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="font-semibold text-foreground">
                    {user.name}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {user.email}
                  </span>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <Badge variant={user.roleVariant} className="gap-1 font-normal">
                {user.role === "Admin" ? (
                  <ShieldCheckIcon className="size-3" />
                ) : (
                  <UserIcon className="size-3" />
                )}
                {user.role}
              </Badge>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <span
                  className={`size-2 rounded-full ${
                    user.status === "Active"
                      ? "bg-green-500"
                      : user.status === "Away"
                        ? "bg-yellow-500"
                        : "bg-slate-400"
                  }`}
                />
                <span className="text-sm font-medium">{user.status}</span>
              </div>
            </TableCell>
            <TableCell className="text-muted-foreground">
              {user.lastActive}
            </TableCell>
            <TableCell className="text-right">
              <DropdownMenu>
                <DropdownMenuTrigger
                  render={
                    <Button variant="ghost" size="icon" className="size-8" />
                  }
                >
                  <MoreHorizontalIcon />
                  <span className="sr-only">Open menu</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>View Profile</DropdownMenuItem>
                  <DropdownMenuItem>Edit Permissions</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem variant="destructive">
                    Remove User
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
