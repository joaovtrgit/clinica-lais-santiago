import { MessageCircle, Instagram, MapPin } from 'lucide-react'
import { waLink, INSTAGRAM_URL, INSTAGRAM_HANDLE, ADDRESS_PLACEHOLDER, WHATSAPP_NUMBER } from '../data/site'

export default function Contact() {
  // TODO (REAL DATA): exibir o número formatado real. Hoje é um placeholder.
  return (
    <section id="contato" className="section contact">
      <div className="container contact__grid">
        <div data-reveal>
          <h2>Vamos conversar?</h2>
          <p className="lead">Entre em contato para conhecer o atendimento e tirar suas dúvidas.</p>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--lg">
            <MessageCircle size={20} aria-hidden="true" /> Falar pelo WhatsApp
          </a>
        </div>
        <ul className="contact__list" data-reveal>
          <li>
            <MessageCircle size={22} strokeWidth={1.4} aria-hidden="true" />
            <div><strong>WhatsApp</strong><span>Número de exemplo: {WHATSAPP_NUMBER}</span></div>
          </li>
          <li>
            <Instagram size={22} strokeWidth={1.4} aria-hidden="true" />
            <div><strong>Instagram</strong><a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">{INSTAGRAM_HANDLE}</a></div>
          </li>
          <li>
            <MapPin size={22} strokeWidth={1.4} aria-hidden="true" />
            <div><strong>Localização</strong><span>{ADDRESS_PLACEHOLDER}</span></div>
          </li>
        </ul>
      </div>
    </section>
  )
}
