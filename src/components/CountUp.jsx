import { useEffect, useRef, useState } from 'react'

// Counts from 0 up to `end` the first time it scrolls into view.
export default function CountUp({ end, suffix = '', duration = 1200 }) {
  const ref = useRef(null)
  const [value, setValue] = useState(end)

  useEffect(() => {
    const el = ref.current
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (!el || reduced || !('IntersectionObserver' in window)) return

    let frame
    setValue(0)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        const tick = (now) => {
          const t = Math.min((now - start) / duration, 1)
          setValue(Math.round(end * (1 - Math.pow(1 - t, 3)))) // ease-out cubic
          if (t < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.5 },
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [end, duration])

  return (
    <span ref={ref} aria-label={`${end}${suffix}`}>
      <span aria-hidden="true">{value}{suffix}</span>
    </span>
  )
}
