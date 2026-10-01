// third-party
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { axe } from "jest-axe"
import { describe, expect, it } from "vitest"

// project-imports
import { HoverCardSides } from "./hover-card-sides"

/**
 * Deep UI + accessibility suite for the `hover-card` category (1 variant).
 *
 * Coverage dimensions (see project-docs/A11Y_TESTING_CHECKLIST.md):
 *   1. Automated     – axe-core scan when closed and when open (zero violations)
 *   2. ARIA contract – trigger exposes accessible name; popup renders on hover/focus
 *   3. Mouse/Hover   – opening popup on pointer hover
 *   4. Keyboard/Focus– opening popup when trigger receives keyboard focus
 *   5. Directional   – placement across left, top, bottom, and right sides
 */

describe("hover-card — automated a11y & behavior", () => {
  it("has zero axe violations when closed", async () => {
    const { container } = render(<HoverCardSides />)
    expect(await axe(container)).toHaveNoViolations()
  })

  it("renders 4 directional trigger buttons (left, top, bottom, right)", () => {
    render(<HoverCardSides />)
    const buttons = screen.getAllByRole("button")
    expect(buttons.map((b) => b.textContent)).toEqual([
      "left",
      "top",
      "bottom",
      "right",
    ])
  })

  it("opens hover card popup on pointer hover with zero axe violations", async () => {
    const user = userEvent.setup()
    render(<HoverCardSides />)

    const trigger = screen.getByRole("button", { name: "left" })
    await user.hover(trigger)

    expect(
      await screen.findByText(/This hover card appears on the left side/i)
    ).toBeInTheDocument()
    expect(
      await axe(document.body, { rules: { region: { enabled: false } } })
    ).toHaveNoViolations()
  })

  it("opens hover card popup when trigger receives keyboard focus (focus parity)", async () => {
    render(<HoverCardSides />)

    const trigger = screen.getByRole("button", { name: "top" })
    trigger.focus()

    expect(
      await screen.findByText(/This hover card appears on the top side/i)
    ).toBeInTheDocument()
  })
})
