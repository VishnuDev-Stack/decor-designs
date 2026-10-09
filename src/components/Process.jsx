import Reveal from './Reveal'
import SectionHead from './SectionHead'
import { processSteps } from '../data/content'

export default function Process() {
  return (
    <section id="process" className="section process">
      <div className="container">
        <SectionHead eyebrow="How We Work" title="Our Four-Step Process">
          A clear, considered path from first conversation to final handover.
        </SectionHead>
        <ol className="process-steps">
          {processSteps.map((s, i) => (
            <Reveal as="li" className="step" key={s.title} delay={i * 110}>
              <span className="step-num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
