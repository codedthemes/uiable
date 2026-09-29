"use client"

import { useEffect, useState } from "react"

/**
 * Drives a repeating 0..cycleMs clock, used to derive every visual value
 * (cursor position/opacity, target checked/active state, ripple) as a pure
 * function of time — keeps a multi-part looping animation in sync without
 * juggling separate CSS animations and React state transitions.
 *
 * When `running` is false the clock holds at t=0 (every timeline in this
 * page resolves t=0 to its resting/idle pose) — and each time it flips back
 * to true the cycle restarts from the beginning, e.g. for hover-triggered
 * previews instead of a continuous background loop.
 */
export function useCycleClock(cycleMs: number, offsetMs = 0, running = true) {
  const [t, setT] = useState(0)

  useEffect(() => {
    if (!running) return

    const start = performance.now()
    // setInterval (not rAF) so the loop keeps advancing even when the tab
    // is backgrounded/hidden — rAF is fully paused in that case, which
    // would freeze these decorative, non-60fps-critical animations.
    const id = setInterval(() => {
      setT((performance.now() - start + offsetMs) % cycleMs)
    }, 50)
    return () => clearInterval(id)
  }, [cycleMs, offsetMs, running])

  // Resolve to the resting pose while paused instead of resetting state inside
  // the effect (which would trigger a cascading render). Each restart begins a
  // fresh cycle because the effect re-runs with a new `start` when `running`
  // flips back to true.
  return running ? t : 0
}

/** Linear progress of `t` between [from, to], clamped to [0, 1]. */
export function progress(t: number, from: number, to: number) {
  if (to === from) return t >= to ? 1 : 0
  return Math.min(1, Math.max(0, (t - from) / (to - from)))
}

/** Interpolates a single number between `a` and `b` by progress `p`. */
export function lerp(a: number, b: number, p: number) {
  return a + (b - a) * p
}
