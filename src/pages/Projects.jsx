import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import Reveal from '../components/Reveal.jsx';
import { CtaBand, Crumbs } from '../components/Blocks.jsx';
import { Phone } from '../components/Icons.jsx';
import { projects, biz } from '../data/site.js';
import { breadcrumbSchema } from '../lib/schema.js';

const pad = (n) => String(n).padStart(2, '0');

/**
 * Column spans for a 12-column grid. Rows of three cycle through widths so the
 * grid has rhythm instead of a uniform matrix; a short final row splits the
 * width evenly so it never leaves a hole.
 *
 * Spans stay between 3 and 5 because every source photo is 4:3 - a 4-span tile
 * is exactly that ratio and crops nothing, and the neighbours either side crop
 * only slightly.
 */
const ROW_PATTERNS = [
  [4, 4, 4],
  [5, 4, 3],
  [3, 4, 5],
];

function spansFor(total) {
  const out = [];
  for (let i = 0; i < total; i += 3) {
    const left = total - i;
    if (left === 1) out.push(12);
    else if (left === 2) out.push(6, 6);
    else out.push(...ROW_PATTERNS[(i / 3) % ROW_PATTERNS.length]);
  }
  return out;
}

export function ProjectsPage() {
  const trail = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
  ];

  const [open, setOpen] = useState(null);
  const count = projects.length;
  const spans = spansFor(count);

  // Escape closes, arrows step through - a full-screen viewer reachable only
  // by mouse is worse than no viewer.
  useEffect(() => {
    if (!open) return undefined;
    document.body.classList.add('is-locked');
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(null);
      if (e.key === 'ArrowRight') setOpen((n) => (n % count) + 1);
      if (e.key === 'ArrowLeft') setOpen((n) => ((n - 2 + count) % count) + 1);
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.classList.remove('is-locked');
      document.removeEventListener('keydown', onKey);
    };
  }, [open, count]);

  return (
    <>
      <Seo
        title="Recent Garage Door Projects | Top Level Garage Doors, Charleston"
        description="Photos of recent garage door installations, spring replacements, opener installs and track work completed across Charleston and the surrounding areas."
        path="/projects"
        breadcrumbs={breadcrumbSchema(trail)}
      />

      <section className="pagehead">
        <div className="wrap">
          <Crumbs trail={trail} />
          <h1>Recent Garage Door Projects</h1>
          <p className="lede">
            Doors, openers, springs and tracks we have finished across Charleston and the surrounding
            areas. Every photo is our own work - no stock imagery.
          </p>
          <div className="btn-row">
            <a href={biz.phoneHref} className="btn btn--fx">
              Call {biz.phone} <span className="plus">+</span>
            </a>
            <Link to="/contact" className="btn btn--ghost-light">
              Free estimate
            </Link>
          </div>
        </div>
      </section>

      <section className="section projsec">
        <div className="wrap">
          <ul className="projgrid">
            {projects.map((ph, i) => (
              <Reveal
                as="li"
                className="projcard"
                key={ph.n}
                delay={(i % 3) * 60}
                style={{ '--span': spans[i] }}
              >
                <button type="button" onClick={() => setOpen(i + 1)} aria-label={`Enlarge: ${ph.caption}`}>
                  <img
                    // Landscape 4:3 crops - the portrait g{n}-460/760 files are
                    // for the home carousel and would be cut off in these tiles.
                    src={`/img/gallery/g${pad(ph.n)}-w860.webp`}
                    srcSet={`/img/gallery/g${pad(ph.n)}-w560.webp 560w, /img/gallery/g${pad(ph.n)}-w860.webp 860w`}
                    sizes="(min-width: 980px) 34vw, (min-width: 620px) 46vw, 92vw"
                    alt={ph.caption}
                    width="860"
                    height="645"
                    loading={i < 6 ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                  <span className="projcard__cap">{ph.caption}</span>
                </button>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        tuck
        eyebrow="Your garage shouldn't be the reason you're stuck at home"
        lines={['Get your door', 'working again', 'without the runaround.']}
        body="No guessing, no waiting days for a callback, and no wondering when someone will actually show up. Tell us what's happening and we'll get a technician out to diagnose the problem and get your garage door to operate again."
      />

      {open &&
        typeof document !== 'undefined' &&
        createPortal(
          <div
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={projects[open - 1].caption}
            onClick={() => setOpen(null)}
          >
            <button
              type="button"
              className="lightbox__nav lightbox__nav--prev"
              onClick={(e) => {
                e.stopPropagation();
                setOpen((n) => ((n - 2 + count) % count) + 1);
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
                setOpen((n) => (n % count) + 1);
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
              {/* Full-ratio file, uncropped - the grid uses the square-ish crop */}
              <img src={`/img/gallery/g${pad(projects[open - 1].n)}-full.webp`} alt={projects[open - 1].caption} />
              <figcaption>
                {projects[open - 1].caption}
                <b>
                  {open} / {count}
                </b>
              </figcaption>
            </figure>
          </div>,
          document.body
        )}
    </>
  );
}
