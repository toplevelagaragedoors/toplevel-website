import { useEffect, useRef } from 'react';

/**
 * Infinite horizontal marquee.
 *
 * Driven by `transform: translate3d()` rather than `scrollLeft`. Browsers round
 * scrollLeft to whole device pixels, so at these speeds (well under 1px per
 * frame) the drift advanced in uneven 0/1px steps and visibly juddered.
 * A transform interpolates sub-pixel and runs on the compositor, so it is
 * smooth at any speed.
 *
 * Pointer events cover mouse and touch, so drag-to-scrub works on phones too.
 * `touch-action: pan-y` on the rail leaves vertical page scrolling alone.
 *
 * The track must contain an even number of copies of the content: wrapping by
 * exactly half its width lands on identical items, so the seam is invisible.
 */
export default function useMarquee({ speed = 42, dragSelector = 'a' } = {}) {
  const railRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const rail = railRef.current;
    const track = trackRef.current;
    if (!rail || !track) return undefined;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let raf = 0;
    let paused = false;
    let idle = 0;
    let half = 0;
    let pos = 0;
    let last = 0;

    const measure = () => {
      half = track.scrollWidth / 2;
    };

    const apply = () => {
      track.style.transform = `translate3d(${pos.toFixed(2)}px, 0, 0)`;
    };

    const wrap = () => {
      if (half <= 0) return;
      if (pos <= -half) pos += half;
      else if (pos > 0) pos -= half;
    };

    const tick = (now) => {
      raf = requestAnimationFrame(tick);
      const dt = last ? Math.min((now - last) / 1000, 0.05) : 0;
      last = now;
      if (paused) return;
      pos -= speed * dt;
      wrap();
      apply();
    };

    // Motion yields to a real interaction, then resumes once the user stops.
    // It deliberately does not pause on hover: these rails are full-bleed and
    // tall, so on desktop the pointer sits over them almost permanently.
    const nudge = (ms = 2000) => {
      paused = true;
      clearTimeout(idle);
      idle = setTimeout(() => {
        paused = false;
      }, ms);
    };

    let dragging = false;
    let startX = 0;
    let startPos = 0;
    let moved = 0;

    const onDown = (e) => {
      dragging = true;
      moved = 0;
      startX = e.clientX;
      startPos = pos;
      paused = true;
      clearTimeout(idle);
    };

    const onMove = (e) => {
      if (!dragging) return;
      const dx = e.clientX - startX;
      moved = Math.abs(dx);
      // Only capture once this is clearly a drag, so a tap still reaches the
      // card underneath.
      if (moved > 6 && !rail.hasPointerCapture(e.pointerId)) {
        rail.classList.add('is-dragging');
        rail.setPointerCapture(e.pointerId);
      }
      pos = startPos + dx;
      wrap();
      apply();
    };

    const onUp = (e) => {
      if (!dragging) return;
      dragging = false;
      rail.classList.remove('is-dragging');
      try {
        if (rail.hasPointerCapture(e.pointerId)) rail.releasePointerCapture(e.pointerId);
      } catch (err) {
        /* already released */
      }
      nudge();
    };

    // A drag that finishes on a link or button must not activate it
    const onClick = (e) => {
      if (moved > 6 && dragSelector && e.target.closest(dragSelector)) {
        e.preventDefault();
        e.stopPropagation();
      }
      moved = 0;
    };

    // Trackpads and shift-wheel send horizontal deltas; honour them
    const onWheel = (e) => {
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
      nudge();
      pos -= e.deltaX;
      wrap();
      apply();
    };

    const onFocusIn = () => {
      paused = true;
    };
    const onFocusOut = () => {
      paused = false;
    };

    measure();
    apply();
    const ro = new ResizeObserver(measure);
    ro.observe(track);

    rail.addEventListener('pointerdown', onDown);
    rail.addEventListener('pointermove', onMove);
    rail.addEventListener('pointerup', onUp);
    rail.addEventListener('pointercancel', onUp);
    rail.addEventListener('click', onClick, true);
    rail.addEventListener('wheel', onWheel, { passive: true });
    rail.addEventListener('focusin', onFocusIn);
    rail.addEventListener('focusout', onFocusOut);

    if (!reduce) raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(idle);
      ro.disconnect();
      rail.removeEventListener('pointerdown', onDown);
      rail.removeEventListener('pointermove', onMove);
      rail.removeEventListener('pointerup', onUp);
      rail.removeEventListener('pointercancel', onUp);
      rail.removeEventListener('click', onClick, true);
      rail.removeEventListener('wheel', onWheel);
      rail.removeEventListener('focusin', onFocusIn);
      rail.removeEventListener('focusout', onFocusOut);
    };
  }, [speed, dragSelector]);

  return { railRef, trackRef };
}
