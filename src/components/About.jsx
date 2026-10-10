import Reveal from './Reveal'
import CountUp from './CountUp'
import { highlights, images } from '../data/content'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-grid">
        <Reveal className="about-media">
          <img src={images.dining} alt="Elegant residential living and dining space designed by Decor Designs" loading="lazy" decoding="async" width="1152" height="864" />
          <div className="about-media-frame" aria-hidden="true" />
          <div className="about-media-badge">
            <strong><CountUp end={10} suffix="+" /></strong>
            <span>Years of Craft</span>
          </div>
        </Reveal>

        <Reveal className="about-text" delay={120}>
          <span className="eyebrow dark">About Decor Designs</span>
          <h2>Spaces That Reflect Your Lifestyle.</h2>
          <p>
            Decor Designs is a dedicated team specialising in thoughtful home interior solutions and civil interior works.
            We believe a home should feel as good as it looks — balanced, functional, and unmistakably yours.
          </p>
          <p>
            From the first sketch to the final handover, our focus stays on attention to detail, practical planning,
            quality materials, and genuine customer satisfaction. Every project is approached as a collaboration,
            shaped around how you live every day.
          </p>

          <div className="about-highlights stagger">
            {highlights.map((h) => (
              <div className="highlight" key={h.title}>
                <span className="highlight-icon" aria-hidden="true">{h.icon}</span>
                <div>
                  <h3>{h.title}</h3>
                  <p>{h.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
