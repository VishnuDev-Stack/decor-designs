import { useCallback, useEffect, useMemo, useState } from 'react'
import Reveal from './Reveal'
import SectionHead from './SectionHead'
import { projects } from '../data/content'

const ALL = 'All'

export default function Projects() {
  const [filter, setFilter] = useState(ALL)
  const [openIndex, setOpenIndex] = useState(null)

  const categories = useMemo(() => [ALL, ...new Set(projects.map((p) => p.category))], [])
  const visible = filter === ALL ? projects : projects.filter((p) => p.category === filter)

  const close = useCallback(() => setOpenIndex(null), [])
  const step = useCallback(
    (dir) => setOpenIndex((i) => (i + dir + visible.length) % visible.length),
    [visible.length],
  )

  useEffect(() => {
    if (openIndex === null) return
    document.body.classList.add('no-scroll')
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.classList.remove('no-scroll')
      window.removeEventListener('keydown', onKey)
    }
  }, [openIndex, close, step])

  const current = openIndex !== null ? visible[openIndex] : null

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <SectionHead eyebrow="Featured Work" title="A Glimpse of Our Projects">
          A selection of residential interiors spanning modern living rooms, luxury bedrooms, modular kitchens and contemporary homes.
        </SectionHead>

        <div className="project-filters" role="tablist" aria-label="Filter projects">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={filter === c}
              className={`filter-btn ${filter === c ? 'is-active' : ''}`}
              onClick={() => setFilter(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {visible.map((p, i) => (
            <Reveal key={p.title} delay={(i % 4) * 80}>
              <button type="button" className="project-card" onClick={() => setOpenIndex(i)} aria-label={`View ${p.title}`}>
                <img src={p.img} alt="" loading="lazy" />
                <div className="project-overlay">
                  <span className="project-tag">{p.category}</span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
                <span className="project-zoom" aria-hidden="true">+</span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {current && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={current.title} onClick={close}>
          <button type="button" className="lightbox-close" onClick={close} aria-label="Close">×</button>
          {visible.length > 1 && (
            <>
              <button type="button" className="lightbox-nav prev" onClick={(e) => { e.stopPropagation(); step(-1) }} aria-label="Previous project">‹</button>
              <button type="button" className="lightbox-nav next" onClick={(e) => { e.stopPropagation(); step(1) }} aria-label="Next project">›</button>
            </>
          )}
          <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
            <img src={current.img} alt={current.title} />
            <figcaption>
              <span className="project-tag">{current.category}</span>
              <h3>{current.title}</h3>
              <p>{current.text}</p>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  )
}
