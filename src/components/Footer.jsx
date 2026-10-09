import Logo from './Logo'
import { navLinks, services, site } from '../data/content'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo size="lg" />
          <p className="footer-tagline">{site.tagline}</p>
          <div className="footer-socials">
            {site.socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a>
            ))}
          </div>
        </div>
        <div className="footer-col">
          <h4>Explore</h4>
          {navLinks.map((l) => <a key={l.id} href={`#${l.id}`}>{l.label}</a>)}
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          {services.slice(0, 6).map((s) => <a key={s.title} href="#services">{s.title}</a>)}
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <a href={site.phoneHref}>{site.phoneDisplay}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <span>{site.address}</span>
          <span>{site.hours}</span>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>&copy; {year} {site.name}. All rights reserved.</p>
          <p>Premium Residential Interior Design &amp; Civil Works.</p>
        </div>
      </div>
    </footer>
  )
}
