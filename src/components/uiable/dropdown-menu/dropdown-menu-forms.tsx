// shadcn
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// assets
import { ChevronDown } from "lucide-react";

//  ------------------------------ | DROPDOWN MENU - FORMS | ------------------------------  //

export default function DropdownMenuForms() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant="default"
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            Forms <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        }
      />
      <DropdownMenuContent align="start" className="w-64 p-6">
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" placeholder="email@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Password" />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember" className="text-xs font-normal">
              Remember me
            </Label>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Button type="submit">Sign in</Button>
            <Button type="reset" variant="secondary">
              Reset
            </Button>
          </div>
        </form>
        <DropdownMenuSeparator className="my-4" />
        <DropdownMenuItem>
          New here? <a href="#">Sign up</a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a href="#">Forgot password?</a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
