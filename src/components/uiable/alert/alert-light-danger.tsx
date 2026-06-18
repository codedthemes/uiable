// shadcn
import { Alert } from "@/components/ui/alert";

//  ------------------------------ | ALERT - LIGHT DANGER | ------------------------------  //

export default function AlertLightDanger() {
  return (
    <Alert className="px-5 py-3 mb-3 rounded-lg border grid-cols-1 border-red-500/20 bg-red-500/10 text-red-500">
      A simple danger alert—check it out!
    </Alert>
  );
}
