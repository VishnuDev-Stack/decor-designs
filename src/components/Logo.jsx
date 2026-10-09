import logo from '../assets/logo.jpg'
import { site } from '../data/content'

// The source logo is a square with generous black padding; the wrapper crops
// it to the emblem + wordmark so it reads clearly at navbar size.
export default function Logo({ size = 'md', onClick }) {
  return (
    <a href="#home" className={`brand brand-${size}`} aria-label={`${site.name} — Home`} onClick={onClick}>
      <span className="brand-crop">
        <img src={logo} alt={site.name} />
      </span>
    </a>
  )
}
