import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import Reveal from '../components/Reveal.jsx';
import HeroSlider from '../components/HeroSlider.jsx';
import BookSection from '../components/BookSection.jsx';
import ServiceRail from '../components/ServiceRail.jsx';
import GalleryRail from '../components/GalleryRail.jsx';
import { AboutBlock } from '../components/Sections.jsx';
import { CtaBand } from '../components/Blocks.jsx';
import FaqSection from '../components/FaqSection.jsx';
import { areas, homeFaqs } from '../data/site.js';
import { organizationSchema, faqSchema, combine } from '../lib/schema.js';

export default function Home() {
  return (
    <>
      <Seo
        title="Garage Door Repair in Charleston, SC | Top Level Garage Doors"
        description="Same-day garage door repair in Charleston, SC. Broken springs, openers, cables and off-track doors fixed by licensed techs, six days a week. Free estimates - call 843-830-1627."
        path="/"
        schema={combine(
          organizationSchema()['@graph'][0],
          organizationSchema()['@graph'][1],
          faqSchema(homeFaqs)
        )}
      />

      {/* 1 - Hero */}
      <HeroSlider />

      {/* 2 - Contact */}
      <BookSection />

      {/* 3 - Services */}
      <ServiceRail />

      {/* 4 - About */}
      <AboutBlock />

      {/* 5 - CTA */}
      <CtaBand
        eyebrow="Don't let a broken garage door stop your day"
        lines={['Car stuck inside?', "Door won't close?", "We'll get it fixed."]}
        body="Broken spring, jammed door, off-track rollers or an opener that suddenly stopped working? Get fast garage door service in Charleston and the Lowcountry and get your door - and your day - back on track."
      />

      {/* 6 - Service areas */}
      <section className="section" id="service-areas">
        <div className="wrap">
          <Reveal className="sechead sechead--split">
            <div>
              <div className="fxeyebrow">Where we work</div>
              <h2>Charleston and surrounding areas</h2>
            </div>
            <p>
              From the peninsula out to Summerville, Goose Creek and the barrier islands. Not sure if we
              reach you? Call and ask - we will make it work for you.
            </p>
          </Reveal>

          <Reveal className="arealist">
            {areas.map((a) => (
              <div className="arearow" key={a.slug}>
                <span className="arearow__name">{a.name}</span>
                <span className="arearow__meta">{a.distance}</span>
              </div>
            ))}
          </Reveal>

          <Reveal className="btn-row">
            <Link to="/service-areas" className="btn btn--fx">
              All service areas <span className="plus">+</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 7 - Gallery */}
      <GalleryRail />

      {/* 8 - FAQs */}
      <FaqSection />

      {/* 9 - CTA */}
      <CtaBand
        tuck
        eyebrow="Your garage shouldn't be the reason you're stuck at home"
        lines={['Get your door', 'working again', 'without the runaround.']}
        body="No guessing, no waiting days for a callback, and no wondering when someone will actually show up. Tell us what's happening and we'll get a technician out to diagnose the problem and get your garage door to operate again."
      />
    </>
  );
}
