import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import Reveal from '../components/Reveal.jsx';
import { CtaBand, Crumbs } from '../components/Blocks.jsx';
import { Phone, Pin } from '../components/Icons.jsx';
import { areas, biz } from '../data/site.js';
import { breadcrumbSchema } from '../lib/schema.js';

export function AreasIndex() {
  const trail = [
    { name: 'Home', path: '/' },
    { name: 'Service Areas', path: '/service-areas' },
  ];

  return (
    <>
      <Seo
        title="Garage Door Service Areas | Charleston & Lowcountry, SC"
        description="Top Level Garage Doors serves Charleston County and surrounding areas - North Charleston, Mount Pleasant, Summerville, Goose Creek and the barrier islands. Call 843-830-1627."
        path="/service-areas"
        breadcrumbs={breadcrumbSchema(trail)}
      />

      <section className="pagehead pagehead--areas">
        <div className="wrap">
          <Crumbs trail={trail} />
          <h1>Garage Door Service Areas Around Charleston</h1>
          <p className="lede">
            We cover Charleston and the surrounding areas - north to Summerville, east to the barrier
            islands, and everywhere in between.
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

      <section className="section areasec">
        <div className="wrap">
          <Reveal className="svhead">
            <div className="fxeyebrow">Where we work</div>
            <h2>
              Charleston County <span className="accent">and surrounding areas</span>
            </h2>
          </Reveal>

          <div className="areagrid">
            {areas.map((a, i) => (
              <Reveal className="areacard" key={a.slug} delay={(i % 3) * 70}>
                <span className="areacard__n">{String(i + 1).padStart(2, '0')}</span>
                <h3>
                  <Pin size={17} />
                  {a.name}
                </h3>
                <span className="areacard__dist">{a.distance}</span>
                <p>{a.blurb}</p>
                <div className="areacard__hoods">
                  {a.landmarks.slice(0, 4).map((l) => (
                    <span key={l}>{l}</span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="areanote">
            <p>
              Not on the list? Call{' '}
              <a href={biz.phoneHref}>{biz.phone}</a> and we will make it work!
            </p>
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
