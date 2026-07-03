// shadcn
import { Alert } from "@/components/ui/alert";

//  ------------------------------ | ALERT - LIGHT SUCCESS | ------------------------------  //

export default function AlertLightSuccess() {
  return (
    <Alert className="px-5 py-3 mb-3 rounded-lg border grid-cols-1 border-green-600/20 bg-green-600/10 text-green-700 dark:text-green-400">
      A simple success alert—check it out!
    </Alert>
  );
}
