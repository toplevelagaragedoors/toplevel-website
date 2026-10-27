import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import Reveal from '../components/Reveal.jsx';
import LeadForm from '../components/LeadForm.jsx';
import { CtaBand, Crumbs } from '../components/Blocks.jsx';
import MapSection from '../components/MapSection.jsx';
import { Check, Phone, Mail, Pin, Clock, Shield } from '../components/Icons.jsx';
import { biz, SITE_URL, trustPoints, processSteps, areas } from '../data/site.js';

/* -------------------------------------------------------------------- About */

export function About() {
  const trail = [{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }];
  return (
    <>
      <Seo
        title="About Top Level Garage Door | Charleston, SC"
        description="Meet the licensed garage door technicians serving Charleston, SC. Upfront pricing, stocked trucks, same-day service and more than 10 years of experience."
        path="/about"
      />

      <section className="pagehead">
        <div className="wrap">
          <Crumbs trail={trail} />
          <h1>When your garage door breaks, we answer</h1>
          <p className="lede">
            Top Level Garage Door is a Charleston-based repair and installation company built on one idea:
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
                alt="Top Level Garage Door technician setting new door panels into the tracks at a Charleston home"
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
        title="Contact Top Level Garage Door | Charleston, SC"
        description="Request a free garage door estimate in Charleston, SC. Open 24/7, with same-day appointments across the Lowcountry."
        path="/contact"
      />

      <section className="pagehead">
        <div className="wrap">
          <Crumbs trail={trail} />
          <h1>Contact Top Level Garage Door</h1>
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
                  <Pin size={14} style={{ display: 'inline', verticalAlign: '-2px' }} />{' '}
                  <a
                    href="https://maps.app.goo.gl/bmYh9CouGHVYufr56"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'inherit' }}
                  >
                    {biz.city}, {biz.state}
                  </a>{' '}
                  and surrounding areas
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
                  calls are prioritised ahead of scheduled work, day or night.
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

      <CtaBand
        buttons={false}
        eyebrow="Prefer to talk it through?"
        lines={['Call us and we will', 'help you get the door', 'sorted the same day.']}
        body="Tell us what the door is doing and we will book a technician across Charleston and the Lowcountry, usually the same day."
      />

      <MapSection />
    </>
  );
}

/* ------------------------------------------------------------------- Legal */

function LegalShell({ title, path, description, updated = 'October 26, 2026', children }) {
  const trail = [{ name: 'Home', path: '/' }, { name: title, path }];
  return (
    <>
      <Seo title={`${title} | ${biz.name}`} description={description} path={path} noindex />
      <section className="pagehead">
        <div className="wrap">
          <Crumbs trail={trail} />
          <h1>{title}</h1>
          <p className="lede">Last updated: {updated}</p>
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
      description="How Top Level Garage Door collects, uses and protects the information you submit through this website."
    >
      <h2>1. Who We Are</h2>
      <p>
        {biz.name} is committed to protecting your privacy and personal information. Our website address is:{' '}
        <a href={SITE_URL}>{SITE_URL}</a>
      </p>
      <p>
        For privacy-related questions or concerns, you can contact us using the information provided at the
        end of this policy.
      </p>

      <h2>2. What Personal Data We Collect and Why</h2>

      <h3>Comments</h3>
      <p>
        If visitors leave comments on our website, we collect the information provided in the comments form,
        along with the visitor’s IP address and browser user agent string to help detect spam and protect
        our website from fraudulent activity.
      </p>

      <h3>Media</h3>
      <p>
        If you upload images to our website, we recommend removing embedded location data (EXIF GPS) before
        uploading. Visitors may be able to download images and extract any location information embedded
        within them.
      </p>

      <h3>Contact Forms</h3>
      <p>
        When you contact {biz.name} through our website, email, or other communication channels, we may
        collect your name, email address, phone number, and message or service request details. We use this
        information to respond to inquiries, provide garage door service estimates, schedule appointments,
        communicate with customers, and deliver customer support.
      </p>
      <p>
        We do not use your contact information for marketing communications without your consent where
        required by applicable law.
      </p>

      <h3>Cookies</h3>
      <p>
        Our website may use cookies to improve functionality and enhance your browsing experience. Cookies
        may remember your preferences, support login features, help us understand website traffic, and
        assist with analytics or advertising where applicable.
      </p>
      <p>
        You can manage or disable cookies through your browser settings. Disabling certain cookies may
        affect some website features.
      </p>

      <h3>Embedded Content</h3>
      <p>
        Our website may include embedded content from third-party websites, such as videos, maps, or other
        external resources. Embedded content may behave as though you have visited the third-party website
        directly.
      </p>
      <p>
        These third-party websites may collect information about you, use cookies, employ tracking
        technologies, and monitor your interaction with their content. Their privacy practices are governed
        by their own privacy policies.
      </p>

      <h3>Analytics</h3>
      <p>
        We may use third-party analytics services, such as Google Analytics, to understand how visitors
        interact with our website and improve our online services. These services may collect information
        such as your IP address, browser type, device information, pages visited, referral sources, and time
        spent on the website.
      </p>
      <p>
        This information helps us evaluate website performance and improve the user experience. Third-party
        analytics providers process information according to their applicable privacy policies and settings.
      </p>

      <h2>3. Who We Share Your Data With</h2>
      <p>
        We may share personal information with trusted third-party service providers when necessary to
        operate our website, respond to customer inquiries, and provide our services. These providers may
        include:
      </p>
      <ul>
        <li>Google Analytics and related analytics providers for website performance measurement.</li>
        <li>Spam detection and website security services to protect against fraudulent or malicious activity.</li>
        <li>Email and communication service providers to receive, manage, and respond to customer inquiries.</li>
        <li>Email marketing platforms, if you choose to subscribe to marketing communications.</li>
      </ul>
      <p>
        We may also disclose information when required by law, to protect our legal rights, or to address
        security concerns.
      </p>
      <p>We do not sell or rent your personal information to third parties.</p>

      <h2>4. How Long We Retain Your Data</h2>
      <p>
        We retain personal information only for as long as reasonably necessary to fulfill the purposes
        described in this policy, provide our services, maintain business records, resolve disputes, and
        comply with applicable legal obligations.
      </p>
      <p>
        If visitors leave comments, the comments and associated metadata may be retained indefinitely to
        help recognize and approve follow-up comments.
      </p>
      <p>
        Information submitted through contact forms or email may be retained for as long as necessary to
        respond to inquiries, manage customer relationships, maintain service records, and meet legal or
        operational requirements.
      </p>
      <p>
        If user accounts are available on our website, personal information associated with those accounts
        may be stored in the user’s profile until it is no longer needed or deletion is requested, subject
        to applicable legal requirements.
      </p>

      <h2>5. What Rights You Have Over Your Data</h2>
      <p>Depending on your location and applicable privacy laws, you may have the right to:</p>
      <ul>
        <li>Request a copy of the personal information we hold about you.</li>
        <li>Request corrections to inaccurate or incomplete personal information.</li>
        <li>
          Request deletion of your personal information, subject to legal, security, and business
          recordkeeping requirements.
        </li>
        <li>Withdraw consent for certain types of data processing or marketing communications.</li>
        <li>Object to or request restrictions on certain processing activities where applicable.</li>
      </ul>
      <p>
        To exercise these rights, please contact us using the details provided below. We may need to verify
        your identity before fulfilling your request.
      </p>

      <h2>6. Where We Send Your Data</h2>
      <p>
        Visitor comments and submitted information may be processed by automated spam detection, website
        security, analytics, and communication services.
      </p>
      <p>
        Some third-party service providers may process or store information on servers located outside your
        state or country. Where applicable, we take reasonable steps to ensure that personal information is
        handled in accordance with relevant privacy requirements.
      </p>
      <p>
        We encourage visitors to review the privacy policies of third-party services they interact with
        through our website.
      </p>

      <h2>7. Contact Information</h2>
      <p>
        If you have questions about this Privacy Policy, wish to request access to or deletion of your
        personal information, or have concerns about how your information is handled, please contact us:
      </p>
      <p>
        <strong>Business Name:</strong> {biz.name}
        <br />
        <strong>Address:</strong> {biz.city}, {biz.stateFull}
        <br />
        <strong>Phone:</strong> <a href={biz.phoneHref}>{biz.phone}</a>
        <br />
        <strong>Email:</strong> <a href={biz.emailHref}>{biz.email}</a>
        <br />
        <strong>Website:</strong> <a href={SITE_URL}>{SITE_URL}</a>
      </p>
      <p>
        We may update this Privacy Policy from time to time to reflect changes in our practices, website
        functionality, or applicable legal requirements. Any updates will be published on this page along
        with the revised date.
      </p>
    </LegalShell>
  );
}

export function Terms() {
  return (
    <LegalShell
      title="Terms and Conditions"
      path="/terms-and-conditions"
      description="The terms that apply to use of the Top Level Garage Door website and the services we quote through it."
    >
      <h2>1. Introduction</h2>
      <p>
        Welcome to {biz.name} (“we”, “our”, or “us”). These Terms &amp; Conditions govern your use of our
        website located at <a href={SITE_URL}>{SITE_URL}</a>.
      </p>
      <p>
        By accessing or using this website, you agree to comply with these terms. If you do not agree with
        any part of these terms, please discontinue using our website.
      </p>

      <h2>2. Use of Website</h2>
      <p>
        You agree to use our website only for lawful purposes and in a manner that does not infringe upon
        the rights of others or restrict their ability to access and use the website.
      </p>
      <p>
        You must not use this website to transmit harmful content, attempt unauthorized access, interfere
        with website functionality, or engage in any activity that violates applicable laws or regulations.
      </p>
      <p>
        Information provided on this website is intended to describe our garage door services and help
        visitors contact us regarding service inquiries, estimates, and appointments.
      </p>

      <h2>3. Intellectual Property</h2>
      <p>
        All content on this website, including text, images, graphics, logos, design elements, and other
        materials, is owned by {biz.name} or used with appropriate authorization, unless otherwise stated.
      </p>
      <p>
        You may not reproduce, distribute, modify, publish, or commercially use website content without
        prior written permission from the applicable rights holder, except where permitted by law.
      </p>

      <h2>4. User Content</h2>
      <p>
        If our website allows you to submit comments, reviews, messages, or other content, you are
        responsible for ensuring that your submissions are accurate, lawful, and do not violate the rights
        of others.
      </p>
      <p>
        You agree not to submit content that is misleading, abusive, defamatory, unlawful, or otherwise
        inappropriate.
      </p>
      <p>
        We reserve the right to review, remove, or restrict user-submitted content when reasonably
        necessary, subject to applicable law.
      </p>

      <h2>5. Links to Other Websites</h2>
      <p>
        Our website may contain links to third-party websites or services for your convenience. These
        external websites are not controlled by {biz.name}.
      </p>
      <p>
        We are not responsible for the content, accuracy, privacy practices, security, or policies of
        third-party websites. Accessing external websites is at your own discretion, and we encourage you to
        review their applicable terms and privacy policies.
      </p>

      <h2>6. Limitation of Liability</h2>
      <p>
        To the extent permitted by applicable law, {biz.name} shall not be liable for any direct, indirect,
        incidental, consequential, or other damages arising from your use of, or inability to use, this
        website or reliance on its content.
      </p>
      <p>
        We make reasonable efforts to keep the information on our website accurate and up to date; however,
        we do not guarantee that all content will always be complete, accurate, current, or available
        without interruption.
      </p>
      <p>
        Information published on this website does not constitute a binding service agreement or guarantee
        of pricing, availability, or specific results. Service details, estimates, scheduling, and
        applicable warranties may be subject to separate terms agreed upon with the customer.
      </p>
      <p>
        Nothing in these terms excludes or limits liability where such exclusion or limitation is prohibited
        by applicable law.
      </p>

      <h2>7. Changes to Terms</h2>
      <p>
        We reserve the right to update or modify these Terms &amp; Conditions at any time. Changes will
        become effective when posted on this page, unless otherwise stated.
      </p>
      <p>
        Your continued use of the website after revised terms are published constitutes acceptance of the
        updated terms to the extent permitted by applicable law. We encourage you to review this page
        periodically.
      </p>

      <h2>8. Governing Law</h2>
      <p>
        These Terms &amp; Conditions shall be governed by and interpreted in accordance with the applicable
        laws of the State of South Carolina, without regard to conflict-of-law principles, where permitted
        by law.
      </p>
      <p>
        Any disputes arising from the use of this website shall be handled by the appropriate courts with
        jurisdiction under applicable law.
      </p>

      <h2>9. Contact</h2>
      <p>If you have questions about these Terms &amp; Conditions, please contact us:</p>
      <p>
        <strong>Business Name:</strong> {biz.name}
        <br />
        <strong>Address:</strong> {biz.city}, {biz.stateFull}
        <br />
        <strong>Phone:</strong> <a href={biz.phoneHref}>{biz.phone}</a>
        <br />
        <strong>Email:</strong> <a href={biz.emailHref}>{biz.email}</a>
        <br />
        <strong>Website:</strong> <a href={SITE_URL}>{SITE_URL}</a>
      </p>
    </LegalShell>
  );
}

/* --------------------------------------------------------------------- 404 */

export function NotFound() {
  return (
    <>
      <Seo
        title="Page not found | Top Level Garage Door"
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
