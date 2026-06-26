// shadcn
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"

//  ------------------------------ | NATIVE SELECT - DISABLED | ------------------------------  //

export function NativeSelectDisabled() {
  return (
    <NativeSelect disabled className="w-35 [&>select]:w-full">
      <NativeSelectOption value="">Disabled</NativeSelectOption>
      <NativeSelectOption value="apple">Apple</NativeSelectOption>
      <NativeSelectOption value="banana">Banana</NativeSelectOption>
      <NativeSelectOption value="blueberry">Blueberry</NativeSelectOption>
    </NativeSelect>
  )
}
