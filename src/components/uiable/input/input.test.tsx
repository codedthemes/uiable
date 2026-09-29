// third-party
import { render, screen, within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { axe } from "jest-axe"
import { describe, expect, it } from "vitest"

// project-imports
import { InputBadge } from "./input-badge"
import { InputBasic } from "./input-basic"
import { InputButtonGroup } from "./input-button-group"
import { InputDisabled } from "./input-disabled"
import { InputField } from "./input-field"
import { InputFieldgroup } from "./input-fieldgroup"
import { InputFile } from "./input-file"
import { InputForm } from "./input-form"
import { InputGrid } from "./input-grid"
import { InputInline } from "./input-inline"
import { InputInputGroup } from "./input-input-group"
import { InputInvalid } from "./input-invalid"
import { InputRange } from "./input-range"
import { InputRequired } from "./input-required"
import { InputSelect } from "./input-select"
import { InputValidation } from "./input-validation"

/**
 * Deep UI + accessibility suite for the `input` category (16 variants).
 *
 * Coverage dimensions (see project-docs/A11Y_TESTING_CHECKLIST.md):
 *   1. Automated  – axe-core scan per variant
 *   2. Labelling  – visible <label htmlFor> is programmatically associated
 *   3. States     – required / aria-invalid / disabled are exposed to AT
 *   4. Types      – the correct `type` reaches the native <input>
 *   5. Editing    – inputs accept keyboard text entry
 *   6. Rich UI    – the interactive validation variant (show/hide + live checklist)
 *
 * Notes verified against @base-ui/react + the component source:
 *   - `InputBasic` / `InputInline` have no <label>; they rely on `placeholder`
 *     as their only accessible name. This passes axe (placeholder is an accname
 *     fallback per HTML-AAM) but is a best-practice concern — the name vanishes
 *     once the user types. Tracked as an advisory, not a hard failure.
 *   - KNOWN DEFECTS (see the "documented defects" block): `InputSelect` and
 *     `InputValidation` each ship a button with no discernible text
 *     (`button-name`, critical). Those two variants are asserted to *currently*
 *     violate; once the source adds an aria-label, flip them to
 *     `toHaveNoViolations` and remove the annotation.
 */

// Variants that are expected to be axe-clean today.
const cleanVariants = [
  ["Badge", InputBadge],
  ["Basic", InputBasic],
  ["ButtonGroup", InputButtonGroup],
  ["Disabled", InputDisabled],
  ["Field", InputField],
  ["Fieldgroup", InputFieldgroup],
  ["File", InputFile],
  ["Form", InputForm],
  ["Grid", InputGrid],
  ["Inline", InputInline],
  ["InputGroup", InputInputGroup],
  ["Invalid", InputInvalid],
  ["Range", InputRange],
  ["Required", InputRequired],
] as const

// ---------------------------------------------------------------------------
// 1a. Automated accessibility scan — clean variants, zero violations
// ---------------------------------------------------------------------------
describe.each(cleanVariants)(
  "input/%s — automated a11y",
  (_name, Component) => {
    it("has no axe violations", async () => {
      const { container } = render(<Component />)
      expect(await axe(container)).toHaveNoViolations()
    })
  }
)

// ---------------------------------------------------------------------------
// 1b. Documented KNOWN DEFECTS — icon/select buttons with no accessible name.
//     These lock the current (defective) behavior so a source fix is noticed.
// ---------------------------------------------------------------------------
describe("input — documented accessibility defects (fix in source)", () => {
  it("InputValidation: show/hide password button has no accessible name", async () => {
    const { container } = render(<InputValidation />)
    const { violations } = await axe(container)
    expect(violations.map((v) => v.id)).toContain("button-name")
  })

  it("InputSelect: country-code select trigger has no accessible name", async () => {
    const { container } = render(<InputSelect />)
    const { violations } = await axe(container)
    expect(violations.map((v) => v.id)).toContain("button-name")
  })
})

// ---------------------------------------------------------------------------
// 2. Label association — visible label resolves the control
// ---------------------------------------------------------------------------
describe("input — label association", () => {
  it("associates the Field label with its input (Field variant)", () => {
    render(<InputField />)
    const input = screen.getByLabelText(/username/i)
    expect(input).toBeInstanceOf(HTMLInputElement)
    expect(input).toHaveAttribute("id", "input-field-username")
  })

  it("associates labels for every field in the Form variant", () => {
    render(<InputForm />)
    expect(screen.getByLabelText("Name")).toHaveAttribute("type", "text")
    expect(screen.getByLabelText("Email")).toHaveAttribute("type", "email")
    expect(screen.getByLabelText("Phone")).toHaveAttribute("type", "tel")
    expect(screen.getByLabelText("Address")).toHaveAttribute("type", "text")
  })

  it("keeps the label association when extra content sits in the label (Badge variant)", () => {
    render(<InputBadge />)
    expect(screen.getByLabelText(/webhook url/i)).toHaveAttribute("type", "url")
  })
})

// ---------------------------------------------------------------------------
// 3. State exposure — required / invalid / disabled
// ---------------------------------------------------------------------------
describe("input — state exposure", () => {
  it("marks the required field as required", () => {
    render(<InputRequired />)
    expect(screen.getByLabelText(/required field/i)).toBeRequired()
  })

  it("exposes aria-invalid on the invalid field", () => {
    render(<InputInvalid />)
    expect(screen.getByLabelText(/invalid input/i)).toHaveAttribute(
      "aria-invalid"
    )
  })

  it("disables the disabled field and blocks typing", async () => {
    const user = userEvent.setup()
    render(<InputDisabled />)
    const input = screen.getByLabelText("Email")
    expect(input).toBeDisabled()

    await user.type(input, "hello")
    expect(input).toHaveValue("")
  })
})

// ---------------------------------------------------------------------------
// 4 + 5. Type attributes & keyboard text entry
// ---------------------------------------------------------------------------
describe("input — types & editing", () => {
  it("renders a native file input for the File variant", () => {
    render(<InputFile />)
    expect(screen.getByLabelText("Picture")).toHaveAttribute("type", "file")
  })

  it("accepts typed text (Field variant)", async () => {
    const user = userEvent.setup()
    render(<InputField />)
    const input = screen.getByLabelText(/username/i)

    await user.type(input, "ada.lovelace")
    expect(input).toHaveValue("ada.lovelace")
  })

  it("exposes both bounds of the Range variant as spinbuttons", () => {
    render(<InputRange />)
    const min = screen.getByLabelText(/min price/i)
    const max = screen.getByLabelText(/max price/i)
    expect(min).toHaveAttribute("type", "number")
    expect(max).toHaveAttribute("type", "number")
    expect(min).toHaveValue(20)
    expect(max).toHaveValue(80)
  })
})

// ---------------------------------------------------------------------------
// 6. Rich interactive variant — InputValidation
// ---------------------------------------------------------------------------
describe("input/Validation — interactive behavior", () => {
  it("starts masked and toggles password visibility", async () => {
    const user = userEvent.setup()
    render(<InputValidation />)
    const input = screen.getByLabelText(/create password/i)
    expect(input).toHaveAttribute("type", "password")

    // Only one button exists in this variant (the visibility toggle).
    const toggle = screen.getByRole("button")
    await user.click(toggle)
    expect(input).toHaveAttribute("type", "text")

    await user.click(toggle)
    expect(input).toHaveAttribute("type", "password")
  })

  it("updates the live requirements checklist as the user types", async () => {
    const user = userEvent.setup()
    render(<InputValidation />)
    const input = screen.getByLabelText(/create password/i)

    const minLenItem = screen
      .getByText(/at least 8 characters/i)
      .closest("li") as HTMLElement

    // Not yet satisfied.
    expect(within(minLenItem).getByText(/at least 8 characters/i)).toHaveClass(
      "text-muted-foreground"
    )

    await user.type(input, "Str0ng!Pass")
    expect(input).toHaveValue("Str0ng!Pass")

    // The min-length requirement is now met (label promoted to foreground).
    expect(within(minLenItem).getByText(/at least 8 characters/i)).toHaveClass(
      "text-foreground"
    )
  })
})
