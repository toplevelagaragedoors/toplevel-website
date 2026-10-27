import { useParams, Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import Reveal from '../components/Reveal.jsx';
import { CtaBand, Crumbs } from '../components/Blocks.jsx';
import { AboutBlock } from '../components/Sections.jsx';
import ServiceRail from '../components/ServiceRail.jsx';
import FaqSection from '../components/FaqSection.jsx';
import Testimonials from '../components/Testimonials.jsx';
import MapSection from '../components/MapSection.jsx';
import SeoSection from '../components/SeoSection.jsx';
import { Check, Pin, Shield, Clock } from '../components/Icons.jsx';
import { biz, processSteps, areas } from '../data/site.js';
import { getLocationPage, hasLocationPage } from '../data/locationPages.js';
import { breadcrumbSchema, faqSchema } from '../lib/schema.js';
import { NotFound } from './Pages.jsx';

// Generic garage-door-repair photo reused across location pages. It does NOT
// depict the specific city, so the alt text makes no location claim.
const REPAIR_IMG = 'sv-repair';
const REPAIR_ALT = 'Top Level Garage Door technician repairing a garage door';
const WHY_ICONS = [Shield, Check, Clock, Check, Pin, Check];

export function LocationDetail() {
  const { slug } = useParams();
  const page = getLocationPage(slug);

  // Only slugs with built content render; everything else is a 404 on the
  // client. (Server-side, unbuilt /service-areas/* still 301 to /service-areas.)
  if (!page) return <NotFound />;

  const city = page.cityName;
  const path = `/service-areas/${slug}`;
  const trail = [
    { name: 'Home', path: '/' },
    { name: 'Service Areas', path: '/service-areas' },
    { name: city, path },
  ];

  const whyPoints = (page.whyPoints || []).map((text, i) => ({
    icon: WHY_ICONS[i % WHY_ICONS.length],
    text,
  }));

  return (
    <>
      <Seo
        title={page.metaTitle}
        description={page.metaDescription}
        path={path}
        schema={faqSchema(page.faqs)}
        breadcrumbs={breadcrumbSchema(trail)}
      />

      {/* Hero */}
      <section className="pagehead pagehead--areas">
        <div className="wrap">
          <Crumbs trail={trail} />
          <h1>{page.h1}, SC</h1>
          <p className="lede">{page.heroDesc}</p>
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

      {/* Why Choose Us — shared "why" section, tailored to the city */}
      <AboutBlock
        id="why"
        heading={
          <>
            Garage door repair in {city}, backed by experience and{' '}
            <span className="accent">honest, upfront pricing.</span>
          </>
        }
        lede={page.whyLede}
        points={whyPoints}
      />

      {/* Our Services — the homepage services carousel */}
      <ServiceRail />

      {/* SEO content section 1 (first half) */}
      <SeoSection section={page.seoSections[0]} img={REPAIR_IMG} alt={REPAIR_ALT} />

      {/* Testimonials — genuine company reviews (shared component) */}
      <Testimonials />

      {/* Our Process (second half) — constrained, not edge-to-edge */}
      <section className="section section--dark">
        <div className="wrap">
          <Reveal className="sechead">
            <div className="eyebrow">How it works</div>
            <h2>How garage door repair in {city} works</h2>
          </Reveal>
          <div className="steps svc-process">
            {processSteps.map((s, i) => (
              <Reveal className="step" key={s.title} delay={i * 80}>
                <span className="step__n">Step {String(i + 1).padStart(2, '0')}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SEO content sections 2, 3, 4 (second half) */}
      <SeoSection section={page.seoSections[1]} />
      <SeoSection section={page.seoSections[2]} />
      <SeoSection section={page.seoSections[3]} />

      {/* Service Areas — nearby communities we also cover, with links */}
      <section className="section areastrip">
        <div className="wrap">
          <Reveal className="svhead">
            <div className="fxeyebrow">Where we work</div>
            <h2>
              Service areas across <span className="accent">Charleston and the Lowcountry</span>
            </h2>
            <p>{page.serviceAreasIntro}</p>
          </Reveal>

          <Reveal className="areastrip__grid">
            {areas
              .filter((a) => `${a.slug}-sc` !== slug)
              .map((a) =>
                hasLocationPage(`${a.slug}-sc`) ? (
                  <Link className="areachip" key={a.slug} to={`/service-areas/${a.slug}-sc`}>
                    <Pin size={14} />
                    {a.name}
                  </Link>
                ) : (
                  <Link className="areachip" key={a.slug} to="/">
                    <Pin size={14} />
                    {a.name}
                  </Link>
                )
              )}
          </Reveal>

          <Reveal className="btn-row" style={{ justifyContent: 'center' }}>
            <Link to="/service-areas" className="btn btn--fx">
              All service areas <span className="plus">+</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Local coverage — neighbourhoods and landmarks (no directions/distances) */}
      <section className="section">
        <div className="wrap" style={{ maxWidth: 860 }}>
          <Reveal className="prose">
            <div className="eyebrow">Local coverage</div>
            <h2>Garage door repair in {city}: the areas we cover</h2>
            <p>{page.poiIntro}</p>
            {page.poiBody && <p>{page.poiBody}</p>}
          </Reveal>
          <Reveal className="areastrip__grid" style={{ justifyContent: 'flex-start', marginTop: '1.5rem' }}>
            {(page.pois || []).map((p) => (
              <span className="areachip" key={p}>
                <Pin size={14} />
                {p}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* FAQ — shared section with location-specific questions */}
      <FaqSection
        faqs={page.faqs}
        eyebrow="Common questions"
        heading={
          <>
            Garage door repair in {city} <span className="accent">questions</span>
          </>
        }
      />

      {/* Final CTA */}
      <CtaBand
        tuck
        eyebrow={`Garage door trouble in ${city}?`}
        lines={['Get it sorted', 'properly, the first time,', 'without the runaround.']}
        body={`Tell us what the door is doing and we will send a technician for your garage door repair in ${city} and test the door through a full cycle.`}
      />

      {/* GBP map, just before the footer (shared component) */}
      <MapSection />
    </>
  );
}
