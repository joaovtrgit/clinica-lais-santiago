import { Quote } from 'lucide-react'
import { TESTIMONIALS } from '../data/site'

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <header className="section__head" data-reveal>
          <h2>O que dizem sobre o atendimento</h2>
          <p className="notice">Espaço preparado para depoimentos reais, inseridos com autorização.</p>
        </header>
        {/* TODO (REAL DATA): substituir por depoimentos reais. Não inventar avaliações. */}
        <ul className="quotes">
          {TESTIMONIALS.map((t, i) => (
            <li key={i} className="quote" data-reveal style={{ transitionDelay: `${i * 70}ms` }}>
              <Quote size={28} strokeWidth={1.3} aria-hidden="true" />
              <p>{t.text}</p>
              <span className="quote__name">{t.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
