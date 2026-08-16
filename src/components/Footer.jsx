import { Link } from 'react-router-dom';
import { biz, services, areas } from '../data/site.js';
import { Phone, Mail, Pin, Clock } from './Icons.jsx';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="wrap footer__grid">
        <div className="footer__brand">
          <img
            src="/img/logo-440.webp"
              srcSet="/img/logo-240.webp 240w, /img/logo-440.webp 440w"
              sizes="180px"
            alt={biz.name}
            width="440"
            height="214"
            loading="lazy"
          />
          <p style={{ maxWidth: '34ch' }}>
            Garage door repair, spring replacement and new installations across Charleston and the
            Lowcountry. Licensed, insured, and finishing most jobs on the first visit.
          </p>
        </div>

        <div>
          <p className="footer__h">
            <Link to="/services">Services</Link>
          </p>
          <ul>
            {services.map((s) => (
              <li key={s.slug}>{s.name}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="footer__h">
            <Link to="/service-areas">Service areas</Link>
          </p>
          <ul>
            {areas.slice(0, 6).map((a) => (
              <li key={a.slug}>{a.name}, SC</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="footer__h">Contact</p>
          <address className="footer__nap">
            <strong style={{ color: 'var(--text-dark)', display: 'block', marginBottom: '.4rem' }}>{biz.name}</strong>
            <span className="footer__addr">
              <Pin size={13} style={{ display: 'inline', verticalAlign: '-2px' }} /> {biz.city},{' '}
              {biz.state}
            </span>
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
            © {year} {biz.name} · Licensed &amp; insured
          </span>
          <nav aria-label="Legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
