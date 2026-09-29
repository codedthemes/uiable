// third-party
import { render, screen, within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { axe } from "jest-axe"
import { describe, expect, it } from "vitest"

// project-imports
import { ComboboxAutoHighlight } from "./combobox-auto-highlight"
import ComboboxAutocomplete from "./combobox-autocomplete"
import ComboboxBasic from "./combobox-basic"
import { ComboboxWithClear } from "./combobox-clear"
import { ComboboxWithCustomItems } from "./combobox-custom"
import { ComboboxDisabled } from "./combobox-disabled"
import { ComboboxError } from "./combobox-error"
import { ComboboxWithGroupsAndSeparator } from "./combobox-groups"
import { ComboxboxInputGroup } from "./combobox-input-group"
import { ComboboxInvalid } from "./combobox-invalid"
import { ComboboxMultiple } from "./combobox-multiple"
import { ComboboxPopup } from "./combobox-popup"
import { ComboboxUser } from "./combobox-user"
import ComboboxWithCheckbox from "./combobox-with-checkbox"

/**
 * Deep UI + accessibility suite for the `combobox` category (14 variants).
 * Backed by @base-ui/react's Combobox primitive (see src/components/ui/combobox.tsx).
 *
 * Coverage dimensions (see project-docs/A11Y_TESTING_CHECKLIST.md):
 *   1. Automated  – axe-core scan, split into clean variants vs. documented defects
 *   2. ARIA       – role=combobox, aria-expanded, aria-haspopup, aria-controls
 *   3. Keyboard   – open on click/ArrowDown, type-to-filter, Enter selects, Escape closes
 *   4. Selection  – single value, multi-select chips, chip removal
 *   5. Disabled   – blocks opening and typing
 *   6. Groups     – group labels and separators render and stay reachable
 *   7. Custom     – object-shaped items (user list, country list) select correctly
 *   8. Autocomplete – inline ghost-text suggestion + Tab/ArrowRight completion
 *
 * === Documented accessibility defects (fix in source) ===
 * All are `button-name` (critical) — icon-only controls with no accessible
 * name, or (for the chips input) a text input with no accessible name at all:
 *   - The chevron dropdown-toggle button rendered by `ComboboxInput`
 *     (showTrigger, default true) has no text/aria-label. It is hidden from
 *     assistive tech while the popup is OPEN (Base UI marks its wrapper
 *     aria-hidden), but is exposed with no name in the far more common
 *     CLOSED/rest state. Affects every `ComboboxInput`-based variant below.
 *   - `ComboboxClear`'s "X" button has no aria-label. Affects `WithClear`.
 *   - `ComboboxChip`'s remove "X" button has no aria-label. Affects
 *     `Multiple` and `WithCheckbox`.
 *   - `ComboboxChipsInput` in the `Multiple` variant has no label/aria-label/
 *     placeholder at all, so the text field itself has no accessible name.
 *     (`WithCheckbox` avoids this because it sets a placeholder.)
 *   - `ComboboxPopup`'s trigger button renders real visible text ("Select
 *     country") via `<ComboboxValue />`, but the button carries
 *     `role="combobox"`. Per the WAI-ARIA accessible-name-computation spec,
 *     `combobox` is NOT among the roles that allow name-from-content (it is
 *     treated like a form control, which must get its name from
 *     aria-label/aria-labelledby/an associated <label>, not its rendered
 *     text). Confirmed independently by both axe-core (`button-name`) and
 *     Testing Library's own accname engine (`getByRole` cannot resolve it by
 *     its visible text). Sighted users see "Select country"; screen-reader
 *     users hear only "combobox, collapsed" with no name. Real defect, not a
 *     test-environment artifact — fix by adding
 *     `aria-label`/`aria-labelledby` to the trigger.
 */

// ---------------------------------------------------------------------------
// 1a. Documented KNOWN DEFECTS — icon-only trigger with no accessible name,
//     asserted while the combobox is CLOSED (its default, most common state).
// ---------------------------------------------------------------------------
const variantsWithUnlabelledChevronTrigger = [
  ["Basic", ComboboxBasic],
  ["Disabled", ComboboxDisabled],
  ["Invalid", ComboboxInvalid],
  ["Error", ComboboxError],
  ["WithGroupsAndSeparator", ComboboxWithGroupsAndSeparator],
  ["WithCustomItems", ComboboxWithCustomItems],
  ["InputGroup", ComboxboxInputGroup],
  ["User", ComboboxUser],
  ["AutoHighlight", ComboboxAutoHighlight],
] as const

describe.each(variantsWithUnlabelledChevronTrigger)(
  "combobox/%s — documented defect: unlabelled chevron trigger",
  (_name, Component) => {
    it("flags button-name on the closed dropdown-toggle button", async () => {
      const { container } = render(<Component />)
      const { violations } = await axe(container)
      expect(violations.map((v) => v.id)).toContain("button-name")
    })
  }
)

describe("combobox/WithClear — documented defects", () => {
  it("flags button-name on both the chevron trigger and the clear (X) button", async () => {
    const { container } = render(<ComboboxWithClear />)
    const { violations } = await axe(container)
    const buttonNameViolation = violations.find((v) => v.id === "button-name")
    expect(buttonNameViolation).toBeDefined()
    expect(buttonNameViolation!.nodes.length).toBe(2)
  })
})

describe("combobox/Multiple — documented defects", () => {
  it("flags button-name on the chip-remove button and label on the chips input", async () => {
    const { container } = render(<ComboboxMultiple />)
    const { violations } = await axe(container)
    const ids = violations.map((v) => v.id)
    expect(ids).toContain("button-name") // chip remove "X" has no aria-label
    expect(ids).toContain("label") // ComboboxChipsInput has no accessible name
  })
})

describe("combobox/WithCheckbox — documented defect", () => {
  it("flags button-name on the chip-remove button (placeholder saves the chips input from the label violation)", async () => {
    const { container } = render(<ComboboxWithCheckbox />)
    const { violations } = await axe(container)
    expect(violations.map((v) => v.id)).toContain("button-name")
  })
})

describe("combobox/Autocomplete — documented defect", () => {
  it("flags button-name on the chevron trigger + clear button (showClear is enabled)", async () => {
    const { container } = render(<ComboboxAutocomplete />)
    const { violations } = await axe(container)
    expect(violations.map((v) => v.id)).toContain("button-name")
  })
})

// ---------------------------------------------------------------------------
// 1b. ComboboxPopup — documented defect: visible text is not an accessible
//     name for role=combobox (see file header for the spec citation).
// ---------------------------------------------------------------------------
describe("combobox/Popup — documented defect: trigger has no accessible name", () => {
  it("flags button-name via axe even though the trigger shows visible text", async () => {
    const { container } = render(<ComboboxPopup />)
    const { violations } = await axe(container)
    expect(violations.map((v) => v.id)).toContain("button-name")
  })

  it("cannot be resolved by accessible name, confirming screen readers get no name either", () => {
    render(<ComboboxPopup />)
    expect(
      screen.queryByRole("combobox", { name: "Select country" })
    ).not.toBeInTheDocument()
    // The node exists and is visibly labelled — just not accessibly.
    expect(screen.getByText("Select country")).toBeInTheDocument()
  })
})

// ---------------------------------------------------------------------------
// 2. ARIA contract — role, aria-expanded, aria-haspopup
// ---------------------------------------------------------------------------
describe("combobox/Basic — ARIA contract", () => {
  it("exposes role=combobox with aria-haspopup=listbox and aria-expanded=false at rest", () => {
    render(<ComboboxBasic />)
    const input = screen.getByRole("combobox")
    expect(input).toHaveAttribute("aria-haspopup", "listbox")
    expect(input).toHaveAttribute("aria-expanded", "false")
  })

  it("flips aria-expanded to true and exposes aria-controls when opened", async () => {
    const user = userEvent.setup()
    render(<ComboboxBasic />)
    const input = screen.getByRole("combobox")

    await user.click(input)
    expect(input).toHaveAttribute("aria-expanded", "true")
    expect(input).toHaveAttribute("aria-controls")

    const listbox = screen.getByRole("listbox")
    expect(listbox).toHaveAttribute("id", input.getAttribute("aria-controls"))
  })
})

// ---------------------------------------------------------------------------
// 3. Keyboard workflow — open, filter, select, close
// ---------------------------------------------------------------------------
describe("combobox/Basic — keyboard workflow", () => {
  it("filters the option list as the user types", async () => {
    const user = userEvent.setup()
    render(<ComboboxBasic />)
    const input = screen.getByRole("combobox")

    await user.click(input)
    await user.type(input, "Sve")

    const options = screen.getAllByRole("option")
    expect(options).toHaveLength(1)
    expect(options[0]).toHaveTextContent("SvelteKit")
  })

  it("selects the highlighted option with ArrowDown + Enter and closes the popup", async () => {
    const user = userEvent.setup()
    render(<ComboboxBasic />)
    const input = screen.getByRole("combobox")

    await user.click(input)
    await user.keyboard("{ArrowDown}")
    await user.keyboard("{Enter}")

    expect(input).toHaveValue("Next.js")
    expect(input).toHaveAttribute("aria-expanded", "false")
  })

  it("closes the popup on Escape without selecting", async () => {
    const user = userEvent.setup()
    render(<ComboboxBasic />)
    const input = screen.getByRole("combobox")

    await user.click(input)
    expect(input).toHaveAttribute("aria-expanded", "true")

    await user.keyboard("{Escape}")
    expect(input).toHaveAttribute("aria-expanded", "false")
    expect(input).toHaveValue("")
  })
})

// ---------------------------------------------------------------------------
// 4. Selection — single value + multi-select chips
// ---------------------------------------------------------------------------
describe("combobox/Multiple — multi-select chips", () => {
  const getChips = (container: HTMLElement) =>
    within(container.querySelector('[data-slot="combobox-chips"]')!)

  it("starts with the default chip present", () => {
    const { container } = render(<ComboboxMultiple />)
    expect(getChips(container).getByText("Next.js")).toBeInTheDocument()
  })

  it("adds a chip when another option is selected, keeping the first", async () => {
    const user = userEvent.setup()
    const { container } = render(<ComboboxMultiple />)
    const input = screen.getByRole("combobox")

    await user.click(input)
    await user.click(screen.getByRole("option", { name: "SvelteKit" }))

    const chips = getChips(container)
    expect(chips.getByText("Next.js")).toBeInTheDocument()
    expect(chips.getByText("SvelteKit")).toBeInTheDocument()
  })

  it("removes a chip via its remove button", async () => {
    const user = userEvent.setup()
    const { container } = render(<ComboboxMultiple />)
    const chips = getChips(container)

    expect(chips.getByText("Next.js")).toBeInTheDocument()
    await user.click(chips.getByRole("button"))

    expect(chips.queryByText("Next.js")).not.toBeInTheDocument()
  })
})

// ---------------------------------------------------------------------------
// 5. Disabled state
// ---------------------------------------------------------------------------
describe("combobox/Disabled — disabled semantics", () => {
  it("disables the input and blocks opening the popup", async () => {
    const user = userEvent.setup()
    render(<ComboboxDisabled />)
    const input = screen.getByRole("combobox")

    expect(input).toBeDisabled()

    await user.click(input)
    expect(input).toHaveAttribute("aria-expanded", "false")
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument()
  })
})

// ---------------------------------------------------------------------------
// 6. Groups & separators
// ---------------------------------------------------------------------------
describe("combobox/WithGroupsAndSeparator — grouped options", () => {
  it("renders group labels and their options under the correct group", async () => {
    const user = userEvent.setup()
    render(<ComboboxWithGroupsAndSeparator />)
    const input = screen.getByRole("combobox")

    await user.click(input)

    expect(screen.getByText("Americas")).toBeInTheDocument()
    expect(screen.getByText("Europe")).toBeInTheDocument()
    expect(
      screen.getByRole("option", { name: "(GMT-5) New York" })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("option", { name: "(GMT+0) London" })
    ).toBeInTheDocument()
  })
})

// ---------------------------------------------------------------------------
// 7. Custom object-shaped items
// ---------------------------------------------------------------------------
describe("combobox/User — object items with custom rendering", () => {
  it("renders custom item content and selects by object identity", async () => {
    const user = userEvent.setup()
    render(<ComboboxUser />)
    const input = screen.getByRole("combobox")

    await user.click(input)
    expect(screen.getByText("Lead Designer")).toBeInTheDocument()

    await user.click(screen.getByRole("option", { name: /Dan Abramov/i }))
    expect(input).toHaveValue("Dan Abramov")
  })
})

// ---------------------------------------------------------------------------
// 8. Autocomplete inline suggestion
// ---------------------------------------------------------------------------
describe("combobox/Autocomplete — inline typeahead", () => {
  it("completes the input to the matching suggestion on Tab", async () => {
    const user = userEvent.setup()
    render(<ComboboxAutocomplete />)
    const input = screen.getByRole("combobox")

    await user.type(input, "Sve")
    await user.keyboard("{Tab}")

    expect(input).toHaveValue("SvelteKit")
  })
})
