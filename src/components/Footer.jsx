import { Link } from 'react-router-dom';
import { biz, services } from '../data/site.js';
import { hasServicePage } from '../data/servicePages.js';
import { Phone, Mail, Pin, Clock } from './Icons.jsx';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="wrap footer__grid">
        <div className="footer__brand">
          <Link to="/" className="footer__logo" aria-label={`${biz.name} home`}>
            <img
              src="/img/logo-440.webp"
              srcSet="/img/logo-240.webp 240w, /img/logo-440.webp 440w"
              sizes="240px"
              alt={biz.name}
              width="440"
              height="214"
              loading="lazy"
            />
          </Link>
          <p style={{ maxWidth: '34ch' }}>
            Garage door repair, spring replacement and new installations across Charleston and the
            Lowcountry. Licensed, insured, and finishing most jobs on the first visit.
          </p>
        </div>

        <div className="footer__col footer__col--links">
          <p className="footer__h">Quick links</p>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/service-areas">Service areas</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer__col footer__col--services">
          <p className="footer__h">
            <Link to="/services">Services</Link>
          </p>
          <ul>
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                {hasServicePage(s.slug) ? <Link to={`/services/${s.slug}`}>{s.name}</Link> : s.name}
              </li>
            ))}
            <li>
              <Link to="/services">View all services</Link>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <p className="footer__h">Contact</p>
          <address className="footer__nap">
            <a
              className="footer__addr"
              href="https://maps.app.goo.gl/bmYh9CouGHVYufr56"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Pin size={13} style={{ display: 'inline', verticalAlign: '-2px' }} /> {biz.city},{' '}
              {biz.state}
            </a>
            <br />
            <Phone size={13} style={{ display: 'inline', verticalAlign: '-2px' }} />{' '}
            <a href={biz.phoneHref}>{biz.phone}</a>
            <br />
            <Mail size={13} style={{ display: 'inline', verticalAlign: '-2px' }} />{' '}
            <a href={biz.emailHref} style={{ wordBreak: 'break-all' }}>
              {biz.email}
            </a>
            <br />
            <Clock size={13} style={{ display: 'inline', verticalAlign: '-2px' }} /> {biz.hours}
          </address>
        </div>
      </div>

      <div className="wrap">
        <div className="footer__bar">
          <span>
            © {year} {biz.name}. All rights reserved.
          </span>
          <nav aria-label="Legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
