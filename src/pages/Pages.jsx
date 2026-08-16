import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import Reveal from '../components/Reveal.jsx';
import LeadForm from '../components/LeadForm.jsx';
import { CtaBand, Crumbs } from '../components/Blocks.jsx';
import { Check, Phone, Mail, Pin, Clock, Shield } from '../components/Icons.jsx';
import { biz, trustPoints, processSteps, areas } from '../data/site.js';
import { breadcrumbSchema } from '../lib/schema.js';

/* -------------------------------------------------------------------- About */

export function About() {
  const trail = [{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }];
  return (
    <>
      <Seo
        title="About Top Level Garage Doors | Charleston, SC Technicians"
        description="Meet the licensed garage door technicians serving Charleston, SC. Upfront pricing, stocked trucks, same-day service and more than 10 years of experience. Call 843-830-1627."
        path="/about"
        breadcrumbs={breadcrumbSchema(trail)}
      />

      <section className="pagehead">
        <div className="wrap">
          <Crumbs trail={trail} />
          <h1>When your garage door breaks, we answer</h1>
          <p className="lede">
            Top Level Garage Doors is a Charleston-based repair and installation company built on one idea:
            tell people the truth about their door, charge a fair price, and finish the job in one visit.
          </p>
        </div>
      </section>

      <section className="section aboutfeat">
        <div className="wrap aboutfeat__grid">
          <Reveal className="aboutfeat__media">
            <div className="aboutfeat__imgA">
              <img
                src="/img/about-a-760.webp"
                srcSet="/img/about-a-460.webp 460w, /img/about-a-760.webp 760w"
                sizes="(min-width: 1000px) 26vw, 55vw"
                alt="Top Level Garage Doors technician setting new door panels into the tracks at a Charleston home"
                width="760"
                height="1013"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="aboutfeat__imgB">
              <img
                src="/img/about-b-760.webp"
                srcSet="/img/about-b-460.webp 460w, /img/about-b-760.webp 760w"
                sizes="(min-width: 1000px) 24vw, 50vw"
                alt="Technician lubricating garage door hinges during an annual maintenance visit"
                width="760"
                height="570"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* A verifiable claim, not a headline number we cannot evidence */}
            <div className="aboutfeat__badge">
              <strong>25</strong>
              <span>point safety inspection on every visit</span>
            </div>
          </Reveal>

          <Reveal className="aboutfeat__body" delay={120}>
            <div className="why__eyebrow">
              <i />
              About us
              <i />
            </div>

            <h2>
              Charleston&rsquo;s garage door team, built on{' '}
              <span className="accent">work other people would not take.</span>
            </h2>

            <p className="lede">
              With more than 10 years of experience in the industry, we started with the late calls
              nobody wanted - the door that would not close, the beach
              rental with a seized opener an hour before check-in. Word travelled, and referrals are still
              most of how we get work.
            </p>

            <div className="aboutfeat__pair">
              <div>
                <span className="aboutfeat__icon">
                  <Clock size={22} />
                </span>
                <h3>One visit, not three</h3>
                <p>
                  Springs, cables, rollers and common opener parts ride on every truck, so a diagnosis
                  usually becomes a finished repair the same hour.
                </p>
              </div>

              <div>
                <span className="aboutfeat__icon">
                  <Shield size={22} />
                </span>
                <h3>Priced before we start</h3>
                <p>
                  You see the full cost in writing before a wrench comes out. Approve it, decline it, or
                  ask us to quote an alternative.
                </p>
              </div>
            </div>

            <ul className="aboutfeat__ticks">
              <li>
                <Check size={15} /> Licensed, insured &amp; bonded
              </li>
              <li>
                <Check size={15} /> Fully insured
              </li>
              <li>
                <Check size={15} /> Same-day service
              </li>
              <li>
                <Check size={15} /> Never subcontracted
              </li>
            </ul>

            <div className="aboutfeat__foot">
              <Link to="/contact" className="btn btn--fx">
                Book a technician <span className="plus">+</span>
              </Link>
              <a href={biz.phoneHref} className="aboutfeat__phone">
                <Phone size={17} />
                <span>
                  <em>Speak to us</em>
                  {biz.phone}
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="trustbar">
        <div className="wrap" style={{ paddingInline: 0 }}>
          <div className="trustbar__grid">
            {trustPoints.map((t) => (
              <div className="trustbar__cell" key={t.label}>
                <div className="trustbar__label">{t.label}</div>
                <div className="trustbar__value">{t.value}</div>
                <div className="trustbar__note">{t.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="wrap">
          <Reveal className="sechead">
            <div className="eyebrow">How a call goes</div>
            <h2>No mystery, no pressure</h2>
          </Reveal>
        </div>
        <div className="steps">
          {processSteps.map((s, i) => (
            <Reveal className="step" key={s.title} delay={i * 80}>
              <span className="step__n">Step {String(i + 1).padStart(2, '0')}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section--chalk">
        <div className="wrap" style={{ maxWidth: 860 }}>
          <Reveal className="prose">
            <div className="eyebrow">Credentials</div>
            <h2>Licensed, insured, and local</h2>
            <ul className="ticks" style={{ marginBottom: '1.6rem' }}>
              <li>
                <Shield size={17} /> Licensed, insured and bonded - proof on request
              </li>
              <li>
                <Check size={17} /> Upfront pricing before work begins
              </li>
              <li>
                <Check size={17} /> More than 10 years of experience in the industry
              </li>
              <li>
                <Check size={17} /> Every technician is our own employee, never a subcontractor
              </li>
              <li>
                <Check size={17} /> Serving Charleston County and surrounding areas
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

/* ------------------------------------------------------------------ Contact */

export function Contact() {
  const trail = [{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }];
  return (
    <>
      <Seo
        title="Contact Top Level Garage Doors | Charleston, SC | 843-830-1627"
        description="Call 843-830-1627 or request a free garage door estimate in Charleston, SC. Open Sunday to Friday, same-day appointments across the Lowcountry."
        path="/contact"
        breadcrumbs={breadcrumbSchema(trail)}
      />

      <section className="pagehead">
        <div className="wrap">
          <Crumbs trail={trail} />
          <h1>Contact Top Level Garage Doors</h1>
        </div>
      </section>

      <section className="section section--dark">
        <div className="wrap feature feature--flip" style={{ alignItems: 'start' }}>
          <Reveal>
            <div className="eyebrow">Reach us</div>
            <h2>Charleston and surrounding areas</h2>

            <div style={{ display: 'grid', gap: '1.6rem', marginTop: '2rem' }}>
              <div>
                <div className="trustbar__label">Phone</div>
                <a
                  href={biz.phoneHref}
                  style={{
                    fontFamily: 'var(--display)',
                    fontSize: 'clamp(1.6rem,4vw,2.3rem)',
                    fontWeight: 800,
                    color: 'var(--text-dark)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '.6rem',
                  }}
                >
                  <Phone size={22} /> {biz.phone}
                </a>
              </div>

              <div>
                <div className="trustbar__label">Email</div>
                <a href={biz.emailHref} style={{ color: 'var(--text-dark)', fontFamily: 'var(--mono)', wordBreak: 'break-all' }}>
                  <Mail size={14} style={{ display: 'inline', verticalAlign: '-2px' }} /> {biz.email}
                </a>
              </div>

              <div>
                <div className="trustbar__label">Area served</div>
                <p style={{ color: 'var(--text-body)' }}>
                  <Pin size={14} style={{ display: 'inline', verticalAlign: '-2px' }} /> {biz.city},{' '}
                  {biz.state} and surrounding areas
                </p>
              </div>

              <div>
                <div className="trustbar__label">Hours</div>
                <table className="hourstable">
                  <tbody>
                    {biz.hoursList.map((h) => (
                      <tr key={h.days}>
                        <th scope="row">{h.days}</th>
                        <td className={h.time === 'Closed' ? 'is-closed' : undefined}>{h.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p style={{ color: 'var(--text-body)', marginTop: '.75rem' }}>
                  <Clock size={14} style={{ display: 'inline', verticalAlign: '-2px' }} /> Emergency
                  calls are prioritised ahead of scheduled work during these hours.
                </p>
              </div>


            </div>
          </Reveal>

          <Reveal className="formpanel formpanel--blue">
            <h3>Request a free estimate</h3>
            <p className="formpanel__intro">
              Tell us what the door is doing. We reply the same day, usually within a couple of hours.
            </p>
            <LeadForm formName="contact" />
          </Reveal>
        </div>
      </section>

    </>
  );
}

/* ------------------------------------------------------------------- Legal */

function LegalShell({ title, path, description, children }) {
  const trail = [{ name: 'Home', path: '/' }, { name: title, path }];
  return (
    <>
      <Seo title={`${title} | ${biz.name}`} description={description} path={path} noindex />
      <section className="pagehead">
        <div className="wrap">
          <Crumbs trail={trail} />
          <h1>{title}</h1>
          <p className="lede">Last updated {new Date().getFullYear()}</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="prose">{children}</div>
        </div>
      </section>
    </>
  );
}

export function Privacy() {
  return (
    <LegalShell
      title="Privacy Policy"
      path="/privacy-policy"
      description="How Top Level Garage Doors collects, uses and protects the information you submit through this website."
    >
      <p>
        This policy explains what {biz.name} does with the information you give us through this website. We
        keep it short because our practices are simple: we collect what we need to quote and schedule your
        job, and nothing else.
      </p>

      <h2>Information we collect</h2>
      <p>
        When you submit a form we collect your name, phone number, and optionally your email address, city
        and a description of the problem. We do not ask for payment details through this site. Our host
        also records standard technical data such as IP address and browser type for security and
        performance purposes.
      </p>

      <h2>How we use it</h2>
      <ul>
        <li>To call or email you back about the estimate or appointment you requested</li>
        <li>To schedule a technician and route them to your address</li>
        <li>To keep a service record so future visits have your door history</li>
      </ul>
      <p>
        We do not sell, rent or trade your information. We do not add you to a marketing list without your
        say-so.
      </p>

      <h2>Sharing</h2>
      <p>
        Information is shared only with the technician assigned to your job and with the service providers
        that run this website and our email. Those providers process data on our behalf and are not
        permitted to use it for anything else. We will also disclose information where the law requires it.
      </p>

      <h2>Cookies and analytics</h2>
      <p>
        This site uses only the cookies required for it to function, plus any analytics you have been told
        about at the point of collection. We do not run advertising trackers on this site.
      </p>

      <h2>Retention and your choices</h2>
      <p>
        We keep service records for as long as needed to honour warranties and meet our record-keeping
        obligations. You can ask us to correct or delete your information at any time by emailing{' '}
        <a href={biz.emailHref}>{biz.email}</a> or calling <a href={biz.phoneHref}>{biz.phone}</a>. If you
        ask us to stop contacting you, we will.
      </p>

      <h2>Children</h2>
      <p>This site is intended for adults arranging home or business services and is not directed at children.</p>

      <h2>Changes</h2>
      <p>
        If this policy changes we will update this page and the date above. Continuing to use the site after
        a change means you accept the updated policy.
      </p>

      <h2>Contact</h2>
      <p>
        {biz.name}, {biz.city}, {biz.state}. Phone <a href={biz.phoneHref}>{biz.phone}</a>, email{' '}
        <a href={biz.emailHref}>{biz.email}</a>.
      </p>

      <p>
        <em>
          This policy is provided as a starting point and is not legal advice. Have it reviewed by a
          South Carolina attorney before relying on it.
        </em>
      </p>
    </LegalShell>
  );
}

export function Terms() {
  return (
    <LegalShell
      title="Terms and Conditions"
      path="/terms-and-conditions"
      description="The terms that apply to use of the Top Level Garage Doors website and the services we quote through it."
    >
      <p>
        These terms apply to your use of this website and to estimates requested through it. By using the
        site you agree to them.
      </p>

      <h2>Estimates and quotes</h2>
      <p>
        Prices shown on this site are typical starting points, not fixed quotes. The final price depends on
        the door, the parts required and the condition of the system, and is confirmed in writing before any
        work begins. You are free to decline at that point with nothing owed beyond any agreed diagnostic
        fee.
      </p>

      <h2>Diagnostic fees</h2>
      <p>
        Estimates for new doors and openers are free. Repair visits may carry a diagnostic fee, disclosed
        when you book, which is waived in full if you approve the repair.
      </p>

      <h2>Warranty</h2>
      <p>
        Workmanship is warranted for one year from the date of service. Parts carry the manufacturer&rsquo;s
        warranty. The warranty does not cover damage from misuse, vehicle impact, storm damage, or work
        performed on the door by anyone else after our visit.
      </p>

      <h2>Scheduling and access</h2>
      <p>
        Arrival windows are estimates and may shift due to emergencies ahead of you in the queue. Someone
        aged 18 or over must be present, and the technician needs safe access to the door and to power.
      </p>

      <h2>Safety</h2>
      <p>
        Garage door springs and cables store enough energy to cause serious injury. Nothing on this site is
        an instruction to attempt a repair yourself, and we accept no liability for injury or damage arising
        from work you carry out on your own door.
      </p>

      <h2>Website content</h2>
      <p>
        Content on this site is provided for general information and may change without notice. The text,
        images, logo and design are the property of {biz.name} and may not be reproduced without permission.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the fullest extent permitted by South Carolina law, our liability arising from services or from
        use of this site is limited to the amount paid for the service in question. We are not liable for
        indirect or consequential losses.
      </p>

      <h2>Governing law</h2>
      <p>These terms are governed by the laws of the State of South Carolina.</p>

      <h2>Contact</h2>
      <p>
        Questions about these terms: {biz.name}, {biz.city}, {biz.state}, <a href={biz.phoneHref}>{biz.phone}</a>,{' '}
        <a href={biz.emailHref}>{biz.email}</a>.
      </p>

      <p>
        <em>
          These terms are a starting template and are not legal advice. Have them reviewed by a South
          Carolina attorney before relying on them.
        </em>
      </p>
    </LegalShell>
  );
}

/* --------------------------------------------------------------------- 404 */

export function NotFound() {
  return (
    <>
      <Seo
        title="Page not found | Top Level Garage Doors"
        description="That page does not exist. Find garage door repair services and service areas across Charleston, SC."
        path="/404"
        noindex
      />
      <section className="section">
        <div className="wrap nf">
          <div className="nf__code">404</div>
          <h1 style={{ fontSize: 'clamp(1.6rem,4vw,2.4rem)' }}>That page came off its track</h1>
          <p className="lede" style={{ marginInline: 'auto' }}>
            The link is broken, but your door does not have to be. Try one of these instead.
          </p>
          <div className="btn-row" style={{ justifyContent: 'center' }}>
            <Link to="/" className="btn btn--volt">
              Back to home
            </Link>
            <a href={biz.phoneHref} className="btn btn--ghost">
              <Phone size={16} /> Call {biz.phone}
            </a>
          </div>
          <div style={{ marginTop: '3rem', textAlign: 'left' }}>
          </div>
        </div>
      </section>
    </>
  );
}
