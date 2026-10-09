import { useCallback, useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'
import SectionHead from './SectionHead'
import { small, testimonials } from '../data/content'

const AUTOPLAY_MS = 7000

const initials = (name) =>
  name
    .split(/\s|&/)
    .filter(Boolean)
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

const Arrow = ({ dir }) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {dir === 'prev' ? <path d="M15 5l-7 7 7 7" /> : <path d="M9 5l7 7-7 7" />}
  </svg>
)

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchX = useRef(null)
  const count = testimonials.length

  const go = useCallback((dir) => setIndex((i) => (i + dir + count) % count), [count])

  useEffect(() => {
    if (paused || count < 2) return
    const t = setTimeout(() => go(1), AUTOPLAY_MS)
    return () => clearTimeout(t)
  }, [index, paused, go, count])

  const onTouchStart = (e) => { touchX.current = e.touches[0].clientX }
  const onTouchEnd = (e) => {
    if (touchX.current === null) return
    const dx = e.changedTouches[0].clientX - touchX.current
    if (Math.abs(dx) > 45) go(dx < 0 ? 1 : -1)
    touchX.current = null
  }

  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <SectionHead eyebrow="Client Voices" title="Stories From Our Homeowners">
          Every home we design is a long-term relationship. Here is what our clients say about living in their spaces.
        </SectionHead>

        <Reveal
          className="tst"
          role="region"
          aria-roledescription="carousel"
          aria-label="Client testimonials"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className="tst-stage">
            {testimonials.map((t, i) => (
              <figure
                key={t.name}
                className={`tst-slide ${i === index ? 'is-active' : ''}`}
                aria-hidden={i !== index}
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${count}`}
              >
                <div className="tst-media">
                  <img src={small(t.img)} alt="" loading="lazy" decoding="async" />
                  <span className="tst-tag">{t.role}</span>
                </div>

                <div className="tst-body">
                  <svg className="tst-quote" viewBox="0 0 48 36" aria-hidden="true">
                    <path d="M0 36V21.6C0 9.4 6.2 2.2 18.6 0l2 4.6C13.8 6.6 10.4 10.6 10 17h9.6v19H0zm27.4 0V21.6C27.4 9.4 33.6 2.2 46 0l2 4.6c-6.8 2-10.2 6-10.6 12.4H47v19H27.4z" />
                  </svg>
                  <div className="tst-stars" aria-label="Rated 5 out of 5">
                    {'★★★★★'.split('').map((s, k) => <span key={k}>{s}</span>)}
                  </div>
                  <blockquote>{t.quote}</blockquote>
                  <figcaption>
                    <span className="tst-avatar" aria-hidden="true">{initials(t.name)}</span>
                    <span>
                      <strong>{t.name}</strong>
                      <span className="tst-role">{t.role}</span>
                    </span>
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>

          <div className="tst-controls">
            <span className="tst-count">
              <b>{String(index + 1).padStart(2, '0')}</b> / {String(count).padStart(2, '0')}
            </span>
            <div className="tst-dots">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  className={`tst-dot ${i === index ? 'is-active' : ''} ${paused ? 'is-paused' : ''}`}
                  aria-label={`Show testimonial ${i + 1}`}
                  aria-current={i === index}
                  onClick={() => setIndex(i)}
                  style={{ '--autoplay': `${AUTOPLAY_MS}ms` }}
                />
              ))}
            </div>
            <div className="tst-arrows">
              <button type="button" className="tst-arrow" onClick={() => go(-1)} aria-label="Previous testimonial"><Arrow dir="prev" /></button>
              <button type="button" className="tst-arrow" onClick={() => go(1)} aria-label="Next testimonial"><Arrow dir="next" /></button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
