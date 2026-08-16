import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import Reveal from './Reveal.jsx';
import useMarquee from './useMarquee.js';
import { projects as PHOTOS } from '../data/site.js';

const COUNT = PHOTOS.length;
const COPIES = 2; // must be even so the halfway wrap lands on identical content

export default function GalleryRail() {
  const railRef = useMarquee({ speed: 34, dragSelector: 'button' });
  const [open, setOpen] = useState(null);

  // Escape closes, arrows step through - a full-screen viewer that traps you
  // with only a mouse target is worse than no viewer.
  useEffect(() => {
    if (!open) return undefined;
    document.body.classList.add('is-locked');
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(null);
      if (e.key === 'ArrowRight') setOpen((n) => (n % COUNT) + 1);
      if (e.key === 'ArrowLeft') setOpen((n) => ((n - 2 + COUNT) % COUNT) + 1);
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.classList.remove('is-locked');
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const tiles = [];
  for (let c = 0; c < COPIES; c += 1) {
    PHOTOS.forEach((ph, i) => tiles.push({ ...ph, i, key: `${c}-${ph.n}`, clone: c > 0 }));
  }

  return (
    <section className="section gallerysec" id="gallery">
      <div className="wrap">
        <Reveal className="svhead">
          <div className="fxeyebrow">Recent projects</div>
          <h2>
            Doors we have <span className="accent">finished</span>
          </h2>
          <div className="btn-row" style={{ justifyContent: 'center' }}>
            <Link to="/projects" className="btn btn--fx">
              See all projects <span className="plus">+</span>
            </Link>
          </div>
        </Reveal>
      </div>

      <div className="gallery" ref={railRef}>
        <ul className="gallery__track">
          {tiles.map((t) => (
            <li className="gtile" key={t.key} aria-hidden={t.clone || undefined}>
              <button
                type="button"
                onClick={() => setOpen(t.i + 1)}
                tabIndex={t.clone ? -1 : undefined}
                aria-label={`Enlarge: ${t.caption}`}
              >
                <img
                  src={`/img/gallery/g${String(t.n).padStart(2, '0')}-460.webp`}
                  srcSet={`/img/gallery/g${String(t.n).padStart(2, '0')}-460.webp 460w, /img/gallery/g${String(t.n).padStart(2, '0')}-760.webp 760w`}
                  sizes="280px"
                  alt={t.clone ? '' : t.caption}
                  width="460"
                  height="613"
                  loading="lazy"
                  decoding="async"
                  draggable="false"
                />
                <span className="gtile__cap">{t.caption}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {open &&
        typeof document !== 'undefined' &&
        createPortal(
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={PHOTOS[open - 1].caption}
          onClick={() => setOpen(null)}
        >
          <button
            type="button"
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((n) => ((n - 2 + COUNT) % COUNT) + 1);
            }}
            aria-label="Previous photo"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 6-6 6 6 6" />
            </svg>
          </button>

          <button
            type="button"
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((n) => (n % COUNT) + 1);
            }}
            aria-label="Next photo"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 6 6 6-6 6" />
            </svg>
          </button>

          <button type="button" className="modal__close" onClick={() => setOpen(null)} aria-label="Close">
            <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          </button>
          <figure onClick={(e) => e.stopPropagation()}>
            <img
              src={`/img/gallery/g${String(PHOTOS[open - 1].n).padStart(2, '0')}-full.webp`}
              alt={PHOTOS[open - 1].caption}
            />
            <figcaption>
              {PHOTOS[open - 1].caption}
              <b>
                {open} / {COUNT}
              </b>
            </figcaption>
          </figure>
        </div>,
          document.body
        )}

    </section>
  );
}
