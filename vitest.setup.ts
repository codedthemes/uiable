// third-party
import "@testing-library/jest-dom/vitest"
import { cleanup } from "@testing-library/react"
import { toHaveNoViolations } from "jest-axe"
import { afterEach, expect, vi } from "vitest"

// jest-axe custom matcher -> `expect(...).toHaveNoViolations()`
// `toHaveNoViolations` is already a { toHaveNoViolations } matcher object.
expect.extend(toHaveNoViolations)

// Unmount React trees between tests to avoid cross-test DOM leakage.
afterEach(() => {
  cleanup()
})

// --- jsdom polyfills required by Base UI primitives ---------------------

// Base UI uses ResizeObserver to measure collapsible panel heights.
if (!("ResizeObserver" in globalThis)) {
  globalThis.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  } as unknown as typeof ResizeObserver
}

// matchMedia (prefers-reduced-motion, responsive hooks).
if (!window.matchMedia) {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: (query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }),
  })
}

// jsdom does not implement layout; stub the animation/measurement APIs
// Base UI touches so open/close transitions do not throw.
if (!Element.prototype.scrollIntoView) {
  Element.prototype.scrollIntoView = vi.fn()
}
