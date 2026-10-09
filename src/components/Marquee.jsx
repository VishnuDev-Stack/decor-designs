import { services } from '../data/content'

// Endless ribbon of service names; the list is rendered twice for a seamless loop.
export default function Marquee() {
  const items = services.map((s) => s.title)
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[...items, ...items].map((t, i) => (
          <span key={i}>{t}<i>✦</i></span>
        ))}
      </div>
    </div>
  )
}
