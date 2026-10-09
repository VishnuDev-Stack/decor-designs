import Reveal from './Reveal'

export default function SectionHead({ eyebrow, title, children, tone = 'dark' }) {
  return (
    <Reveal className="section-head">
      <span className={`eyebrow ${tone}`}>{eyebrow}</span>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </Reveal>
  )
}
