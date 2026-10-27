import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { biz, services, areas } from '../data/site.js';
import { hasServicePage } from '../data/servicePages.js';
import { hasLocationPage } from '../data/locationPages.js';
import OpenStatus from './OpenStatus.jsx';
import { Phone, Clock, Pin } from './Icons.jsx';

// Dropdown contents, derived from the built pages so the nav never links to a
// page that does not exist.
const serviceMenu = services
  .filter((s) => hasServicePage(s.slug))
  .map((s) => ({ to: `/services/${s.slug}`, label: s.name }));

const areaMenu = areas
  .filter((a) => hasLocationPage(`${a.slug}-sc`))
  .map((a) => ({ to: `/service-areas/${a.slug}-sc`, label: a.name }));

const nav = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services', menu: serviceMenu },
  { to: '/service-areas', label: 'Service Areas', menu: areaMenu },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

function Caret() {
  return (
    <svg className="nav__caret" viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [stuck, setStuck] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpenMenu(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('is-locked', openMenu);
    return () => document.body.classList.remove('is-locked');
  }, [openMenu]);

  const tab = openMenu ? 0 : -1;

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <div className="topbar">
        <div className="wrap topbar__inner">
          <OpenStatus />
          <span className="topbar__item topbar__item--hide">
            <Pin size={13} /> {biz.city}, {biz.state}
          </span>
          <a className="topbar__item" href={biz.phoneHref}>
            <Phone size={13} /> {biz.phone}
          </a>
        </div>
      </div>

      <header className={`header${stuck ? ' is-stuck' : ''}`}>
        <div className="wrap header__inner">
          <Link to="/" className="brand" aria-label={`${biz.name} - home`}>
            <img
              src="/img/logo-440.webp"
              srcSet="/img/logo-240.webp 240w, /img/logo-440.webp 440w"
              sizes="200px"
              alt={biz.name}
              width="440"
              height="214"
              fetchpriority="high"
            />
          </Link>

          <nav className="nav" aria-label="Primary">
            {nav.map((n) =>
              n.menu ? (
                <div className="nav__group" key={n.to}>
                  <NavLink
                    to={n.to}
                    end={n.end}
                    className={({ isActive }) => (isActive ? 'is-active' : undefined)}
                  >
                    {n.label}
                    <Caret />
                  </NavLink>
                  <div className="nav__menu">
                    <div className="nav__menu-grid">
                      {n.menu.map((m) => (
                        <Link key={m.to} to={m.to}>
                          {m.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
                  key={n.to}
                  to={n.to}
                  end={n.end}
                  className={({ isActive }) => (isActive ? 'is-active' : undefined)}
                >
                  {n.label}
                </NavLink>
              )
            )}
          </nav>

          <div className="header__cta">
            <a href={biz.phoneHref} className="phone-pill">
              <span className="phone-pill__badge">
                <Phone size={17} />
              </span>
              {biz.phone}
            </a>
            <span className="header__rule" aria-hidden="true" />
            <Link to="/contact" className="btn">
              Appointment
            </Link>
          </div>

          <button
            className="burger"
            aria-expanded={openMenu}
            aria-controls="mobile-drawer"
            aria-label={openMenu ? 'Close menu' : 'Open menu'}
            onClick={() => setOpenMenu((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div id="mobile-drawer" className={`drawer${openMenu ? ' is-open' : ''}`} aria-hidden={!openMenu}>
        <nav aria-label="Mobile">
          {nav.map((n) =>
            n.menu ? (
              <details className="drawer__group" key={n.to}>
                <summary>
                  {n.label}
                  <Caret />
                </summary>
                <div className="drawer__sub">
                  <Link to={n.to} tabIndex={tab}>
                    All {n.label.toLowerCase()}
                  </Link>
                  {n.menu.map((m) => (
                    <Link key={m.to} to={m.to} tabIndex={tab}>
                      {m.label}
                    </Link>
                  ))}
                </div>
              </details>
            ) : (
              <Link key={n.to} to={n.to} tabIndex={tab}>
                {n.label}
              </Link>
            )
          )}
        </nav>
        <Link to="/contact" className="btn btn--volt btn--block" tabIndex={tab}>
          Get a free estimate
        </Link>
        <div className="drawer__meta">
          <Clock size={12} /> {biz.hours}
          <br />
          {biz.city}, {biz.state}
          <br />
          Licensed &amp; insured
        </div>
      </div>

      <div className="callbar">
        <a href={biz.phoneHref}>
          <Phone size={15} /> Call now
        </a>
        <Link to="/contact">Free estimate</Link>
      </div>
    </>
  );
}
