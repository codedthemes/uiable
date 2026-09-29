// shadcn
import { Button } from "@/components/ui/button"
import {
  Timeline,
  TimelineBody,
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
import { AlertCircle, Check, Clock, RotateCw } from "lucide-react"

//  ------------------------------ | TIMELINE - STATUS | ------------------------------  //

export function TimelineStatus() {
  return (
    <div className="w-full max-w-lg rounded-xl border bg-card p-4 sm:p-5">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-2 border-b pb-3">
        <div>
          <h3 className="text-sm font-semibold">Deployment #4829</h3>
          <p className="text-xs text-muted-foreground">
            Production cluster &middot; us-east-1
          </p>
        </div>
        <div className="flex items-center gap-1.5 text-xs font-medium text-yellow-500">
          <AlertCircle className="size-4" />
          Attention Needed
        </div>
      </div>

      <Timeline size="default">
        {/* Step 1 */}
        <TimelineItem status="completed">
          <TimelineSeparator>
            <TimelineIndicator variant="completed">
              <Check className="size-3.5" />
            </TimelineIndicator>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <TimelineHeader>
              <TimelineTitle>Build & Containerization</TimelineTitle>
              <TimelineTime>10:14 AM</TimelineTime>
            </TimelineHeader>
            <TimelineDescription>
              Docker image{" "}
              <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
                uiable:v1.5.0
              </code>{" "}
              built successfully in 42s.
            </TimelineDescription>
          </TimelineContent>
        </TimelineItem>

        {/* Step 2 */}
        <TimelineItem status="completed">
          <TimelineSeparator>
            <TimelineIndicator variant="completed">
              <Check className="size-3.5" />
            </TimelineIndicator>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <TimelineHeader>
              <TimelineTitle>End-to-End Test Suite</TimelineTitle>
              <TimelineTime>10:15 AM</TimelineTime>
            </TimelineHeader>
            <TimelineDescription>
              128 integration tests passed across chromium and webkit runners.
            </TimelineDescription>
          </TimelineContent>
        </TimelineItem>

        {/* Step 3: Warning / Error */}
        <TimelineItem status="warning">
          <TimelineSeparator>
            <TimelineIndicator variant="warning">
              <AlertCircle className="size-3.5" />
            </TimelineIndicator>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <TimelineHeader>
              <TimelineTitle className="text-yellow-500">
                Database Migration Lock
              </TimelineTitle>
              <TimelineTime>10:17 AM</TimelineTime>
            </TimelineHeader>
            <TimelineDescription>
              Migration timed out waiting for advisory lock on{" "}
              <code className="font-mono text-xs">users_v2</code> table.
            </TimelineDescription>
            <TimelineBody>
              <div className="flex gap-2">
                <Button size="xs" variant="outline" className="gap-1">
                  <RotateCw className="size-3" />
                  Retry Step
                </Button>
                <Button size="xs" variant="ghost">
                  View Logs
                </Button>
              </div>
            </TimelineBody>
          </TimelineContent>
        </TimelineItem>

        {/* Step 4 */}
        <TimelineItem status="pending">
          <TimelineSeparator>
            <TimelineIndicator variant="outline">
              <Clock className="size-3.5" />
            </TimelineIndicator>
          </TimelineSeparator>
          <TimelineContent>
            <TimelineHeader>
              <TimelineTitle className="text-muted-foreground">
                Traffic Switchover & Healthcheck
              </TimelineTitle>
              <TimelineTime>Pending</TimelineTime>
            </TimelineHeader>
            <TimelineDescription>
              Gradual canary rollout to 100% edge traffic upon migration
              completion.
            </TimelineDescription>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  )
}
