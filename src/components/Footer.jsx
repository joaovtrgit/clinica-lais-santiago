import { MessageCircle, Instagram } from 'lucide-react'
import Logo from './Logo'
import { NAV, waLink, INSTAGRAM_URL } from '../data/site'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <Logo light />
        <nav aria-label="Links rápidos" className="footer__nav">
          {NAV.map((n) => <a key={n.href} href={n.href}>{n.label}</a>)}
        </nav>
        <div className="footer__social">
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={20} /></a>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><MessageCircle size={20} /></a>
        </div>
      </div>
      <p className="footer__copy container">
        © {new Date().getFullYear()} Clínica Dra. Laís Santiago Estética Avançada. Protótipo demonstrativo, conteúdo sujeito a confirmação.
      </p>
    </footer>
  )
}
