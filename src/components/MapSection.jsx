import Reveal from './Reveal.jsx';
import { biz } from '../data/site.js';

// Google Business Profile map for Top Level Garage Door. City and state only,
// no street address (consistent with the rest of the site).
export default function MapSection() {
  return (
    <section className="section" id="map">
      <div className="wrap">
        <Reveal className="sechead">
          <div className="eyebrow">Where to find us</div>
          <h2>
            Serving {biz.city}, {biz.state}
          </h2>
        </Reveal>
        <Reveal className="svc-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d428793.1422557807!2d-80.30832867445257!3d32.899584754857834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaab98e2a940ee057%3A0xf1978d27326661f9!2sTop%20Level%20Garage%20Door!5e0!3m2!1sen!2s!4v1793008350780!5m2!1sen!2s"
            title={`Top Level Garage Door service area map, ${biz.city}, ${biz.state}`}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </Reveal>
      </div>
    </section>
  );
}
