export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay" />
      <div className="hero-content">
        <span className="eyebrow hero-anim" style={{ '--d': '0.1s' }}>
          Residential Interior Design &amp; Civil Works
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
          <a href="#projects" className="btn btn-outline">Explore Our Projects</a>
          <a href="#contact" className="btn btn-primary">Book a Consultation</a>
        </div>
      </div>
      <a href="#about" className="scroll-cue" aria-label="Scroll to about section">
        <span />
      </a>
    </section>
  )
}
