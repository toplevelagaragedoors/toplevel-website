import { Link } from 'react-router-dom';
import { biz } from '../data/site.js';
import { Phone, Arrow } from './Icons.jsx';
import Reveal from './Reveal.jsx';

export function CtaBand({
  tuck = false,
  eyebrow = 'Stop living with a broken door',
  // Array of strings renders one line each, so the copy breaks where it was
  // written rather than wherever the column happens to run out.
  lines = ['Tell us what it is doing.', 'We will tell you what it costs.'],
  body = 'Free written estimates, same-day slots across the Lowcountry, and a technician who explains the repair instead of just handing you an invoice.',
}) {
  return (
    <section className={`ctaband section${tuck ? ' ctaband--tuck' : ''}`}>
      <div className="wrap">
        <Reveal>
          <div className="eyebrow" style={{ color: 'rgba(255,255,255,.75)' }}>
            {eyebrow}
          </div>
          <h2 className="ctaband__title">
            {lines.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </h2>
          <p className="lede" style={{ color: 'rgba(255,255,255,.85)' }}>
            {body}
          </p>
          <a href={biz.phoneHref} className="ctaband__phone">
            <Phone size={26} /> {biz.phone}
          </a>
          <div className="btn-row">
            <Link to="/contact" className="btn" style={{ background: '#fff', color: 'var(--brand)', borderColor: '#fff' }}>
              Get a free estimate
            </Link>
            <Link to="/services" className="btn btn--ghost">
              See all services
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Faq({ items, title = 'Questions we get asked every week', eyebrow = 'FAQ' }) {
  return (
    <>
      <div className="sechead">
        <div className="eyebrow">{eyebrow}</div>
        <h2>{title}</h2>
      </div>
      <div className="faq">
        {items.map((f, i) => (
          <details key={f.q} open={i === 0}>
            <summary>
              <span>{f.q}</span>
            </summary>
            <div className="faq__body">{f.a}</div>
          </details>
        ))}
      </div>
    </>
  );
}

export function Crumbs({ trail }) {
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      {trail.map((t, i) => (
        <span key={t.path} style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem' }}>
          {i > 0 && <span aria-hidden="true">/</span>}
          {i === trail.length - 1 ? (
            <span aria-current="page">{t.name}</span>
          ) : (
            <Link to={t.path}>{t.name}</Link>
          )}
        </span>
      ))}
    </nav>
  );
}

export function LinkGrid({ items, cols = 3 }) {
  return (
    <div className={`linkgrid linkgrid--${cols}`}>
      {items.map((i) => (
        <Link key={i.to} to={i.to}>
          {i.label}
          <Arrow size={16} />
        </Link>
      ))}
    </div>
  );
}
