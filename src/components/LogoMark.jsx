import { useId } from 'react'

// Vector recreation of the Decor Designs lotus emblem — crisp at every size.
const petal = (r, w) =>
  `M0 0C${w} ${-r * 0.3} ${w} ${-r * 0.68} 0 ${-r}C${-w} ${-r * 0.68} ${-w} ${-r * 0.3} 0 0Z`

const OUTER = petal(47, 15)
const INNER = petal(31, 10)
const angles = Array.from({ length: 12 }, (_, i) => i * 30)

export default function LogoMark({ size = 44, stroke = 1.7, className = '' }) {
  const id = useId().replace(/:/g, '')
  const grad = `gold-${id}`

  return (
    <svg className={className} width={size} height={size} viewBox="-50 -50 100 100" aria-hidden="true">
      <defs>
        <linearGradient id={grad} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f6e3a1" />
          <stop offset="0.5" stopColor="#c9a35a" />
          <stop offset="1" stopColor="#8a6a30" />
        </linearGradient>
      </defs>
      <g fill="none" stroke={`url(#${grad})`} strokeWidth={stroke} strokeLinejoin="round">
        {angles.map((a) => (
          <path key={`o${a}`} d={OUTER} transform={`rotate(${a})`} />
        ))}
        {angles.map((a) => (
          <path key={`i${a}`} d={INNER} transform={`rotate(${a + 15})`} />
        ))}
        <circle r="6" />
      </g>
      <circle r="2.4" fill={`url(#${grad})`} />
    </svg>
  )
}
