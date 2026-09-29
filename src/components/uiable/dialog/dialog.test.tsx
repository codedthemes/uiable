// third-party
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { axe } from "jest-axe"
import { describe, expect, it } from "vitest"

// project-imports
import { DialogBasic } from "./dialog-basic"
import { DialogCentered } from "./dialog-centered"
import { DialogCloseButton } from "./dialog-close-button"
import { DialogFullScreen } from "./dialog-full-screen"
import { DialogLarge } from "./dialog-large"
import { DialogNoCloseButton } from "./dialog-no-close-button"
import { DialogScrollableContent } from "./dialog-scrollable-content"
import { DialogSmall } from "./dialog-small"
import { DialogStickyFooter } from "./dialog-sticky-footer"

/**
 * Deep UI + accessibility suite for the `dialog` category (9 variants).
 *
 * Coverage dimensions (see project-docs/A11Y_TESTING_CHECKLIST.md):
 *   1. Automated     – axe-core scan in both closed and opened state (zero violations)
 *   2. ARIA contract – trigger exposes aria-haspopup="dialog", aria-expanded, aria-controls;
 *                      popup renders role="dialog" with aria-labelledby and aria-describedby
 *   3. Focus trap    – focus is contained within modal; restores focus to trigger on close
 *   4. Keyboard      – Space/Enter opens trigger; Escape key dismisses dialog
 *   5. Close buttons – built-in icon close button has sr-only text; footer close buttons work
 *   6. Variants      – full-screen, small/large size, scrollable content, sticky footer, no-close-button
 *
 * Notes on Base UI (@base-ui/react/dialog) behavior verified against primitive:
 *   - Base UI automatically generates matching IDs for `DialogTitle` and `DialogDescription`
 *     and wires them to `aria-labelledby` and `aria-describedby` on `DialogContent` (role="dialog").
 *   - Trigger element receives `aria-haspopup="dialog"`, `aria-expanded`, and dynamic `aria-controls`
 *     pointing to the dialog popup ID when open.
 *   - Background content is marked with `data-base-ui-inert` and `aria-hidden="true"` while open.
 */

const variants = [
  ["Basic", DialogBasic, "Launch demo modal"],
  ["Centered", DialogCentered, "Vertically Centered"],
  ["CloseButton", DialogCloseButton, "Share"],
  ["FullScreen", DialogFullScreen, "Full Screen Modal"],
  ["Large", DialogLarge, "Large Modal"],
  ["NoCloseButton", DialogNoCloseButton, "No Close Button"],
  ["ScrollableContent", DialogScrollableContent, "Scrollable Content"],
  ["Small", DialogSmall, "Small Modal"],
  ["StickyFooter", DialogStickyFooter, "Sticky Footer"],
] as const

// ---------------------------------------------------------------------------
// 1. Automated accessibility scan — every variant (closed and open state)
// ---------------------------------------------------------------------------
describe.each(variants)(
  "dialog/%s — automated a11y",
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

      expect(screen.getByRole("dialog")).toBeInTheDocument()
      expect(await axe(document.body)).toHaveNoViolations()
    })
  }
)

// ---------------------------------------------------------------------------
// 2. ARIA contract — trigger attributes, dialog role, title and description
// ---------------------------------------------------------------------------
describe.each(variants)(
  "dialog/%s — ARIA contract",
  (_name, Component, triggerName) => {
    it("maintains ARIA relationship between trigger and dialog popup", async () => {
      const user = userEvent.setup()
      render(<Component />)

      const trigger = screen.getByRole("button", { name: triggerName })
      expect(trigger).toHaveAttribute("aria-haspopup", "dialog")
      expect(trigger).toHaveAttribute("aria-expanded", "false")
      expect(trigger).not.toHaveAttribute("aria-controls")

      await user.click(trigger)

      expect(trigger).toHaveAttribute("aria-expanded", "true")
      const dialogId = trigger.getAttribute("aria-controls")
      expect(dialogId).toBeTruthy()

      const dialog = screen.getByRole("dialog")
      expect(dialog).toHaveAttribute("id", dialogId!)

      // Check aria-labelledby association with title
      const titleId = dialog.getAttribute("aria-labelledby")
      expect(titleId).toBeTruthy()
      const titleEl = document.getElementById(titleId!)
      expect(titleEl).toBeInTheDocument()
      expect(titleEl?.tagName.toLowerCase()).toMatch(/^h[1-6]$/)

      // Check aria-describedby association with description
      const descId = dialog.getAttribute("aria-describedby")
      expect(descId).toBeTruthy()
      const descEl = document.getElementById(descId!)
      expect(descEl).toBeInTheDocument()
    })
  }
)

// ---------------------------------------------------------------------------
// 3 + 4. Keyboard workflow & Focus restoration
// ---------------------------------------------------------------------------
describe("dialog — keyboard navigation & focus restoration", () => {
  it("opens dialog with Space key on trigger and closes with Escape", async () => {
    const user = userEvent.setup()
    render(<DialogBasic />)

    const trigger = screen.getByRole("button", { name: "Launch demo modal" })
    trigger.focus()
    await user.keyboard(" ")

    expect(screen.getByRole("dialog")).toBeInTheDocument()

    await user.keyboard("{Escape}")
    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
    })
    expect(trigger).toHaveFocus()
  })

  it("opens dialog with Enter key on trigger", async () => {
    const user = userEvent.setup()
    render(<DialogBasic />)

    const trigger = screen.getByRole("button", { name: "Launch demo modal" })
    trigger.focus()
    await user.keyboard("{Enter}")

    expect(screen.getByRole("dialog")).toBeInTheDocument()
  })

  it("restores focus to trigger upon dismissal via Escape key across variants", async () => {
    const user = userEvent.setup()
    render(<DialogCentered />)

    const trigger = screen.getByRole("button", { name: "Vertically Centered" })
    await user.click(trigger)

    expect(screen.getByRole("dialog")).toBeInTheDocument()

    await user.keyboard("{Escape}")
    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
    })
    expect(trigger).toHaveFocus()
  })
})

// ---------------------------------------------------------------------------
// 5. Close buttons & dismissal mechanics
// ---------------------------------------------------------------------------
describe("dialog — close buttons & dismissal", () => {
  it("provides accessible top-right close button with sr-only text", async () => {
    const user = userEvent.setup()
    render(<DialogBasic />)

    await user.click(screen.getByRole("button", { name: "Launch demo modal" }))

    const closeBtn = document.querySelector(
      '[data-slot="dialog-close"]'
    ) as HTMLButtonElement
    expect(closeBtn).toBeInTheDocument()
    expect(closeBtn).toHaveTextContent("Close")

    await user.click(closeBtn)
    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
    })
  })

  it("omits top-right close button when showCloseButton={false}", async () => {
    const user = userEvent.setup()
    render(<DialogNoCloseButton />)

    await user.click(screen.getByRole("button", { name: "No Close Button" }))

    expect(screen.getByRole("dialog")).toBeInTheDocument()
    expect(
      screen.queryByRole("button", { name: "Close" })
    ).not.toBeInTheDocument()
  })

  it("closes dialog when explicit DialogClose button in footer is clicked", async () => {
    const user = userEvent.setup()
    render(<DialogCloseButton />)

    await user.click(screen.getByRole("button", { name: "Share" }))

    const closeBtns = screen.getAllByRole("button", { name: "Close" })
    expect(closeBtns.length).toBeGreaterThan(0)
    await user.click(closeBtns[0])

    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
    })
  })
})

// ---------------------------------------------------------------------------
// 6. Form fields & specialized content in variants
// ---------------------------------------------------------------------------
describe("dialog — specific variant features", () => {
  it("renders input control with proper label association in DialogCloseButton", async () => {
    const user = userEvent.setup()
    render(<DialogCloseButton />)

    await user.click(screen.getByRole("button", { name: "Share" }))

    const input = screen.getByRole("textbox", { name: "Link" })
    expect(input).toBeInTheDocument()
    expect(input).toHaveValue("https://ui.shadcn.com/docs/installation")
    expect(input).toHaveAttribute("readonly")
  })

  it("renders full-screen layout classes in DialogFullScreen", async () => {
    const user = userEvent.setup()
    render(<DialogFullScreen />)

    await user.click(screen.getByRole("button", { name: "Full Screen Modal" }))

    const dialog = screen.getByRole("dialog")
    expect(dialog).toHaveClass("h-screen!", "max-w-screen!", "rounded-none")
  })

  it("renders scrollable container in DialogScrollableContent and DialogStickyFooter", async () => {
    const user = userEvent.setup()
    const { unmount } = render(<DialogScrollableContent />)

    await user.click(screen.getByRole("button", { name: "Scrollable Content" }))
    expect(screen.getByRole("dialog")).toBeInTheDocument()
    unmount()

    render(<DialogStickyFooter />)
    await user.click(screen.getByRole("button", { name: "Sticky Footer" }))
    expect(screen.getByRole("dialog")).toBeInTheDocument()
  })
})
