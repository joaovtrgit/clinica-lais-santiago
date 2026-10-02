export default function Logo({ light = false }) {
  return (
    <a href="#inicio" className={`logo${light ? ' logo--light' : ''}`} aria-label="Laís Santiago Estética Avançada, ir ao início">
      <span className="logo__name">LAÍS SANTIAGO</span>
      <span className="logo__sub">ESTÉTICA AVANÇADA</span>
    </a>
  )
}
