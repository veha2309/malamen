export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#top" className="brand" aria-label="Malamen home">
      <span className="brand-mark" aria-hidden="true">M</span>
      {!compact && <span className="brand-name">MALAMEN<small>Kitchen &amp; Bar</small></span>}
    </a>
  )
}
