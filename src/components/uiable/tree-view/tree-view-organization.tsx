"use client"

import { useState } from "react"

// shadcn
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  TreeView,
  TreeItem,
  TreeItemRow,
  TreeItemToggle,
  TreeItemIcon,
  TreeItemLabel,
  TreeItemBadge,
  TreeItemActions,
  TreeItemContent,
} from "@/components/ui/tree-view"

// assets
import { Building2, Mail, MoreHorizontal, Users } from "lucide-react"

interface Member {
  id: string
  name: string
  role: string
  initials: string
  status: "online" | "busy" | "away"
  color: string
}

interface Department {
  id: string
  name: string
  lead: string
  count: number
  members: Member[]
}

const ORG_DATA: Department[] = [
  {
    id: "eng",
    name: "Engineering",
    lead: "Sarah Connor (VP Eng)",
    count: 18,
    members: [
      {
        id: "sarah",
        name: "Sarah Connor",
        role: "VP of Engineering",
        initials: "SC",
        status: "online",
        color: "bg-cyan-500",
      },
      {
        id: "alex",
        name: "Alex Rivera",
        role: "Staff Frontend Architect",
        initials: "AR",
        status: "online",
        color: "bg-primary",
      },
      {
        id: "maya",
        name: "Maya Patel",
        role: "Senior AI Systems Engineer",
        initials: "MP",
        status: "busy",
        color: "bg-slate-500",
      },
    ],
  },
  {
    id: "product",
    name: "Product & Design",
    lead: "Marcus Vance (Head of Product)",
    count: 8,
    members: [
      {
        id: "marcus",
        name: "Marcus Vance",
        role: "Head of Product",
        initials: "MV",
        status: "away",
        color: "bg-green-500",
      },
      {
        id: "elena",
        name: "Elena Rostova",
        role: "Lead UI/UX Designer",
        initials: "ER",
        status: "online",
        color: "bg-red-500",
      },
    ],
  },
  {
    id: "growth",
    name: "Growth & Marketing",
    lead: "David Kim (Director)",
    count: 6,
    members: [
      {
        id: "david",
        name: "David Kim",
        role: "Director of Growth",
        initials: "DK",
        status: "online",
        color: "bg-yellow-500",
      },
    ],
  },
]

//  ------------------------------ | TREE VIEW - ORGANIZATION | ------------------------------  //

export default function TreeViewOrganization() {
  const [selected, setSelected] = useState<string | string[]>("alex")
  const [expanded, setExpanded] = useState<string[]>(["eng", "product"])

  return (
    <Card className="w-full max-w-lg">
      <CardHeader className="p-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="space-y-1">
            <CardTitle className="flex items-center gap-2 text-base">
              <Building2 className="size-4 text-primary" /> Company Hierarchy
            </CardTitle>
            <CardDescription>
              Department structure and team member roster.
            </CardDescription>
          </div>
          <Badge variant="outline" className="text-xs">
            32 Members
          </Badge>
        </div>
      </CardHeader>

      <CardContent>
        <TreeView
          value={selected}
          onValueChange={setSelected}
          expandedValues={expanded}
          onExpandedChange={setExpanded}
          showGuideLines
          guideLineStyle="solid"
          className="gap-1 rounded-lg bg-background/50 p-2"
        >
          {ORG_DATA.map((dept) => (
            <TreeItem key={dept.id} value={dept.id} hasChildren level={0}>
              <TreeItemRow activeStyle="subtle">
                <TreeItemToggle />
                <TreeItemIcon>
                  <Users className="size-4 text-primary" />
                </TreeItemIcon>
                <TreeItemLabel className="font-medium text-foreground">
                  {dept.name}
                </TreeItemLabel>
                <TreeItemBadge className="bg-primary/10 font-medium text-primary">
                  {dept.count} members
                </TreeItemBadge>
              </TreeItemRow>

              <TreeItemContent>
                {dept.members.map((member) => {
                  const statusColor =
                    member.status === "online"
                      ? "bg-green-500"
                      : member.status === "busy"
                        ? "bg-red-500"
                        : "bg-yellow-500"

                  return (
                    <TreeItem key={member.id} value={member.id} level={1}>
                      <TreeItemRow activeStyle="indicator" className="py-1.5">
                        <TreeItemToggle />
                        <div className="relative shrink-0">
                          <Avatar className="size-7 text-[10px]">
                            <AvatarFallback
                              className={`${member.color} font-medium text-white`}
                            >
                              {member.initials}
                            </AvatarFallback>
                          </Avatar>
                          <span
                            className={`absolute right-0 -bottom-0.5 size-2 rounded-full border-2 border-background ${statusColor}`}
                          />
                        </div>

                        <div className="ml-1.5 flex flex-1 flex-col truncate text-left">
                          <h6 className="mb-1 text-xs leading-none font-medium text-foreground">
                            {member.name}
                          </h6>
                          <span className="truncate text-[11px] leading-tight text-muted-foreground">
                            {member.role}
                          </span>
                        </div>

                        <TreeItemActions>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="size-6 text-muted-foreground hover:text-foreground"
                          >
                            <Mail className="size-3" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="size-6 text-muted-foreground hover:text-foreground"
                          >
                            <MoreHorizontal className="size-3" />
                          </Button>
                        </TreeItemActions>
                      </TreeItemRow>
                    </TreeItem>
                  )
                })}
              </TreeItemContent>
            </TreeItem>
          ))}
        </TreeView>
      </CardContent>
    </Card>
  )
}
