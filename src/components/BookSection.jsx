import Reveal from './Reveal.jsx';
import LeadForm from './LeadForm.jsx';

/**
 * Split appointment section: form on the left, photograph on the right.
 * Full-bleed, so it sits outside the usual .wrap container.
 */
export default function BookSection() {
  return (
    <section className="book book--flip" id="book">
      <Reveal className="book__body">
        <div className="fxeyebrow">Complete door care</div>
        <h2>Book an appointment</h2>
        <LeadForm formName="contact" bare />
      </Reveal>

      <div className="book__media">
        <Reveal className="book__van">
          <img
            src="/img/van-cutout-1100.webp"
            srcSet="/img/van-cutout-520.webp 520w, /img/van-cutout-760.webp 760w, /img/van-cutout-1100.webp 1100w"
            sizes="(min-width: 1000px) 46vw, 88vw"
            alt="Top Level Garage Doors branded service van"
            width="1100"
            height="704"
            loading="lazy"
            decoding="async"
          />
        </Reveal>
        <p className="book__vanNote">
          Fully stocked trucks across the Lowcountry - springs, cables, rollers and opener parts ride
          with every technician.
        </p>
      </div>
    </section>
  );
}
