const trust = ['Free Design Consultation', '3D Design Concepts', 'Turnkey Execution']

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-content">
        <span className="eyebrow hero-anim" style={{ '--d': '0.1s' }}>
          <span className="eyebrow-line" aria-hidden="true" />
          <span className="hide-xs">Residential </span>Interiors &amp; Civil Works
        </span>
        <h1 className="hero-anim" style={{ '--d': '0.25s' }}>
          Designing Beautiful Spaces.
          <br />
          <em>Creating Better Living.</em>
        </h1>
        <p className="hero-sub hero-anim" style={{ '--d': '0.4s' }}>
          Thoughtfully designed home interiors that combine elegance, comfort, functionality, and quality craftsmanship.
        </p>
        <div className="hero-ctas hero-anim" style={{ '--d': '0.55s' }}>
          <a href="#contact" className="btn btn-primary">Book a Free Consultation</a>
          <a href="#projects" className="btn btn-outline">Explore Our Projects</a>
        </div>
        <ul className="hero-trust hero-anim" style={{ '--d': '0.7s' }}>
          {trust.map((t) => (
            <li key={t}><span aria-hidden="true">✦</span>{t}</li>
          ))}
        </ul>
      </div>
      <a href="#about" className="scroll-cue" aria-label="Scroll to about section">
        <span />
      </a>
    </section>
  )
}
