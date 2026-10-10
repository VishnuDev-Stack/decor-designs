import Logo from './Logo'
import { navLinks, services, site, whatsappLink } from '../data/content'
import { InstagramIcon } from './Icons'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo size="lg" />
          <p className="footer-tagline">{site.tagline}</p>
          <div className="footer-socials">
            <a href={site.instagram.href} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Instagram">
              <InstagramIcon size={18} /> {site.instagram.handle}
            </a>
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
          <a href={site.altPhoneHref}>{site.altPhoneDisplay}</a>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">WhatsApp Chat</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={site.mapUrl} target="_blank" rel="noopener noreferrer">{site.address}</a>
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
