// shadcn
import { Alert } from "@/components/ui/alert";

//  ------------------------------ | ALERT - LIGHT DARK | ------------------------------  //

export default function AlertLightDark() {
  return (
    <Alert className="px-5 py-3 mb-3 rounded-lg border grid-cols-1 border-dark-800/20 bg-dark-800/10 text-dark-800 dark:text-dark-300">
      A simple dark alert—check it out!
    </Alert>
  );
}
