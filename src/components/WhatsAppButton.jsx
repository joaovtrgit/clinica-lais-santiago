import { MessageCircle } from 'lucide-react'
import { waLink } from '../data/site'

export default function WhatsAppButton() {
  return (
    <a href={waLink()} target="_blank" rel="noopener noreferrer" className="wa" aria-label="Falar pelo WhatsApp">
      <MessageCircle size={26} aria-hidden="true" />
      <span className="wa__label">WhatsApp</span>
    </a>
  )
}
