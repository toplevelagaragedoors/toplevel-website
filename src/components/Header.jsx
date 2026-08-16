import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { biz } from '../data/site.js';
import OpenStatus from './OpenStatus.jsx';
import { Phone, Clock, Pin } from './Icons.jsx';

const nav = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/service-areas', label: 'Service Areas' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

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
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.end}
                className={({ isActive }) => (isActive ? 'is-active' : undefined)}
              >
                {n.label}
              </NavLink>
            ))}
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
          {nav.map((n) => (
            <Link key={n.to} to={n.to} tabIndex={openMenu ? 0 : -1}>
              {n.label}
            </Link>
          ))}
        </nav>
        <Link to="/contact" className="btn btn--volt btn--block" tabIndex={openMenu ? 0 : -1}>
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
