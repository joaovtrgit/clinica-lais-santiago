import { ClipboardList, Sparkles, Flower2, HeartHandshake } from 'lucide-react'
import { BENEFITS } from '../data/site'

const ICONS = { clipboard: ClipboardList, sparkles: Sparkles, flower: Flower2, heart: HeartHandshake }

export default function Benefits() {
  return (
    <section className="section section--alt">
      <div className="container">
        <header className="section__head" data-reveal>
          <h2>Por que escolher um atendimento personalizado?</h2>
        </header>
        <ul className="benefits">
          {BENEFITS.map((b, i) => {
            const Icon = ICONS[b.icon]
            return (
              <li key={b.title} className="benefit" data-reveal style={{ transitionDelay: `${i * 70}ms` }}>
                <span className="benefit__icon"><Icon size={26} strokeWidth={1.4} aria-hidden="true" /></span>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
