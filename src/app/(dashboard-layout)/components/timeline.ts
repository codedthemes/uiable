// project-imports
import { lerp, progress } from "@/hooks/use-cycle-clock"

/**
 * Shared timeline shape for the cursor-click demo cards: cursor fades in,
 * glides to the target, "clicks" (state flips + ripple), holds, then
 * retreats and resets before the cycle repeats. All breakpoints are ms
 * offsets within `cycle`, kept proportional across presets below.
 */
export interface Timeline {
  cycle: number
  fadeIn: [number, number]
  moveIn: [number, number]
  click: number
  clickBounce: [number, number]
  leave: [number, number]
  reset: number
}

/** Default preset for the continuously-looping demo cards. */
export const LOOP_TIMELINE: Timeline = {
  cycle: 3400,
  fadeIn: [200, 500],
  moveIn: [500, 1300],
  click: 1300,
  clickBounce: [1300, 1460],
  leave: [2600, 2900],
  reset: 2650,
}

/**
 * Quick preset for hover-triggered cards — same proportions as
 * LOOP_TIMELINE, compressed so the click resolves almost immediately and
 * the whole loop reads as snappy rather than a slow ambient animation.
 */
export const HOVER_TIMELINE: Timeline = {
  cycle: 1100,
  fadeIn: [70, 160],
  moveIn: [160, 420],
  click: 420,
  clickBounce: [420, 470],
  leave: [840, 930],
  reset: 860,
}

/** Whether the target's "on/active" state should be true at time `t`. */
export function isActiveAt(t: number, timeline: Timeline = LOOP_TIMELINE) {
  return t >= timeline.click && t < timeline.reset
}

/** Cursor opacity, position offset (from start toward target) and scale. */
export function cursorState(
  t: number,
  start: { x: number; y: number },
  timeline: Timeline = LOOP_TIMELINE
) {
  const { fadeIn, moveIn, clickBounce, leave } = timeline

  let opacity = 0
  if (t < fadeIn[0]) opacity = 0
  else if (t < fadeIn[1]) opacity = progress(t, ...fadeIn)
  else if (t < leave[0]) opacity = 1
  else if (t < leave[1]) opacity = 1 - progress(t, ...leave)
  else opacity = 0

  let x = start.x
  let y = start.y
  if (t < moveIn[0]) {
    x = start.x
    y = start.y
  } else if (t < moveIn[1]) {
    const p = progress(t, ...moveIn)
    x = lerp(start.x, 0, p)
    y = lerp(start.y, 0, p)
  } else if (t < leave[0]) {
    x = 0
    y = 0
  } else if (t < leave[1]) {
    const p = progress(t, ...leave)
    x = lerp(0, start.x, p)
    y = lerp(0, start.y, p)
  }

  const bounceP = progress(t, ...clickBounce)
  const dip = bounceP > 0 && bounceP < 1 ? Math.sin(Math.PI * bounceP) : 0
  const scale = 1 - 0.18 * dip

  return { opacity, x, y, scale }
}

/** Ripple pulse opacity + scale, peaking just after the click moment. */
export function rippleState(t: number, timeline: Timeline = LOOP_TIMELINE) {
  const holdMs = timeline.cycle * 0.15
  const [a, b] = [timeline.click, timeline.click + holdMs]
  const p = progress(t, a, b)
  if (p <= 0 || p >= 1) return { opacity: 0, scale: 0.4 }
  const opacity =
    p < 0.2 ? lerp(0, 0.55, p / 0.2) : lerp(0.55, 0, (p - 0.2) / 0.8)
  const scale = lerp(0.4, 2.4, p)
  return { opacity, scale }
}

/** Brief press-down scale dip for the clicked element itself. */
export function pressScale(t: number, timeline: Timeline = LOOP_TIMELINE) {
  const p = progress(t, ...timeline.clickBounce)
  const dip = p > 0 && p < 1 ? Math.sin(Math.PI * p) : 0
  return 1 - 0.06 * dip
}

/**
 * Bundles the cursor + ripple + press trio derived from the same `t` — the
 * combination nearly every click-style demo needs, so callers can do
 * `const { cursor, ripple, press } = clickState(t, { x, y })` instead of
 * three separate calls.
 */
export function clickState(
  t: number,
  cursorStart: { x: number; y: number },
  timeline: Timeline = LOOP_TIMELINE
) {
  return {
    cursor: cursorState(t, cursorStart, timeline),
    ripple: rippleState(t, timeline),
    press: pressScale(t, timeline),
  }
}
