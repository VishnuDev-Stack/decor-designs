import Reveal from './Reveal'
import LogoMark from './LogoMark'
import { site } from '../data/content'

export default function CtaBand() {
  return (
    <section className="cta-band">
      <Reveal className="container cta-inner">
        <LogoMark className="cta-mark" size={120} stroke={1} />
        <div className="cta-copy">
          <span className="eyebrow">Your Home, Reimagined</span>
          <h2>Ready to transform your space?</h2>
          <p>Book a free consultation and get expert design guidance tailored to your home and budget.</p>
        </div>
        <div className="cta-actions">
          <a href="#contact" className="btn btn-primary">Get a Free Quote</a>
          <a href={site.phoneHref} className="btn btn-outline">Call Us Now</a>
        </div>
      </Reveal>
    </section>
  )
}
