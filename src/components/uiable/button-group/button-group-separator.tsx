// shadcn
import { Button } from "@/components/ui/button"
import { ButtonGroup, ButtonGroupSeparator } from "@/components/ui/button-group"

//  ------------------------------ | BUTTON GROUP - SEPARATOR | ------------------------------  //

export default function ButtonGroupSeparatorDemo() {
  return (
    <ButtonGroup>
      <Button>Copy</Button>
      <ButtonGroupSeparator />
      <Button>Paste</Button>
    </ButtonGroup>
  )
}
