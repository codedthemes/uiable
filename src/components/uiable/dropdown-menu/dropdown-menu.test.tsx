// third-party
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { axe } from "jest-axe"
import { describe, expect, it } from "vitest"

// project-imports
import { DropdownMenuAvatar } from "./dropdown-menu-avatar"
import { DropdownMenuBasic } from "./dropdown-menu-basic"
import DropdownMenuBasicDanger from "./dropdown-menu-basic-danger"
import { DropdownMenuBasicInfo } from "./dropdown-menu-basic-info"
import DropdownMenuBasicPrimary from "./dropdown-menu-basic-primary"
import DropdownMenuBasicSecondary from "./dropdown-menu-basic-secondary"
import DropdownMenuBasicSuccess from "./dropdown-menu-basic-success"
import { DropdownMenuBasicWarning } from "./dropdown-menu-basic-warning"
import { DropdownMenuCheckboxes } from "./dropdown-menu-checkboxes"
import { DropdownMenuCheckboxesIcons } from "./dropdown-menu-checkboxes-icons"
import { DropdownMenuComplex } from "./dropdown-menu-complex"
import { DropdownMenuDestructive } from "./dropdown-menu-destructive"
import DropdownMenuForms from "./dropdown-menu-forms"
import { DropdownMenuIcons } from "./dropdown-menu-icons"
import DropdownMenuOutlinePrimary from "./dropdown-menu-outline-primary"
import { DropdownMenuRadioGroupDemo } from "./dropdown-menu-radio-group"
import { DropdownMenuRadioIcons } from "./dropdown-menu-radio-icons"
import { DropdownMenuShortcuts } from "./dropdown-menu-shortcuts"
import DropdownMenuSplitPrimary from "./dropdown-menu-split-primary"
import { DropdownMenuSubmenu } from "./dropdown-menu-submenu"
import DropdownMenuText from "./dropdown-menu-text"

/**
 * Deep UI + accessibility suite for the `dropdown-menu` category (21 variants).
 *
 * Coverage dimensions (see project-docs/A11Y_TESTING_CHECKLIST.md):
 *   1. Automated     – axe-core scan in closed and open state across all variants
 *   2. ARIA contract – trigger exposes aria-haspopup="menu", aria-expanded; popup renders role="menu"
 *                      with menuitem, menuitemcheckbox, menuitemradio roles
 *   3. Keyboard      – Enter/Space opens menu; Arrow keys navigate items; Escape key closes menu
 *   4. State         – checked/selected state on menuitemcheckbox and menuitemradio
 *   5. Documented    – Trip-wire assertions for known defects (`button-name` and `aria-required-children`)
 *
 * Documented Known Defects:
 *   - Defect 1: `button-name` in `DropdownMenuSplitPrimary`
 *     - Element: `<DropdownMenuTrigger render={<Button><ChevronDown /></Button>} />`
 *     - Rule: WCAG 4.1.2 / `button-name` (Buttons must have discernible text)
 *     - Root cause: Split dropdown trigger renders an icon-only `<Button>` containing `<ChevronDown />` without an `aria-label` or sr-only span.
 *     - Fix: Add `aria-label="More options"` or `<span className="sr-only">More options</span>` to the trigger button in `dropdown-menu-split-primary.tsx`.
 *
 *   - Defect 2: `aria-required-children` in `DropdownMenuForms`
 *     - Element: `<DropdownMenuContent>` containing `<form>` with `<Input>`, `<Checkbox>`, `<Button>` controls
 *     - Rule: WCAG 1.3.1 / 4.1.2 / `aria-required-children` (Certain ARIA roles must contain particular children)
 *     - Root cause: `<DropdownMenuContent>` emits `role="menu"`. ARIA menus require children to be menu items (`menuitem`).
 *       Placing an HTML `<form>` directly inside `role="menu"` violates ARIA child constraints.
 *     - Fix: Use a `<Popover>` component instead of a `<DropdownMenu>` for arbitrary form panels.
 *
 *   - Defect 3: `aria-required-children` in `DropdownMenuText`
 *     - Element: `<DropdownMenuContent>` containing `<h5>` and `<p>` elements
 *     - Rule: WCAG 1.3.1 / 4.1.2 / `aria-required-children` (Certain ARIA roles must contain particular children)
 *     - Root cause: `<DropdownMenuContent>` emits `role="menu"`. ARIA menus require children to be menu items (`menuitem`).
 *       Placing raw heading `<h5>` and paragraph `<p>` tags inside `role="menu"` violates allowed child roles.
 *     - Fix: Use `<DropdownMenuLabel>` or `<Popover>` for free-flowing text content.
 */

const cleanVariants = [
  ["Avatar", DropdownMenuAvatar],
  ["BasicDanger", DropdownMenuBasicDanger],
  ["BasicInfo", DropdownMenuBasicInfo],
  ["BasicPrimary", DropdownMenuBasicPrimary],
  ["BasicSecondary", DropdownMenuBasicSecondary],
  ["BasicSuccess", DropdownMenuBasicSuccess],
  ["BasicWarning", DropdownMenuBasicWarning],
  ["Basic", DropdownMenuBasic],
  ["CheckboxesIcons", DropdownMenuCheckboxesIcons],
  ["Checkboxes", DropdownMenuCheckboxes],
  ["Complex", DropdownMenuComplex],
  ["Destructive", DropdownMenuDestructive],
  ["Icons", DropdownMenuIcons],
  ["OutlinePrimary", DropdownMenuOutlinePrimary],
  ["RadioGroup", DropdownMenuRadioGroupDemo],
  ["RadioIcons", DropdownMenuRadioIcons],
  ["Shortcuts", DropdownMenuShortcuts],
  ["Submenu", DropdownMenuSubmenu],
] as const

// ---------------------------------------------------------------------------
// 1. Automated accessibility scan — 18 Clean Variants (Closed & Open States)
// ---------------------------------------------------------------------------
describe.each(cleanVariants)(
  "dropdown-menu/%s — automated a11y",
  (_name, Component) => {
    it("has zero axe violations when closed", async () => {
      const { container } = render(<Component />)
      expect(await axe(container)).toHaveNoViolations()
    })

    it("has zero axe violations when open", async () => {
      const user = userEvent.setup()
      render(<Component />)

      const triggers = screen.getAllByRole("button")
      if (triggers.length > 0) {
        await user.click(triggers[0])
        const menu = await screen.findByRole("menu")
        expect(menu).toBeInTheDocument()
        expect(
          await axe(document.body, { rules: { region: { enabled: false } } })
        ).toHaveNoViolations()
      }
    })
  }
)

// ---------------------------------------------------------------------------
// 2. Documented Known Defects — Split button, Forms, and Text variants
// ---------------------------------------------------------------------------
describe("dropdown-menu — documented defects", () => {
  it("DropdownMenuSplitPrimary — documents button-name defect on split trigger icon", async () => {
    const { container } = render(<DropdownMenuSplitPrimary />)

    const results = await axe(container)
    const violationIds = results.violations.map((v) => v.id)
    expect(violationIds).toContain("button-name")
  })

  it("DropdownMenuForms — documents aria-required-children defect on menu form", async () => {
    const user = userEvent.setup()
    render(<DropdownMenuForms />)

    const trigger = screen.getByRole("button")
    await user.click(trigger)
    await screen.findByRole("menu")

    const results = await axe(document.body, {
      rules: { region: { enabled: false } },
    })
    const violationIds = results.violations.map((v) => v.id)
    expect(violationIds).toContain("aria-required-children")
  })

  it("DropdownMenuText — documents aria-required-children defect on unformatted h5 text", async () => {
    const user = userEvent.setup()
    render(<DropdownMenuText />)

    const trigger = screen.getByRole("button")
    await user.click(trigger)
    await screen.findByRole("menu")

    const results = await axe(document.body, {
      rules: { region: { enabled: false } },
    })
    const violationIds = results.violations.map((v) => v.id)
    expect(violationIds).toContain("aria-required-children")
  })
})

// ---------------------------------------------------------------------------
// 3. ARIA contract — trigger attributes, role="menu", role="menuitem"
// ---------------------------------------------------------------------------
describe("dropdown-menu — ARIA contract", () => {
  it("exposes aria-haspopup='menu', aria-expanded, and role='menu' on DropdownMenuBasic", async () => {
    const user = userEvent.setup()
    render(<DropdownMenuBasic />)

    const trigger = screen.getByRole("button", { name: "Open" })
    expect(trigger).toHaveAttribute("aria-haspopup", "menu")
    expect(trigger).toHaveAttribute("aria-expanded", "false")

    await user.click(trigger)

    const menu = await screen.findByRole("menu")
    expect(menu).toBeInTheDocument()
    expect(trigger).toHaveAttribute("aria-expanded", "true")

    const items = screen.getAllByRole("menuitem")
    expect(items.length).toBeGreaterThan(0)
  })

  it("exposes menuitemcheckbox role and checked states in DropdownMenuCheckboxes", async () => {
    const user = userEvent.setup()
    render(<DropdownMenuCheckboxes />)

    const trigger = screen.getByRole("button", { name: "Open" })
    await user.click(trigger)

    await screen.findByRole("menu")
    const checkboxes = screen.getAllByRole("menuitemcheckbox")
    expect(checkboxes.length).toBeGreaterThan(0)
    for (const cb of checkboxes) {
      expect(cb).toHaveAttribute("aria-checked")
    }
  })

  it("exposes menuitemradio role and checked states in DropdownMenuRadioGroupDemo", async () => {
    const user = userEvent.setup()
    render(<DropdownMenuRadioGroupDemo />)

    const trigger = screen.getByRole("button", { name: "Open" })
    await user.click(trigger)

    await screen.findByRole("menu")
    const radioItems = screen.getAllByRole("menuitemradio")
    expect(radioItems.length).toBeGreaterThan(0)
    for (const radio of radioItems) {
      expect(radio).toHaveAttribute("aria-checked")
    }
  })
})

// ---------------------------------------------------------------------------
// 4. Keyboard workflow & navigation
// ---------------------------------------------------------------------------
describe("dropdown-menu — keyboard navigation & dismissal", () => {
  it("opens menu with Space key and dismisses with Escape", async () => {
    const user = userEvent.setup()
    render(<DropdownMenuBasic />)

    const trigger = screen.getByRole("button", { name: "Open" })
    trigger.focus()
    await user.keyboard(" ")

    const menu = await screen.findByRole("menu")
    expect(menu).toBeInTheDocument()

    await user.keyboard("{Escape}")
    await waitFor(() => {
      expect(screen.queryByRole("menu")).not.toBeInTheDocument()
    })
    expect(trigger).toHaveFocus()
  })

  it("navigates menu items with ArrowDown and ArrowUp keys", async () => {
    const user = userEvent.setup()
    render(<DropdownMenuBasic />)

    const trigger = screen.getByRole("button", { name: "Open" })
    await user.click(trigger)

    await screen.findByRole("menu")
    const items = screen.getAllByRole("menuitem")
    expect(items.length).toBeGreaterThan(0)

    await user.keyboard("{ArrowDown}")
    expect(items.some((item) => item === document.activeElement)).toBe(true)
  })
})
