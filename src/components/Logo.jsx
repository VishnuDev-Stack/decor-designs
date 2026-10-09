import LogoMark from './LogoMark'
import { site } from '../data/content'

export default function Logo({ size = 'md', onClick }) {
  return (
    <a href="#home" className={`brand brand-${size}`} aria-label={`${site.name} — Home`} onClick={onClick}>
      <LogoMark className="brand-mark" size={size === 'lg' ? 64 : 46} />
      <span className="brand-text">
        <span className="brand-name">Décor Designs</span>
        <span className="brand-sub">Interio</span>
      </span>
    </a>
  )
}
