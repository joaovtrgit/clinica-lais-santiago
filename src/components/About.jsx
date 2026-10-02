import { IMAGES } from '../data/images'

export default function About() {
  const img = IMAGES.about
  return (
    <section id="sobre" className="section about">
      <div className="container split">
        <div className="split__media" data-reveal>
          <div className="arch-frame arch-frame--left">
            <div className="arch">
              <img src={img.src} width={img.w} height={img.h} alt={img.alt} loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
        <div className="split__text" data-reveal>
          <h2>Um cuidado pensado para você.</h2>
          <p className="lead">
            Cada pessoa possui características únicas. Por isso, nossa abordagem valoriza uma avaliação individual e um planejamento personalizado para cada necessidade.
          </p>
          <a href="#resultados" className="btn btn--ghost">Conheça nosso trabalho</a>

          {/* TODO (REAL DATA): inserir foto real, biografia, formação e especializações da profissional.
              Não inventar nenhuma dessas informações. */}
          <aside className="placeholder-box" aria-label="Espaço reservado para conteúdo real">
            <p className="placeholder-box__title">Espaço reservado para conteúdo real</p>
            <ul>
              <li>Foto da profissional</li>
              <li>Biografia</li>
              <li>Formação</li>
              <li>Especializações</li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}
