import Reveal from './Reveal'
import SectionHead from './SectionHead'
import { testimonials } from '../data/content'

export default function Testimonials() {
  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <SectionHead eyebrow="Client Voices" title="What Our Clients Say">
          Homeowners who trusted us with the spaces they live in every day.
        </SectionHead>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <Reveal as="figure" className="testimonial-card" key={t.name} delay={i * 110}>
              <div className="quote-mark" aria-hidden="true">“</div>
              <blockquote>{t.quote}</blockquote>
              <figcaption>
                <span className="stars" aria-label="5 out of 5 stars">★★★★★</span>
                <strong>{t.name}</strong>
                <span className="role">{t.role}</span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
