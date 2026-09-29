// third-party
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { axe } from "jest-axe"
import { describe, expect, it } from "vitest"

// project-imports
import AccordionBasic from "./accordion-basic"
import AccordionBorders from "./accordion-borders"
import AccordionCard from "./accordion-card"
import AccordionDisabled from "./accordion-disabled"
import AccordionFlush from "./accordion-flush"
import AccordionMultiple from "./accordion-multiple"

/**
 * Deep UI + accessibility suite for the `accordion` category (6 variants).
 *
 * Coverage dimensions (see project-docs/A11Y_TESTING_CHECKLIST.md):
 *   1. Automated  – axe-core scan, zero violations per variant
 *   2. ARIA       – trigger is a button exposing aria-expanded; aria-controls
 *                   references the panel while open
 *   3. State      – defaultValue opens the correct panel on mount
 *   4. Keyboard   – Enter/Space toggles; Tab moves focus between triggers
 *   5. Modes      – single (default) collapses siblings; `multiple` keeps them open
 *   6. Disabled   – disabled items are exposed to AT and cannot be toggled
 *
 * Notes on Base UI (@base-ui/react) behavior verified against the primitive:
 *   - `aria-controls` is emitted only while a panel is open
 *     (`open ? panelId : undefined`), so it is asserted only on expanded triggers.
 *   - Triggers are all `tabindex=0` and navigated with Tab, not arrow-key roving.
 *     Arrow-key navigation is optional under the WAI-ARIA Accordion pattern, so
 *     its absence is not a defect.
 */

const variants = [
  ["Basic", AccordionBasic],
  ["Borders", AccordionBorders],
  ["Card", AccordionCard],
  ["Disabled", AccordionDisabled],
  ["Flush", AccordionFlush],
  ["Multiple", AccordionMultiple],
] as const

// ---------------------------------------------------------------------------
// 1. Automated accessibility scan — every variant, zero violations
// ---------------------------------------------------------------------------
describe.each(variants)("accordion/%s — automated a11y", (_name, Component) => {
  it("has no axe violations", async () => {
    const { container } = render(<Component />)
    expect(await axe(container)).toHaveNoViolations()
  })
})

// ---------------------------------------------------------------------------
// 2. ARIA contract — shared across all variants
// ---------------------------------------------------------------------------
describe.each(variants)("accordion/%s — ARIA contract", (_name, Component) => {
  it("exposes each trigger as a button advertising its expanded state", () => {
    render(<Component />)
    const triggers = screen.getAllByRole("button")
    expect(triggers.length).toBeGreaterThan(0)

    for (const trigger of triggers) {
      // Every accordion trigger must advertise its expanded state...
      expect(trigger).toHaveAttribute("aria-expanded")
      // ...and, while open, reference the panel it controls.
      if (trigger.getAttribute("aria-expanded") === "true") {
        expect(trigger).toHaveAttribute("aria-controls")
      }
    }
  })
})

// ---------------------------------------------------------------------------
// 3 + 4 + 5. State, keyboard, and single/multiple modes (Basic variant)
// ---------------------------------------------------------------------------
describe("accordion/Basic — state, keyboard & single-select", () => {
  it("opens the panel named by defaultValue on mount", () => {
    render(<AccordionBasic />)
    const [first, second] = screen.getAllByRole("button")
    expect(first).toHaveAttribute("aria-expanded", "true")
    expect(second).toHaveAttribute("aria-expanded", "false")
  })

  it("toggles a panel with Enter and Space", async () => {
    const user = userEvent.setup()
    render(<AccordionBasic />)
    const [first] = screen.getAllByRole("button")

    first.focus()
    await user.keyboard("{Enter}")
    expect(first).toHaveAttribute("aria-expanded", "false")

    await user.keyboard(" ")
    expect(first).toHaveAttribute("aria-expanded", "true")
  })

  it("collapses the open sibling when another opens (single mode)", async () => {
    const user = userEvent.setup()
    render(<AccordionBasic />)
    const [first, second] = screen.getAllByRole("button")

    await user.click(second)
    expect(second).toHaveAttribute("aria-expanded", "true")
    expect(first).toHaveAttribute("aria-expanded", "false")
  })

  it("moves focus between triggers with the Tab key", async () => {
    const user = userEvent.setup()
    render(<AccordionBasic />)
    const [first, second, third] = screen.getAllByRole("button")

    await user.tab()
    expect(first).toHaveFocus()

    await user.tab()
    expect(second).toHaveFocus()

    await user.tab()
    expect(third).toHaveFocus()
  })
})

// ---------------------------------------------------------------------------
// 5b. Multiple mode keeps several panels open simultaneously
// ---------------------------------------------------------------------------
describe("accordion/Multiple — multi-select", () => {
  it("keeps a previously opened panel open when a sibling opens", async () => {
    const user = userEvent.setup()
    render(<AccordionMultiple />)
    const [first, second] = screen.getAllByRole("button")

    expect(first).toHaveAttribute("aria-expanded", "true") // defaultValue
    await user.click(second)

    expect(first).toHaveAttribute("aria-expanded", "true")
    expect(second).toHaveAttribute("aria-expanded", "true")
  })
})

// ---------------------------------------------------------------------------
// 6. Disabled item is exposed to AT and cannot be toggled
// ---------------------------------------------------------------------------
describe("accordion/Disabled — disabled item semantics", () => {
  it("marks the disabled trigger as unavailable to assistive tech", () => {
    render(<AccordionDisabled />)
    const disabled = screen.getByRole("button", {
      name: /premium feature information/i,
    })
    // Base UI exposes the disabled state via `disabled` and/or aria-disabled.
    const isDisabled =
      (disabled as HTMLButtonElement).disabled ||
      disabled.getAttribute("aria-disabled") === "true"
    expect(isDisabled).toBe(true)
  })

  it("does not open the panel when the disabled trigger is clicked", async () => {
    const user = userEvent.setup()
    render(<AccordionDisabled />)
    const disabled = screen.getByRole("button", {
      name: /premium feature information/i,
    })

    await user.click(disabled)
    expect(disabled).toHaveAttribute("aria-expanded", "false")
  })
})
