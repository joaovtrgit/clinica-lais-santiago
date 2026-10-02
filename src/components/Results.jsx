import { RESULTS } from '../data/site'

export default function Results() {
  return (
    <section id="resultados" className="section">
      <div className="container">
        <header className="section__head" data-reveal>
          <h2>Resultados</h2>
          <p className="notice">Imagens demonstrativas. Conteúdo real poderá ser inserido mediante autorização.</p>
        </header>

        {/* DEMONSTRATIVO: não usar imagens que possam ser confundidas com resultados reais da clínica. */}
        <div className="gallery">
          {RESULTS.map((r, i) => (
            <figure key={i} className="gallery__item" data-reveal>
              <div className="gallery__img">
                <img src={r.image.src} width={r.image.w} height={r.image.h} alt={r.image.alt} loading="lazy" decoding="async" />
              </div>
              <figcaption>{r.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
