// shadcn

// assets
import { MoreVertical, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

// project
import TaskListItem from "./task-list-item"

//  ------------------------------ | BLOCK - PROJECT TASKS CARD | ------------------------------  //

export default function ProjectTasksCard() {
  return (
    <Card>
      <CardHeader className="pb-4">
        <CardTitle className="text-md flex items-center justify-between font-bold text-muted-foreground">
          Project - UIAble
          <MoreVertical className="h-4 w-4" />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-medium">Release v1.2.0</span>
            <span className="text-sm font-bold text-primary">70%</span>
          </div>
          <Progress value={70} className="h-2" />
        </div>

        <div className="space-y-2">
          <TaskListItem
            title="Horizontal Layout"
            dotColor="bg-yellow-500"
            badgeCount={2}
          />
          <TaskListItem title="Invoice Generator" dotColor="bg-yellow-500" />
          <TaskListItem title="Figma Auto Layout" dotColor="bg-green-500" />
        </div>

        <Button className="w-full">
          <Plus className="mr-2 h-4 w-4" /> Add task
        </Button>
      </CardContent>
    </Card>
  )
}
