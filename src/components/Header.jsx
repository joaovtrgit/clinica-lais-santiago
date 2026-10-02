import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import { NAV } from '../data/site'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}${open ? ' header--open' : ''}`}>
      <div className="header__bar">
        <Logo />
        <nav className="nav" aria-label="Navegação principal">
          {NAV.map((n) => (
            <a key={n.href} href={n.href}>{n.label}</a>
          ))}
        </nav>
        <a href="#contato" className="btn btn--primary header__cta">AGENDAR AVALIAÇÃO</a>
        <button
          className="burger"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <div id="menu-mobile" className="drawer" hidden={!open}>
        <nav aria-label="Navegação mobile">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={close}>{n.label}</a>
          ))}
        </nav>
        <a href="#contato" className="btn btn--primary btn--block" onClick={close}>AGENDAR AVALIAÇÃO</a>
      </div>
    </header>
  )
}
