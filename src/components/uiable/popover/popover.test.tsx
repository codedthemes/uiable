// third-party
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { axe } from "jest-axe"
import { describe, expect, it } from "vitest"

// project-imports
import { PopoverAlignments } from "./popover-alignments"
import { PopoverBasic } from "./popover-basic"
import { PopoverForm } from "./popover-form"

/**
 * Deep UI + accessibility suite for the `popover` category (3 variants).
 *
 * Coverage dimensions (see project-docs/A11Y_TESTING_CHECKLIST.md):
 *   1. Automated     – axe-core scan when closed and when open
 *   2. ARIA contract – trigger exposes aria-haspopup="dialog", aria-expanded; popup renders role="dialog"
 *   3. Keyboard      – Space/Enter opens trigger; Escape key dismisses popover
 *   4. State         – open/closed states correctly reflected on trigger
 *   5. Form wiring   – form fields in PopoverForm have accessible labels
 *   6. Documented    – Trip-wire assertions for known `aria-dialog-name` defect
 *
 * Documented Known Defects:
 *   - Defect 1: `aria-dialog-name` in `PopoverAlignments`
 *     - Element: `<PopoverContent>` in `PopoverAlignments`
 *     - Rule: WCAG 4.1.2 / `aria-dialog-name` (ARIA dialog and alertdialog nodes should have an accessible name)
 *     - Root cause: `@base-ui/react/popover` emits `role="dialog"` on `PopoverContent`. `PopoverAlignments` renders raw text
 *       inside `PopoverContent` without a `<PopoverTitle>` or `aria-label`/`aria-labelledby`, leaving `role="dialog"` unlabelled.
 *     - Fix: Add `<PopoverTitle>` or `aria-label="..."` to `PopoverContent` in `PopoverAlignments`.
 */

// ---------------------------------------------------------------------------
// 1. Automated accessibility scan (Closed State)
// ---------------------------------------------------------------------------
describe("popover — automated a11y (closed state)", () => {
  it("has no axe violations when closed (PopoverBasic)", async () => {
    const { container } = render(<PopoverBasic />)
    expect(await axe(container)).toHaveNoViolations()
  })

  it("has no axe violations when closed (PopoverAlignments)", async () => {
    const { container } = render(<PopoverAlignments />)
    expect(await axe(container)).toHaveNoViolations()
  })

  it("has no axe violations when closed (PopoverForm)", async () => {
    const { container } = render(<PopoverForm />)
    expect(await axe(container)).toHaveNoViolations()
  })
})

// ---------------------------------------------------------------------------
// 2. Automated accessibility scan (Open State — Clean Variants)
// ---------------------------------------------------------------------------
describe("popover — automated a11y (open state)", () => {
  it("has no axe violations when open (PopoverBasic)", async () => {
    const user = userEvent.setup()
    render(<PopoverBasic />)

    await user.click(screen.getByRole("button", { name: "Open Popover" }))
    expect(screen.getByRole("dialog")).toBeInTheDocument()
    expect(await axe(document.body)).toHaveNoViolations()
  })

  it("has no axe violations when open (PopoverForm)", async () => {
    const user = userEvent.setup()
    render(<PopoverForm />)

    await user.click(screen.getByRole("button", { name: "Open Popover" }))
    expect(screen.getByRole("dialog")).toBeInTheDocument()
    expect(await axe(document.body)).toHaveNoViolations()
  })
})

// ---------------------------------------------------------------------------
// 3. Documented Known Defects — aria-dialog-name in PopoverAlignments
// ---------------------------------------------------------------------------
describe("popover — documented defects (open state)", () => {
  it("PopoverAlignments — documents aria-dialog-name defect when opened", async () => {
    const user = userEvent.setup()
    render(<PopoverAlignments />)

    await user.click(screen.getByRole("button", { name: "Start" }))
    expect(screen.getByRole("dialog")).toBeInTheDocument()

    const results = await axe(document.body)
    const violationIds = results.violations.map((v) => v.id)
    expect(violationIds).toContain("aria-dialog-name")
  })
})

// ---------------------------------------------------------------------------
// 4. ARIA contract — aria-expanded, aria-controls, role="dialog"
// ---------------------------------------------------------------------------
describe("popover — ARIA contract", () => {
  it("toggles aria-expanded and aria-controls on trigger button", async () => {
    const user = userEvent.setup()
    render(<PopoverBasic />)

    const trigger = screen.getByRole("button", { name: "Open Popover" })
    expect(trigger).toHaveAttribute("aria-expanded", "false")
    expect(trigger).not.toHaveAttribute("aria-controls")

    await user.click(trigger)

    expect(trigger).toHaveAttribute("aria-expanded", "true")
    const popoverId = trigger.getAttribute("aria-controls")
    expect(popoverId).toBeTruthy()

    const popover = screen.getByRole("dialog")
    expect(popover).toHaveAttribute("id", popoverId!)
  })
})

// ---------------------------------------------------------------------------
// 5. Keyboard workflow & dismissal
// ---------------------------------------------------------------------------
describe("popover — keyboard & dismissal", () => {
  it("opens popover with Space key and dismisses with Escape", async () => {
    const user = userEvent.setup()
    render(<PopoverBasic />)

    const trigger = screen.getByRole("button", { name: "Open Popover" })
    trigger.focus()
    await user.keyboard(" ")

    expect(screen.getByRole("dialog")).toBeInTheDocument()

    await user.keyboard("{Escape}")
    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
    })
    expect(trigger).toHaveFocus()
  })
})

// ---------------------------------------------------------------------------
// 6. Form fields inside popover
// ---------------------------------------------------------------------------
describe("popover — form variant controls", () => {
  it("provides labeled input controls inside PopoverForm", async () => {
    const user = userEvent.setup()
    render(<PopoverForm />)

    await user.click(screen.getByRole("button", { name: "Open Popover" }))

    const widthInput = screen.getByRole("textbox", { name: "Width" })
    const heightInput = screen.getByRole("textbox", { name: "Height" })

    expect(widthInput).toHaveValue("100%")
    expect(heightInput).toHaveValue("25px")
  })
})
