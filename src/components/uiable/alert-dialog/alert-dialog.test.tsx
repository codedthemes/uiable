// third-party
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { axe } from "jest-axe"
import { describe, expect, it } from "vitest"

// project-imports
import { AlertDialogBasic } from "./alert-dialog-basic"
import { AlertDialogDestructive } from "./alert-dialog-destructive"
import { AlertDialogWithMedia } from "./alert-dialog-media"
import { AlertDialogSmall } from "./alert-dialog-small"
import { AlertDialogSmallWithMedia } from "./alert-dialog-small-media"

/**
 * Deep UI + accessibility suite for the `alert-dialog` category (5 variants).
 *
 * Coverage dimensions (see project-docs/A11Y_TESTING_CHECKLIST.md):
 *   1. Automated     – axe-core scan in both closed and open state (zero violations)
 *   2. ARIA contract – trigger exposes aria-haspopup="dialog", aria-expanded; popup renders role="alertdialog"
 *                      with aria-labelledby pointing to title and aria-describedby pointing to description
 *   3. Focus trap    – focus is contained within modal; restores focus to trigger on close
 *   4. Keyboard      – Space/Enter opens trigger; Escape key dismisses alert-dialog
 *   5. Action/Cancel – AlertDialogCancel closes dialog; AlertDialogAction is accessible
 *   6. Variants      – basic, destructive, media icon, small media, small size
 *
 * Notes on Base UI (@base-ui/react/alert-dialog) primitive behavior:
 *   - Uses role="alertdialog" to signal an urgent confirmation popup to screen readers.
 *   - Automatically wires aria-labelledby and aria-describedby between AlertDialogPopup and title/description.
 *   - Restores focus to the trigger element when dismissed via Cancel button or Escape key.
 */

const variants = [
  ["Basic", AlertDialogBasic, "Show Dialog"],
  ["Destructive", AlertDialogDestructive, "Delete Chat"],
  ["WithMedia", AlertDialogWithMedia, "Share Project"],
  ["SmallWithMedia", AlertDialogSmallWithMedia, "Show Dialog"],
  ["Small", AlertDialogSmall, "Show Dialog"],
] as const

// ---------------------------------------------------------------------------
// 1. Automated accessibility scan — every variant (closed and open state)
// ---------------------------------------------------------------------------
describe.each(variants)(
  "alert-dialog/%s — automated a11y",
  (_name, Component, triggerName) => {
    it("has no axe violations when closed", async () => {
      const { container } = render(<Component />)
      expect(await axe(container)).toHaveNoViolations()
    })

    it("has no axe violations when open", async () => {
      const user = userEvent.setup()
      render(<Component />)

      const trigger = screen.getByRole("button", { name: triggerName })
      await user.click(trigger)

      expect(screen.getByRole("alertdialog")).toBeInTheDocument()
      expect(await axe(document.body)).toHaveNoViolations()
    })
  }
)

// ---------------------------------------------------------------------------
// 2. ARIA contract — trigger attributes, role="alertdialog", title and description
// ---------------------------------------------------------------------------
describe.each(variants)(
  "alert-dialog/%s — ARIA contract",
  (_name, Component, triggerName) => {
    it("maintains role='alertdialog' and label associations", async () => {
      const user = userEvent.setup()
      render(<Component />)

      const trigger = screen.getByRole("button", { name: triggerName })
      expect(trigger).toHaveAttribute("aria-haspopup", "dialog")
      expect(trigger).toHaveAttribute("aria-expanded", "false")

      await user.click(trigger)

      expect(trigger).toHaveAttribute("aria-expanded", "true")
      const alertDialog = screen.getByRole("alertdialog")
      expect(alertDialog).toBeInTheDocument()

      // Title association via aria-labelledby
      const titleId = alertDialog.getAttribute("aria-labelledby")
      expect(titleId).toBeTruthy()
      const titleEl = document.getElementById(titleId!)
      expect(titleEl).toBeInTheDocument()

      // Description association via aria-describedby
      const descId = alertDialog.getAttribute("aria-describedby")
      expect(descId).toBeTruthy()
      const descEl = document.getElementById(descId!)
      expect(descEl).toBeInTheDocument()
    })
  }
)

// ---------------------------------------------------------------------------
// 3 + 4. Keyboard workflow & Focus restoration
// ---------------------------------------------------------------------------
describe("alert-dialog — keyboard navigation & focus restoration", () => {
  it("opens alert dialog with Space key on trigger and closes with Escape", async () => {
    const user = userEvent.setup()
    render(<AlertDialogBasic />)

    const trigger = screen.getByRole("button", { name: "Show Dialog" })
    trigger.focus()
    await user.keyboard(" ")

    expect(screen.getByRole("alertdialog")).toBeInTheDocument()

    await user.keyboard("{Escape}")
    await waitFor(() => {
      expect(screen.queryByRole("alertdialog")).not.toBeInTheDocument()
    })
    expect(trigger).toHaveFocus()
  })

  it("opens alert dialog with Enter key on trigger", async () => {
    const user = userEvent.setup()
    render(<AlertDialogBasic />)

    const trigger = screen.getByRole("button", { name: "Show Dialog" })
    trigger.focus()
    await user.keyboard("{Enter}")

    expect(screen.getByRole("alertdialog")).toBeInTheDocument()
  })

  it("restores focus to trigger when closed via Cancel button", async () => {
    const user = userEvent.setup()
    render(<AlertDialogBasic />)

    const trigger = screen.getByRole("button", { name: "Show Dialog" })
    await user.click(trigger)

    const cancelBtn = screen.getByRole("button", { name: "Cancel" })
    await user.click(cancelBtn)

    await waitFor(() => {
      expect(screen.queryByRole("alertdialog")).not.toBeInTheDocument()
    })
    expect(trigger).toHaveFocus()
  })
})

// ---------------------------------------------------------------------------
// 5. Action & Cancel button mechanics across variants
// ---------------------------------------------------------------------------
describe("alert-dialog — action and cancel actions", () => {
  it("closes alert-dialog on clicking Cancel button in Destructive variant", async () => {
    const user = userEvent.setup()
    render(<AlertDialogDestructive />)

    await user.click(screen.getByRole("button", { name: "Delete Chat" }))

    const cancelBtn = screen.getByRole("button", { name: "Cancel" })
    await user.click(cancelBtn)

    await waitFor(() => {
      expect(screen.queryByRole("alertdialog")).not.toBeInTheDocument()
    })
  })

  it("exposes destructive action button with correct accessible name", async () => {
    const user = userEvent.setup()
    render(<AlertDialogDestructive />)

    await user.click(screen.getByRole("button", { name: "Delete Chat" }))

    const actionBtn = screen.getByRole("button", { name: "Delete" })
    expect(actionBtn).toBeInTheDocument()
    expect(actionBtn).toHaveClass("text-destructive")
  })

  it("handles custom cancel text ('Don't allow') in small variants", async () => {
    const user = userEvent.setup()
    render(<AlertDialogSmall />)

    await user.click(screen.getByRole("button", { name: "Show Dialog" }))

    const cancelBtn = screen.getByRole("button", { name: "Don't allow" })
    const allowBtn = screen.getByRole("button", { name: "Allow" })

    expect(cancelBtn).toBeInTheDocument()
    expect(allowBtn).toBeInTheDocument()

    await user.click(cancelBtn)
    await waitFor(() => {
      expect(screen.queryByRole("alertdialog")).not.toBeInTheDocument()
    })
  })
})
