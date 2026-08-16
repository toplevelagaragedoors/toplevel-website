import { useEffect, useRef } from 'react';

/**
 * Infinite horizontal marquee on a native scroll container.
 *
 * Native overflow-x is what makes finger-swipe on mobile/iPad and two-finger
 * trackpad scrolling work with no code - the browser already handles them. On
 * top of that this adds a slow auto-drift, seamless wrapping at the halfway
 * point, and pointer-drag for mouse users.
 *
 * The content must be duplicated an even number of times, so that scrolling by
 * exactly half the track lands on identical content and the jump is invisible.
 */
export default function useMarquee({ speed = 42, dragSelector = 'a' } = {}) {
  const railRef = useRef(null);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return undefined;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf = 0;
    let paused = false;
    let idleTimer = 0;
    let half = 0;

    // Chromium quantises scrollLeft, so a sub-pixel increment rounds straight
    // back down and the rail never moves. Track position as a float instead.
    let pos = rail.scrollLeft;
    let lastTs = 0;

    const measure = () => {
      half = rail.scrollWidth / 2;
      if (half > 0 && rail.scrollLeft === 0) {
        rail.scrollLeft = 1;
        pos = 1;
      }
    };

    const wrap = () => {
      if (half <= 0) return;
      if (rail.scrollLeft >= half) {
        rail.scrollLeft -= half;
        pos = rail.scrollLeft;
      } else if (rail.scrollLeft <= 0) {
        rail.scrollLeft += half;
        pos = rail.scrollLeft;
      }
    };

    const sync = () => {
      pos = rail.scrollLeft;
    };

    const tick = (now) => {
      raf = requestAnimationFrame(tick);
      const dt = lastTs ? Math.min((now - lastTs) / 1000, 0.05) : 0;
      lastTs = now;
      if (!paused) {
        pos += speed * dt;
        rail.scrollLeft = pos;
      }
      wrap();
    };

    // Motion yields to real interaction only, then resumes once the user stops.
    // Note it deliberately does not pause on hover: these rails are full-bleed
    // and tall, so the pointer sits over them almost permanently on desktop.
    const nudgePause = (ms = 2200) => {
      paused = true;
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        paused = false;
      }, ms);
    };

    let dragging = false;
    let startX = 0;
    let startScroll = 0;
    let moved = 0;

    const onDown = (e) => {
      if (e.pointerType === 'touch') return; // native touch scrolling handles this
      dragging = true;
      moved = 0;
      startX = e.clientX;
      startScroll = rail.scrollLeft;
      paused = true;
    };

    const onMove = (e) => {
      if (!dragging) return;
      const dx = e.clientX - startX;
      moved = Math.abs(dx);
      // Only take pointer capture once this is genuinely a drag; capturing on
      // pointerdown would retarget the click and swallow taps on the cards.
      if (moved > 6 && !rail.hasPointerCapture(e.pointerId)) {
        rail.classList.add('is-dragging');
        rail.setPointerCapture(e.pointerId);
      }
      rail.scrollLeft = startScroll - dx;
      wrap();
      sync();
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
      nudgePause();
    };

    // A drag that ends on a link should not follow it
    const onClick = (e) => {
      if (moved > 6 && dragSelector && e.target.closest(dragSelector)) {
        e.preventDefault();
        e.stopPropagation();
      }
      moved = 0;
    };

    const onWheel = () => {
      nudgePause();
      sync();
    };
    const onFocusIn = () => {
      paused = true;
    };
    const onFocusOut = () => {
      paused = false;
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(rail);

    rail.addEventListener('pointerdown', onDown);
    rail.addEventListener('pointermove', onMove);
    rail.addEventListener('pointerup', onUp);
    rail.addEventListener('pointercancel', onUp);
    rail.addEventListener('click', onClick, true);
    rail.addEventListener('scroll', wrap, { passive: true });
    rail.addEventListener('wheel', onWheel, { passive: true });
    rail.addEventListener('touchstart', () => nudgePause(3000), { passive: true });
    rail.addEventListener('touchmove', sync, { passive: true });
    rail.addEventListener('focusin', onFocusIn);
    rail.addEventListener('focusout', onFocusOut);

    if (!reduce) raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(idleTimer);
      ro.disconnect();
      rail.removeEventListener('pointerdown', onDown);
      rail.removeEventListener('pointermove', onMove);
      rail.removeEventListener('pointerup', onUp);
      rail.removeEventListener('pointercancel', onUp);
      rail.removeEventListener('click', onClick, true);
      rail.removeEventListener('scroll', wrap);
      rail.removeEventListener('wheel', onWheel);
      rail.removeEventListener('focusin', onFocusIn);
      rail.removeEventListener('focusout', onFocusOut);
    };
  }, [speed, dragSelector]);

  return railRef;
}
