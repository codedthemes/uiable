// shadcn
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

// assets
import { Paperclip, Plus } from "lucide-react"

//  ------------------------------ | WIDGETS 17 | ------------------------------  //

const tasks = [
  { label: "Horizontal Layout", dot: "bg-orange-400", attachments: 2 },
  { label: "Invoice Generator", dot: "bg-orange-400", attachments: 0 },
  { label: "Package Upgrades", dot: "bg-amber-600", attachments: 0 },
  { label: "Figma Auto Layout", dot: "bg-green-500", attachments: 0 },
]

export default function Widgets17() {
  return (
    <section className="w-full">
      <Card className="mb-0 flex w-full flex-col rounded-2xl border-border/60 shadow-sm">
        <CardHeader className="pb-2">
          <p className="text-base font-bold text-foreground">
            Project - Able Pro
          </p>
        </CardHeader>

        <CardContent className="flex flex-col gap-5">
          {/* progress block */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Release v1.2.0</span>
              <span className="font-semibold text-foreground">70%</span>
            </div>
            <Progress value={70} className="h-2 rounded-full" />
          </div>

          {/* task list */}
          <ul className="flex flex-col divide-y divide-border">
            {tasks.map((task) => (
              <li
                key={task.label}
                className="flex items-center justify-between py-3"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`size-2.5 shrink-0 rounded-full ${task.dot}`}
                  />
                  <span className="text-sm text-foreground">{task.label}</span>
                </div>
                {task.attachments > 0 && (
                  <span className="flex items-center gap-1 rounded-md border border-border px-2 py-0.5 text-xs text-muted-foreground">
                    <Paperclip className="size-3" />
                    {task.attachments}
                  </span>
                )}
              </li>
            ))}
          </ul>

          {/* add task button */}
          <Button className="w-full gap-2 rounded-full">
            <Plus className="size-4" />
            Add task
          </Button>
        </CardContent>
      </Card>
    </section>
  )
}
