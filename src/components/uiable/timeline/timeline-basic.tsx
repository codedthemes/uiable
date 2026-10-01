// shadcn
import { Badge } from "@/components/ui/badge"
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

//  ------------------------------ | TIMELINE - BASIC | ------------------------------  //

export function TimelineBasic() {
  return (
    <div className="w-full max-w-md p-2">
      <Timeline>
        <TimelineItem status="completed">
          <TimelineSeparator>
            <TimelineIndicator variant="solid" size="sm" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <TimelineHeader>
              <TimelineTitle>Project Initialized</TimelineTitle>
              <TimelineTime>2 hours ago</TimelineTime>
            </TimelineHeader>
            <TimelineDescription>
              Created repository from Next.js 16 template with Base UI &
              Tailwind CSS.
            </TimelineDescription>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem status="completed">
          <TimelineSeparator>
            <TimelineIndicator variant="solid" size="sm" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <TimelineHeader>
              <TimelineTitle>Design System Configured</TimelineTitle>
              <TimelineTime>45 mins ago</TimelineTime>
            </TimelineHeader>
            <TimelineDescription>
              Imported modern color tokens, dark mode palette, and typography
              scales.
            </TimelineDescription>
            <TimelineBody>
              <Badge variant="secondary" className="text-xs">
                v1.2.0-rc
              </Badge>
            </TimelineBody>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem status="in-progress">
          <TimelineSeparator>
            <TimelineIndicator variant="in-progress" size="sm" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <TimelineHeader>
              <TimelineTitle>Building Component Library</TimelineTitle>
              <TimelineTime>Just now</TimelineTime>
            </TimelineHeader>
            <TimelineDescription>
              Compiling Timeline and Chain-of-Thought primitives with test
              coverage.
            </TimelineDescription>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem status="pending">
          <TimelineSeparator>
            <TimelineIndicator variant="outline" size="sm" />
          </TimelineSeparator>
          <TimelineContent>
            <TimelineHeader>
              <TimelineTitle>Production Release</TimelineTitle>
              <TimelineTime>Upcoming</TimelineTime>
            </TimelineHeader>
            <TimelineDescription>
              Deployment to edge CDN and automated performance lighthouse audit.
            </TimelineDescription>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  )
}
