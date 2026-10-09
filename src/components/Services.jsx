import Reveal from './Reveal'
import SectionHead from './SectionHead'
import { services } from '../data/content'

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <SectionHead eyebrow="What We Do" title="Our Interior Design Services">
          End-to-end home interior and civil works — from complete home transformations to focused, detail-led spaces.
        </SectionHead>

        <div className="services-grid">
          {services.map((s, i) => (
            <Reveal as="article" className="service-card" key={s.title} delay={(i % 4) * 90}>
              <div className="service-media">
                <img src={s.img} alt={s.alt} loading="lazy" />
                <span className="service-num">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div className="service-body">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <a href="#contact" className="service-link">Enquire <span aria-hidden="true">→</span></a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
