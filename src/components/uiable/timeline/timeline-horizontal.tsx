// shadcn
import { Badge } from "@/components/ui/badge"
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDescription,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTime,
  TimelineTitle,
} from "@/components/ui/timeline"

// assets
import { Check, Clock, Flag, Milestone, Sparkles } from "lucide-react"

//  ------------------------------ | TIMELINE - HORIZONTAL | ------------------------------  //

export function TimelineHorizontal() {
  return (
    <div className="w-full max-w-2xl rounded-lg border bg-card/60 p-5">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-2 border-b pb-4">
        <div>
          <h3 className="text-sm font-semibold">Product Roadmap 2026</h3>
          <p className="text-xs text-muted-foreground">
            Strategic release milestones
          </p>
        </div>
        <Badge variant="outline" className="gap-1 text-xs font-normal">
          <Milestone className="size-3 text-primary" />
          Q1 - Q4 Roadmap
        </Badge>
      </div>

      <div className="w-full overflow-x-auto pt-2 pb-2">
        <Timeline
          orientation="horizontal"
          size="default"
          className="min-w-[520px]"
        >
          {/* Q1 */}
          <TimelineItem status="completed">
            <TimelineSeparator>
              <TimelineIndicator variant="completed">
                <Check className="size-3.5" />
              </TimelineIndicator>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <TimelineHeader>
                <TimelineTitle className="text-xs font-semibold">
                  Q1: Foundation
                </TimelineTitle>
                <TimelineTime>Done</TimelineTime>
              </TimelineHeader>
              <TimelineDescription className="text-xs">
                Tailwind CSS v4 migration & 60+ shadcn base primitives.
              </TimelineDescription>
            </TimelineContent>
          </TimelineItem>

          {/* Q2 */}
          <TimelineItem status="in-progress">
            <TimelineSeparator>
              <TimelineIndicator variant="in-progress">
                <Sparkles className="size-3.5" />
              </TimelineIndicator>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <TimelineHeader>
                <TimelineTitle className="text-xs font-semibold text-primary">
                  Q2: AI Primitives
                </TimelineTitle>
                <TimelineTime>In Progress</TimelineTime>
              </TimelineHeader>
              <TimelineDescription className="text-xs">
                Chain-of-Thought, timeline, prompt inputs, and stream widgets.
              </TimelineDescription>
            </TimelineContent>
          </TimelineItem>

          {/* Q3 */}
          <TimelineItem status="pending">
            <TimelineSeparator>
              <TimelineIndicator variant="outline">
                <Clock className="size-3.5" />
              </TimelineIndicator>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <TimelineHeader>
                <TimelineTitle className="text-xs font-semibold text-muted-foreground">
                  Q3: Visual Canvas
                </TimelineTitle>
                <TimelineTime>Planned</TimelineTime>
              </TimelineHeader>
              <TimelineDescription className="text-xs">
                Workflow canvas, edge connectors, and node layout editor.
              </TimelineDescription>
            </TimelineContent>
          </TimelineItem>

          {/* Q4 */}
          <TimelineItem status="pending">
            <TimelineSeparator>
              <TimelineIndicator variant="outline">
                <Flag className="size-3.5" />
              </TimelineIndicator>
            </TimelineSeparator>
            <TimelineContent>
              <TimelineHeader>
                <TimelineTitle className="text-xs font-semibold text-muted-foreground">
                  Q4: 2.0 Global
                </TimelineTitle>
                <TimelineTime>Planned</TimelineTime>
              </TimelineHeader>
              <TimelineDescription className="text-xs">
                Self-hosted private registry and enterprise team sharing.
              </TimelineDescription>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  )
}
