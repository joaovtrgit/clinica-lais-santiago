import { MessageCircle } from 'lucide-react'
import { waLink } from '../data/site'

export default function Highlight() {
  return (
    <section className="highlight" aria-labelledby="destaque-titulo">
      <div className="highlight__arches" aria-hidden="true">
        <span /><span /><span />
      </div>
      <div className="container highlight__inner" data-reveal>
        <h2 id="destaque-titulo">Seu cuidado começa com uma conversa.</h2>
        <p>Conte o que você busca e descubra quais possibilidades podem fazer sentido para você.</p>
        <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn--light">
          <MessageCircle size={18} aria-hidden="true" /> Falar pelo WhatsApp
        </a>
      </div>
    </section>
  )
}
