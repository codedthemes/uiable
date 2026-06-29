// shadcn
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

// constants
const SHEET_SIDES = ["top", "right", "bottom", "left"] as const

//  ------------------------------ | SHEET - SIDE | ------------------------------  //

export default function SheetSide() {
  return (
    <div className="flex flex-wrap gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger render={<Button className="capitalize" />}>
            {side}
          </SheetTrigger>
          <SheetContent
            side={side}
            className="gap-0 data-[side=bottom]:max-h-[40vh] data-[side=top]:max-h-[40vh]"
          >
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you're done.
              </SheetDescription>
            </SheetHeader>
            <div className="no-scrollbar overflow-y-auto px-5">
              {Array.from({ length: 10 }).map((_, index) => (
                <p key={index} className="mb-2 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              ))}
            </div>
            <SheetFooter>
              <div className="grid grid-cols-2 gap-2">
                <Button type="submit">Save changes</Button>
                <SheetClose render={<Button variant="outline" />}>
                  Cancel
                </SheetClose>
              </div>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
