import Reveal from './Reveal'
import SectionHead from './SectionHead'
import { whyUs } from '../data/content'

export default function WhyUs() {
  return (
    <section id="why" className="section why">
      <div className="container">
        <SectionHead eyebrow="Why Decor Designs" title="A Partner You Can Trust With Your Home" tone="light">
          We combine design sensibility with disciplined execution — so your project stays considered, transparent and on time.
        </SectionHead>
        <div className="why-grid">
          {whyUs.map((item, i) => (
            <Reveal className="why-item" key={item.title} delay={(i % 3) * 90}>
              <span className="why-icon" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
