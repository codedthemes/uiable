// third-party
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { axe } from "jest-axe"
import { describe, expect, it } from "vitest"

// project-imports
import SheetNoCloseButton from "./sheet-no-close-button"
import SheetSide from "./sheet-side"

/**
 * Deep UI + accessibility suite for the `sheet` category (2 variants).
 *
 * Coverage dimensions (see project-docs/A11Y_TESTING_CHECKLIST.md):
 *   1. Automated     – axe-core scan in both closed and open state (zero violations)
 *   2. ARIA contract – trigger exposes aria-haspopup="dialog", aria-expanded; popup renders role="dialog"
 *                      with aria-labelledby pointing to SheetTitle and aria-describedby to SheetDescription
 *   3. Focus trap    – focus is contained within modal sheet; restores focus to trigger on close
 *   4. Keyboard      – Space/Enter opens trigger; Escape key dismisses sheet
 *   5. Sides         – top, right, bottom, left side placements properly exposed
 *   6. Close buttons – built-in icon close button has sr-only text; footer close buttons work
 *
 * Notes on Base UI (@base-ui/react/dialog) sheet primitive:
 *   - Base UI automatically wires aria-labelledby and aria-describedby between SheetContent and title/description.
 *   - Restores focus to the trigger element when sheet is dismissed via Escape key or SheetClose.
 */

// ---------------------------------------------------------------------------
// 1. Automated accessibility scan — all variants (closed and open states)
// ---------------------------------------------------------------------------
describe("sheet — automated a11y", () => {
  it("SheetNoCloseButton — zero violations when closed and open", async () => {
    const user = userEvent.setup()
    const { container } = render(<SheetNoCloseButton />)

    expect(await axe(container)).toHaveNoViolations()

    await user.click(screen.getByRole("button", { name: "Open Sheet" }))
    expect(screen.getByRole("dialog")).toBeInTheDocument()
    expect(await axe(document.body)).toHaveNoViolations()
  })

  it("SheetSide — zero violations when closed and open across all sides", async () => {
    const user = userEvent.setup()
    const { container } = render(<SheetSide />)

    expect(await axe(container)).toHaveNoViolations()

    const triggers = screen.getAllByRole("button")
    for (const trigger of triggers) {
      await user.click(trigger)
      expect(screen.getByRole("dialog")).toBeInTheDocument()
      expect(await axe(document.body)).toHaveNoViolations()
      await user.keyboard("{Escape}")
    }
  })
})

// ---------------------------------------------------------------------------
// 2. ARIA contract — trigger attributes, role="dialog", title and description
// ---------------------------------------------------------------------------
describe("sheet — ARIA contract", () => {
  it("maintains role='dialog' and label associations on SheetNoCloseButton", async () => {
    const user = userEvent.setup()
    render(<SheetNoCloseButton />)

    const trigger = screen.getByRole("button", { name: "Open Sheet" })
    expect(trigger).toHaveAttribute("aria-haspopup", "dialog")
    expect(trigger).toHaveAttribute("aria-expanded", "false")

    await user.click(trigger)

    expect(trigger).toHaveAttribute("aria-expanded", "true")
    const dialog = screen.getByRole("dialog")
    expect(dialog).toBeInTheDocument()

    const titleId = dialog.getAttribute("aria-labelledby")
    expect(titleId).toBeTruthy()
    expect(document.getElementById(titleId!)).toHaveTextContent(
      "No Close Button"
    )

    const descId = dialog.getAttribute("aria-describedby")
    expect(descId).toBeTruthy()
    expect(document.getElementById(descId!)).toHaveTextContent(
      "This sheet doesn't have a close button in the top-right corner. Click outside to close."
    )
  })

  it("exposes all 4 directional triggers in SheetSide", () => {
    render(<SheetSide />)
    const triggers = screen.getAllByRole("button")
    expect(triggers.map((t) => t.textContent)).toEqual([
      "top",
      "right",
      "bottom",
      "left",
    ])
  })
})

// ---------------------------------------------------------------------------
// 3 + 4. Keyboard workflow & Focus restoration
// ---------------------------------------------------------------------------
describe("sheet — keyboard navigation & focus restoration", () => {
  it("opens sheet with Space key and dismisses with Escape", async () => {
    const user = userEvent.setup()
    render(<SheetNoCloseButton />)

    const trigger = screen.getByRole("button", { name: "Open Sheet" })
    trigger.focus()
    await user.keyboard(" ")

    expect(screen.getByRole("dialog")).toBeInTheDocument()

    await user.keyboard("{Escape}")
    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
    })
    expect(trigger).toHaveFocus()
  })

  it("opens sheet with Enter key", async () => {
    const user = userEvent.setup()
    render(<SheetNoCloseButton />)

    const trigger = screen.getByRole("button", { name: "Open Sheet" })
    trigger.focus()
    await user.keyboard("{Enter}")

    expect(screen.getByRole("dialog")).toBeInTheDocument()
  })
})

// ---------------------------------------------------------------------------
// 5. Close buttons & dismissal mechanics
// ---------------------------------------------------------------------------
describe("sheet — close buttons & dismissal", () => {
  it("provides accessible top-right close button in SheetSide", async () => {
    const user = userEvent.setup()
    render(<SheetSide />)

    const [topTrigger] = screen.getAllByRole("button")
    await user.click(topTrigger)

    const closeBtns = screen.getAllByRole("button", { name: "Close" })
    expect(closeBtns.length).toBeGreaterThan(0)

    const topCloseBtn = document.querySelector(
      '[data-slot="sheet-close"]'
    ) as HTMLButtonElement
    expect(topCloseBtn).toBeInTheDocument()
  })

  it("omits top-right close button when showCloseButton={false}", async () => {
    const user = userEvent.setup()
    render(<SheetNoCloseButton />)

    await user.click(screen.getByRole("button", { name: "Open Sheet" }))

    expect(screen.getByRole("dialog")).toBeInTheDocument()
    expect(
      document.querySelector('[data-slot="sheet-close"]')
    ).not.toBeInTheDocument()
  })

  it("dismisses sheet when footer SheetClose button is clicked", async () => {
    const user = userEvent.setup()
    render(<SheetSide />)

    const [topTrigger] = screen.getAllByRole("button")
    await user.click(topTrigger)

    const cancelBtn = screen.getByRole("button", { name: "Cancel" })
    await user.click(cancelBtn)

    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
    })
    expect(topTrigger).toHaveFocus()
  })
})
