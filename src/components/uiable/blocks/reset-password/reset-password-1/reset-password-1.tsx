// shadcn
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

//  ------------------------------ | RESET PASSWORD 1 | ------------------------------  //

export default function ResetPassword1() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[url('https://cdn.uiable.com/authentication/img-auth-bg.jpg')] bg-cover bg-center px-4 py-10 dark:bg-[url('https://cdn.uiable.com/authentication/img-auth-bg-dark.jpg')]">
      <Card className="w-full max-w-md shadow-none">
        <CardContent className="space-y-4 p-6 sm:p-10">
          <div className="mb-4">
            <h3 className="mb-2 text-xl font-semibold text-foreground">
              Reset Password
            </h3>
            <p className="text-sm text-muted-foreground">
              Please choose your new password
            </p>
          </div>

          <FieldGroup className="mt-4">
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input
                id="password"
                type="password"
                required
                placeholder="Password"
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="confirmPassword">
                Confirm Password
              </FieldLabel>
              <Input
                id="confirmPassword"
                type="password"
                required
                placeholder="Confirm Password"
              />
            </Field>

            <Button type="button" className="mt-2 w-full hover:scale-[1.02]">
              Reset Password
            </Button>
          </FieldGroup>
        </CardContent>
      </Card>
    </div>
  )
}
