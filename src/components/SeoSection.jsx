import Reveal from './Reveal.jsx';
import { biz } from '../data/site.js';

/* One SEO content section, rendered in the layout its data requests, so the
   sections read as visually distinct instead of a stack of look-alikes.
   Shared by service detail pages and location pages. */
export default function SeoSection({ section, img, alt }) {
  const { layout, h2 } = section;

  if (layout === 'split') {
    return (
      <section className="section">
        <div className="wrap feature feature--flip" style={{ alignItems: 'center' }}>
          <Reveal>
            <h2>{h2}</h2>
            {section.paras.map((p) => (
              <p key={p.slice(0, 32)} style={{ color: 'var(--text-body)', marginTop: '1rem' }}>
                {p}
              </p>
            ))}
          </Reveal>
          {img && (
            <Reveal delay={100} className="feature__media">
              <img
                src={`/img/${img}-720.webp`}
                srcSet={`/img/${img}-440.webp 440w, /img/${img}-720.webp 720w`}
                sizes="(min-width: 1000px) 44vw, 92vw"
                alt={alt}
                width="720"
                height="540"
                loading="lazy"
                decoding="async"
              />
            </Reveal>
          )}
        </div>
      </section>
    );
  }

  if (layout === 'cards') {
    return (
      <section className="section">
        <div className="wrap">
          <Reveal className="sechead">
            <h2>{h2}</h2>
          </Reveal>
          <div className="svc-compare">
            {section.cards.map((c) => (
              <Reveal className="svc-compare__panel" key={c.title}>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (layout === 'reasons') {
    return (
      <section className="section section--chalk">
        <div className="wrap">
          <Reveal className="sechead svc-reasons-head">
            <h2>{h2}</h2>
          </Reveal>
          <div className="svc-cards svc-cards--3">
            {section.items.map((it, i) => (
              <Reveal className="svc-reason" key={it.title}>
                <span className="svc-reason__n">{String(i + 1).padStart(2, '0')}</span>
                <h3>{it.title}</h3>
                <p>{it.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // "Two column" — heading + lead + CTA on one side, compact facts on the other.
  return (
    <section className="section">
      <div className="wrap feature" style={{ alignItems: 'center' }}>
        <Reveal>
          <h2>{h2}</h2>
          <p className="lede" style={{ marginTop: '1rem' }}>
            {section.lead}
          </p>
          <div className="btn-row">
            <a href={biz.phoneHref} className="btn btn--fx">
              Call {biz.phone} <span className="plus">+</span>
            </a>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <ul className="svc-facts">
            {section.bullets.map((b) => (
              <li key={b.label}>
                <strong>{b.label}</strong>
                <span>{b.text}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
