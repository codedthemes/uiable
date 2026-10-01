// shadcn
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

// project-imports
import Logo from "@/components/uiable/layout/shared/logo"

interface SocialProvider {
  name: string
  src: string
}

const SOCIAL_PROVIDERS: SocialProvider[] = [
  {
    name: "Facebook",
    src: "https://cdn.uiable.com/authentication/facebook.svg",
  },
  {
    name: "Twitter",
    src: "https://cdn.uiable.com/authentication/twitter.svg",
  },
  {
    name: "Google",
    src: "https://cdn.uiable.com/authentication/google.svg",
  },
]

//  ------------------------------ | LOGIN 2 | ------------------------------  //

export default function Login2() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[url('https://cdn.uiable.com/authentication/img-auth-bg.jpg')] bg-cover bg-center px-4 py-10 dark:bg-[url('https://cdn.uiable.com/authentication/img-auth-bg-dark.jpg')]">
      <div className="w-full max-w-120 rounded-lg border border-border bg-card p-6 shadow-sm sm:p-8 md:p-10">
        <div className="flex flex-col gap-6">
          <Logo className="justify-center" link={false} />

          <div className="grid gap-2">
            {SOCIAL_PROVIDERS.map((provider) => (
              <Button
                key={provider.name}
                variant="outline"
                type="button"
                className="justify-center gap-2 text-slate-500 hover:border-blue-500 dark:border-border dark:text-slate-400 dark:hover:border-blue-400"
              >
                <img
                  src={provider.src}
                  alt={provider.name}
                  className="size-4"
                />
                Sign In with {provider.name}
              </Button>
            ))}
          </div>

          <div className="relative flex items-center">
            <Separator className="flex-1" />
            <span className="bg-card px-5 text-muted-foreground">OR</span>
            <Separator className="flex-1" />
          </div>

          <div className="flex items-baseline justify-between">
            <h2 className="text-2xl font-semibold">Login</h2>
            <a href="#" className="text-primary hover:underline">
              Don&apos;t have an account?
            </a>
          </div>

          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="email-login">Email Address</FieldLabel>
              <Input
                id="email-login"
                type="email"
                required
                placeholder="Enter email address"
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="password-login">Password</FieldLabel>
              <Input
                id="password-login"
                type="password"
                required
                placeholder="Enter password"
              />
            </Field>

            <div className="-mt-1 flex items-center justify-between">
              <label
                htmlFor="keepSignedIn"
                className="flex cursor-pointer items-center gap-2"
              >
                <Checkbox id="keepSignedIn" defaultChecked />
                <span className="text-sm font-medium">Keep me sign in</span>
              </label>
              <a
                href="#"
                className="text-sm font-medium text-foreground hover:text-primary"
              >
                Forgot Password?
              </a>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full hover:scale-[1.02]"
            >
              Login
            </Button>
          </FieldGroup>
        </div>
      </div>
    </div>
  )
}
