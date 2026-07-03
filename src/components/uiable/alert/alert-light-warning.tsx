// shadcn
import { Alert } from "@/components/ui/alert";

//  ------------------------------ | ALERT - LIGHT WARNING | ------------------------------  //

export default function AlertLightWarning() {
  return (
    <Alert className="px-5 py-3 mb-3 rounded-lg border grid-cols-1 border-yellow-500/20 bg-yellow-500/10 text-yellow-700 dark:text-yellow-400">
      A simple warning alert—check it out!
    </Alert>
  );
}
