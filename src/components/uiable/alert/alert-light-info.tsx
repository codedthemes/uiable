// shadcn
import { Alert } from "@/components/ui/alert";

//  ------------------------------ | ALERT - LIGHT INFO | ------------------------------  //

export default function AlertLightInfo() {
  return (
    <Alert className="px-5 py-3 mb-3 rounded-lg border grid-cols-1 border-cyan-500/20 bg-cyan-500/10 text-cyan-700 dark:text-cyan-400">
      A simple info alert—check it out!
    </Alert>
  );
}
