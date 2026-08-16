import { useCallback, useEffect, useRef, useState } from 'react';
import LeadForm from './LeadForm.jsx';
import { Check } from './Icons.jsx';
import { biz } from '../data/site.js';

const KEY = 'tlgd_estimate_shown';

/**
 * Fires on: exit intent (pointer leaving the top of the viewport), reaching
 * ~88% scroll depth, or after 50 seconds on mobile where exit intent has no
 * equivalent. Shows once per browser session.
 */
export default function EstimateModal({ armed = true }) {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef(null);
  const lastFocus = useRef(null);

  const show = useCallback(() => {
    try {
      if (sessionStorage.getItem(KEY)) return;
      sessionStorage.setItem(KEY, '1');
    } catch (e) {
      /* private mode - show anyway, once per page load */
    }
    lastFocus.current = document.activeElement;
    setOpen(true);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    if (lastFocus.current && lastFocus.current.focus) lastFocus.current.focus();
  }, []);

  useEffect(() => {
    if (!armed) return;
    let done = false;
    const fire = () => {
      if (done) return;
      done = true;
      show();
    };

    const onLeave = (e) => {
      if (e.clientY <= 4 && !e.relatedTarget) fire();
    };
    const onScroll = () => {
      const scrolled = window.scrollY + window.innerHeight;
      const total = document.documentElement.scrollHeight;
      if (total > 0 && scrolled / total > 0.88) fire();
    };

    document.addEventListener('mouseout', onLeave);
    window.addEventListener('scroll', onScroll, { passive: true });
    const isTouch = window.matchMedia('(hover: none)').matches;
    const timer = isTouch ? setTimeout(fire, 50000) : null;

    return () => {
      document.removeEventListener('mouseout', onLeave);
      window.removeEventListener('scroll', onScroll);
      if (timer) clearTimeout(timer);
    };
  }, [armed, show]);

  // Lock scroll, trap focus, close on Escape
  useEffect(() => {
    if (!open) return;
    document.body.classList.add('is-locked');
    const node = dialogRef.current;
    const focusables = () =>
      node.querySelectorAll('a[href], button:not([disabled]), input, select, textarea');
    const first = focusables()[0];
    if (first) first.focus();

    const onKey = (e) => {
      if (e.key === 'Escape') {
        close();
        return;
      }
      if (e.key !== 'Tab') return;
      const list = focusables();
      if (!list.length) return;
      const a = list[0];
      const z = list[list.length - 1];
      if (e.shiftKey && document.activeElement === a) {
        e.preventDefault();
        z.focus();
      } else if (!e.shiftKey && document.activeElement === z) {
        e.preventDefault();
        a.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.classList.remove('is-locked');
      document.removeEventListener('keydown', onKey);
    };
  }, [open, close]);

  if (!open) return null;

  return (
    <div className="modal-root">
      <div className="modal-root__scrim" onClick={close} />
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="estimate-title"
        ref={dialogRef}
      >
        <button type="button" className="modal__close" onClick={close} aria-label="Close">
          <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="m6 6 12 12M18 6 6 18" />
          </svg>
        </button>

        <aside className="modal__aside">
          <div>
            <div className="modal__kicker">Before you go</div>
            <ul className="modal__ul">
              <li>
                <Check size={15} /> Free written estimate, no obligation
              </li>
              <li>
                <Check size={15} /> Diagnostic fee waived when you approve the repair
              </li>
              <li>
                <Check size={15} /> Licensed, insured and bonded
              </li>
              <li>
                <Check size={15} /> Same-day service across the Charleston area
              </li>
            </ul>
          </div>
          <img src="/img/door-640.webp" alt="" width="640" height="397" loading="lazy" />
        </aside>

        <div className="modal__body">
          <h2 id="estimate-title">Get your free estimate</h2>
          <p className="modal__sub">
            Two minutes now saves a week of a door that will not close. Tell us what is happening and we
            will call you back with a real number.
          </p>
          <LeadForm formName="free-estimate" compact />
        </div>
      </div>
    </div>
  );
}
