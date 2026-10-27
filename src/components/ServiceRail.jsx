import { Link } from 'react-router-dom';
import Reveal from './Reveal.jsx';
import { icons } from './Icons.jsx';
import { services } from '../data/site.js';
import { hasServicePage } from '../data/servicePages.js';
import useMarquee from './useMarquee.js';

// Four copies so the loop stays filled on ultrawide displays.
const COPIES = 4;

/**
 * Looping service carousel. Each card links to its service detail page; the
 * duplicated (clone) cards are hidden from assistive tech and the tab order so
 * the link is only exposed once per service. A "View all services" button
 * leads to the hub for anyone who does not want to scroll the rail.
 */
export default function ServiceRail() {
  const { railRef, trackRef } = useMarquee({ speed: 42 });

  const loop = [];
  for (let c = 0; c < COPIES; c += 1) {
    services.forEach((s, n) => loop.push({ ...s, key: `${c}-${s.slug}`, n, clone: c > 0 }));
  }

  return (
    <section className="section svsection" id="services">
      <div className="wrap">
        <Reveal className="svhead">
          <div className="fxeyebrow">Our services</div>
          <h2>
            Reliable service for <span className="accent">every door</span>
          </h2>
          <p>
            Repairs, replacements and new installations - residential and commercial, across Charleston
            and the surrounding areas.
          </p>
        </Reveal>
      </div>

      <div className="svrail" ref={railRef}>
        <ul className="svtrack" ref={trackRef}>
          {loop.map((s) => {
            const Icon = icons[s.n % icons.length];
            const inner = (
              <>
                <div className={`svcard__media${s.img ? '' : ' svcard__media--flat'}`}>
                  <span className="svcard__num">{String(s.n + 1).padStart(2, '0')}</span>
                  {s.img && (
                    <img
                      src={`/img/${s.img}-720.webp`}
                      srcSet={`/img/${s.img}-440.webp 440w, /img/${s.img}-720.webp 720w`}
                      sizes="340px"
                      alt={s.clone ? '' : s.alt}
                      width="720"
                      height="540"
                      loading="lazy"
                      decoding="async"
                      draggable="false"
                    />
                  )}
                  <span className="svcard__icon">
                    <Icon size={26} />
                  </span>
                </div>
                <div className="svcard__body">
                  <h3>{s.name}</h3>
                  <p>{s.short}</p>
                </div>
              </>
            );

            return (
              <li className="svcard" key={s.key} aria-hidden={s.clone || undefined}>
                {hasServicePage(s.slug) ? (
                  <Link
                    to={`/services/${s.slug}`}
                    className="svcard__link"
                    tabIndex={s.clone ? -1 : undefined}
                    draggable="false"
                  >
                    {inner}
                  </Link>
                ) : (
                  inner
                )}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="wrap">
        <Reveal className="btn-row" style={{ justifyContent: 'center', marginTop: '2.25rem' }}>
          <Link to="/services" className="btn btn--fx">
            View all services <span className="plus">+</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
