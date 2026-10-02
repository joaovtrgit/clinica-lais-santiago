import { ArrowRight } from 'lucide-react'
import { PROCEDURES, waLink } from '../data/site'

export default function Procedures() {
  return (
    <section id="procedimentos" className="section section--alt">
      <div className="container">
        <header className="section__head" data-reveal>
          <h2>Procedimentos</h2>
          <p className="lead">Conheça algumas das possibilidades de cuidado e tratamento.</p>
        </header>

        {/* DEMONSTRATIVO: substituir pelos procedimentos reais antes de publicar (ver src/data/site.js). */}
        <ul className="cards">
          {PROCEDURES.map((p, i) => (
            <li key={p.name} className="card" data-reveal style={{ transitionDelay: `${i * 70}ms` }}>
              <div className="card__img">
                <img src={p.image.src} width={p.image.w} height={p.image.h} alt={p.image.alt} loading="lazy" decoding="async" />
              </div>
              <div className="card__body">
                <h3>{p.name}</h3>
                <p>{p.text}</p>
                <a
                  className="card__link"
                  href={waLink(`Olá! Gostaria de saber mais sobre ${p.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Saiba mais sobre ${p.name}`}
                >
                  Saiba mais <ArrowRight size={16} aria-hidden="true" />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
