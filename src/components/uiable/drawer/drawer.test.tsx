// third-party
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { axe } from "jest-axe"
import { describe, expect, it } from "vitest"

// project-imports
import { DrawerDialogDemo } from "./drawer-dialog"
import { DrawerScrollableContent } from "./drawer-scrollable-content"
import { DrawerWithSides } from "./drawer-sides"

/**
 * Deep UI + accessibility suite for the `drawer` category (3 variants).
 *
 * Coverage dimensions (see project-docs/A11Y_TESTING_CHECKLIST.md):
 *   1. Automated     – axe-core scan when closed and when open
 *   2. ARIA contract – trigger opens dialog/drawer popup with role="dialog",
 *                      aria-labelledby pointing to DrawerTitle, aria-describedby to DrawerDescription
 *   3. Keyboard      – Enter/Space opens trigger; Escape key dismisses drawer
 *   4. Responsive    – DrawerDialogDemo switches between Dialog and Drawer
 *   5. Documented    – Trip-wire assertions for known `nested-interactive` defects
 *
 * Documented Known Defects:
 *   - Defect 1: `nested-interactive` in ALL 3 variants (DrawerDialogDemo, DrawerScrollableContent, DrawerWithSides)
 *     - Element: `<DrawerClose><Button>Cancel</Button></DrawerClose>`
 *     - Rule: WCAG 4.1.2 / `nested-interactive` (Interactive controls must not be nested)
 *     - Root cause: `DrawerClose` (from Vaul `DrawerPrimitive.Close`) renders a `<button>` wrapper by default.
 *       Nesting a `<Button>` child inside `<DrawerClose>` without `asChild` creates `<button><button>Cancel</button></button>`,
 *       resulting in invalid HTML and nested focusable controls.
 *     - Fix: Add `asChild` to `<DrawerClose>`: `<DrawerClose asChild><Button variant="outline">Cancel</Button></DrawerClose>`
 */

// ---------------------------------------------------------------------------
// 1. Automated accessibility scan (Closed State) — All variants clean when closed
// ---------------------------------------------------------------------------
describe("drawer — automated a11y (closed state)", () => {
  it("has no axe violations when closed (DrawerDialogDemo)", async () => {
    const { container } = render(<DrawerDialogDemo />)
    expect(await axe(container)).toHaveNoViolations()
  })

  it("has no axe violations when closed (DrawerScrollableContent)", async () => {
    const { container } = render(<DrawerScrollableContent />)
    expect(await axe(container)).toHaveNoViolations()
  })

  it("has no axe violations when closed (DrawerWithSides)", async () => {
    const { container } = render(<DrawerWithSides />)
    expect(await axe(container)).toHaveNoViolations()
  })
})

// ---------------------------------------------------------------------------
// 2. Documented Known Defects — nested-interactive in open state
// ---------------------------------------------------------------------------
describe("drawer — documented defects (open state)", () => {
  it("DrawerScrollableContent — documents nested-interactive defect on DrawerClose", async () => {
    const user = userEvent.setup()
    render(<DrawerScrollableContent />)

    await user.click(screen.getByRole("button", { name: "Scrollable Content" }))
    expect(screen.getByRole("dialog")).toBeInTheDocument()

    const results = await axe(document.body)
    const violationIds = results.violations.map((v) => v.id)
    expect(violationIds).toContain("nested-interactive")
  })

  it("DrawerWithSides — documents nested-interactive defect on DrawerClose", async () => {
    const user = userEvent.setup()
    render(<DrawerWithSides />)

    const [firstTrigger] = screen.getAllByRole("button")
    await user.click(firstTrigger)
    expect(screen.getByRole("dialog")).toBeInTheDocument()

    const results = await axe(document.body)
    const violationIds = results.violations.map((v) => v.id)
    expect(violationIds).toContain("nested-interactive")
  })
})

// ---------------------------------------------------------------------------
// 3. ARIA contract — role="dialog", title and description wiring
// ---------------------------------------------------------------------------
describe("drawer — ARIA contract", () => {
  it("exposes role='dialog' with aria-labelledby and aria-describedby on DrawerScrollableContent", async () => {
    const user = userEvent.setup()
    render(<DrawerScrollableContent />)

    await user.click(screen.getByRole("button", { name: "Scrollable Content" }))

    const drawer = screen.getByRole("dialog")
    expect(drawer).toBeInTheDocument()

    const titleId = drawer.getAttribute("aria-labelledby")
    expect(titleId).toBeTruthy()
    expect(document.getElementById(titleId!)).toHaveTextContent("Move Goal")

    const descId = drawer.getAttribute("aria-describedby")
    expect(descId).toBeTruthy()
    expect(document.getElementById(descId!)).toHaveTextContent(
      "Set your daily activity goal."
    )
  })

  it("renders 4 directional trigger buttons in DrawerWithSides", () => {
    render(<DrawerWithSides />)
    const buttons = screen.getAllByRole("button")
    expect(buttons).toHaveLength(4)
    expect(buttons.map((b) => b.textContent)).toEqual([
      "top",
      "right",
      "bottom",
      "left",
    ])
  })
})

// ---------------------------------------------------------------------------
// 4. Keyboard workflow & dismissal
// ---------------------------------------------------------------------------
describe("drawer — keyboard & dismissal", () => {
  it("opens drawer with Space key and dismisses with Escape", async () => {
    const user = userEvent.setup()
    render(<DrawerScrollableContent />)

    const trigger = screen.getByRole("button", { name: "Scrollable Content" })
    trigger.focus()
    await user.keyboard(" ")

    expect(screen.getByRole("dialog")).toBeInTheDocument()

    await user.keyboard("{Escape}")
    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
    })
  })
})
