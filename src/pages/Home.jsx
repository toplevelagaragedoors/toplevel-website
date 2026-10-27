import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import Reveal from '../components/Reveal.jsx';
import HeroSlider from '../components/HeroSlider.jsx';
import BookSection from '../components/BookSection.jsx';
import ServiceRail from '../components/ServiceRail.jsx';
import HomeContent from '../components/HomeContent.jsx';
import GalleryRail from '../components/GalleryRail.jsx';
import { AboutBlock } from '../components/Sections.jsx';
import { CtaBand } from '../components/Blocks.jsx';
import FaqSection from '../components/FaqSection.jsx';
import Testimonials from '../components/Testimonials.jsx';
import MapSection from '../components/MapSection.jsx';
import { areas } from '../data/site.js';
import { hasLocationPage } from '../data/locationPages.js';
import { localBusinessSchema } from '../lib/schema.js';

export default function Home() {
  return (
    <>
      <Seo
        title="Garage Door Repair in Charleston, SC - Top Level"
        description="Looking for Garage Door Repair in Charleston? Top Level Garage Door handles door malfunctions, uneven movement, and sudden breakdowns. Call us today!"
        path="/"
        schema={localBusinessSchema()}
      />

      {/* 1 - Hero */}
      <HeroSlider />

      {/* 2 - Contact */}
      <BookSection />

      {/* 3 - Services */}
      <ServiceRail />

      {/* 4 - Why choose us (directly below services) */}
      <AboutBlock />

      {/* 6 - Testimonials */}
      <Testimonials />

      {/* 7 - CTA */}
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
              We provide garage door repair in Charleston and right across the Lowcountry, from the
              peninsula out to Summerville, Goose Creek and the barrier islands. Not sure if we reach
              you? Call and ask and we will make it work for you.
            </p>
          </Reveal>

          <Reveal className="arealist">
            {areas.map((a) => {
              const row = (
                <>
                  <span className="arearow__name">{a.name}</span>
                  <span className="arearow__meta">{a.distance}</span>
                </>
              );
              return hasLocationPage(`${a.slug}-sc`) ? (
                <Link className="arearow" to={`/service-areas/${a.slug}-sc`} key={a.slug}>
                  {row}
                </Link>
              ) : (
                <Link className="arearow" to="/" key={a.slug}>
                  {row}
                </Link>
              );
            })}
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

      {/* 8 - Garage door repair content (target keyword), second half */}
      <HomeContent />

      {/* 9 - FAQs */}
      <FaqSection />

      {/* 10 - CTA */}
      <CtaBand
        tuck
        eyebrow="Your garage shouldn't be the reason you're stuck at home"
        lines={['Get your door', 'working again', 'without the runaround.']}
        body="No guessing, no waiting days for a callback, and no wondering when someone will actually show up. Tell us what's happening and we'll get a technician out to diagnose the problem and get your garage door to operate again."
      />

      {/* 11 - GBP map, just before the footer */}
      <MapSection />
    </>
  );
}
