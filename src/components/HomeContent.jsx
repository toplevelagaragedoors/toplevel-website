import Reveal from './Reveal.jsx';
import { biz } from '../data/site.js';

/* Keyword-focused content sections for the homepage, built around the primary
   target term "garage door repair in Charleston". Every claim here (licensed,
   insured, same-day, upfront pricing, own technicians, coverage area) already
   appears elsewhere on the site - nothing new is asserted. */

const PROBLEMS = [
  {
    title: 'Broken springs',
    body: 'Torsion and extension springs carry the weight every time the door moves. When one snaps the door turns heavy or stops lifting, so we replace them with correctly sized, matched parts.',
  },
  {
    title: 'Opener trouble',
    body: 'A dead, noisy or unresponsive opener is one of the most common repairs we take. We service motors, gears, remotes and safety sensors on the major opener brands.',
  },
  {
    title: 'Off-track doors',
    body: 'A door that has jumped its track is unsafe to force. We realign the rollers and tracks, check for bent sections, and get the door moving smoothly again.',
  },
  {
    title: 'Cables and rollers',
    body: 'Frayed cables and worn rollers make a door bind, jerk or hang crooked. Replacing them restores smooth, balanced travel and protects the rest of the system.',
  },
  {
    title: 'Dented panels',
    body: 'Cracked or dented sections affect how the door looks and seals. We repair or replace individual panels so a full door replacement is rarely needed.',
  },
  {
    title: 'Routine tune-ups',
    body: 'A yearly service catches small faults before they leave you stuck. We lubricate, balance and tighten the hardware that wears over time.',
  },
];

const FACTS = [
  { label: 'Same-day service', text: 'Most garage door repairs across Charleston are finished the day you call.' },
  { label: 'Upfront pricing', text: 'You approve the price before any work starts, with no surprise add-ons.' },
  { label: 'Licensed & insured', text: 'Work is carried out by our own licensed, insured technicians, never subcontracted.' },
  { label: 'Local coverage', text: 'Charleston, North Charleston, Mount Pleasant, Summerville and the barrier islands.' },
];

export default function HomeContent() {
  return (
    <>
      {/* Keyword overview */}
      <section className="section">
        <div className="wrap feature" style={{ alignItems: 'center' }}>
          <Reveal>
            <div className="fxeyebrow">Charleston, SC</div>
            <h2>
              Fast, reliable <span className="accent">garage door repair in Charleston</span>
            </h2>
            <p style={{ color: 'var(--text-body)', marginTop: '1rem' }}>
              When a garage door stops working it rarely waits for a convenient moment. Top Level
              Garage Door gets you back up and running quickly, handling everything from broken
              springs and snapped cables to openers that quit and doors that jump their tracks, right
              across Charleston and the surrounding Lowcountry.
            </p>
            <p style={{ color: 'var(--text-body)', marginTop: '1rem' }}>
              Our technicians arrive with stocked trucks, diagnose the fault on the spot, and explain
              exactly what the repair involves before any work begins. Most repairs are finished the
              same day, so you get your garage door, and your routine, back without the runaround.
            </p>
            <div className="btn-row">
              <a href={biz.phoneHref} className="btn btn--fx">
                Call {biz.phone} <span className="plus">+</span>
              </a>
            </div>
          </Reveal>
          <Reveal delay={100} className="feature__media">
            <img
              src="/img/sv-repair-720.webp"
              srcSet="/img/sv-repair-440.webp 440w, /img/sv-repair-720.webp 720w"
              sizes="(min-width: 1000px) 44vw, 92vw"
              alt="Top Level Garage Door technician repairing a garage door in Charleston, SC"
              width="720"
              height="540"
              loading="lazy"
              decoding="async"
            />
          </Reveal>
        </div>
      </section>

      {/* Common repairs */}
      <section className="section section--chalk">
        <div className="wrap">
          <Reveal className="sechead">
            <div className="fxeyebrow">What we fix</div>
            <h2>
              Common garage door repairs <span className="accent">we handle</span>
            </h2>
            <p>
              Here is the garage door repair in Charleston we are called out for most often, from
              quick fixes to full part replacements.
            </p>
          </Reveal>
          <div className="svc-cards svc-cards--3">
            {PROBLEMS.map((p, i) => (
              <Reveal className="svc-reason" key={p.title}>
                <span className="svc-reason__n">{String(i + 1).padStart(2, '0')}</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What to expect / process */}
      <section className="section">
        <div className="wrap feature feature--flip" style={{ alignItems: 'center' }}>
          <Reveal>
            <div className="fxeyebrow">What to expect</div>
            <h2>How our garage door repair in Charleston works</h2>
            <p className="lede" style={{ marginTop: '1rem' }}>
              No guessing and no waiting days for a callback. Tell us what the door is doing, we send a
              technician to diagnose it, price the repair up front, and fix it on the same visit
              wherever parts allow.
            </p>
            <div className="btn-row">
              <a href={biz.phoneHref} className="btn btn--fx">
                Call {biz.phone} <span className="plus">+</span>
              </a>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <ul className="svc-facts">
              {FACTS.map((f) => (
                <li key={f.label}>
                  <strong>{f.label}</strong>
                  <span>{f.text}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}
