import { useRef } from 'react';
import Reveal from './Reveal.jsx';
import { homeFaqs } from '../data/site.js';

// Positions/sizes for the floating question marks, tuned so they cluster above
// the door rather than colliding with it.
const MARKS = [
  { x: 9, y: 10, s: 2.4, d: 0 },
  { x: 26, y: 1, s: 3.6, d: 0.6 },
  { x: 47, y: 7, s: 5, d: 1.2 },
  { x: 68, y: 0, s: 3.3, d: 0.3 },
  { x: 86, y: 12, s: 2.2, d: 0.9 },
  { x: 62, y: 22, s: 2.7, d: 1.5 },
  { x: 18, y: 26, s: 1.9, d: 1.8 },
];

export default function FaqSection() {
  const listRef = useRef(null);

  // <details name="..."> would do this natively, but support is still recent
  // enough that handling it here is the safer option.
  const closeSiblings = (e) => {
    if (!e.target.open || !listRef.current) return;
    listRef.current.querySelectorAll('details[open]').forEach((d) => {
      if (d !== e.target) d.open = false;
    });
  };

  return (
    <section className="section faqsec" id="faq">
      <div className="wrap faqsec__grid">
        <Reveal className="faqsec__body">
          <div className="why__eyebrow">
            <i />
            Common questions
            <i />
          </div>

          <h2>
            Find answers to the most common <span className="accent">customer queries</span>
          </h2>

          <div className="faqcards" ref={listRef}>
            {homeFaqs.map((f, i) => (
              <details key={f.q} open={i === 0} onToggle={closeSiblings}>
                <summary>
                  <span>{f.q}</span>
                  <i aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m9 6 6 6-6 6" />
                    </svg>
                  </i>
                </summary>
                <div className="faqcards__body">{f.a}</div>
              </details>
            ))}
          </div>
        </Reveal>

        <div className="faqsec__media" aria-hidden="true">
          <div className="faqsec__marks">
            {MARKS.map((m) => (
              <span
                key={`${m.x}-${m.y}`}
                style={{
                  left: `${m.x}%`,
                  top: `${m.y}%`,
                  fontSize: `${m.s}rem`,
                  animationDelay: `${m.d}s`,
                }}
              >
                ?
              </span>
            ))}
          </div>

          <img
            src="/img/door-cutout-1200.webp"
            srcSet="/img/door-cutout-520.webp 520w, /img/door-cutout-760.webp 760w, /img/door-cutout-1200.webp 1200w"
            sizes="(min-width: 1000px) 44vw, 88vw"
            alt=""
            width="1200"
            height="744"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
