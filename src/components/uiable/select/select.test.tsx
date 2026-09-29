// third-party
import { render, screen, within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { axe } from "jest-axe"
import { describe, expect, it } from "vitest"

// project-imports
import { SelectAlignItem } from "./select-align-item"
import { SelectClearable } from "./select-clearable"
import { SelectDisabled } from "./select-disabled"
import { SelectGroups } from "./select-groups"
import { SelectInvalid } from "./select-invalid"
import { SelectMulti } from "./select-multi"
import { SelectScrollable } from "./select-scrollable"
import { SelectWithIcons } from "./select-with-icons"
import { SelectWithStatus } from "./select-with-status"
import { SelectWithUsers } from "./select-with-users"

/**
 * Deep UI + accessibility suite for the `select` category (10 variants).
 * 9 variants wrap @base-ui/react's Select primitive (src/components/ui/select.tsx);
 * `SelectMulti` is a fully custom rebuild on Popover + plain buttons/checkboxes
 * and does not use the Select primitive at all — it is tested separately.
 *
 * Coverage dimensions (see project-docs/A11Y_TESTING_CHECKLIST.md):
 *   1. Automated     – axe-core scan, closed and open (open state scans
 *                       document.body, not just the render container, because
 *                       SelectContent renders through a React portal outside
 *                       the container — scanning only the container silently
 *                       misses everything inside the open listbox)
 *   2. ARIA contract – role=combobox trigger, aria-expanded, aria-haspopup=listbox,
 *                       aria-controls -> listbox id, role=option + aria-selected
 *   3. Keyboard      – Enter/click opens, ArrowDown moves the highlighted option,
 *                       Enter selects and closes, Escape closes and restores focus
 *   4. State         – disabled blocks opening; per-item disabled blocks selection;
 *                       aria-invalid is exposed on the trigger
 *   5. Groups        – group labels render and are correctly aria-labelledby'd
 *   6. Custom render – icon/status/user variants update trigger content on select
 *   7. Clearable     – external clear control resets the value and trigger text
 *   8. Documented    – trip-wire assertions for known defects (see below)
 *
 * === Documented accessibility defects (fix in source) ===
 *
 * Defect 1 — EVERY Select-primitive trigger has no accessible name
 *   (`button-name`, critical; also appears via axe as `aria-input-field-name`-
 *   class defect on `role="combobox"`.)
 *   Root cause: `SelectTrigger` in @base-ui/react resolves its
 *   `aria-labelledby` from `resolveAriaLabelledBy(fieldLabelId, selectLabelId)`
 *   (see node_modules/@base-ui/react/utils/resolveAriaLabelledBy.js) — both
 *   are undefined unless the trigger sits inside a `<Field>` AND a
 *   `<FieldLabel htmlFor={triggerId}>`/`id`-linked label is present. None of
 *   the 9 primitive-based variants pass an `id` to `SelectTrigger` or a
 *   matching `htmlFor` to `FieldLabel`. Per the WAI-ARIA accname spec,
 *   `role="combobox"` does not allow name-from-content, so the visible
 *   `SelectValue` text ("Select a fruit", "Banana", etc.) is NOT a valid
 *   accessible name — screen readers announce "combobox, collapsed" with no
 *   name. Confirmed on: AlignItem, Clearable, Disabled, Groups, Scrollable,
 *   WithIcons, WithStatus, WithUsers.
 *   Notably `SelectInvalid` LOOKS fixed — it renders `<FieldLabel>Fruit</FieldLabel>`
 *   — but the label has no `htmlFor` and the trigger has no explicit `id`, so
 *   the two are never actually linked; the defect is present there too.
 *   Fix: give `SelectTrigger` an explicit `id` and `FieldLabel` a matching
 *   `htmlFor` (mirrors the working pattern already used for `Input` variants,
 *   e.g. `input-field.tsx`).
 *
 * Defect 2 — `SelectGroups`: listbox has an invalid direct child
 *   (`aria-required-children`, critical.)
 *   `<SelectSeparator />` is rendered as a direct sibling between the two
 *   `<SelectGroup>` elements, all as direct children of the `role="listbox"`
 *   container. Per ARIA, `listbox` only permits `option` or `group` as
 *   direct children — a `role="separator"` in that position breaks the
 *   required parent/child structure, which can cause screen readers to
 *   misreport the list's item count or fail to enumerate options correctly.
 *   Fix: move the separator inside styling on the group boundary (e.g. a
 *   CSS border on `SelectGroup`) instead of an ARIA-role sibling node, or
 *   confirm with Base UI whether a differently-scoped separator part exists
 *   for use inside a listbox.
 *
 * Defect 3 — `SelectMulti` (custom-built, not using the Select primitive):
 *   multiple real defects from hand-rolling interactive controls:
 *     - `aria-command-name` (serious) x3: each chip's remove control is a
 *       bare `<span role="button">` wrapping only an `<X>` icon, no
 *       aria-label.
 *     - `aria-dialog-name` (serious) x1: `PopoverContent` renders
 *       `role="dialog"` with no title/aria-label (same class of defect
 *       documented for `popover-alignments.tsx` in `popover.test.tsx`).
 *     - `aria-toggle-field-name` (serious) x7: each `<Checkbox>` row has no
 *       accessible name of its own — the visible label text lives in a
 *       sibling `<span>`, not connected via `aria-labelledby`.
 *     - `nested-interactive` (serious): the `PopoverTrigger` button contains
 *       chip `<span role="button">` remove controls, and each `<Checkbox>`
 *       sits inside a `<Button>` — interactive elements nested inside other
 *       interactive elements, which is invalid and produces unpredictable
 *       screen-reader/keyboard behavior.
 *   Fix: rebuild on the existing `Combobox` (multiple) or `Select` primitive
 *   instead of hand-rolling this interaction pattern, or at minimum add
 *   aria-labels to the chip-remove spans and Checkbox rows and stop nesting
 *   interactive elements.
 *
 * === Excluded from documented defects: axe `region` rule ===
 * Every open-state scan below also flags `region` ("all page content should
 * be contained by landmarks"), because `axe(document.body)` sees a bare test
 * fragment with no `<header>/<main>/<nav>` shell — there is no real page to
 * have landmarks in. This fires identically for any isolated component
 * render in this environment regardless of the component itself, so it is
 * excluded from the defect list below as test-scope noise, not a product
 * defect (a real embedding page provides the landmark structure).
 */

// ---------------------------------------------------------------------------
// 1a. Documented KNOWN DEFECT — unlabelled Select trigger (all 9 primitive
//     variants, asserted while closed, the default/most common state).
// ---------------------------------------------------------------------------
const primitiveVariants = [
  ["AlignItem", SelectAlignItem],
  ["Clearable", SelectClearable],
  ["Disabled", SelectDisabled],
  ["Groups", SelectGroups],
  ["Invalid", SelectInvalid],
  ["Scrollable", SelectScrollable],
  ["WithIcons", SelectWithIcons],
  ["WithStatus", SelectWithStatus],
  ["WithUsers", SelectWithUsers],
] as const

describe.each(primitiveVariants)(
  "select/%s — documented defect: unlabelled trigger",
  (_name, Component) => {
    it("flags button-name on the closed select trigger", async () => {
      const { container } = render(<Component />)
      const { violations } = await axe(container)
      expect(violations.map((v) => v.id)).toContain("button-name")
    })
  }
)

// ---------------------------------------------------------------------------
// 1b. Documented KNOWN DEFECT — invalid listbox structure in SelectGroups.
// ---------------------------------------------------------------------------
describe("select/Groups — documented defect: separator breaks listbox structure", () => {
  it("flags aria-required-children on the open listbox", async () => {
    const user = userEvent.setup()
    render(<SelectGroups />)
    await user.click(screen.getByRole("combobox"))

    const { violations } = await axe(document.body)
    expect(violations.map((v) => v.id)).toContain("aria-required-children")
  })
})

// ---------------------------------------------------------------------------
// 1c. Documented KNOWN DEFECTS — SelectMulti custom rebuild.
// ---------------------------------------------------------------------------
describe("select/Multi — documented defects (custom-built, not the Select primitive)", () => {
  it("flags unlabelled chip-remove buttons when closed", async () => {
    const { container } = render(<SelectMulti />)
    const { violations } = await axe(container)
    expect(violations.map((v) => v.id)).toContain("aria-command-name")
  })

  it("flags unlabelled dialog, unlabelled checkboxes, and nested interactive controls when open", async () => {
    const user = userEvent.setup()
    const { container } = render(<SelectMulti />)
    const popoverTrigger = container.querySelector(
      '[data-slot="popover-trigger"]'
    ) as HTMLElement
    await user.click(popoverTrigger)
    await screen.findByRole("dialog")

    const { violations } = await axe(document.body)
    const ids = violations.map((v) => v.id)
    expect(ids).toContain("aria-dialog-name")
    expect(ids).toContain("aria-toggle-field-name")
    expect(ids).toContain("nested-interactive")
  })
})

// ---------------------------------------------------------------------------
// 2. ARIA contract
// ---------------------------------------------------------------------------
describe("select/Scrollable — ARIA contract", () => {
  it("exposes role=combobox, aria-haspopup=listbox, aria-expanded=false at rest", () => {
    render(<SelectScrollable />)
    const trigger = screen.getByRole("combobox")
    expect(trigger).toHaveAttribute("aria-haspopup", "listbox")
    expect(trigger).toHaveAttribute("aria-expanded", "false")
  })

  it("flips aria-expanded and wires aria-controls to the listbox id when opened", async () => {
    const user = userEvent.setup()
    render(<SelectScrollable />)
    const trigger = screen.getByRole("combobox")

    await user.click(trigger)
    expect(trigger).toHaveAttribute("aria-expanded", "true")

    const listbox = await screen.findByRole("listbox")
    expect(trigger).toHaveAttribute("aria-controls", listbox.id)
  })

  it("renders each option with role=option and aria-selected", async () => {
    const user = userEvent.setup()
    render(<SelectScrollable />)
    await user.click(screen.getByRole("combobox"))

    const option = await screen.findByRole("option", {
      name: "Eastern Standard Time",
    })
    expect(option).toHaveAttribute("aria-selected", "false")
  })
})

// ---------------------------------------------------------------------------
// 3. Keyboard workflow
// ---------------------------------------------------------------------------
describe("select/Groups — keyboard workflow", () => {
  it("opens with Enter from a focused trigger", async () => {
    const user = userEvent.setup()
    render(<SelectGroups />)
    const trigger = screen.getByRole("combobox")

    trigger.focus()
    await user.keyboard("{Enter}")
    expect(trigger).toHaveAttribute("aria-expanded", "true")
  })

  it("moves the highlighted option with ArrowDown and selects it with Enter, closing the popup", async () => {
    const user = userEvent.setup()
    render(<SelectGroups />)
    const trigger = screen.getByRole("combobox")

    trigger.focus()
    await user.keyboard("{Enter}")
    await user.keyboard("{ArrowDown}")
    await user.keyboard("{Enter}")

    expect(trigger).toHaveAttribute("aria-expanded", "false")
    expect(trigger).toHaveTextContent("Banana")
  })
})

describe("select/Scrollable — Escape dismissal", () => {
  it("closes on Escape without changing the value and restores focus to the trigger", async () => {
    const user = userEvent.setup()
    render(<SelectScrollable />)
    const trigger = screen.getByRole("combobox")

    await user.click(trigger)
    expect(trigger).toHaveAttribute("aria-expanded", "true")

    await user.keyboard("{Escape}")
    expect(trigger).toHaveAttribute("aria-expanded", "false")
    expect(trigger).toHaveFocus()
  })
})

// ---------------------------------------------------------------------------
// 4. State exposure
// ---------------------------------------------------------------------------
describe("select/Disabled — disabled semantics", () => {
  it("disables the trigger and blocks opening the popup", async () => {
    const user = userEvent.setup()
    render(<SelectDisabled />)
    const trigger = screen.getByRole("combobox")

    expect(trigger).toBeDisabled()

    await user.click(trigger)
    expect(trigger).toHaveAttribute("aria-expanded", "false")
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument()
  })
})

describe("select/Invalid — invalid state exposure", () => {
  it("exposes aria-invalid on the trigger", () => {
    render(<SelectInvalid />)
    expect(screen.getByRole("combobox")).toHaveAttribute("aria-invalid", "true")
  })
})

// ---------------------------------------------------------------------------
// 5. Groups
// ---------------------------------------------------------------------------
describe("select/Groups — grouped options", () => {
  it("renders group labels wired via aria-labelledby on each group", async () => {
    const user = userEvent.setup()
    render(<SelectGroups />)
    await user.click(screen.getByRole("combobox"))
    await screen.findByRole("listbox")

    const fruitsLabel = screen.getByText("Fruits")
    const vegetablesLabel = screen.getByText("Vegetables")
    const fruitsGroup = fruitsLabel.closest('[role="group"]') as HTMLElement
    const vegetablesGroup = vegetablesLabel.closest(
      '[role="group"]'
    ) as HTMLElement

    expect(fruitsGroup).toHaveAttribute("aria-labelledby", fruitsLabel.id)
    expect(vegetablesGroup).toHaveAttribute(
      "aria-labelledby",
      vegetablesLabel.id
    )
    expect(
      within(fruitsGroup).getByRole("option", { name: "Apple" })
    ).toBeInTheDocument()
    expect(
      within(vegetablesGroup).getByRole("option", { name: "Carrot" })
    ).toBeInTheDocument()
  })
})

// ---------------------------------------------------------------------------
// 6. Custom-rendered trigger content updates on selection
// ---------------------------------------------------------------------------
describe("select — custom item rendering updates the trigger on select", () => {
  it("WithIcons: starts on the default payment method and switches on select", async () => {
    const user = userEvent.setup()
    render(<SelectWithIcons />)
    const trigger = screen.getByRole("combobox")
    expect(trigger).toHaveTextContent("Credit Card")

    await user.click(trigger)
    await user.click(await screen.findByRole("option", { name: "PayPal" }))
    expect(trigger).toHaveTextContent("PayPal")
  })

  it("WithStatus: starts on the default status and switches on select", async () => {
    const user = userEvent.setup()
    render(<SelectWithStatus />)
    const trigger = screen.getByRole("combobox")
    expect(trigger).toHaveTextContent("In Progress")

    await user.click(trigger)
    await user.click(await screen.findByRole("option", { name: "Completed" }))
    expect(trigger).toHaveTextContent("Completed")
  })

  it("WithUsers: starts on the default user and switches on select", async () => {
    const user = userEvent.setup()
    render(<SelectWithUsers />)
    const trigger = screen.getByRole("combobox")
    expect(trigger).toHaveTextContent("Olivia Martin")

    await user.click(trigger)
    const options = await screen.findAllByRole("option")
    const jacksonOption = options.find((o) =>
      o.textContent?.includes("Jackson Lee")
    )!
    await user.click(jacksonOption)
    expect(trigger).toHaveTextContent("Jackson Lee")
  })
})

// ---------------------------------------------------------------------------
// 7. Clearable
// ---------------------------------------------------------------------------
describe("select/Clearable — external clear control", () => {
  it("starts with a selected department and shows a clear button", () => {
    render(<SelectClearable />)
    expect(screen.getByRole("combobox")).toHaveTextContent("Design")
    expect(
      screen.getByRole("button", { name: "Clear selection" })
    ).toBeInTheDocument()
  })

  it("resets to the placeholder and hides the clear button when clicked", async () => {
    const user = userEvent.setup()
    render(<SelectClearable />)

    await user.click(screen.getByRole("button", { name: "Clear selection" }))

    expect(screen.getByRole("combobox")).toHaveTextContent(
      "Select department..."
    )
    expect(
      screen.queryByRole("button", { name: "Clear selection" })
    ).not.toBeInTheDocument()
  })
})
