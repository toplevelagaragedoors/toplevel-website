import Reveal from './Reveal.jsx';
import { icons } from './Icons.jsx';
import { services } from '../data/site.js';
import useMarquee from './useMarquee.js';

// Four copies so the loop stays filled on ultrawide displays.
const COPIES = 4;

/**
 * Looping service carousel. Same card as before - numbered flag, circular
 * icon, title, description - with the photograph replaced by a tinted panel
 * at the client's request.
 */
export default function ServiceRail() {
  const railRef = useMarquee({ speed: 42 });

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
        <ul className="svtrack">
          {loop.map((s) => {
            const Icon = icons[s.n % icons.length];
            return (
              <li className="svcard" key={s.key} aria-hidden={s.clone || undefined}>
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
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
