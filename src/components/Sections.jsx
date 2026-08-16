import Reveal from './Reveal.jsx';
import { Counter } from './Motion.jsx';
import { Check, Shield, Clock, Pin, Phone } from './Icons.jsx';
import { biz } from '../data/site.js';

/* --------------------------------- Why choose us / about ---------------- */

// Only claims we can actually stand behind. No invented customer counts or
// award tallies - a licensed contractor publishing numbers it cannot evidence
// is a real problem, not a styling choice.
// `n` counts up; `text` renders as-is for claims that are not numbers.
const STATS = [
  { icon: Shield, n: 10, suffix: '+ yrs', label: 'In the industry' },
  { icon: Check, text: 'Licensed', label: 'Insured & bonded' },
  { icon: Clock, text: 'Same day', label: 'Service' },
  { icon: Pin, text: 'Upfront', label: 'Pricing' },
];


const POINTS = [
  { icon: Shield, text: 'Licensed, insured & bonded' },
  { icon: Clock, text: 'Same-day service' },
  { icon: Check, text: 'Upfront pricing before work begins' },
  { icon: Pin, text: 'More than 10 years of experience' },
  { icon: Check, text: 'Our own technicians, never subcontracted' },
  { icon: Check, text: 'Priced before we start - approve, decline or ask for an alternative' },
];


export function AboutBlock() {
  return (
    <section className="section why" id="about">
      {/* Decorative looping wordmark behind the heading */}
      <div className="why__ghost" aria-hidden="true">
        <div className="why__ghostTrack">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i}>
              Why choose us <i>&bull;</i>
            </span>
          ))}
        </div>
      </div>

      <div className="why__grid">
        <Reveal className="why__body">
          <div className="why__eyebrow">
            <i />
            Why choose us
            <i />
          </div>

          <h2>
            Garage door work backed by experience, straight pricing and{' '}
            <span className="accent">a door that actually works.</span>
          </h2>

          <p className="lede">
            We started out taking the calls nobody else wanted - the late door that would not close, the
            beach rental with a seized opener an hour before check-in. Word travelled, and that is still
            most of how we get work.
          </p>

          <ul className="why__points">
            {POINTS.map((pt) => {
              const I = pt.icon;
              return (
                <li key={pt.text}>
                  <I size={19} />
                  {pt.text}
                </li>
              );
            })}
          </ul>

          <div className="why__contact">
            <span className="why__avatar">
              <Phone size={20} />
            </span>
            <span>
              <strong>Need assistance? Speak to a technician</strong>
              <a href={biz.phoneHref}>{biz.phone}</a>
            </span>
          </div>
        </Reveal>

        <div className="why__media">
          <img
            src="/img/why-1280.webp"
            srcSet="/img/why-560.webp 560w, /img/why-860.webp 860w, /img/why-1280.webp 1280w"
            sizes="(min-width: 1000px) 52vw, 100vw"
            alt="Wood-finish sectional garage door with a LiftMaster ceiling opener installed by Top Level Garage Doors"
            width="1280"
            height="1088"
            loading="lazy"
            decoding="async"
          />

          <div className="why__stats">
            {STATS.map((s) => {
              const I = s.icon;
              return (
                <Reveal className="why__stat" key={s.label}>
                  <I size={26} />
                  <strong>
                    {s.text ? s.text : <Counter to={s.n} suffix={s.suffix} />}
                  </strong>
                  <span>{s.label}</span>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
