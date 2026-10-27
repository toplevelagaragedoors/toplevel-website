import { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal.jsx';
import ReviewWidget from './ReviewWidget.jsx';
import { reviews } from '../data/site.js';

// Genuine five-star reviews, shown as general company testimonials (not tied to
// the specific service on the page). No Review/AggregateRating schema is added.
function Stars() {
  return (
    <span className="svc-stars" role="img" aria-label="Rated 5 out of 5 stars">
      <span aria-hidden="true">★★★★★</span>
    </span>
  );
}

export default function Testimonials() {
  const trackRef = useRef(null);
  const textRefs = useRef([]);
  const [expanded, setExpanded] = useState({});
  const [overflowing, setOverflowing] = useState([]);

  // "Read more" only appears where the clamped text is actually truncated.
  // Measured after mount (and on resize); SSR renders the full text clamped,
  // with no buttons, so crawlers still get the complete review text.
  useEffect(() => {
    const measure = () => {
      setOverflowing((prev) =>
        textRefs.current.map((el, i) => {
          if (expanded[i]) return prev[i] ?? true;
          return el ? el.scrollHeight > el.clientHeight + 2 : false;
        })
      );
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [expanded]);

  const scrollByCard = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.querySelector('.svc-tslide');
    const styles = getComputedStyle(track);
    const gap = parseFloat(styles.columnGap || styles.gap || '18') || 18;
    const step = slide ? slide.offsetWidth + gap : track.clientWidth / 3;
    track.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  const toggle = (i) => setExpanded((e) => ({ ...e, [i]: !e[i] }));

  return (
    <section className="section section--chalk" id="testimonials">
      <div className="wrap">
        <div className="svc-thead">
          <Reveal className="sechead" style={{ marginBottom: 0 }}>
            <div className="eyebrow">Reviews</div>
            <h2>Customer Testimonials</h2>
          </Reveal>
          <div className="svc-thead__right">
            <ReviewWidget />
            <div className="svc-tnav">
              <button type="button" className="svc-tbtn" aria-label="Previous testimonials" onClick={() => scrollByCard(-1)}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15 6-6 6 6 6" />
                </svg>
              </button>
              <button type="button" className="svc-tbtn" aria-label="Next testimonials" onClick={() => scrollByCard(1)}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="svc-tcarousel" ref={trackRef} role="region" aria-label="Customer testimonials">
          {reviews.map((r, i) => {
            const open = !!expanded[i];
            return (
              <div className="svc-tslide" key={r.name}>
                <article className="svc-review">
                  <Stars />
                  <p
                    className={`svc-review__text${open ? '' : ' is-clamped'}`}
                    ref={(el) => {
                      textRefs.current[i] = el;
                    }}
                  >
                    {r.text}
                  </p>
                  {overflowing[i] && (
                    <button type="button" className="svc-review__more" aria-expanded={open} onClick={() => toggle(i)}>
                      {open ? 'Read less' : 'Read more'}
                    </button>
                  )}
                  <p className="svc-review__name">{r.name}</p>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
