// shadcn
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

// assets
import {
  ArrowDown2,
  TextBold,
  TextItalic,
  TextUnderline,
} from "iconsax-reactjs"

//  ------------------------------ | BUTTON GROUP - TOOLBAR | ------------------------------  //

export function ButtonGroupToolbar() {
  return (
    <ButtonGroup>
      <DropdownMenu>
        <Tooltip>
          <TooltipTrigger
            render={
              <DropdownMenuTrigger
                className="flex items-center gap-1"
                render={
                  <Button
                    variant="outline"
                    className="py-1 transition-colors hover:bg-gray-200 dark:border-border/50"
                  />
                }
              >
                Inter <ArrowDown2 />
              </DropdownMenuTrigger>
            }
          />
          <TooltipContent>Font Family</TooltipContent>
        </Tooltip>
        <DropdownMenuContent align="end" className="min-w-54">
          <DropdownMenuGroup>
            <DropdownMenuItem>Inter</DropdownMenuItem>
            <DropdownMenuItem>Poppins</DropdownMenuItem>
            <DropdownMenuItem>Public sans</DropdownMenuItem>
            <DropdownMenuItem>Roboto</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <Tooltip>
        <TooltipTrigger
          render={
            <Button
              variant="outline"
              size="icon-lg"
              className="transition-colors hover:bg-gray-200 dark:border-border/50"
            />
          }
        >
          <TextBold />
        </TooltipTrigger>
        <TooltipContent>Bold</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger
          render={
            <Button
              variant="outline"
              size="icon-lg"
              className="transition-colors hover:bg-gray-200 dark:border-border/50"
            />
          }
        >
          <TextItalic />
        </TooltipTrigger>
        <TooltipContent>Italic</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger
          render={
            <Button
              variant="outline"
              size="icon-lg"
              className="transition-colors hover:bg-gray-200 dark:border-border/50"
            />
          }
        >
          <TextUnderline />
        </TooltipTrigger>
        <TooltipContent>Underline</TooltipContent>
      </Tooltip>
    </ButtonGroup>
  )
}
