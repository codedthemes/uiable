// shadcn
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"

//  ------------------------------ | FIELD - ONE TIME PASSWORD FORM | ------------------------------  //

export function FieldOneTimePasswordForm() {
  return (
    <form className="w-full max-w-sm" onSubmit={(e) => e.preventDefault()}>
      <FieldSet>
        <FieldLegend className="flex w-full items-center justify-between">
          <h5>Verification Code</h5>
          <span className="text-xs font-medium text-muted-foreground">
            Expires in 5:00
          </span>
        </FieldLegend>
        <FieldDescription>
          Enter the 6-digit verification code sent to your authentication app or
          phone.
        </FieldDescription>
        <FieldGroup>
          <Field>
            <InputOTP maxLength={6} id="otp-verification" required>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
            <FieldDescription>
              Please do not share your verification code with anyone.
            </FieldDescription>
          </Field>
          <Field>
            <Button type="submit" className="w-full">
              Verify security code
            </Button>
            <div className="text-center text-xs text-muted-foreground">
              Didn&apos;t get the code?{" "}
              <a
                href="#"
                className="font-medium text-foreground underline underline-offset-4 transition-colors hover:text-primary"
              >
                Resend code
              </a>
            </div>
          </Field>
        </FieldGroup>
      </FieldSet>
    </form>
  )
}

export default FieldOneTimePasswordForm
