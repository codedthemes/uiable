// shadcn
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"

//  ------------------------------ | NATIVE SELECT - INVALID | ------------------------------  //

export function NativeSelectInvalid() {
  return (
    <NativeSelect aria-invalid="true" className="w-35 [&>select]:w-full">
      <NativeSelectOption value="">Error state</NativeSelectOption>
      <NativeSelectOption value="apple">Apple</NativeSelectOption>
      <NativeSelectOption value="banana">Banana</NativeSelectOption>
      <NativeSelectOption value="blueberry">Blueberry</NativeSelectOption>
    </NativeSelect>
  )
}
