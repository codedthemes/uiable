// shadcn
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

// project-imports
import { cn } from "@/lib/utils"

// assets
import {
  ActivityIcon,
  AlertTriangleIcon,
  CheckCircle2Icon,
  ClockIcon,
  RotateCwIcon,
  TerminalIcon,
} from "lucide-react"

const services = [
  {
    id: "SVC-API",
    name: "Authentication API",
    environment: "Production",
    status: "Operational",
    statusColor: "bg-green-500",
    uptime: "99.99%",
    latency: "24ms",
    latencyColor: "text-green-500",
    region: "us-east-1",
  },
  {
    id: "SVC-DB",
    name: "PostgreSQL Cluster",
    environment: "Production",
    status: "Operational",
    statusColor: "bg-green-500",
    uptime: "99.95%",
    latency: "42ms",
    latencyColor: "text-green-500",
    region: "us-east-1",
  },
  {
    id: "SVC-CDN",
    name: "Media Storage CDN",
    environment: "Production",
    status: "Degraded",
    statusColor: "bg-yellow-500",
    uptime: "98.40%",
    latency: "184ms",
    latencyColor: "text-yellow-500",
    region: "eu-west-1",
  },
  {
    id: "SVC-PAY",
    name: "Payment Gateway Webhook",
    environment: "Staging",
    status: "Operational",
    statusColor: "bg-green-500",
    uptime: "99.90%",
    latency: "38ms",
    latencyColor: "text-green-500",
    region: "us-west-2",
  },
  {
    id: "SVC-CRON",
    name: "Analytics Worker Node",
    environment: "Preview",
    status: "Maintenance",
    statusColor: "bg-primary",
    uptime: "95.10%",
    latency: "-",
    latencyColor: "text-muted-foreground",
    region: "ap-southeast-1",
  },
]

//  ------------------------------ | TABLE - STATUS | ------------------------------  //

export function TableStatus() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Service</TableHead>
          <TableHead>Environment</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Uptime</TableHead>
          <TableHead>Latency</TableHead>
          <TableHead>Region</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {services.map((service) => (
          <TableRow key={service.id}>
            <TableCell>
              <div className="flex items-center gap-2.5">
                <ActivityIcon className="size-4 text-muted-foreground" />
                <h6 className="font-semibold text-foreground">
                  {service.name}
                </h6>
              </div>
            </TableCell>
            <TableCell>
              <Badge
                variant={
                  service.environment === "Production" ? "default" : "secondary"
                }
                className="font-normal"
              >
                {service.environment}
              </Badge>
            </TableCell>
            <TableCell>
              <div className="inline-flex items-center gap-2 rounded-lg border border-border px-2.5 py-1 text-xs font-medium">
                <span
                  className={`size-2 rounded-full ${service.statusColor}`}
                />
                <span>{service.status}</span>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-1.5 text-sm">
                {service.status === "Operational" ? (
                  <CheckCircle2Icon className="size-4 text-green-500" />
                ) : service.status === "Degraded" ? (
                  <AlertTriangleIcon className="size-4 text-yellow-500" />
                ) : (
                  <ClockIcon className="size-4 text-primary" />
                )}
                <span>{service.uptime}</span>
              </div>
            </TableCell>
            <TableCell className={cn("font-mono", service.latencyColor)}>
              {service.latency}
            </TableCell>
            <TableCell className="font-mono text-xs text-muted-foreground">
              {service.region}
            </TableCell>
            <TableCell className="text-right">
              <div className="flex items-center justify-end gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-8 text-muted-foreground hover:text-foreground"
                  title="Restart Service"
                >
                  <RotateCwIcon className="size-3.5" />
                  <span className="sr-only">Restart</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-8 text-muted-foreground hover:text-foreground"
                  title="View Logs"
                >
                  <TerminalIcon className="size-3.5" />
                  <span className="sr-only">Logs</span>
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
