import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone } from './Icons.jsx';
import { biz } from '../data/site.js';

/**
 * Video hero. The clip is muted, looping and inline so it autoplays on iOS,
 * with a poster frame so the first paint is never blank. Under
 * prefers-reduced-motion the video is paused and the poster stands in.
 */
export default function HeroSlider() {
  const videoRef = useRef(null);
  // The poster renders in the server HTML and is the LCP element. The video is
  // only attached after first paint, and skipped entirely on small screens or
  // metered connections, where a 450KB download delays the text for no gain.
  const [playVideo, setPlayVideo] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    if (window.innerWidth < 900) return undefined;

    const conn = navigator.connection;
    if (conn && (conn.saveData || /2g/.test(conn.effectiveType || ''))) return undefined;

    const start = () => setPlayVideo(true);
    // Wait for the browser to go idle so the video never competes with the
    // critical render.
    const id = window.requestIdleCallback
      ? window.requestIdleCallback(start, { timeout: 2500 })
      : setTimeout(start, 1200);
    return () => {
      if (window.cancelIdleCallback) window.cancelIdleCallback(id);
      else clearTimeout(id);
    };
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v || !playVideo) return;
    v.muted = true;
    const pr = v.play();
    if (pr && pr.catch) pr.catch(() => {});
  }, [playVideo]);

  return (
    <section className="chero chero--fx chero--video">
      <div className="fxbg">
        <img
          className="fxposter is-on"
          src="/img/hero-poster-1280.webp"
          srcSet="/img/hero-poster-560.webp 560w, /img/hero-poster-860.webp 860w, /img/hero-poster-1280.webp 1280w"
          sizes="100vw"
          alt=""
          width="1280"
          height="720"
          fetchpriority="high"
          decoding="async"
        />

        {playVideo && (
          <video
            ref={videoRef}
            className="is-on"
            poster="/img/hero-poster-1280.webp"
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
            tabIndex={-1}
          >
            <source src="/video/hero.webm" type="video/webm" />
            <source src="/video/hero.mp4" type="video/mp4" />
          </video>
        )}
      </div>
      <div className="chero__scrim" />

      <div className="wrap chero__inner">
        <div className="chero__copy">
          <div className="fxeyebrow">Garage door specialists</div>
          <h1 className="lines is-in">
            <span className="line">
              <span>Garage door</span>
            </span>
            <span className="line">
              <span>problems?</span>
            </span>
            <span className="line">
              <span className="accent">Fixed fast.</span>
            </span>
          </h1>
          <p className="chero__sub">
            Fast, professional garage door repair throughout Charleston and the Lowcountry. From broken
            springs and faulty openers to off-track doors, we get your garage door working safely again -
            often the same day.
          </p>
          <div className="btn-row" style={{ marginTop: 0 }}>
            <a href={biz.phoneHref} className="btn btn--fx">
              Call {biz.phone} <span className="plus">+</span>
            </a>
            <Link to="/services" className="btn btn--ghost-light">
              Our services
            </Link>
          </div>

          <div className="fxfloat">
            <strong>Same day</strong>
            <span>Service</span>
          </div>
        </div>
      </div>
    </section>
  );
}
