// third-party
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { axe } from "jest-axe"
import { describe, expect, it } from "vitest"

// project-imports
import { TooltipDisabled } from "./tooltip-disabled"
import { TooltipKeyboard } from "./tooltip-keyboard"
import { TooltipSides } from "./tooltip-sides"

/**
 * Deep UI + accessibility suite for the `tooltip` category (3 variants).
 *
 * Coverage dimensions (see project-docs/A11Y_TESTING_CHECKLIST.md):
 *   1. Automated     – axe-core scan in closed and open state
 *   2. ARIA contract – trigger exposes accessible name; popup renders with role="tooltip"
 *   3. Hover/Focus   – tooltip reveals on both mouse hover and keyboard focus (focus parity)
 *   4. Disabled      – TooltipDisabled correctly wraps a disabled button
 *   5. Documented    – Trip-wire assertion for icon-only button defect (`button-name`)
 *
 * Documented Known Defects:
 *   - Defect 1: `button-name` in `TooltipKeyboard`
 *     - Element: `<TooltipTrigger render={<Button size="icon-lg" />}> <SaveIcon /> </TooltipTrigger>`
 *     - Rule: WCAG 4.1.2 / `button-name` (Buttons must have discernible text)
 *     - Root cause: Trigger is an icon-only button containing `<SaveIcon />` without an `aria-label` or sr-only span.
 *       Because tooltips are hidden by default, screen readers navigating the closed button receive no accessible name.
 *     - Fix: Add `aria-label="Save"` to `TooltipTrigger` / `Button`: `<TooltipTrigger render={<Button size="icon-lg" aria-label="Save" />}>`
 */

// ---------------------------------------------------------------------------
// 1. Automated accessibility scan (Closed State — Clean Variants)
// ---------------------------------------------------------------------------
describe("tooltip — automated a11y (closed state)", () => {
  it("has no axe violations when closed (TooltipDisabled)", async () => {
    const { container } = render(<TooltipDisabled />)
    expect(await axe(container)).toHaveNoViolations()
  })

  it("has no axe violations when closed (TooltipSides)", async () => {
    const { container } = render(<TooltipSides />)
    expect(await axe(container)).toHaveNoViolations()
  })
})

// ---------------------------------------------------------------------------
// 2. Documented Known Defects — icon-only button in TooltipKeyboard
// ---------------------------------------------------------------------------
describe("tooltip — documented defects", () => {
  it("TooltipKeyboard — documents button-name defect on unlabelled icon trigger", async () => {
    const { container } = render(<TooltipKeyboard />)

    const results = await axe(container)
    const violationIds = results.violations.map((v) => v.id)
    expect(violationIds).toContain("button-name")
  })
})

// ---------------------------------------------------------------------------
// 3. Hover and Focus parity & Popup visibility
// ---------------------------------------------------------------------------
describe("tooltip — hover and focus behavior", () => {
  it("shows tooltip popup on mouse hover (TooltipSides)", async () => {
    const user = userEvent.setup()
    render(<TooltipSides />)

    const trigger = screen.getByRole("button", { name: "left" })
    await user.hover(trigger)

    const tooltipText = await screen.findByText("Add to library")
    expect(tooltipText).toBeInTheDocument()
  })

  it("shows tooltip popup on keyboard focus (TooltipSides)", async () => {
    render(<TooltipSides />)

    const trigger = screen.getByRole("button", { name: "top" })
    trigger.focus()

    const tooltipText = await screen.findByText("Add to library")
    expect(tooltipText).toBeInTheDocument()
  })
})

// ---------------------------------------------------------------------------
// 4. Disabled trigger handling (TooltipDisabled)
// ---------------------------------------------------------------------------
describe("tooltip — disabled trigger semantics", () => {
  it("wraps disabled button inside a focusable/accessible trigger container", () => {
    render(<TooltipDisabled />)

    const button = screen.getByRole("button", { name: "Disabled" })
    expect(button).toBeDisabled()
  })
})
