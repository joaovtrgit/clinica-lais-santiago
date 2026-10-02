import { useState } from 'react'
import { Plus } from 'lucide-react'
import { FAQ as ITEMS } from '../data/site'

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section id="duvidas" className="section section--alt">
      <div className="container container--narrow">
        <header className="section__head" data-reveal>
          <h2>Dúvidas frequentes</h2>
        </header>
        {/* DEMONSTRATIVO: respostas genéricas, confirmar com a clínica antes de publicar. */}
        <div className="faq" data-reveal>
          {ITEMS.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={item.q} className={`faq__item${isOpen ? ' is-open' : ''}`}>
                <h3>
                  <button
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    id={`faq-btn-${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                  >
                    <span>{item.q}</span>
                    <Plus size={20} strokeWidth={1.5} aria-hidden="true" />
                  </button>
                </h3>
                <div id={`faq-${i}`} role="region" aria-labelledby={`faq-btn-${i}`} className="faq__panel">
                  <div><p>{item.a}</p></div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
