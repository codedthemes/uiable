// shadcn
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

// assets
import { AlertTriangleIcon } from "lucide-react";

//  ------------------------------ | ALERT - COLORS | ------------------------------  //

export default function AlertColors() {
  return (
    <Alert className="max-w-md border-yellow-200 bg-yellow-50 text-yellow-900 dark:border-yellow-900 dark:bg-yellow-950 dark:text-yellow-50">
      <AlertTriangleIcon />
      <AlertTitle>Your subscription will expire in 3 days.</AlertTitle>
      <AlertDescription>
        Renew now to avoid service interruption or upgrade to a paid plan to
        continue using the service.
      </AlertDescription>
    </Alert>
  );
}
