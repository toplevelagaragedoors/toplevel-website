import { useParams, Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import Reveal from '../components/Reveal.jsx';
import { CtaBand, Crumbs } from '../components/Blocks.jsx';
import { AboutBlock } from '../components/Sections.jsx';
import BookSection from '../components/BookSection.jsx';
import ServiceRail from '../components/ServiceRail.jsx';
import FaqSection from '../components/FaqSection.jsx';
import Testimonials from '../components/Testimonials.jsx';
import MapSection from '../components/MapSection.jsx';
import SeoSection from '../components/SeoSection.jsx';
import { Check, Pin, Shield, Clock } from '../components/Icons.jsx';
import { getService, areas, biz } from '../data/site.js';
import { getServicePage } from '../data/servicePages.js';
import { hasLocationPage } from '../data/locationPages.js';
import { serviceSchema, breadcrumbSchema, faqSchema, combine } from '../lib/schema.js';
import { NotFound } from './Pages.jsx';

const WHY_ICONS = [Shield, Check, Clock, Check, Pin, Check];

export function ServiceDetail() {
  const { slug } = useParams();
  const service = getService(slug);
  const page = getServicePage(slug);

  // Only slugs with built content render a page; everything else is a 404 on
  // the client. (Server-side, unbuilt /services/* still 301 to /services.)
  if (!service || !page) return <NotFound />;

  const path = `/services/${slug}`;
  const trail = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: service.name, path },
  ];

  const whyPoints = (page.whyPoints || []).map((text, i) => ({
    icon: WHY_ICONS[i % WHY_ICONS.length],
    text,
  }));

  // serviceSchema reads service.metaDescription; feed it the page copy without
  // mutating the shared site.js data.
  const schema = combine(
    serviceSchema({ ...service, metaDescription: page.metaDescription }),
    faqSchema(page.faqs)
  );

  return (
    <>
      <Seo
        title={page.metaTitle}
        description={page.metaDescription}
        path={path}
        schema={schema}
        breadcrumbs={breadcrumbSchema(trail)}
      />

      {/* Hero */}
      <section className="pagehead">
        <div className="wrap">
          <Crumbs trail={trail} />
          <h1>{page.h1}</h1>
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

      {/* Book appointment — the homepage booking section */}
      <BookSection />

      {/* Our Services — the homepage services carousel */}
      <ServiceRail />

      {/* Why Choose Us — reuses the homepage "why" section, content per service */}
      <AboutBlock
        id="why"
        heading={
          <>
            {service.name} backed by real experience, honest pricing and{' '}
            <span className="accent">work done right the first time.</span>
          </>
        }
        lede={page.whyLede}
        points={whyPoints}
      />

      {/* What We Offer — distinct, left-accent list cards */}
      <section className="section section--chalk">
        <div className="wrap">
          <Reveal className="sechead">
            <div className="eyebrow">What we offer</div>
            <h2>What our {page.primaryKeyword} service includes</h2>
          </Reveal>
          <div className="svc-cards svc-cards--3">
            {page.servicesScope.map((s) => (
              <Reveal className="svc-offer" key={s}>
                <Shield size={18} />
                <span>{s}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SEO content section 1 (first half) */}
      <SeoSection section={page.seoSections[0]} img={service.img} alt={service.alt} />

      {/* Testimonials — genuine company reviews (shared component) */}
      <Testimonials />

      {/* Our Process — constrained inside .wrap so it is not edge-to-edge */}
      <section className="section section--dark">
        <div className="wrap">
          <Reveal className="sechead">
            <div className="eyebrow">How it works</div>
            <h2>Our {page.primaryKeyword} process</h2>
          </Reveal>
          <div className="steps svc-process">
            {page.processSteps.map((s, i) => (
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

      {/* Service Areas — homepage layout, mileage intentionally omitted */}
      <section className="section" id="service-areas">
        <div className="wrap">
          <Reveal className="sechead sechead--split">
            <div>
              <div className="fxeyebrow">Where we work</div>
              <h2>Charleston and surrounding areas</h2>
            </div>
            <p>{page.serviceAreasIntro}</p>
          </Reveal>

          <Reveal className="arealist">
            {areas.map((a) =>
              hasLocationPage(`${a.slug}-sc`) ? (
                <Link className="arearow" to={`/service-areas/${a.slug}-sc`} key={a.slug}>
                  <span className="arearow__name">{a.name}</span>
                </Link>
              ) : (
                <Link className="arearow" to="/" key={a.slug}>
                  <span className="arearow__name">{a.name}</span>
                </Link>
              )
            )}
          </Reveal>

          <Reveal className="btn-row">
            <Link to="/service-areas" className="btn btn--fx">
              All service areas <span className="plus">+</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* FAQ — the homepage FAQ section with service-specific questions */}
      <FaqSection
        faqs={page.faqs}
        eyebrow="Common questions"
        heading={
          <>
            {service.name} <span className="accent">questions</span>
          </>
        }
      />

      {/* Final CTA */}
      <CtaBand
        tuck
        eyebrow="Your garage door should just work"
        lines={['Get it sorted', 'properly, the first time,', 'without the runaround.']}
        body={`Tell us what the door is doing and we will get a technician out to handle your ${page.primaryKeyword} and test the door through a full cycle.`}
      />

      {/* GBP map, just before the footer (shared component) */}
      <MapSection />
    </>
  );
}
