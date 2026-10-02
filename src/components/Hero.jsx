import { Check } from 'lucide-react'
import { IMAGES } from '../data/images'
import { TRUST } from '../data/site'

export default function Hero() {
  const img = IMAGES.hero
  return (
    <section id="inicio" className="hero">
      <div className="container hero__grid">
        <div className="hero__text">
          <h1 className="hero__title">
            Realce sua beleza.<br />Valorize sua essência.
          </h1>
          <p className="hero__lead">
            Tratamentos estéticos personalizados para cuidar da sua beleza com naturalidade, segurança e atenção aos detalhes.
          </p>
          <div className="hero__actions">
            <a href="#contato" className="btn btn--primary">Agendar avaliação</a>
            <a href="#procedimentos" className="btn btn--ghost">Conhecer procedimentos</a>
          </div>
          <ul className="trust">
            {TRUST.map((t) => (
              <li key={t}><Check size={16} strokeWidth={2} aria-hidden="true" />{t}</li>
            ))}
          </ul>
        </div>

        <div className="hero__media">
          <div className="arch-frame">
            <div className="arch">
              <img src={img.src} width={img.w} height={img.h} alt={img.alt} fetchpriority="high" decoding="async" />
            </div>
            <span className="hero__tag">ESTÉTICA AVANÇADA</span>
          </div>
        </div>
      </div>
    </section>
  )
}
