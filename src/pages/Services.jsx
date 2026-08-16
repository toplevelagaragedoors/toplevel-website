import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import Reveal from '../components/Reveal.jsx';
import { CtaBand, Crumbs } from '../components/Blocks.jsx';
import { Phone, Pin, icons } from '../components/Icons.jsx';
import { services, areas, biz } from '../data/site.js';
import { breadcrumbSchema } from '../lib/schema.js';

export function ServicesIndex() {
  const trail = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
  ];

  return (
    <>
      <Seo
        title="Garage Door Services in Charleston, SC | Repair & Installation"
        description="Full garage door services in Charleston, SC: installation, repair, maintenance, spring replacement, opener installation and emergency callouts. Free estimate - 843-830-1627."
        path="/services"
        breadcrumbs={breadcrumbSchema(trail)}
      />

      <section className="pagehead">
        <div className="wrap">
          <Crumbs trail={trail} />
          <h1>Garage Door Services in Charleston, SC</h1>
          <p className="lede">
            Six service lines covering everything from an annual tune-up to a full insulated door
            replacement - residential and commercial, across the Lowcountry, six days a week.
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

      <section className="section svsection">
        <div className="wrap">
          <Reveal className="svhead">
            <div className="fxeyebrow">What we fix</div>
            <h2>
              Reliable service for <span className="accent">every door</span>
            </h2>
          </Reveal>

          <div className="svgrid">
            {services.map((sv, i) => {
              const Icon = icons[i % icons.length];
              return (
                <Reveal className="svcard" key={sv.slug} delay={(i % 3) * 60}>
                  <div className={`svcard__media${sv.img ? '' : ' svcard__media--flat'}`}>
                    <span className="svcard__num">{String(i + 1).padStart(2, '0')}</span>
                    {sv.img && (
                      <img
                        src={`/img/${sv.img}-720.webp`}
                        srcSet={`/img/${sv.img}-440.webp 440w, /img/${sv.img}-720.webp 720w`}
                        sizes="(min-width: 900px) 30vw, 92vw"
                        alt={sv.alt}
                        width="720"
                        height="540"
                        loading="lazy"
                        decoding="async"
                      />
                    )}
                    <span className="svcard__icon">
                      <Icon size={26} />
                    </span>
                  </div>
                  <div className="svcard__body">
                    <h3>{sv.name}</h3>
                    <p>{sv.short}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section areastrip">
        <div className="wrap">
          <Reveal className="svhead">
            <div className="fxeyebrow">Where we work</div>
            <h2>
              Serving <span className="accent">Charleston County</span> and surrounding areas
            </h2>
            <p>
              Same crews, same pricing, same day where we can - across Charleston County and the
              surrounding Lowcountry.
            </p>
          </Reveal>

          <Reveal className="areastrip__grid">
            {areas.map((a) => (
              <span className="areachip" key={a.slug}>
                <Pin size={14} />
                {a.name}
                <em>{a.distance}</em>
              </span>
            ))}
          </Reveal>

          <Reveal className="btn-row" style={{ justifyContent: 'center' }}>
            <Link to="/service-areas" className="btn btn--fx">
              See service areas <span className="plus">+</span>
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand
        tuck
        eyebrow="Your garage shouldn't be the reason you're stuck at home"
        lines={['Get your door', 'working again', 'without the runaround.']}
        body="No guessing, no waiting days for a callback, and no wondering when someone will actually show up. Tell us what's happening and we'll get a technician out to diagnose the problem and get your garage door to operate again."
      />
    </>
  );
}
